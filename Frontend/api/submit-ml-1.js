const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  try {
    const application = req.body || {};

    // Normalize incoming payload (accept camelCase or already-snake)
    const row = {
      p1_name: application.p1_name || application.p1Name || null,
      p1_regno: application.p1_regno || application.p1Regno || null,
      p1_whatsapp: application.p1_whatsapp || application.p1Whatsapp || null,
      p1_year: application.p1_year || application.p1Year || null,
      p1_department: application.p1_department || application.p1Department || null,
      p1_email: application.p1_email || application.p1Email || null,
      p2_name: application.p2_name || application.p2Name || null,
      p2_regno: application.p2_regno || application.p2Regno || null,
      p2_whatsapp: application.p2_whatsapp || application.p2Whatsapp || null,
      p2_year: application.p2_year || application.p2Year || null,
      p2_department: application.p2_department || application.p2Department || null,
      p2_email: application.p2_email || application.p2Email || null,
      p1_ack: application.p1_ack || application.p1Ack || null,
      p2_ack: application.p2_ack || application.p2Ack || null,
      problem_statement: application.problem_statement || application.problemStatement || null,
    };

    // Basic validation to catch malformed requests early
    if (!row.p1_regno || !/^\d{11}$/.test(String(row.p1_regno))) {
      return res.status(400).json({ error: 'Invalid or missing p1_regno (expected 11 digits)' });
    }

    if (!row.p2_regno || !/^\d{11}$/.test(String(row.p2_regno))) {
      return res.status(400).json({ error: 'Invalid or missing p2_regno (expected 11 digits)' });
    }

    // Perform insert
    const { data, error } = await supabase.from('ml_registrations').insert([row]).select('id').single();
    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    // Log full error server-side for debugging
    console.error('submit-ml-1 error:', error && (error.message || error));

    // Try to surface useful error info to the client without exposing secrets
    const message = (error && (error.message || error.error || JSON.stringify(error))) || 'Failed to submit registration';
    const status = (error && error.status) || 500;
    // include non-sensitive details when available
    const details = error && (error.details || error.hint || null);
    res.status(status >= 400 ? status : 500).json({ error: message, details });
  }
};
