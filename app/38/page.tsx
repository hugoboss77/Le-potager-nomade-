import RegionPage from "@/components/RegionPage";
import { regions } from "@/data/regions";
import { createClient } from "@/utils/supabase/server";

export default async function Page38() {
  const region = regions["38"];
  const supabase = await createClient();

  const { data: events } = await supabase
    .from("events")
    .select("*")
    .eq("region", "38")
    .eq("published", true)
    .order("event_date", { ascending: true });

  const { data: locations } = await supabase
    .from("locations")
    .select("*")
    .eq("region", "38")
    .eq("published", true)
    .order("created_at", { ascending: true });

  return (
    <RegionPage
      code={region.code}
      name={region.name}
      title={region.title}
      description={region.description}
      locations={locations ?? []}
      events={events ?? []}
    />
  );
}