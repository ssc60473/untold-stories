# Design Brief: YouTube Creator Cinematic Showcase

## Tone & Aesthetic
Dark cinematic luxury — black void with deep blue architectural undertones. Prestigious gallery at night, not gaming dashboard. Premium Netflix-style UI with surgical precision.

## Color Palette (OKLCH)
| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| background | 0.98 0 0 | 0.1 0 0 | Page void |
| card | 0.95 0 0 | 0.18 0 0 | Surface elevation |
| primary (gold) | 0.72 0.08 82 | 0.72 0.08 82 | CTAs, focus states |
| accent (bright gold) | 0.82 0.12 90 | 0.82 0.12 90 | Highlights, hero accents |
| foreground | 0.15 0 0 | 0.95 0 0 | Text |
| muted | 0.85 0 0 | 0.25 0 0 | Secondary UI |
| destructive | 0.55 0.22 25 | 0.65 0.19 22 | Error/warning |

## Typography
- **Display**: Fraunces (serif, bold, cinematic, editorial elegance) — hero text, section titles
- **Body**: DM Sans (clean, readable, professional) — body copy, UI labels
- **Mono**: Geist Mono (technical) — code, metadata

## Shape Language
- **Radius**: 0.5rem (8px) — clean angles, minimal curves
- **Buttons**: 8px radius, sharp precision
- **Cards**: 8px radius with subtle border
- **Elevation**: no over-styling; let gold accents do the work

## Structural Zones
| Zone | Treatment | Border |
|------|-----------|--------|
| Header/Nav | bg-card, light border-b | `border-border/20` |
| Hero | bg-background, gradient text overlay | none |
| Content sections | bg-card, 8px radius, shadow-elevated | `border-border/15` |
| Footer | bg-card, light border-t | `border-border/20` |
| Video cards | bg-muted/10, hover-lift effect | `border-border/10` |

## Component Patterns
- **Buttons**: Gold primary (primary), dark secondary, minimal tertiary with underline
- **Cards**: Muted background, border/10, hover translates -2px, shadow-elevated on hover
- **Video grid**: 3-col desktop, 2-col tablet, 1-col mobile, gap-6
- **Typography**: Fraunces for headlines (size 32–56px, weight 700–900), DM Sans for body (size 14–18px)

## Motion & Transitions
- **Default**: cubic-bezier(0.4, 0, 0.2, 1), 300ms
- **Entrance**: fade-in-up (600ms), fade-in (600ms), slide-in-left (500ms)
- **Interactions**: hover-lift (2px translateY), smooth color transitions, pulse-gold on accent elements
- **No bounce**: clean, sophisticated easing only

## Spacing & Rhythm
- **Base unit**: 4px (Tailwind default)
- **Sections**: gap-12 (48px) between major sections
- **Content padding**: p-6 (24px) on mobile, p-8 (32px) on desktop
- **Hierarchy density**: Loose on hero, tighter on forms

## Signature Detail
**Gold accent restraint**: Gold used strategically — hero tagline underline, CTA buttons, hover states on video thumbnails, section dividers. Never scattered; always purposeful. Creates unforgettable premium aesthetic without overload.

## Constraints
- ✓ Dark mode only (no light mode toggle)
- ✓ Mobile-first responsive (sm: 640px, md: 768px, lg: 1024px)
- ✓ High contrast for readability (AA+ WCAG)
- ✓ Smooth animations (no sharp, jarring effects)
- ✓ Video embeds: YouTube iframe responsive wrapper
- ✓ Images: moody documentary style, dramatic lighting
