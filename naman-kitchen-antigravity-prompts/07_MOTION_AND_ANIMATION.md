# 07 — Motion & Interaction System

## Philosophy

Motion should communicate:
- craftsmanship
- smooth hardware
- transformation
- depth
- continuity

It must never feel like a theme demo.

## Motion hierarchy

### Level 1 — Essential

Use on:
- page load
- section reveal
- button hover
- mobile menu
- accordion
- image transitions

### Level 2 — Brand

Use on:
- hero image reveal
- cabinet-line movement
- material swatches
- project transitions
- process timeline

### Level 3 — Signature

Use sparingly:
- subtle parallax
- image masking
- large typography movement
- scroll-linked cabinet rails

Do not make the entire page scroll-jittery.

## Hero animation

Recommended:
1. Background/image starts slightly scaled.
2. Image mask opens like a cabinet door/elevation.
3. Headline rises with staggered lines.
4. Small measurement line draws in.
5. CTA enters last.
6. A subtle light sweep moves across the countertop once.

Keep total hero entrance around 700–1200ms.

## Image reveal

Use clip-path or scale + opacity:
- image begins slightly cropped
- reveals smoothly
- avoid excessive rotation

## Scroll reveals

Use viewport-triggered reveals:
- y: 24–40px
- opacity: 0 → 1
- duration: 0.5–0.8s
- easing: smooth custom ease

Stagger sibling cards by 50–100ms.

## Kitchen-inspired animation

Examples:
- horizontal line extends like a drawer rail
- small handle moves 2–4px
- material swatch expands into a detail image
- cabinet seam fades into section divider
- measurement annotation draws across an image

These should remain subtle.

## Hover

Desktop:
- image scale 1.02–1.04
- title moves 2–4px
- arrow moves 4–8px
- border/underline transitions

Mobile:
Do not depend on hover.

## Mobile menu

Use:
- opacity backdrop
- x translation or clip reveal
- staggered nav items
- clear close button

Avoid bounce-heavy spring effects.

## Reduced motion

Implement:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Motion components should also avoid unnecessary animation when reduced motion is requested.

## Performance

Prefer:
- transform
- opacity
- clip-path where reasonable

Avoid continuously animating:
- box-shadow
- large filters
- expensive blur
- layout properties

Never animate huge image assets continuously.

## Motion package

Use the modern Motion package:

```bash
npm install motion
```

Imports:

```js
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
```

Do not introduce both `motion` and legacy `framer-motion` into the same project.
