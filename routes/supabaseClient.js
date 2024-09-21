// supabaseClient.js
const { createClient } = require('@supabase/supabase-js');

// Set up Supabase client using environment variables
const supabaseUrl = 'https://udvbvkvwufomrcbfhonp.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Export the client for use in your app
module.exports = supabase;