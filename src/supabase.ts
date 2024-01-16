import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_APP_SUPABASE_PROJECT_URL,
  import.meta.env.VITE_APP_SUPABASE_API_KEY,
);
