# BRANDXPLODA — Refactored Website

A static, mobile-responsive BrandXploda website refactored from the supplied WEBXPLODDA HTML source, using the supplied BrandXploda assets. No backend or payment gateway was included in the original source.

## Run locally
Open `src/index.html` in a browser, or serve `src` with a static server:

```bash
cd src
python -m http.server 8000
```

Visit http://localhost:8000.

## Deploy on Vercel
Import this project into Vercel and set **Root Directory** to `src` (the folder containing `index.html`). Framework preset: **Other**. No build command required. Alternatively upload the contents of `src` as your static site.

## Configure the three live previews
Open `src/site-config.js`. Paste your full `https://your-project.vercel.app` links into the three `portfolio` entries. Only HTTPS `vercel.app` hosts are accepted by the gallery. Each configured project displays an iframe preview and a live-site link. Some deployed sites block iframe embedding through their security headers; the live link still works.

## Enable enquiries
In `src/site-config.js`, set `contactEmail` to your real business email address, or `whatsappNumber` to your business number in international format (digits only). The form prepares a message for the user's email or WhatsApp app; it does not transmit to a server or store requests. If no contact channel is configured, it offers to copy the enquiry text. A backend and privacy policy are required before adding server-side storage or automatic submission.

## Payment workflow
The R250 offer and five-step process are described, but **no live payments, order tracking, approval portal, or backend** are configured. Payment confirmation is never simulated. Add a payment provider and verified backend workflow before taking payments online.

## Assets
`src/assets/services` contains all 50 supplied service symbols. `src/assets/brand-letters` preserves the supplied animated letter artwork. The hero and animated artwork are included in `src/assets`.

## Project structure
- `src/index.html`: accessible page structure and content
- `src/styles.css`: responsive visual design and brand tokens
- `src/site.js`: service catalogue, filtering, gallery, navigation and enquiry behavior
- `src/site-config.js`: portfolio URLs and contact channels
- `src/assets`: original BrandXploda artwork
