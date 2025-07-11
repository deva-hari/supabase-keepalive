// ping_supabase.js (ESM version)

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const TEST_TABLE = 'contact_submissions'; // Replace with your table name

async function pingSupabase(retries = 3) {
  const supabase = createClient(supabaseUrl, supabaseKey);

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const { data, error } = await supabase
        .from(TEST_TABLE)
        .select('*')
        .limit(1);

      if (error) throw new Error(error.message);

      console.log(`[SUCCESS] Pinged Supabase. Fetched ${data.length} row(s).`);
      return;
    } catch (err) {
      console.error(`[ERROR] Attempt ${attempt} failed: ${err.message}`);
      if (attempt === retries) process.exit(1);
      await new Promise(res => setTimeout(res, 2000));
    }
  }
}

pingSupabase();
