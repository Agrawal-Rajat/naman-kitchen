# 01 — Project Plan & Page Architecture

## Recommended page count

Build **6 meaningful routes**, not dozens of unnecessary pages.

### Route 1 — `/`
**Home**
Purpose: brand impression, product discovery, trust, consultation conversion.

Sections:
1. Premium navigation
2. Hero
3. "The kitchen is the heart of home" brand statement
4. Kitchen layout explorer
5. Featured kitchens / visual gallery
6. Smart storage & hardware
7. Why Naman Kitchen
8. Process
9. Materials / craftsmanship
10. Testimonials / trust
11. Consultation CTA
12. Footer

### Route 2 — `/kitchens`
**Kitchens**
Purpose: explore kitchen layouts and styles.

Sections:
1. Page hero
2. Layout selector
3. L-shaped
4. Straight
5. Parallel
6. U-shaped
7. Island
8. Custom
9. Finish/style inspiration
10. Consultation CTA

### Route 3 — `/hardware`
**Hardware & Accessories**
Purpose: explain the functional systems behind a premium kitchen.

Sections:
1. Hero
2. Hardware philosophy
3. Interactive/animated storage showcase
4. Product categories
5. Detail callouts
6. "Small details, easier mornings" story
7. Consultation CTA

### Route 4 — `/projects`
**Projects**
Purpose: build visual trust through completed work.

Sections:
1. Editorial hero
2. Filter chips
3. Project masonry/grid
4. Featured project
5. Project detail previews
6. CTA

Project detail can remain modal/dynamic for this frontend-focused version unless real project data requires separate routes.

### Route 5 — `/about`
**About Naman Kitchen**
Purpose: story, vision, mission, founder/business story.

Sections:
1. Story hero
2. Founder story
3. Experience / journey timeline
4. Vision
5. Mission
6. Quality philosophy
7. Customer/partner philosophy
8. CTA

Do not fabricate facts. Use only provided business information.

### Route 6 — `/contact`
**Consultation**
Purpose: conversion.

Sections:
1. Calm consultation hero
2. Short form
3. Contact methods
4. Service area note
5. What happens after submitting
6. FAQ
7. Map placeholder if exact address is later supplied

## Global components

Keep a small reusable design system:

- `Navbar`
- `MobileMenu`
- `Footer`
- `Button`
- `SectionHeading`
- `Eyebrow`
- `ImageFrame`
- `MagneticButton` only where useful
- `Reveal`
- `Marquee` only where it improves storytelling
- `ProjectCard`
- `KitchenCard`
- `HardwareCard`
- `Stat`
- `ProcessStep`
- `TestimonialCard`
- `ConsultationCTA`
- `WhatsAppButton`
- `PageTransition`
- `ScrollProgress` only if it improves UX

## Avoid component explosion

Do not create a component for every `<div>`.

Create a component when:
- it repeats,
- it has meaningful behavior,
- it has meaningful visual identity,
- or it makes a page easier to understand.

## Recommended data model

Use local arrays/objects initially:

```js
kitchenLayouts
hardwareItems
projects
processSteps
testimonials
navItems
```

This keeps content separate from presentation and makes a future CMS/API easy.

## Development priority

P0:
- Home
- Navigation
- Mobile menu
- Hero
- CTA
- Responsive system
- Projects/gallery

P1:
- Kitchens
- Hardware
- About
- Contact

P2:
- Microinteractions
- Advanced hover effects
- Editorial transitions
- Optional cursor effects

Never let P2 effects delay core responsive UX.
