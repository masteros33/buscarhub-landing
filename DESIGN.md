# Buscar ERP design stack

The one source of truth for how the marketing site, the Buscar ERP web app and the
Buscar ERP Android app should look. Everything here is in
[`assets/tokens.css`](assets/tokens.css) — import that file and use the variables,
don't retype the hex codes.

Reference: the token structure, scale and typographic treatment follow the
**BoardUI** design system (boardui.com), recorded 13 Nov 2026. The accent ramp
is Buscar ERP's own green in place of BoardUI's blue.

---

## 1. Colour

### Neutral ramp
Every surface, border and piece of text comes from this ramp. Nothing else.

| Token | Hex | Used for |
| --- | --- | --- |
| `--neutral-50` | `#fafafa` | — |
| `--neutral-100` | `#f7f7f7` | secondary surface (alt sections, inset panels) |
| `--neutral-200` | `#ebebeb` | **every border and separator on the site** |
| `--neutral-300` | `#d4d4d4` | hover borders, dashed outlines, inactive bars |
| `--neutral-400` | `#a1a1a1` | tertiary text, placeholder, disabled |
| `--neutral-500` | `#737373` | **secondary text** (all body copy) |
| `--neutral-600` | `#525252` | — |
| `--neutral-700` | `#404040` | — |
| `--neutral-800` | `#262626` | dark button hover |
| `--neutral-900` | `#171717` | — |
| `--neutral-950` | `#0a0a0a` | **primary text**, dark/primary buttons |

### Accent ramp — Buscar ERP green
Maps onto the product's existing brand variables, so the app needs no repaint.

| Token | Hex | Product variable |
| --- | --- | --- |
| `--accent-50` | `#f0fdf4` | tint background |
| `--accent-100` | `#dcfce7` | |
| `--accent-200` | `#bbf7d0` | |
| `--accent-300` | `#86efac` | focus glow |
| `--accent-400` | `#4ade80` | |
| `--accent-500` | `#22c55e` | `--brand-bright` |
| `--accent-600` | `#16a34a` | `--brand` — the default accent |
| `--accent-700` | `#15803d` | `--brand-strong` |
| `--accent-800` | `#166534` | |
| `--accent-900` | `#14532d` | `--brand-deep` |
| `--accent-950` | `#052e16` | |

### State
Colour carries meaning, never decoration.

| Purpose | Background | Text |
| --- | --- | --- |
| Success | `--state-success-base` `#d8f999` | `--state-success-text` `#3c6300` |
| Warning / needs attention | `--state-warning-base` `#fff085` | `--state-warning-text` `#894b00` |
| Error / wrong | `--state-error-base` `#ffe2e2` | `--state-error-text` `#9f0712` |

### Semantic aliases
Build components against these, not the ramps:
`--text-primary`, `--text-secondary`, `--text-tertiary`, `--bg-primary`,
`--bg-secondary`, `--bg-tertiary`, `--border-default`, `--border-hover`,
`--separator`, `--focus-ring`.

---

## 2. Type

**Geist** for everything, **Geist Mono** for code, IDs and version tags; amounts use Geist with tabular figures.

The thing that makes this look like a product and not a template: **headings are
weight 500, not bold**, with tight negative tracking.

| Role | Mobile | Desktop | Weight | Tracking |
| --- | --- | --- | --- | --- |
| Hero | 40 / 44 | 72 / 84 | 500 | −0.02em |
| Section heading | 32 / 38 | 48 / 53 | 500 | −0.02em |
| Lead paragraph | 15 / 21 | 16 / 24 | 500 | normal |
| Body / UI | 14 / 20 | 14 / 20 | 400–500 | normal |
| Card title | 15 | 15 | 500 | −0.01em |
| Small / meta | 13 | 13 | 500 | normal |
| Mono | 12 | 16–18 | 400 | −0.01em |

Body copy is `--text-secondary`, not black. Only headings and emphasised values
get `--text-primary`.

Geist already keeps `l`, `I` and `1` apart (tailed l, flagged 1),
so no font features are switched on.

---

## 3. Shape

| Token | Value | Used for |
| --- | --- | --- |
| `--radius-sm` | 4px | chips, tiny tags |
| `--radius-md` | 6px | inputs, table cells |
| `--radius-lg` | 8px | small panels, nav items |
| `--radius-2lg` | **10px** | **all buttons and controls** |
| `--radius-xl` | 12px | small cards |
| `--radius-2xl` | **16px** | **standard card** |
| `--radius-3xl` | 24px | large/feature cards |
| `--radius-full` | 9999px | pills, badges, avatars |

Controls are **36px** tall (`--control-h`), 40px for the large variant.
Header is **72px**. Container is **1276px** with 16px gutters, 24px from 640px up.

---

## 4. Elevation

Shadows are almost invisible. If you can obviously see a shadow, it's wrong.

```
--shadow-xs    0 1px 2px 0 rgba(0,0,0,.05)        /* buttons, cards — the default */
--shadow-sm    0 1px 2px 0 rgba(0,0,0,.06), 0 1px 3px 0 rgba(0,0,0,.10)
--shadow-md    0 2px 4px -1px rgba(0,0,0,.06), 0 4px 6px -1px rgba(0,0,0,.10)
--shadow-lg    0 4px 6px -2px rgba(0,0,0,.05), 0 10px 15px -3px rgba(0,0,0,.10)
--shadow-lift  0 -2px 13px 0 rgba(0,0,0,.043)     /* the floating pill badge */
```

Depth comes from the 1px `#ebebeb` border, not from shadow.

---

## 5. Components

**Button** — 36px tall, 10px radius, 14px/500, 1px `--border-default`,
`--shadow-xs`, 13px side padding.
*Primary* is `--neutral-950` on white text. *Secondary* is white with the border.
*Accent* (`--accent-600`) only where green is the point.

**Card** — white, 1px `--border-default`, 16px radius, `--shadow-xs`.
An optional visual area on top with a bottom hairline, then a 14/16px footer
holding a 15px/500 title and a 13px `--text-secondary` description.

**Pill badge** — 28px tall, fully round, 13px/500 at `rgba(0,0,0,.7)`,
1px border, `--shadow-lift`. Often with a 6px accent dot.

**Section** — a mono line, then a centred heading, then a ≤560px lead, then
buttons, then the grid. 72px vertical padding on mobile, 104px from 640px.

**Alt section** — `--bg-secondary` with a hairline top and bottom. Alternate.

---

## 6. Motion

Easing is `cubic-bezier(.22,.7,.26,1)` throughout. Reveals are 550ms with
50ms stagger. Looping product widgets run on fixed timelines (12s till,
14s offline queue, 9s phone) so the parts stay in step.

Non-negotiable:
- honour `prefers-reduced-motion: reduce`
- pause loops with an IntersectionObserver when off screen
- nothing may move that doesn't explain something

---

## 7. Applying this to the app

The Buscar ERP web UI (`frontend/src/styles.css`) already has a parallel token
set. To align it:

1. Keep the product's green — it already matches `--accent-600/700/900`.
2. Replace the frosted-glass panels with flat white + 1px `#ebebeb`.
3. Drop heading weights from 750/800 to **500**, add `-0.02em` tracking.
4. Move body copy to `--text-secondary` `#737373`.
5. Standardise radii on 10px controls / 16px cards.
6. Replace the mint radial background with plain `#ffffff`, `#f7f7f7` for
   inset panels.

Keep the product's accessibility rules as they are — 44px touch targets,
visible focus rings, WCAG AA contrast. Those beat any of the above where they
conflict. `--text-secondary` on white is 4.8:1, so it is fine for body copy but
must not be used for anything smaller than 13px.
