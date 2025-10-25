import { supabase, ML_REGISTRATIONS_TABLE } from './supabase';

export async function saveRegistration(form) {
  const p1Year = form.p1_year ? parseInt(form.p1_year.charAt(0)) : null;
  const p2Year = form.p2_year ? parseInt(form.p2_year.charAt(0)) : null;
  const derivedP1Email = form.p1_email && form.p1_email.trim() ? form.p1_email.trim() : (form.p1_regno ? `${form.p1_regno}@klu.ac.in` : null);
  const derivedP2Email = form.p2_email && form.p2_email.trim() ? form.p2_email.trim() : (form.p2_regno ? `${form.p2_regno}@klu.ac.in` : null);

  const row = {
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

  // insert and return id (select id) to reduce returned payload
  const { data, error } = await supabase.from(ML_REGISTRATIONS_TABLE).insert([row]).select('id').single();
  if (error) throw error;
  return data;
}
