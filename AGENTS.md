# AGENTS.md

## Current state

**Paw Haven** — a Next.js App Router PWA for browsing adoptable pets.
Stack: Next.js 16 (Turbopack), React 19, TypeScript, Tailwind CSS v4.

- Package manager: npm (`package-lock.json` committed).
- Deploys to Vercel via `vercel.json` (framework auto-detected as `nextjs`,
  `npm ci` install, `npm run build` build). No Vercel CLI or project link is
  committed (`.vercel` is gitignored).
- No tests, no data layer or auth. Pet data is static in `src/data/pets.ts`.

## Verified commands

```bash
npm install        # or npm ci
npm run dev        # dev server
npm run build      # production build (passes as of this commit)
npm run lint       # ESLint, no arguments
npm run typecheck  # tsc --noEmit
```

## Layout

- `src/app/` — routes: `/`, `/feed` (snap-scroll one-pet-per-screen
  view), `/pets/[id]` (SSG via `generateStaticParams`), `/offline`,
  `manifest.webmanifest`.
- `src/components/` — UI, including `pet-feed.tsx` (client feed with
  scroll-snap, keyboard nav, boop/share actions), service-worker registration
  and install prompt.
- `src/lib/service-worker.js` — service worker.
- `src/data/pets.ts` — static pet data.
- `public/` — icons, pet images.
- `next.config.ts` — security headers and service-worker cache headers.

## Visual language

Warm paper theme, not a generic SaaS look: cream/ink/coral/honey/sage palette,
Fraunces (display) + Nunito (body) + Caveat (handwritten notes), 2px ink
borders, offset "sticker" shadows, masking-tape details. Buttons are
rectangular with a 12px radius — do not add pill-shaped buttons or bluish
gradients. No dark mode; the palette is light-only on purpose.

## Conventions

- `@/*` maps to `src/*` (`tsconfig.json`).
- Prefer server components; add `"use client"` only where interactivity requires it.
- Remote is `https://github.com/HishamBoyMunna/pet_adoption.git`. Active development
  branch is `version0.1`; no PR/team workflow has been established.
