const { createClient } = require('@supabase/supabase-js');

// Lightweight health check for serverless environment.
// - Returns whether SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are present.
// - Attempts a minimal read against `ml_registrations` to verify DB access.

module.exports = async (req, res) => {
  try {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !key) {
      return res.status(500).json({ ok: false, error: 'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment' });
    }

    const supabase = createClient(url, key);

    // Attempt a minimal safe query — limit 1 and only request id
    const { data, error } = await supabase.from('ml_registrations').select('id').limit(1);
    if (error) {
      console.error('health: supabase query failed', error && (error.message || error));
      return res.status(500).json({ ok: false, error: 'Supabase query failed', details: error && (error.message || error) });
    }

    return res.json({ ok: true, sample: Array.isArray(data) ? data[0] || null : null });
  } catch (err) {
    console.error('health endpoint error:', err && (err.stack || err.message || err));
    res.status(500).json({ ok: false, error: 'Health check failed', details: err && (err.message || String(err)) });
  }
};
