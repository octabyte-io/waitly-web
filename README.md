# waitly-web

Static Next.js site (App Router) with Tailwind CSS v4, shadcn/ui and build-time image optimization, deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run lint
npm run build     # static export to out/ + optimized images
npm run preview   # serve out/ locally
```

## Styling

Use Tailwind utility classes and shadcn/ui components — avoid custom CSS. Add components with:

```bash
npx shadcn@latest add <component>
```

## Images

`next/image` needs a server, so images use [`next-image-export-optimizer`](https://github.com/Niels-IO/next-image-export-optimizer). Put images in `public/images/` and render them with `ExportedImage`:

```tsx
import ExportedImage from "next-image-export-optimizer";
import hero from "../../public/images/hero.jpg";

<ExportedImage src={hero} alt="..." placeholder="blur" />;
```

`npm run build` generates resized WebP variants and blur placeholders.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `out/` to GitHub Pages.

One-time setup in the GitHub repo:

1. **Settings → Pages → Source:** GitHub Actions
2. **Settings → Pages → Custom domain:** enter the domain and enable HTTPS
3. Point DNS at GitHub Pages (`CNAME` to `<user>.github.io` for a subdomain, or the GitHub Pages `A`/`AAAA` records for an apex domain)
