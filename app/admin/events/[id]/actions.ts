"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function updateEvent(id: number, formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: profile } = await supabase
    .from("admin_profiles")
    .select("region")
    .eq("id", user.id)
    .single();

  if (!profile) {
    redirect("/admin");
  }

  const title = formData.get("title")?.toString().trim();
  const location = formData.get("location")?.toString().trim();
  const address = formData.get("address")?.toString().trim() || null;
  const eventDate = formData.get("event_date")?.toString();
  const startTime = formData.get("start_time")?.toString() || null;
  const endTime = formData.get("end_time")?.toString() || null;
  const mapsUrl = formData.get("maps_url")?.toString().trim() || null;
  const description =
    formData.get("description")?.toString().trim() || null;

  const published = formData.get("published") === "on";

  if (!title || !location || !eventDate) {
    redirect(`/admin/events/${id}?error=missing`);
  }

  const { error } = await supabase
    .from("events")
    .update({
      title,
      location,
      address,
      event_date: eventDate,
      start_time: startTime,
      end_time: endTime,
      maps_url: mapsUrl,
      description,
      published,
    })
    .eq("id", id)
    .eq("region", profile.region);

  if (error) {
    redirect(
      `/admin/events/${id}?error=${encodeURIComponent(error.message)}`
    );
  }

  redirect("/admin");
}

export async function deleteEvent(id: number) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: profile } = await supabase
    .from("admin_profiles")
    .select("region")
    .eq("id", user.id)
    .single();

  if (!profile) {
    redirect("/admin");
  }

  await supabase
    .from("events")
    .delete()
    .eq("id", id)
    .eq("region", profile.region);

  redirect("/admin");
}