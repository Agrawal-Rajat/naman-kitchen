# 13 — Antigravity Agent Optimization Playbook

## Purpose

This file is specifically for making AI coding agents work faster, use fewer tokens, avoid repeated work, and produce a more coherent frontend.

## Rule 1 — Never ask the agent to "build the entire website"

Use staged prompts.

Bad:
> Build the entire Naman Kitchen website with all pages, animations, responsiveness and deployment.

Better:
> Read the master brief and implement only Phase 1: Vite scaffold, Tailwind, routing skeleton and design tokens. Do not build page content yet.

## Rule 2 — Always provide a stop condition

Every agent task should end with:

> Stop after completing this phase. Run the required verification. Summarize changed files, verification results, and any blockers. Do not begin the next phase.

This prevents uncontrolled scope expansion.

## Rule 3 — Inspect before editing

Agent must:
1. inspect current folder
2. inspect package.json
3. inspect existing source
4. inspect routes
5. inspect assets
6. only then edit

Never recreate files blindly.

## Rule 4 — Use a single source of truth

Design tokens belong in one place.

Content belongs in:
```text
src/data/
```

Do not duplicate:
- colors
- spacing
- CTA labels
- product data
- project data

## Rule 5 — Prefer small edits

When fixing one issue:
- modify the smallest number of files
- do not rewrite unrelated components
- do not refactor the whole project

## Rule 6 — Avoid dependency creep

Before adding a package ask:

1. Can CSS do it?
2. Can Tailwind do it?
3. Can Motion do it?
4. Can Lucide do it?
5. Can native browser APIs do it?

If yes, do not add another dependency.

## Rule 7 — Don't repeatedly search the web

For current library information:
- verify once
- record the selected versions
- use the official documentation
- don't repeatedly rediscover the same facts

## Rule 8 — Reuse existing components

Before creating:
`KitchenCard2`

search for:
`KitchenCard`

Before creating:
`AnimatedImage`

search for:
`ImageReveal`, `ParallaxImage`, etc.

Avoid duplicate abstractions.

## Rule 9 — Build desktop + mobile together

Do not finish desktop and "make it responsive later."

For every component implement:
- desktop behavior
- mobile behavior
- tablet behavior where necessary

## Rule 10 — Avoid generic AI design

The agent must reject:
- excessive glassmorphism
- gradient blobs
- random floating shapes
- purple SaaS aesthetics
- excessive rounded cards
- huge centered text everywhere
- meaningless animations
- generic stock photos

## Rule 11 — Use supplied assets first

The supplied Naman Kitchen logo must be used.

Business/story information must come from the supplied brief/reference pages.

If an image is missing:
- use a generated asset prompt
- or use a clearly named placeholder
- do not silently invent a business fact.

## Rule 12 — Image generation prompts should be deterministic

Every image prompt should specify:
- subject
- environment
- materials
- lighting
- composition
- aspect ratio
- negative constraints

Generate desktop/mobile hero crops separately.

## Rule 13 — Motion budget

A section should usually have:
- one primary motion idea
- one supporting microinteraction

Do not animate every element independently.

## Rule 14 — Performance checkpoint

After each major page:
```bash
npm run build
```

Fix build errors immediately.

Do not accumulate 20 broken changes before testing.

## Rule 15 — Visual QA loop

For each page:
1. run app
2. inspect desktop
3. inspect mobile
4. inspect tablet
5. check console
6. check overflow
7. check image loading
8. check keyboard navigation
9. check reduced motion
10. fix only the observed problems

## Rule 16 — Use explicit agent context

At the start of each prompt, tell the agent:

```text
PROJECT: Naman Kitchen
PHASE: [name]
READ FIRST:
- 00_MASTER_BRIEF.md
- 03_DESIGN_SYSTEM.md
- [specific file]

GOAL:
[single goal]

DO NOT:
[list]

DONE WHEN:
[list]
```

This is more efficient than pasting the entire project brief every time.

## Rule 17 — Keep a decision log

Create:
```text
docs/DECISIONS.md
```

Record only important decisions:
- chosen fonts
- final colors
- routing choice
- image strategy
- form strategy
- deployment strategy

Do not record every tiny implementation detail.

## Rule 18 — No speculative backend

This is a frontend-first project.

Do not create:
- MongoDB
- Express API
- authentication
- admin dashboard
- CMS
- payment system

unless explicitly requested later.

## Rule 19 — Final agent output format

After every task, respond with:

```text
PHASE:
STATUS: complete / partial / blocked

CHANGED:
- file
- file

VERIFIED:
- command
- result

VISUAL:
- desktop
- mobile
- tablet

NEXT:
- one recommended next phase
```

## Recommended Antigravity workflow

### Session A
- scaffold
- dependencies
- design tokens
- routing

### Session B
- navbar
- footer
- buttons
- global motion primitives

### Session C
- homepage hero
- homepage first half

### Session D
- homepage second half
- CTA/footer

### Session E
- kitchens
- hardware

### Session F
- projects
- about
- contact

### Session G
- responsive QA
- accessibility
- performance

### Session H
- final polish
- Vercel

## Golden rule

**Do not optimize for the number of files changed. Optimize for the smallest correct change that moves the project forward.**
