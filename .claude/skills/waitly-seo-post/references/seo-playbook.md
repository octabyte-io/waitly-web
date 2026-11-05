# SEO playbook for a Waitly post

## Which SearchFit skill, when

| Phase | Skill | What to take from it |
|---|---|---|
| Research | `searchfit-seo:create-topic` | Audience, search intent, angle, competitive positioning |
| Research | `searchfit-seo:keyword-clustering` (or `keyword-cluster`) | One primary keyword and its secondaries; spot when a topic is really two |
| Research, no topic given | `searchfit-seo:content-strategy` | Gap candidates under the five feature pillars |
| Brief | `searchfit-seo:content-brief` | H2 outline, questions to answer, internal links, sources |
| Writing | `searchfit-seo:create-content` | Keyword placement and structure. The post rules override it on facts, statistics and tone. |
| SEO pass | `searchfit-seo:on-page-seo` or `searchfit-seo:seo-check` | Title, description, headings and keyword usage against the primary keyword |
| Optional | `searchfit-seo:ai-visibility` | Whether the answer paragraph reads as a quotable answer |

There's no search-volume tool. Judge demand from how often merchants raise the problem (forum threads, Shopify Help pages, autocomplete and "People also ask"), and say that it's a judgement.

## The pyramid and who owns which query

```
home                  → "waitlist app for Shopify" + brand
/features/<x>/        → "<feature> app for Shopify"           (commercial)
/use-cases/<slug>/    → the unbranded how-to / should-I query  (informational)  ← new posts
/guide/<slug>/        → "… in Waitly"                         (product docs)
```

A new post must target an informational query that no other page owns. It links up to its feature pillar through `features` and one inline link, across to related posts through `related`, and down to guide articles through `setup`. Feature pages and guide articles list the post automatically.

Feature keys and their pillar pages:
- `backInStock` → `/features/back-in-stock/`
- `preorders` → `/features/preorders/`
- `restockRelease` → `/features/restock-release/`
- `analytics` → `/features/analytics/`
- `comingSoon` → `/features/coming-soon/`

## On-page targets

- **Primary keyword appears in:**
  - the slug
  - `metaTitle` (or `title` if there is no metaTitle), near the start
  - `description`
  - the H1 (`title`)
  - the first sentence of `answer`
  - at least one H2
- **Secondary keywords:** each covered by an H2 or an FAQ, worded the way merchants say it. Don't repeat any phrase unnaturally. Write for the reader first.
- **Lengths:**
  - `metaTitle`: 51 characters or fewer (the site appends " | Waitly")
  - `description`: 140–160 characters
  - body: about 900–1,400 words
- **Links:**
  - at least one inline link to the feature pillar, with keyword anchor text
  - 1–3 related posts, linked both ways
  - setup guide articles
  - external sources linked inline where a specific claim is made
- **Images:** every scene has a descriptive `alt`.
- **Structured data:** Article, FAQPage and BreadcrumbList come from the layout. Check they parse in the built HTML; don't add more by hand.

## Gap list (from the 2026-11-05 audit)

Candidates no page covered then. Check that each is still uncovered before using it.
- How to set up preorders on Shopify (preorders).
- Shop Pay or express checkout on preorders (preorders). Needs a live-store test before any claim.
- Back in stock email template (back in stock).
- Klaviyo or Shopify Flow vs a dedicated back-in-stock app (back in stock). Neutral, no knocking of named apps.
- Keeping sold-out product pages live, for SEO (back in stock). Close to a rejected topic, so ask the user.
- Estimating sales lost to stockouts (analytics). No invented numbers; show the method only.
