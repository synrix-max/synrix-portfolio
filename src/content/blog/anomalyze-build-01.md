---
title: "anomalyze build log #1 — the stack"
date: 2026-05-20
category: devlogs
tags: [react-native, supabase, typescript]
description: "Why I chose React Native + Supabase for a real-time fraud detection app."
---

## why react native

Needed cross-platform from day one. Expo's managed workflow keeps the toolchain sane —
no Xcode drama on every minor update.

## supabase as the backend

Postgres under the hood means RLS policies for row-level security, which matters a lot
for a fraud app. The realtime subscriptions also cut out a ton of polling logic.

## what's next

Pagination on the transaction history screen is the current bottleneck.
Working on a cursor-based approach instead of offset — write-up coming.
