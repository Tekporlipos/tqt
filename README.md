# Tekpor Quant Technologies — Website

The public marketing site for Tekpor Quant Technologies (TQT) at `tekporquant.live`. It is plain static HTML, CSS and a little JavaScript, so there is no build step and no dependencies.

The live dashboard is a separate project and lives at `dashboard.tekporquant.live`.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home: what we do, diversification, transparency, direction |
| `solutions.html` | Approach: signals, sizing, diversification, monitoring, rotation, controls |
| `strategy.html` | Tekpor Strategy and Tekpor Coin: current holdings, planned additions, design, implementation steps |
| `performance.html` | How results are reported and how to read them |
| `roadmap.html` | Phased plan, in order and not dated |
| `risk.html` | Risk disclosure, terms of use, privacy |
| `about.html` | About, technology, contact form |

Shared files live in `assets/`:

- `styles.css` — all styling, light and dark, from one set of CSS variables
- `site.js` — theme toggle and mobile menu
- `logo.svg`, `favicon.svg` — brand mark

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy

The site is static, so it deploys as-is to Cloudflare Pages.

- Framework preset: None
- Build command: leave empty
- Build output directory: `/`
- Custom domain: `tekporquant.live` (and `www` if wanted)

Push to the main branch and Pages publishes it.

## Design

Slate and ink palette: one accent colour, colour used only for meaning (gain, loss, caution), flat surfaces with 1px borders, small radii, system font stack, tabular numerals.

Light and dark come from the variables at the top of `assets/styles.css`. The theme follows the visitor's device setting. The navbar button overrides it and the choice is saved in `localStorage` under `tqt_theme`. Each page sets the theme in a tiny inline script in `<head>` to avoid a flash.

To change a colour, edit the variables in `:root` and `:root[data-theme="dark"]`. Do not hard-code colours in pages.

## Editing

- The navbar and footer are repeated in every page. If you add a page or change a link, update all pages.
- The strategy page holdings are a snapshot. Update the date and figures when they change. Use real asset names, not broker symbols.
- Contact email: `support@tekporquant.live` (`about.html`). The form opens the visitor's mail app via `mailto:`. Swap in a form service if a real backend form is needed.
- The dashboard link and the website link back are the only cross-site links. Dashboard: `https://dashboard.tekporquant.live`.

## Content rules

This site describes a financial business, so wording matters. Keep these rules when editing:

1. No guaranteed or "consistent" return figures. Targets are not promises, and losses are shown as plainly as gains.
2. No "invest with us", "start investing" or buy buttons until the legal structure and licensing are in place. The Coin and any pooled Strategy are likely regulated investment products in Ghana and elsewhere.
3. Tekpor Coin is described as planned and not yet built. Never describe the buyback as a price floor or guarantee, and do not publish buyback size or timing.
4. Use "investing" and "portfolio" wording rather than "trading". Say "positions", not "trades".
5. Keep the risk disclaimer in every footer.
6. Have a qualified lawyer review `risk.html`, `strategy.html` and `roadmap.html` before outside capital is discussed or accepted.

## Related

- Dashboard (React/Vite frontend and Flask backend): `Forex-Trading-Agent`
- Business proposal: Tekpor Strategy & Coin (internal, not for public distribution)
