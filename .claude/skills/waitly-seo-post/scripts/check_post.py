#!/usr/bin/env python3
"""Check a built use-case post in out/ against the on-page SEO targets.

Usage (from the waitly-web repo root, after `npm run build`):
    python3 .claude/skills/waitly-seo-post/scripts/check_post.py <slug> "<primary keyword>"

Prints PASS / WARN / FAIL lines and exits 1 if anything FAILs.
"""
import html
import json
import os
import re
import sys

SUFFIX = " | Waitly"


def main() -> int:
    if len(sys.argv) < 3:
        print(__doc__)
        return 2
    slug, keyword = sys.argv[1], sys.argv[2].lower()
    path = os.path.join("out", "use-cases", slug, "index.html")
    if not os.path.exists(path):
        print(f"FAIL  {path} not found. Run `npm run build` first, from the repo root.")
        return 1
    page = open(path, encoding="utf-8").read()
    results: list[tuple[str, str]] = []

    def add(ok: bool, msg: str, warn_only: bool = False):
        results.append(("PASS" if ok else ("WARN" if warn_only else "FAIL"), msg))

    def text(fragment: str) -> str:
        return html.unescape(re.sub(r"<[^>]+>", " ", fragment)).strip()

    def has_kw(s: str) -> bool:
        # Every word of the keyword appears (order-free), so "shopify preorder" matches "preorders on Shopify".
        s = s.lower()
        return all(re.search(r"\b" + re.escape(w.rstrip("s")), s) for w in keyword.split())

    title = html.unescape(re.search(r"<title>(.*?)</title>", page, re.S).group(1))
    add(len(title) <= 60, f"title is {len(title)} chars (max 60): {title}")
    add(has_kw(title), f"keyword in title", warn_only=True)

    m = re.search(r'<meta name="description" content="(.*?)"', page)
    desc = html.unescape(m.group(1)) if m else ""
    add(140 <= len(desc) <= 160, f"description is {len(desc)} chars (140-160)", warn_only=bool(desc))
    add(has_kw(desc), "keyword in description", warn_only=True)

    h1s = re.findall(r"<h1[^>]*>(.*?)</h1>", page, re.S)
    add(len(h1s) == 1, f"{len(h1s)} H1 on the page (want 1)")
    if h1s:
        add(has_kw(text(h1s[0])), f"keyword in H1: {text(h1s[0])}", warn_only=True)

    h2s = [text(h) for h in re.findall(r"<h2[^>]*>(.*?)</h2>", page, re.S)]
    add(any(has_kw(h) for h in h2s), "keyword in at least one H2", warn_only=True)

    main_m = re.search(r"<main.*?</main>", page, re.S)
    main_html = main_m.group(0) if main_m else page
    # Mocks are <figure> blocks; leave them out so only the prose is counted.
    prose = re.sub(r"<figure\b.*?</figure>", " ", main_html, flags=re.S)
    body = text(main_html)
    words = len(text(prose).split())
    add(900 <= words <= 2600, f"prose is ~{words} words without mocks (body ~900-1,400 plus setup, limits, FAQs, cards)", warn_only=True)
    after_h1 = page.split("</h1>", 1)[1] if "</h1>" in page else ""
    first = re.search(r"<p[^>]*>(.*?)</p>", after_h1, re.S)
    first = text(first.group(1)) if first else ""
    add(has_kw(first), "keyword in the first answer paragraph", warn_only=True)

    canon = re.search(r'<link rel="canonical" href="([^"]+)"', page)
    add(bool(canon) and canon.group(1).endswith(f"/use-cases/{slug}/"), "canonical points at this post")

    types = []
    for block in re.findall(r'<script type="application/ld\+json">(.*?)</script>', page, re.S):
        try:
            data = json.loads(block)
        except ValueError:
            add(False, "a JSON-LD block does not parse")
            continue
        for node in data.get("@graph", [data]):
            types.append(node.get("@type"))
        if "](/" in block or "**" in block:
            add(False, "raw markdown ([label](/path/) or **) leaked into JSON-LD")
    for t in ("Article", "FAQPage"):
        add(t in types, f"JSON-LD has {t}")
    add('"BreadcrumbList"' in page, "JSON-LD has BreadcrumbList")

    hrefs = re.findall(r'href="(/[^"#?]*)', main_html)
    internal = [h for h in hrefs if not h.startswith(("/_next", "/og/"))]
    broken = sorted({h for h in internal if h.endswith("/") and not os.path.exists(os.path.join("out", h.strip("/"), "index.html")) and h != "/"})
    add(not broken, f"internal links resolve{': ' + ', '.join(broken) if broken else ''}")
    add(any(h.startswith("/features/") for h in internal), "links up to a feature page")
    add(sum(h.startswith("/use-cases/") and h != f"/use-cases/{slug}/" for h in internal) >= 1, "links to another use-case post", warn_only=True)
    add(any(h.startswith("/guide/") for h in internal), "links to guide articles", warn_only=True)
    if "[" in body and "](" in body:
        add(False, "raw [label](href) markup visible in the page text")

    imgs = re.findall(r"<img\b[^>]*>", page)
    no_alt = [i for i in imgs if not re.search(r'\balt="[^"]', i) and 'aria-hidden="true"' not in i]
    add(not no_alt, f"{len(no_alt)} img without alt text")

    sitemap = os.path.join("out", "sitemap.xml")
    if os.path.exists(sitemap):
        add(f"/use-cases/{slug}/" in open(sitemap, encoding="utf-8").read(), "post is in sitemap.xml")

    for status, msg in results:
        print(f"{status:5} {msg}")
    fails = sum(s == "FAIL" for s, _ in results)
    print(f"\n{fails} FAIL, {sum(s == 'WARN' for s, _ in results)} WARN")
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main())
