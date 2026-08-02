# Aranya Archive

A glassmorphic ("liquid glass") botanical storefront — *living art for the modern sanctuary*.
Framework-free static website built from the Claude Design handoff. No build step, no dependencies.

## Pages (5)

| File | Page | Contents |
|------|------|----------|
| `index.html`     | Home      | Hero video + Botanicals catalog (44 plants) with category filter & search |
| `seeds.html`     | Seeds     | The Seed Vault (16 items) |
| `vessels.html`   | Vessels   | Artisanal Vessels (12 items) |
| `pedestals.html` | Pedestals | Display Pedestals (12 items) |
| `care.html`      | Care      | Botanical Care essentials (8 items) |

## Features

- **Glass product cards** with pointer parallax on the plant image
- **Category filter chips + search** (home page)
- **Wishlist hearts** — persist across pages via `localStorage`
- **Add-to-bag cart drawer** — quantity steppers, running total, persists across pages
- **WhatsApp checkout** — "Confirm Order" opens a pre-filled order message to `+91 93997 34130`
- **Newsletter / consultation** email field in the footer (front-end acknowledgement only)
- **Responsive** — 4→2→1 column grid, glass hamburger menu on mobile
- Respects `prefers-reduced-motion`

## Structure

```
Aranya Archive/
├── index.html  seeds.html  vessels.html  pedestals.html  care.html
├── assets/
│   ├── css/styles.css        # all styling + design tokens
│   ├── js/app.js             # product data, catalog render, cart, wishlist, checkout
│   ├── logo-leaf.png  favicon.png  thumbnail.png
└── media/
    ├── hero/hero.mp4         # homepage hero video
    └── products/*.webp       # 92 product images
```

Product data (names, prices, descriptions, care levels) lives in the arrays at the top of
`assets/js/app.js` — edit there to change the catalog.

## Running locally

Open `index.html` directly, or serve the folder (needed for the hero video on some browsers):

```bash
cd "Aranya Archive"
python3 -m http.server 4620
```

Then visit http://localhost:4620.

## Deploying

Upload the whole `Aranya Archive` folder to any static host (Netlify, Vercel, GitHub Pages,
Cloudflare Pages, or plain shared hosting). No configuration required.

## To change the WhatsApp order number

Edit `WHATSAPP_NUMBER` near the top of `assets/js/app.js` (currently `919399734130`,
country-code + number, no `+` or spaces).
