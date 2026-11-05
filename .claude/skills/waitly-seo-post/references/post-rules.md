# Post rules

These rules are why the existing posts can be trusted, and trust is what makes them rank and get quoted by AI answers. They come from how the first twelve posts were written and reviewed.

## Contents
1. Read first
2. The shape of a post
3. Rules on truth
4. Voice
5. Mocks (scenes)

## 1. Read first

- `src/content/use-cases/types.ts`: the `UseCasePost` type. The field comments are the spec.
- `src/content/use-cases/posts/back-in-stock-notifications-shopify.ts`: the pilot. Match its structure, length (roughly 900–1,400 words of body), tone and honesty. Skim one more recent post too, such as `made-to-order-production-time.ts`.
- `src/components/use-cases/scenes.tsx`, `src/components/mocks/{storefront,email,admin}.tsx` and one existing `scene-sets/*.tsx`: how mocks are built.

## 2. The shape of a post

| Field | What goes in it |
|---|---|
| `slug` | Agreed with the user. Lowercase, hyphenated, contains the primary keyword's core words. Permanent once published. |
| `title` | The H1. Reads like the merchant's question or situation, with the primary keyword near the start. |
| `metaTitle` | The `<title>`, when the H1 is too long. The site appends " \| Waitly", so keep it to 51 characters or fewer (60 in total). Unbranded, keyword first. |
| `description` | 140–160 characters. Contains the primary keyword and says what the reader will learn. |
| `cardHeadline` | About 60 characters, for the hub card. |
| `summary` | One or two sentences for cards and llms.txt. |
| `cover` | A scene id: the mock shown at the top of the post and on cards. |
| `published` | Today's date, YYYY-MM-DD. Leave `updated` out on a new post. |
| `answer` | Two short paragraphs a reader could stop after. The first sentence answers the query directly and contains the primary keyword. AI answers quote this part. |
| `sections` | First the `voice: "neutral"` sections: what Shopify does on its own, the options side by side (a table works well), how to do it without an app, when another approach is better. Then the `voice: "waitly"` sections, each with one `figure`. H2 headings use the merchant's search wording and cover the secondary keywords. |
| `features` | The feature pages this post belongs under. It drives the link up to the pillar and the post's listing on that feature page. |
| `level` | The lowest plan covering everything the Waitly sections describe. Mark plan-gated details in the text. |
| `setup` | Guide articles to follow, in order. Slugs must exist in `src/content/guide/index.ts`. |
| `limits` | What Waitly doesn't do in this situation, stated plainly. This is a feature of the site, not a risk. |
| `faqs` | 4–6 follow-up questions from the research ("People also ask", forum threads). Only ones you can answer truthfully. They become FAQPage structured data. |
| `related` | 1–3 related post slugs. Add this post's slug to theirs too. |

Section `id`s are permanent anchors: short, lowercase, hyphenated. Don't use `set-it-up`, `limits` or `questions`, which the layout uses.

Inline markup is only `**bold**` and `[label](href)`, and they can't nest: `**[label](href)**` and `[**label**](href)` both show raw markup on the page (the build now rejects them). Write `**UI label**, see [label](href)` instead. Internal hrefs are site paths with a trailing slash (`/pricing/`, `/features/preorders/`, `/guide/<slug>/`, `/use-cases/<slug>/`). Link text describes the target ("preorder limits by plan", not "pricing" or "here"). In one Waitly section, link inline to the feature page using its keyword as the anchor.

## 3. Rules on truth

- Waitly has no published customers, testimonials or results. Never invent an outcome, a merchant, a quote or a statistic.
- Don't use statistics from competitor or vendor articles. Past research found them conflicting or unsourced. A post with no numbers is fine. A post with a made-up number damages every other page.
- Every claim about Waitly must be backed by a guide article you read, or by the app repo (`/Users/nabeel/test/shopify-apps/waitly`, read-only) when the guide is silent. If the guide and a feature page disagree, the guide wins.
- Every claim about Shopify, another product or a law must be checked at its source with WebFetch, and linked inline where it is specific. If you can't verify it, leave it out.
- Mock figures are examples. A caption says "Example" when the mock shows numbers.
- Don't claim Waitly does what it doesn't:
  - Alerts go by email only: no SMS, no push.
  - No Klaviyo, Mailchimp or Shopify Flow integration.
  - No deposits, partial payments or preorder discounts.
  - No bot protection and no purchase limits.
  - The Notify me block works on product pages only, and only with Online Store 2.0 themes.
  - An ordinary alert reserves no stock.
  - Check `.guide-work/use-cases/findings.md` for more known gaps.
- Don't name competing apps as worse. You may link a neutral source, such as Shopify Help, a forum thread or a statute.

## 4. Voice

- Write plain, short, declarative sentences. "You" is the merchant and "the shopper" is the customer.
- Use US spelling ("color").
- "Preorder" is one word, except the UI label "Pre-order".
- Use curly apostrophes and quotes (’ “ ”) as the pilot does. Avoid em dashes.
- No hype words, no exclamation marks, and no question headings beyond what a merchant would actually search.
- Bold only UI labels and list lead-ins. Give concrete numbers and defaults where the guide states them.

## 5. Mocks (scenes)

A scene is `{ alt, render }`, built from the existing mock components. Prefix every scene id with a short word unique to this post. The `alt` text describes what the mock shows in words a search engine and a screen reader can use.

If the post needs a mock that doesn't exist, build a small one inside the post's scene-set file in the same visual language. Use the glass system and don't invent a new look:
- a white card with `ring-1 ring-[#0b2545]/10`
- the `glass` bezel used by `ProductFrame`
- `AdminFrame` with `Panel` for admin screens

Use the app's real UI wording, taken from the guide articles. The orange `signal` color is reserved for "this shopper, now" and the install button, never decoration. Three figures is typical: one per `waitly` section, plus the cover, which can reuse one of them.
