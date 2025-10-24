import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables:', {
    url: supabaseUrl ? 'present' : 'missing',
    key: supabaseAnonKey ? 'present' : 'missing'
  });
  throw new Error('Supabase environment variables are not configured properly');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database table names
// Use underscored table name to avoid issues with quoted names containing hyphens.
// The migration creates both `ml_registrations` (recommended) and a legacy
// quoted table "ml-registrations"; prefer the underscored name in code.
export const ML_REGISTRATIONS_TABLE = 'ml_registrations'