-- À exécuter une seule fois dans Supabase SQL Editor pour les nouvelles fonctionnalités.
alter table public.shop_pickups add column if not exists hours text not null default '';

insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('shop-product-images','shop-product-images',true,5242880,ARRAY['image/jpeg','image/png','image/webp','image/gif'])
on conflict (id) do update set public=true,file_size_limit=5242880,allowed_mime_types=excluded.allowed_mime_types;

drop policy if exists shop_product_images_admin_insert on storage.objects;
create policy shop_product_images_admin_insert on storage.objects
for insert to authenticated with check (
 bucket_id='shop-product-images'
 and (storage.foldername(name))[1] in ('77','38')
 and exists (
  select 1 from public.admin_profiles a
  where a.id=auth.uid() and a.region=(storage.foldername(name))[1]
 )
);
