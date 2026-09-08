# 03 — Design System

## Design thesis

**Warm minimalism + architectural precision + Indian home familiarity.**

The site should sit between:
- premium interior studio,
- modern kitchen manufacturer,
- trustworthy Indian home brand.

It should not look like:
- a generic ecommerce store,
- a real-estate website,
- a SaaS dashboard,
- an overly dark luxury template.

## Color system

Use 60:30:10 as a visual balancing rule.

### 60% — Warm architectural base

Primary surface:
- warm ivory / soft limestone
- approximately `#F5F1E8` to `#F8F6F0`

Use for:
- page background
- large whitespace
- editorial sections

### 30% — Deep cabinetry tone

Primary dark:
- espresso / walnut / charcoal
- approximately `#211D18` or `#28231E`

Use for:
- hero dark panels
- footer
- strong text
- navigation
- selected states

### 10% — Naman accent

Use the existing logo as the authority for the brand accent.

The supplied logo uses a strong indigo/purple and red accent. Do not blindly recolor the brand.

Suggested controlled accent:
- Naman Indigo: `#342B70`-range
- Naman Red: `#E51D2A`-range

Use accent sparingly:
- CTA micro-accent
- active state
- tiny indicator
- icon detail
- selected chip

The red must never dominate the site.

## Secondary palette

For material storytelling:
- walnut brown
- stone beige
- brushed brass
- muted olive
- warm gray
- blackened metal

These are supporting material colors, not competing brand colors.

## Typography

Recommended pairing:

Display:
- `Cormorant Garamond` or `DM Serif Display`
- Use sparingly for emotional statements and premium editorial headings.

UI/body:
- `Manrope` or `Plus Jakarta Sans`
- Use for navigation, body, buttons, labels, data.

Alternative single-family option:
- `Manrope` throughout with weight/size contrast.

Hindi:
- Use a modern Devanagari companion only where Hindi copy is intentionally introduced.
- Do not mix too many fonts.

## Type scale

Desktop:
- Hero: `clamp(3.4rem, 7vw, 7.5rem)`
- Section heading: `clamp(2.2rem, 4.5vw, 5rem)`
- Card heading: `1.15rem–1.6rem`
- Body: `1rem–1.15rem`
- Small label: `0.7rem–0.8rem`
- Metadata: `0.65rem–0.75rem`

Mobile:
- Hero: `clamp(2.8rem, 13vw, 4.2rem)`
- Section heading: `clamp(2rem, 9vw, 3rem)`
- Body: `0.95rem–1.05rem`

Avoid excessive uppercase text.

## Spacing

Use a predictable spacing rhythm:
- 4
- 8
- 12
- 16
- 24
- 32
- 48
- 64
- 96
- 128

Large editorial sections can use 120–200px vertical spacing on desktop.
Mobile should generally use 64–96px.

## Shape language

Kitchen-inspired shapes:
- soft 18–32px corner radius for major image frames
- 8–14px for UI controls
- occasional squared edges for architectural contrast
- thin 1px lines
- inset borders
- offset layers

Avoid making every card rounded.

## Shadows

Use long, soft, architectural shadows.

Example:
- subtle cabinet shadow
- image lift
- inset countertop edge

Avoid generic:
`0 10px 30px rgba(...)` everywhere.

Shadows should be low-opacity and warm.

## Grid

Desktop:
- max width around 1440–1600px
- 12-column grid
- generous side gutters

Tablet:
- 8-column conceptual grid

Mobile:
- 4-column conceptual grid
- 16–20px side padding

## Image treatment

Prefer:
- warm daylight
- walnut
- stone
- soft under-cabinet lighting
- premium Indian-modern kitchens
- realistic material textures

Crop images intentionally:
- hero: cinematic horizontal/portrait composition depending viewport
- cards: controlled object-position
- details: close-up texture shots

Do not use low-quality stock images.

## Kitchen-inspired UI motifs

Use subtle:
- measurement lines
- cabinet seams
- drawer handles
- countertop edges
- grid lines
- material swatches
- tiny serial-style labels
- room elevation annotations
- soft under-cabinet light strips

## Accessibility

Maintain readable contrast.
Never place small gray text over busy photography.
Every meaningful image needs useful alt text.
Decorative images should use empty alt text.
Focus states must be visible.
Motion must respect `prefers-reduced-motion`.

## Design rule

Luxury = restraint.

If a section looks impressive because it has many effects, remove half of them.
