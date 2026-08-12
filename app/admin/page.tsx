import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: profile } = await supabase
    .from("admin_profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (!profile) {
    return (
      <main className="min-h-screen bg-[#f4f0e6] p-10 text-[#18392b]">
        <h1 className="text-3xl font-semibold">
          Accès administrateur non configuré
        </h1>
      </main>
    );
  }

  const { data: events } = await supabase
    .from("events")
    .select("*")
    .eq("region", profile.region)
    .order("event_date", { ascending: true });
    const { data: locations } = await supabase
  .from("locations")
  .select("*")
  .eq("region", profile.region)
  .order("created_at", { ascending: true });

  return (
    <main className="min-h-screen bg-[#f4f0e6] px-6 py-10 text-[#18392b] lg:px-12">

      <div className="mx-auto max-w-[1200px]">

        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d96b38]">
              Le Potager Nomade
            </p>

            <h1 className="mt-3 text-4xl font-semibold">
              Administration
            </h1>

            <p className="mt-3 text-[#18392b]/60">
              Bonjour {profile.name} — Région {profile.region}
            </p>
          </div>

          <a
            href="/"
            className="rounded-full border border-[#18392b]/15 px-5 py-3 text-sm font-semibold"
          >
            Voir le site
          </a>
        </div>
<div className="mt-12 flex items-center justify-between">
  <h2 className="text-2xl font-semibold">
    Emplacements fixes
  </h2>

  <a
    href="/admin/locations/new"
    className="rounded-full bg-[#18392b] px-5 py-3 font-semibold text-white"
  >
    + Ajouter un emplacement
  </a>
</div>

<div className="mt-6 space-y-4">

  {locations && locations.length > 0 ? (
    locations.map((location) => (
      <div
        key={location.id}
        className="rounded-[1.5rem] bg-white p-6"
      >
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

          <div>
            <p className="text-sm font-semibold text-[#d96b38]">
              {location.day}
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              {location.city}
            </h3>

            <p className="mt-1 text-[#18392b]/60">
              {location.start_time?.slice(0, 5)}
              {location.end_time &&
                ` — ${location.end_time.slice(0, 5)}`}
            </p>
          </div>

          <a
            href={`/admin/locations/${location.id}`}
            className="rounded-full border border-[#18392b]/15 px-4 py-2 text-sm font-semibold"
          >
            Modifier
          </a>

        </div>
      </div>
    ))
  ) : (
    <div className="rounded-[1.5rem] border border-dashed border-[#18392b]/20 p-8 text-center text-[#18392b]/50">
      Aucun emplacement fixe.
    </div>
  )}

</div>
        <div className="mt-12 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">
            Événements
          </h2>

          <a
            href="/admin/events/new"
            className="rounded-full bg-[#18392b] px-5 py-3 font-semibold text-white"
          >
            + Ajouter un événement
          </a>
        </div>

        <div className="mt-6 space-y-4">

          {events && events.length > 0 ? (
            events.map((event) => (
              <div
                key={event.id}
                className="rounded-[1.5rem] bg-white p-6"
              >
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

                  <div>
                    <p className="text-sm font-semibold text-[#d96b38]">
                      {event.event_date}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold">
                      {event.title}
                    </h3>

                    <p className="mt-1 text-[#18392b]/60">
                      {event.location}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={`/admin/events/${event.id}`}
                      className="rounded-full border border-[#18392b]/15 px-4 py-2 text-sm font-semibold"
                    >
                      Modifier
                    </a>
                  </div>

                </div>
              </div>
            ))
          ) : (
            <div className="rounded-[1.5rem] border border-dashed border-[#18392b]/20 p-8 text-center text-[#18392b]/50">
              Aucun événement pour le moment.
            </div>
          )}

        </div>

      </div>

    </main>
  );
}