# Naman Kitchen — Antigravity Build Pack

This folder contains the complete planning, design, implementation, animation, asset-generation, optimization, deployment, and QA prompts for the **Naman Kitchen** website.

## Project identity

**Brand:** Naman Kitchen  
**Tagline:** LIFE LONG PARTNER  
**Primary line:** Smart Designs. Quality Craftsmanship. Kitchens Made for Life.  
**Primary market:** Indore, Madhya Pradesh, India  
**Business:** Indian modular kitchen design/manufacturing company  
**Primary website goal:** Premium, trustworthy, conversion-focused frontend experience for homeowners, dealers and future franchise partners.

## Core creative direction

Build a website that feels like a **premium modular kitchen showroom translated into a digital interface**.

The design must:
- Feel luxurious but approachable.
- Be clearly Indian-market relevant without becoming stereotypically "Indian".
- Make functionality and craftsmanship visible through the UI itself.
- Use kitchen-inspired visual language: cabinet grids, drawer lines, handles, stone slabs, wood grain, appliance silhouettes, measurements, joinery, soft shadows, under-cabinet lighting and modular panels.
- Use 60:30:10 color balance as a design discipline, not as a rigid mathematical requirement.
- Prioritize mobile and desktop; tablet must also be polished.
- Use Framer Motion/Motion deliberately, with performance and reduced-motion support.
- Avoid generic SaaS cards, excessive gradients, glassmorphism, template-like sections, and random decorative blobs.

## Reference images supplied by the client

The supplied references include:
- FORMA CASA style modular-kitchen homepage.
- KANTO dark luxury kitchen concept.
- NOIR interior studio layout.
- Chinese/green editorial interior design layout.
- NOVAIRE furniture luxury layout.
- AMBER interiors dark luxury layout.
- Naman Kitchen logo.
- Three Naman Kitchen business/story reference pages.

Use these as **design inspiration only**. Do not reproduce another company's exact layout, typography, branding, copy, or visual identity.

## Recommended implementation baseline

Verified against official sources on 2026-09-07:

- React: 19.2.x stable line.
- Vite: 8.1.x supported stable line.
- Tailwind CSS: 4.3.x.
- Motion: 13.1.1; use the modern `motion` package and `motion/react` imports rather than starting a new project with legacy `framer-motion`.
- React Router: If the project specifically retains `react-router-dom`, use the latest stable v7 line compatible with that package. React Router v8 removed `react-router-dom`, so do not blindly install v8 while keeping the requested import style.
- Node: use a currently supported Node release; Node 22+ is the safe baseline for this project.

Before installation, the agent should verify exact patch versions with official documentation/npm metadata and avoid pre-release packages.

## Execution order

1. Read `00_MASTER_BRIEF.md`.
2. Read `01_PROJECT_PLAN.md`.
3. Read `02_INFORMATION_ARCHITECTURE.md`.
4. Read `03_DESIGN_SYSTEM.md`.
5. Read `04_COMPONENT_ARCHITECTURE.md`.
6. Read `05_SETUP_AND_DEPENDENCIES.md`.
7. Execute `prompts/01_SETUP.md`.
8. Execute `prompts/02_GLOBAL_SHELL.md`.
9. Execute `prompts/03_HOME_PAGE.md`.
10. Execute `prompts/04_INNER_PAGES.md`.
11. Execute `prompts/05_MOTION_AND_POLISH.md`.
12. Execute `prompts/06_RESPONSIVE_AND_ACCESSIBILITY.md`.
13. Execute `prompts/07_PERFORMANCE_AND_SEO.md`.
14. Execute `prompts/08_FINAL_QA.md`.
15. Read `13_ANTIGRAVITY_OPTIMIZATION.md` continuously while implementing.

Do not build everything in one giant agent call. Work phase-by-phase and verify after every phase.
