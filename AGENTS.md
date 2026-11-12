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

- `src/app/` — routes: `/`, `/pets/[id]` (SSG via `generateStaticParams`),
  `/offline`, `manifest.webmanifest`.
- `src/components/` — UI, including service-worker registration and install prompt.
- `src/lib/service-worker.js` — service worker.
- `src/data/pets.ts` — static pet data.
- `public/` — icons, pet images.
- `next.config.ts` — security headers and service-worker cache headers.

## Conventions

- `@/*` maps to `src/*` (`tsconfig.json`).
- Prefer server components; add `"use client"` only where interactivity requires it.
- Remote is `https://github.com/HishamBoyMunna/pet_adoption.git`. Active development
  branch is `version0.1`; no PR/team workflow has been established.
