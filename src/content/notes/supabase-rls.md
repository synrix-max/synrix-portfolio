---
title: "supabase rls cheatsheet"
date: 2026-04-10
tags: [supabase, postgres]
description: "Patterns I keep reaching for in Supabase RLS policies."
---

## enable rls on every table

```sql
alter table transactions enable row level security;
```

## select — own rows only

```sql
create policy "users can read own transactions"
  on transactions for select
  using (auth.uid() = user_id);
```

## service role bypass

Use the service role key in server-side functions only.
Never expose it to the client.
