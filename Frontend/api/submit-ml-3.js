const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

function redact(row) {
  if (!row || typeof row !== 'object') return row;
  const copy = { ...row };
  if (copy.p1_regno) copy.p1_regno = String(copy.p1_regno).slice(-4).padStart(String(copy.p1_regno).length, '*');
  if (copy.p2_regno) copy.p2_regno = String(copy.p2_regno).slice(-4).padStart(String(copy.p2_regno).length, '*');
  if (copy.p1_email) copy.p1_email = `***${String(copy.p1_email).slice(-10)}`;
  if (copy.p2_email) copy.p2_email = `***${String(copy.p2_email).slice(-10)}`;
  return copy;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  try {
    const application = req.body || {};
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

    if (!row.p1_regno || !/^\d{11}$/.test(String(row.p1_regno))) {
      return res.status(400).json({ error: 'Invalid or missing p1_regno (expected 11 digits)' });
    }
    if (!row.p2_regno || !/^\d{11}$/.test(String(row.p2_regno))) {
      return res.status(400).json({ error: 'Invalid or missing p2_regno (expected 11 digits)' });
    }

    if (process.env.DEBUG_FUNCTIONS === 'true') {
      try { console.error('submit-ml-3 incoming row:', JSON.stringify(redact(row))); } catch (e) { /* ignore */ }
    }

    const { data, error } = await supabase.from('ml_registrations').insert([row]).select('id').single();
    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    console.error('submit-ml-3 error:', error && (error.message || error));
    const message = (error && (error.message || error.error || JSON.stringify(error))) || 'Failed to submit registration';
    const status = (error && error.status) || 500;
    const details = error && (error.details || error.hint || null);
    if (process.env.DEBUG_FUNCTIONS === 'true') {
      try { console.error('submit-ml-3 error stack:', error && (error.stack || error)); } catch (e) { /* ignore */ }
    }
    res.status(status >= 400 ? status : 500).json({ error: message, details });
  }
};
