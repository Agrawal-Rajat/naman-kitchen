# 04 — Component Architecture

## Suggested folder structure

```text
naman-kitchen/
├── public/
│   ├── images/
│   ├── textures/
│   ├── icons/
│   └── favicon/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── kitchen/
│   │   ├── hardware/
│   │   ├── projects/
│   │   └── motion/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── routes/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

## Components

### Layout

- `SiteLayout`
- `Navbar`
- `DesktopNav`
- `MobileNav`
- `Footer`
- `PageContainer`

### Common

- `Button`
- `IconButton`
- `SectionHeading`
- `Eyebrow`
- `ImageFrame`
- `Divider`
- `Badge`
- `MaterialSwatch`
- `Stat`
- `EmptyState`

### Kitchen

- `KitchenHero`
- `KitchenLayoutCard`
- `KitchenLayoutGrid`
- `KitchenFeature`
- `StorageCallout`
- `HardwareCard`

### Projects

- `ProjectGrid`
- `ProjectCard`
- `ProjectLightbox` if needed
- `ProjectFilter`

### Motion

- `Reveal`
- `Stagger`
- `ParallaxImage`
- `ImageReveal`
- `PageTransition`
- `MagneticButton`

Do not build every motion primitive unless it is actually used.

## Data-first approach

Example:

```js
export const kitchenLayouts = [
  {
    id: "l-shaped",
    title: "L-Shaped",
    shortTitle: "L-Shape",
    description: "A practical layout that makes smart use of corners.",
    image: "/images/kitchens/l-shaped.webp"
  }
]
```

Keep data files free of JSX.

## State

Use React state for:
- mobile menu
- filters
- lightbox
- accordion
- consultation form

Do not introduce a state library for this frontend-only scope.

## Icons

Use one consistent icon library.

Recommended:
- Lucide React

Use icons as supporting UI, not decoration.
Avoid mixing multiple icon packs.

## Forms

Build accessible labels, errors, focus states and loading state.
No fake backend calls.
Use a service abstraction so a real API/form provider can be connected later.

## Routing

If using React Router DOM v7:
- centralize route definitions
- use `Link`/`NavLink`
- include a catch-all 404
- scroll to top on route change where appropriate

Do not add routing complexity that the site does not need.
