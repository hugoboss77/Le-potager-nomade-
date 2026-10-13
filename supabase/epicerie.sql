-- À exécuter dans Supabase SQL Editor avant d'utiliser l'épicerie.
create table if not exists public.shop_products (
 id uuid primary key default gen_random_uuid(),
 region text not null check(region in ('77','38')),
 title text not null,
 description text not null default '',
 image_url text,
 price_cents integer not null check(price_cents >= 0),
 published boolean not null default false,
 created_at timestamptz not null default now()
);
create table if not exists public.shop_pickups (
 id uuid primary key default gen_random_uuid(),
 region text not null check(region in ('77','38')),
 label text not null,
 details text not null default '',
 appointment boolean not null default false,
 published boolean not null default true,
 created_at timestamptz not null default now()
);
create table if not exists public.shop_orders (
 id uuid primary key default gen_random_uuid(),
 region text not null check(region in ('77','38')),
 customer_name text not null,
 phone text not null,
 pickup_id uuid references public.shop_pickups(id),
 pickup_label text not null,
 items jsonb not null,
 total_cents integer not null,
 status text not null default 'new' check(status in ('new','confirmed','cancelled','fulfilled')),
 created_at timestamptz not null default now()
);
alter table public.shop_products enable row level security;
alter table public.shop_pickups enable row level security;
alter table public.shop_orders enable row level security;
drop policy if exists shop_products_public on public.shop_products;
create policy shop_products_public on public.shop_products for select to anon,authenticated using(published);
drop policy if exists shop_pickups_public on public.shop_pickups;
create policy shop_pickups_public on public.shop_pickups for select to anon,authenticated using(published);
-- Les admins régionaux peuvent gérer leurs produits et points de retrait.
drop policy if exists shop_products_admin on public.shop_products;
create policy shop_products_admin on public.shop_products for all to authenticated
 using(exists(select 1 from public.admin_profiles a where a.id=auth.uid() and a.region=shop_products.region))
 with check(exists(select 1 from public.admin_profiles a where a.id=auth.uid() and a.region=shop_products.region));
drop policy if exists shop_pickups_admin on public.shop_pickups;
create policy shop_pickups_admin on public.shop_pickups for all to authenticated
 using(exists(select 1 from public.admin_profiles a where a.id=auth.uid() and a.region=shop_pickups.region))
 with check(exists(select 1 from public.admin_profiles a where a.id=auth.uid() and a.region=shop_pickups.region));
-- Les commandes sont créées uniquement par le serveur (clé service_role), jamais directement par le navigateur.
drop policy if exists shop_orders_admin on public.shop_orders;
create policy shop_orders_admin on public.shop_orders for select to authenticated
 using(exists(select 1 from public.admin_profiles a where a.id=auth.uid() and a.region=shop_orders.region));
insert into public.shop_pickups(region,label,details,appointment)
select v.region,v.label,v.details,v.appointment from (values
 ('77','Mercredi — Crégy-lès-Meaux','Retrait sur notre emplacement du mercredi',false),
 ('77','Jeudi — Rozay-en-Brie','Retrait sur notre emplacement du jeudi',false),
 ('77','Coulommiers — sur rendez-vous','Nous vous recontactons par téléphone pour convenir du rendez-vous.',true)
) as v(region,label,details,appointment)
where not exists(select 1 from public.shop_pickups p where p.region=v.region and p.label=v.label);
