<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# The app links to the guide by slug

The Waitly app links to guide articles from its pages and sections. Its list of
addresses is `app/lib/guide-links.ts` in the `waitly` repo, and each one is a
slug from `src/content/guide/articles/`.

- Never rename or remove a guide article without a redirect from the old
  address. A changed slug breaks a link inside the app with no warning.
- The same holds for `/setup/`, and for the `id` of each section on the guide
  hub (the app links to `/guide/#emails-settings`).
- After a change to the guide, run `npm run check:guide-links` in the `waitly`
  repo. It looks every address the app uses up in this site's sitemap.

# Use-case posts keep their address

Each post under `/use-cases/` is typed data in `src/content/use-cases/posts/`,
listed in `src/content/use-cases/index.ts`. This site is a static export with
no redirects.

- Never rename or remove a post's `slug`, or a section's `id`, once it is
  published. Other sites and search results link to them.
- A post answers the merchant's question in general first (`voice: "neutral"`),
  then shows what Waitly does (`voice: "waitly"`). What Waitly doesn't do goes
  in `limits`.
- Take facts about Waitly from the guide articles, not the feature pages. Check
  a claim about Shopify or a law at its source and link it. No statistics from
  other vendors, and no invented results.
