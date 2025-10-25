import { supabase, ML_REGISTRATIONS_TABLE } from './supabase';

// Previously this module wrote directly to Supabase from the browser.
// To spread load across multiple server instances, we POST the
// registration to one of several server endpoints. The server functions
// (in /api) perform the actual DB insert using the service role key.

const endpoints = [
  '/api/submit-ml-1',
  '/api/submit-ml-2',
  '/api/submit-ml-3',
  '/api/submit-ml-4',
  '/api/submit-ml-5',
];

let rr = 0; // simple round-robin counter

function pickEndpoint() {
  const ep = endpoints[rr % endpoints.length];
  rr += 1;
  return ep;
}

async function fallbackDirectInsert(form) {
  // This uses the browser anon key. Acceptable in local dev for testing only.
  const row = normalizeForm(form);
  const { data, error } = await supabase.from(ML_REGISTRATIONS_TABLE).insert([row]).select('id').single();
  if (error) throw error;
  return data;
}

export async function saveRegistration(form) {
  const url = pickEndpoint();

  try {
    const row = normalizeForm(form);
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(row),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      // If serverless functions are not available locally, many dev setups
      // return 404. Allow a safe fallback in development to speed debugging.
      if (res.status === 404 && import.meta.env && import.meta.env.DEV) {
        console.warn(`Endpoint ${url} returned 404 — falling back to direct Supabase insert (DEV only)`);
        return await fallbackDirectInsert(form);
      }

      const err = new Error(`Server responded with ${res.status}: ${text}`);
      err.status = res.status;
      throw err;
    }

  const payload = await res.json();
    if (!payload || !payload.success) {
      const msg = payload && payload.error ? payload.error : 'Unknown server error';
      throw new Error(msg);
    }

    // payload.data should contain the inserted row (or at least { id })
    return payload.data;
  } catch (err) {
    // If fetch itself fails (network error), and we're in dev, attempt fallback.
    if (import.meta.env && import.meta.env.DEV) {
      console.warn('Primary endpoints unreachable; attempting direct insert via client (DEV only).', err && err.message);
      try {
        return await fallbackDirectInsert(form);
      } catch (inner) {
        console.error('Direct insert fallback also failed:', inner && (inner.message || inner));
        throw inner;
      }
    }
    throw err;
  }
}

function normalizeForm(form) {
  const p1Year = form.p1_year ? parseInt(String(form.p1_year).charAt(0)) : null;
  const p2Year = form.p2_year ? parseInt(String(form.p2_year).charAt(0)) : null;
  const derivedP1Email = form.p1_email && String(form.p1_email).trim() ? String(form.p1_email).trim() : (form.p1_regno ? `${form.p1_regno}@klu.ac.in` : null);
  const derivedP2Email = form.p2_email && String(form.p2_email).trim() ? String(form.p2_email).trim() : (form.p2_regno ? `${form.p2_regno}@klu.ac.in` : null);

  return {
    p1_name: form.p1_name || null,
    p1_regno: form.p1_regno || null,
    p1_whatsapp: form.p1_whatsapp || null,
    p1_year: isNaN(p1Year) ? null : p1Year,
    p1_department: form.p1_department || null,
    p1_email: derivedP1Email,
    p2_name: form.p2_name || null,
    p2_regno: form.p2_regno || null,
    p2_whatsapp: form.p2_whatsapp || null,
    p2_year: isNaN(p2Year) ? null : p2Year,
    p2_department: form.p2_department || null,
    p2_email: derivedP2Email,
    p1_ack: form.p1_ack || null,
    p2_ack: form.p2_ack || null,
    problem_statement: form.problemStatement || null
  };
}
