# CelluNOVA Research — Landing (Next.js + Tailwind)

Default language: **English** (with PT toggle).

## Quick start (dev)
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel (recommended)
1) Create a new GitHub repo and push this folder.
2) Go to https://vercel.com → New Project → Import the repo.
3) Framework: **Next.js**. Build command: `next build`. Output: `.next` (default).
4) Set **Primary Domain** to `cellunovaresearch.com` (after pointing DNS).
5) Add `www` and apex domain on Vercel. Update DNS in your registrar as indicated by Vercel.

## Deploy to Netlify (alternative)
1) New site from Git → choose the repo.
2) Build command: `next build` and Publish directory: `.next`.

## Customize
- Edit copy in `app/page.tsx` (COPY object).
- Colors in `tailwind.config.ts` and `app/globals.css`.
- Favicon under `public/favicon.svg`.

## Email/CTA
All CTAs send to: `larissa.guimaraes@cellunovaresearch.com`.
