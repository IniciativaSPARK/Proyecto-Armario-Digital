import { supabase } from "@/lib/supabaseClient";

export const getFabrics = async () => {
  const { data, error } = await supabase
    .from("fabrics")
    .select("*")
    .order("name");

  if (error) throw error;

  return data;
};