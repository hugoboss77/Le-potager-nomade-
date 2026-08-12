"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function createLocation(formData: FormData) {
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

  const city = formData.get("city")?.toString().trim();
  const day = formData.get("day")?.toString().trim();

  if (!city || !day) {
    redirect("/admin/locations/new?error=missing");
  }

  const { error } = await supabase.from("locations").insert({
    region: profile.region,
    city,
    day,
    start_time: formData.get("start_time")?.toString() || null,
    end_time: formData.get("end_time")?.toString() || null,
    address: formData.get("address")?.toString().trim() || null,
    maps_url: formData.get("maps_url")?.toString().trim() || null,
    published: formData.get("published") === "on",
  });

  if (error) {
    redirect(
      `/admin/locations/new?error=${encodeURIComponent(error.message)}`
    );
  }

  redirect("/admin");
}