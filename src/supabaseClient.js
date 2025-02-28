import { createClient } from '@supabase/supabase-js'


const supabaseUrl = process.env.REACT_APP_SUPABASEURL;
const supabaseAnonKey= process.env.REACT_APP_SUPABASEANONKEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey)