# 🤡 Funny People Only

A chaotic, mobile-first, zero-dependency comedy website. Jokes, roasts, useless facts, fake deep quotes, and impossible "Would You Rather" choices — all in one gloriously animated single-page experience.

## Features

- **6 categories × 6 subcategories** = 36 content cards, ~10 items each
- **Live stats** persisted in localStorage
- **Canvas particle background** that reacts to mouse/touch
- **Emoji burst explosions** on every interaction
- **8 unique pranks** on the "DO NOT PRESS" button
- **Easter eggs**: click the egg 7×, Konami code (↑↑↓↓←→←→BA)
- **PWA ready** — installable, works offline via Service Worker
- **Respects `prefers-reduced-motion`**
- **Fully responsive** — 320px to 4K+
- **Accessible** — semantic HTML, ARIA labels, focus states, keyboard navigation

## Tech Stack

| Layer | Choice |
|-------|--------|
| HTML | Semantic, accessible, single file |
| CSS | Custom properties, fluid `clamp()` typography, CSS Grid, `@keyframes` |
| JS | Vanilla ES modules, no build step, no dependencies |
| Fonts | Google Fonts (Space Grotesk + JetBrains Mono) with `preload` |
| PWA | `manifest.json` + `sw.js` (cache-first) |

## Project Structure

```
funny-site/
├── index.html       # Entry point
├── manifest.json    # PWA manifest
├── sw.js           # Service Worker (offline)
├── css/
│   └── styles.css  # All styles
└── js/
    └── app.js      # All logic + data
```

## Quick Start

```bash
# No install needed. Just serve the folder:
npx serve funny-site
# or
python -m http.server -d funny-site 8080
# or open index.html directly in browser (works offline after first visit)
```

## Deploy to GitHub Pages

1. Push `funny-site/` to a repo
2. Settings → Pages → Deploy from branch → `main` / `root`
3. Done. Your site lives at `https://username.github.io/repo-name/`

## Customize

- **Add content**: Edit `DATA` object in `js/app.js`
- **Change colors**: Modify CSS custom properties in `css/styles.css`
- **Add pranks**: Push functions to `PRANKS` array in `js/app.js`
- **Swap fonts**: Update `@import` in `index.html` and `--font-*` vars in CSS

## Browser Support

| Feature | Support |
|---------|---------|
| ES Modules | All modern browsers |
| CSS Grid / Custom Props | All modern browsers |
| Service Worker | All modern browsers |
| `clamp()` | Chrome 79+, Firefox 75+, Safari 13.1+ |
| `backdrop-filter` | Chrome 76+, Firefox 103+, Safari 14+ |

## License

MIT — Do whatever. Fork it, break it, make it weirder.

---

**Made with 🤡 for funny people.** No AI was harmed. Zero dependencies. Works offline.