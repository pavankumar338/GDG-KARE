// Previously this module wrote directly to Supabase from the browser.
// To spread load across multiple server instances, we now POST the
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

export async function saveRegistration(form) {
  const url = pickEndpoint();
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
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
}
