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

## Content

The site markets only what the Waitly app actually ships. When the app changes, update these:

| What | Where |
| --- | --- |
| Domain, install link, support email, legal details | `src/config/site.ts` |
| Plans, limits and the feature comparison | `src/content/plans.ts` (mirrors `waitly/app/domain/billing/plan.ts`) |
| FAQ | `src/content/faq.ts` |
| Privacy policy and DPA | `src/content/legal/*.md` (from `waitly/docs/legal/`) |

`installUrl` points at an App Store search until the listing is live. Legal fields left as `null` render as highlighted placeholders, and a draft notice appears on both legal pages until every field is filled in.

## Styling

Use Tailwind utility classes and shadcn/ui components — avoid custom CSS. Add components with:

```bash
npx shadcn@latest add <component>
```

## Images

`next/image` needs a server, so images use [`next-image-export-optimizer`](https://github.com/Niels-IO/next-image-export-optimizer). The guide screenshots live in `public/guide/<article-slug>/` and are rendered by `Screenshot` (`src/components/guide/screenshot.tsx`), which wraps `ExportedImage`:

```tsx
import ExportedImage from "next-image-export-optimizer";

<ExportedImage src="/guide/install-waitly/01-app-store.jpg" width={1470} height={757} alt="..." placeholder="empty" />;
```

`npm run build` writes resized WebP variants next to each screenshot, in a git-ignored `nextImageExportOptimizer/` folder, and copies them to `out/`. Only `public/guide/` is scanned; the widths are set in `next.config.ts`. `npm run dev` serves the original files.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `out/` to GitHub Pages.

One-time setup in the GitHub repo:

1. **Settings → Pages → Source:** GitHub Actions
2. **Settings → Pages → Custom domain:** enter the domain and enable HTTPS
3. Point DNS at GitHub Pages (`CNAME` to `<user>.github.io` for a subdomain, or the GitHub Pages `A`/`AAAA` records for an apex domain)
