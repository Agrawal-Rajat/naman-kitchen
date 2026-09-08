# 11 — Vercel Deployment

## Build

```bash
npm run build
```

The production output should be:

```text
dist/
```

## Local production preview

```bash
npm run preview
```

## Vercel

Connect the Git repository to Vercel.

Expected:
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

Do not add a custom build command unless required.

## SPA routing

If client-side route refreshes return 404, add a Vercel rewrite.

Example `vercel.json`:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Only add this when using SPA-style routing that requires it. Test direct navigation to:
- `/`
- `/kitchens`
- `/hardware`
- `/projects`
- `/about`
- `/contact`

## Environment variables

Production values should be added through Vercel's environment variable UI.

Never commit:
- `.env`
- API keys
- private tokens

Commit:
- `.env.example`

## Pre-deployment checklist

```bash
npm run build
```

Then verify:
- no build errors
- no console errors
- all routes work
- images load
- mobile navigation works
- form validation works
- no horizontal overflow
- reduced motion works
- favicon loads
- social preview metadata is valid

## Git workflow

Use small commits:

```text
chore: initialize vite app
feat: build global design system
feat: add responsive navigation
feat: build home hero
feat: add kitchen layouts
feat: add projects gallery
feat: add consultation flow
perf: optimize images and motion
fix: mobile overflow
fix: accessibility issues
```
