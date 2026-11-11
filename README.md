# BRANDXPLODA 

## Run locally
Open `src/index.html` in a browser, or serve `src` with a static server:

```bash
cd src
python -m http.server 8000
```

Visit http://localhost:8000.

## Deploy on Vercel
Import this project into Vercel and set **Root Directory** to `src` (the folder containing `index.html`). Framework preset: **Other**. No build command required. Alternatively upload the contents of `src` as your static site.

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
