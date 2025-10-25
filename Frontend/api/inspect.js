const { createClient } = require('@supabase/supabase-js');

// Returns basic information about the `ml_registrations` table columns
// Useful in deployed environment to confirm the production schema.

module.exports = async (req, res) => {
  try {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) return res.status(500).json({ ok: false, error: 'Missing SUPABASE env vars' });

    const supabase = createClient(url, key);

    // Try to query information_schema.columns — PostgREST may expose it.
    try {
      const { data, error } = await supabase
        .from('information_schema.columns')
        .select('column_name,data_type,is_nullable,column_default')
        .eq('table_name', 'ml_registrations');

      if (error) {
        // Not fatal — return error so caller can see why
        console.error('inspect: information_schema query failed', error && (error.message || error));
        return res.status(500).json({ ok: false, error: 'information_schema access failed', details: error && (error.message || error) });
      }

      return res.json({ ok: true, columns: data });
    } catch (inner) {
      console.error('inspect inner error:', inner && (inner.message || inner));
      return res.status(500).json({ ok: false, error: 'inspect query failed', details: inner && (inner.message || String(inner)) });
    }
  } catch (err) {
    console.error('inspect endpoint error:', err && (err.stack || err.message || err));
    res.status(500).json({ ok: false, error: 'inspect failed', details: err && (err.message || String(err)) });
  }
};
