---
name: waitly-seo-post
description: Research, write and publish a new SEO use-case post on the Waitly website (/use-cases/<slug>/), using the SearchFit SEO plugin skills for topic research, keyword clustering, the content brief and the on-page check. Use this whenever the user wants a new post, article, blog post or use-case page for Waitly, wants to "write about" a merchant problem, fill a content gap, target a keyword, or "create and publish" content on waitly-web, even if they don't say "use case" or "SEO".
---

# Write and publish a Waitly use-case post

A use-case post is a search-led article about a situation a Shopify merchant is in ("my preorder will ship late", "a restock sold out before my waitlist could buy"). It answers the merchant's question in general first, then shows what Waitly does, then says plainly what Waitly doesn't do. Readers arrive from Google or an AI answer and have often never heard of Waitly, so the post only works if it is the most useful honest answer to their query. That is why research comes before writing, and why every fact is checked.

The repo is `/Users/nabeel/test/shopify-apps/waitly-web` (Next.js static export, deployed to GitHub Pages by pushing `main`). The app itself is `/Users/nabeel/test/shopify-apps/waitly` (read-only here).

Read these before starting:
- `AGENTS.md` in the repo: the permanent-address rules.
- `references/post-rules.md`: post structure, truth rules, voice, mocks. Read it in full before writing.
- `references/seo-playbook.md`: which SearchFit skill to use at each phase, keyword ownership, on-page targets.

## The workflow

Work through the phases in order. Keep notes in `.guide-work/use-cases/` (git-ignored), which is also where earlier research lives.

### 1. Load what already exists

You need to know what's already covered before picking a topic, or the new post will compete with an existing page.

- List published posts: `src/content/use-cases/index.ts` (`POSTS`) and each post's `title`, `metaTitle`, `description`.
- List feature pages and guide articles with their SEO titles: `src/config/pages.ts` (`metaTitle`), `src/content/guide/articles/*.ts` (`metaTitle`, `title`).
- Read `.guide-work/use-cases/candidates.md` (past candidates and **rejected topics**: limited drops, marketing to waitlist emails, seasonal products), `.guide-work/use-cases/findings.md` (known app gaps), and `.guide-work/seo/audit-keywords.md` (keyword map and the content-gap list) if they exist.

### 2. Research the topic

If the user named a topic, research that one. If not, find candidates from the content-gap list and fresh research.

- Load `searchfit-seo:create-topic` and follow its method for the topic (or each candidate). Load `searchfit-seo:keyword-clustering` to group the query variants you find into one primary keyword and its secondaries. If no keyword is clearly primary, the topic is probably two posts or none.
- Search how merchants actually phrase it: Shopify Community, Reddit r/shopify, Shopify Help Center. Merchant wording becomes your H2s and FAQs.
- Look at the top results for the primary query: what they cover, what they miss, what intent they serve (how-to, comparison, definition). Your post should cover what they cover and add what they miss. Never copy their text or quote their statistics.
- **Cannibalization check.** Compare the primary keyword against every title from phase 1. If an existing post, feature page or guide article already owns the query, stop and tell the user. Suggest improving that page or choosing a different angle instead. Ownership: feature pages own "<feature> app for Shopify", posts own the unbranded how-to/should-I query, guide articles own "… in Waitly".
- **Fit check.** Read the guide articles that would back the Waitly sections. If Waitly can't honestly help with the situation, the post isn't worth writing. Say so instead.

Save the research to `.guide-work/use-cases/research-<slug>.md`: primary and secondary keywords, merchant wording with source URLs, what the top results cover and miss, follow-up questions (FAQ material), Shopify/legal facts to verify, guide articles to use, plan level, fit verdict.

### 3. Agree the topic and address with the user

The slug becomes a permanent URL that other sites and search results will link to, so the user signs it off. Ask once (AskUserQuestion), offering 1–3 options. For each: proposed title, slug, primary keyword, the plan it needs (Free, Growth or Pro), and a one-line reason (demand, competition, fit). Put your recommendation first. If the user already named the topic, still confirm the slug and title in that single question. After this answer, don't stop to ask again until publishing is done, unless something blocks you.

### 4. Brief

Load `searchfit-seo:content-brief` and produce a brief for the chosen topic in `.guide-work/use-cases/brief-<slug>.md`. Shape it to the post format in `references/post-rules.md` (answer → neutral sections → waitly sections → setup → limits → FAQs) rather than a generic blog outline. Include the H2 headings in search wording, which secondary keyword each section serves, the FAQ questions, the internal links (feature pillar, 1–3 related posts, guide articles for setup) and the external sources to verify.

### 5. Gather the facts

- Read every guide article you will rely on, in full. The guide is the source of truth for Waitly. If the guide and a feature page disagree, the guide wins. When the guide is silent, check the app repo (read-only).
- Fetch every Shopify, legal or third-party page you will cite with WebFetch, and keep the URL to link inline. If you can't verify a claim at its source, leave it out.
- Note any gap between the guide and the app in `.guide-work/use-cases/findings.md`.

### 6. Write

Files (see `references/post-rules.md` for the exact shape):
1. `src/content/use-cases/posts/<slug>.ts`: `export const post: UseCasePost`.
2. `src/components/use-cases/scene-sets/<slug>.tsx`: the mocks for the cover and figures.
3. Register the scene set in `src/components/use-cases/scenes.tsx` and the post in `src/content/use-cases/index.ts` (`POSTS`, newest first).
4. Add the new slug to `related` in 1–3 genuinely related existing posts, and set the new post's own `related`. Links both ways are what lets the post rank and get found.

Feature pages and guide articles pick posts up automatically through the post's `features` and `setup` fields, so you don't need to edit them.

Load `searchfit-seo:create-content` for its guidance on keyword placement and structure while writing. Where it conflicts with `references/post-rules.md` (for example, it may suggest statistics, hype or a generic structure), the post rules win, because the site's credibility rests on them.

### 7. SEO pass

Load `searchfit-seo:on-page-seo` (or `searchfit-seo:seo-check` for a quicker pass) and run it on the post file against the primary keyword. Fix what it finds within the post rules. The targets are in `references/seo-playbook.md`. Structured data (Article, FAQPage, BreadcrumbList) is generated by the layout, so don't add schema by hand. Check it in the built HTML in the next step instead.

### 8. Verify

From the repo root:

```bash
npx tsc --noEmit && npx eslint && npm run build
python3 .claude/skills/waitly-seo-post/scripts/check_post.py <slug> "<primary keyword>"
```

The build fails on a broken internal link, an unknown guide slug or a missing related post (checks in `src/content/use-cases/index.ts`). `check_post.py` reads the built page in `out/` and checks the title, description, H1, keyword placement, JSON-LD, links and image alt text. Fix every FAIL. Treat a WARN as a prompt to decide, not a rule.

Then look at it. Serve `out/` (`npx serve out -l 4517` in the background), open `http://localhost:4517/use-cases/<slug>/` with the claude-in-chrome skill, and confirm the cover, each figure and the tables render properly on desktop. Then check `/use-cases/`, where the hub card shows the cover. Close the tab and stop the server when done.

### 9. Publish

In waitly-web, work on `main` only: never create a branch or a pull request. The user asked for the post to be published, so commit and push without asking again:

```bash
git add -A && git commit -m "Add use-case post on <topic in plain words>" && git push origin main
gh run list --limit 1   # the "Deploy to GitHub Pages" run
```

End commit messages with the Co-Authored-By line from the session's attribution instructions. After the deploy finishes, confirm the live URL returns 200 and appears in `https://waitly.octabyte.io/sitemap.xml`. The sitemap is already submitted in Google Search Console (under the `octabyte.io` domain property), so Google picks up new posts from it. Offer to request indexing for the new URL with URL Inspection in Search Console, but only do it if the user says yes.

Finally, update `.guide-work/use-cases/candidates.md`: mark the topic published with the date and commit hash, and list the other candidates you researched.

### 10. Report to the user

Plain words, short. Cover:
- The live URL and the query the post targets.
- What it covers, and which pages it links to and from.
- Every external source it cites.
- Anything you couldn't verify and left out.
- App gaps you found.
- Whether the deploy finished.
