# PIPELINE

## Codebase summary
Next.js 15 (App Router) + TypeScript + Tailwind landing page for zectron.net.
`app/page.tsx` — server-component "coming soon" page (logo, wordmark, footer links to /privacy and /contact).
`app/contact/page.tsx`, `app/privacy/page.tsx` — static pages.
`app/api/contact/route.ts` — contact form API route.
No graphify graph exists for this repo yet.

## Feature: logo click easter egg

**Opus plan:** Extract the SVG logo from `page.tsx` into a new client component `app/LogoMark.tsx` (keep `page.tsx` server-rendered). Track clicks with two `useRef`s (count, last-click timestamp) — no re-renders needed. On a click, if more than 1.5s since the last click, reset count to 1, else increment; at 5 clicks, redirect via `window.location.href` to the target URL.

**Sonnet implementation:** Created `app/LogoMark.tsx` ("use client", ref-based click/timestamp tracking, 1.5s window, 5-click threshold, redirects to `https://www.instagram.com/rohtak_harith/`). Edited `app/page.tsx` to import and render `<LogoMark />` in place of the inline SVG.

**Haiku review findings:** No issues found. Click-counting and window-reset logic confirmed correct (exactly 5 clicks required, no double-count on window reset), "use client" placement and server/client import pattern correct, no dead code. Ready to ship — loop ends after one iteration.

## Feature: /portfolio proxy (2026-10-07)
**Plan:** Portfolio is a separate repo/Railway service (HyperEndgame/portfolio, base `/portfolio/`). `next.config.ts` rewrites `/portfolio` and `/portfolio/:path*` to it.
**Code:** `next.config.ts` rewrites only. See portfolio repo PIPELINE.md for the app itself.
