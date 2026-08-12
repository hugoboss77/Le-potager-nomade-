import { createClient } from "@/utils/supabase/server";

export default async function TestSupabasePage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("events")
    .select("id")
    .limit(1);

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Test Supabase</h1>

      <pre>
        {JSON.stringify(
          {
            data,
            error: error?.message ?? null,
          },
          null,
          2
        )}
      </pre>
    </main>
  );
}