# 05 — Setup, Dependencies & Project Initialization

## Goal

Create a clean Vite React frontend that can be developed locally and deployed to Vercel without unnecessary infrastructure.

## Node

Use Node 22+.

Verify:

```bash
node -v
npm -v
```

## Create project

Preferred:

```bash
npm create vite@latest naman-kitchen -- --template react
cd naman-kitchen
npm install
```

If the project already exists, do not recreate it. Inspect it first.

## Core dependencies

Baseline target:

```bash
npm install react@19.2.7 react-dom@19.2.7
npm install react-router-dom@7.18.0
npm install motion@13.1.1
npm install lucide-react
```

Tailwind v4 with Vite:

```bash
npm install tailwindcss@4.3 @tailwindcss/vite
```

Then configure the official Tailwind Vite plugin.

### Important routing note

React Router v8 is newer but removes the `react-router-dom` package. Since the requested stack explicitly says `react-router-dom`, keep the v7 line unless the implementation intentionally migrates imports to the v8 package structure.

Before installation, verify the exact currently stable patch versions. Do not use `latest`, `next`, `canary`, beta, or alpha tags in production dependencies.

## Useful optional dependencies

Only install when a real need exists:

```bash
npm install clsx
```

Do NOT install large animation/UI libraries when Motion + Tailwind + Lucide can handle the requirement.

Avoid:
- GSAP
- Three.js
- Framer-specific UI libraries
- component mega-libraries
unless a concrete requirement appears.

## Tailwind v4

Prefer the current CSS-first setup.

Use a central stylesheet for:
- theme variables
- base styles
- custom utilities
- typography
- selection
- scrollbar
- reduced-motion fallback

Do not create a huge Tailwind config just to recreate a design system.

## Vite

Use Vite 8.x supported stable line.

Keep `vite.config.js` minimal.

## Initial scripts

Expected:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

Add linting only if the project needs it.

## Environment variables

Create:

```text
.env.example
```

Potential future values:

```text
VITE_WHATSAPP_NUMBER=
VITE_CONTACT_PHONE=
VITE_CONTACT_EMAIL=
VITE_FORM_ENDPOINT=
```

Never commit secrets.

## Initial verification

Run:

```bash
npm run build
npm run dev
```

Verify:
- no console errors
- no broken assets
- no missing fonts
- routes load
- production build succeeds

## Deployment

Vercel should detect Vite automatically.

Build:
```text
npm run build
```

Output:
```text
dist
```

For SPA routing, configure Vercel rewrites if direct navigation to client routes produces 404s.

## Git

Initial commit after clean scaffold:

```bash
git add .
git commit -m "chore: initialize Naman Kitchen frontend"
```

Do not commit generated build folders or `.env` secrets.
