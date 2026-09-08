# 09 — Responsive UX Specification

## Priority

1. Mobile
2. Desktop
3. Tablet

The design must be intentionally authored for each breakpoint.

## Mobile: 320–767px

Rules:
- 16–20px horizontal padding.
- Avoid tiny text.
- Hero must be immediately understandable.
- Primary CTA should be large enough for thumb interaction.
- Use portrait hero asset.
- Keep headline to 3–5 visual lines maximum.
- Cards can become horizontal snap carousels.
- Use large image storytelling.
- Avoid desktop-style multi-column layouts squeezed into one column.
- Keep navigation simple.
- Consider a fixed bottom "Book Consultation" action only if it does not obstruct content.

## Tablet: 768–1199px

Rules:
- Do not simply scale desktop.
- Use 2-column layouts selectively.
- Keep hero balanced.
- Project grid can be 2 columns.
- Preserve generous spacing.
- Avoid oversized desktop typography.

## Desktop: 1200px+

Rules:
- 12-column layout.
- Large editorial image compositions.
- Hero can use split composition.
- Allow asymmetry.
- Use large typography.
- Add subtle architectural annotations.
- Use hover interactions.

## Large desktop: 1600px+

Do not let content become infinitely wide.

Use:
- max-width 1600px
- larger whitespace
- controlled hero height
- stable image crops

## Breakpoint testing

Test at minimum:
- 320 × 800
- 375 × 812
- 390 × 844
- 430 × 932
- 768 × 1024
- 1024 × 1366
- 1280 × 800
- 1440 × 900
- 1920 × 1080

## Touch targets

Minimum practical target:
- 44px for interactive controls.

## Mobile typography

Never allow:
- horizontal overflow
- clipped headings
- overlapping CTA
- text over critical image details
- navigation behind the notch/status area

## Images

Use responsive sources where useful.

Example:

```jsx
<picture>
  <source media="(max-width: 767px)" srcSet={mobileImage} />
  <img src={desktopImage} alt="..." />
</picture>
```

## Horizontal cards

For mobile carousels:
- first card should show enough of the next card to indicate scrollability
- use CSS snap
- do not require arrows
- keep touch interaction natural

## Footer

Desktop:
multi-column editorial footer.

Mobile:
stacked accordions or simple grouped links.

Do not make the footer unnecessarily huge.
