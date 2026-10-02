import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, PlanBadge } from "@/components/site/primitives";
import { ClosingCta } from "@/components/sections/closing-cta";
import { pages } from "@/config/pages";
import { POSTS, postPath } from "@/content/use-cases";
import { JsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(pages.useCases);

export default function UseCasesPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(pages.useCases, "CollectionPage")} />
      <section className="pt-10 pb-20 sm:pt-16">
        <Container>
          <h1 className="max-w-4xl text-d1 font-bold tracking-[-0.03em]">
            What to do when a product isn’t available
          </h1>
          <p className="mt-6 max-w-[40rem] text-lead text-ink/80">
            Sold out, on its way, running late. Each of these answers the question for any Shopify
            store first, with or without an app, and then shows how Waitly handles it.
          </p>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {POSTS.map((post) => (
              <li key={post.slug}>
                <Link
                  href={postPath(post.slug)}
                  className="group flex h-full flex-col glass rounded-[1.75rem] p-6 transition-colors hover:bg-white/70 sm:p-7"
                >
                  <h2 className="text-d3 font-bold tracking-[-0.02em] group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-ink/80">{post.summary}</p>
                  <p className="mt-auto flex items-center justify-between gap-3 pt-6 text-[0.9375rem] text-ink-soft">
                    <span className="flex items-center gap-2">
                      <PlanBadge level={post.level} />
                      {post.level === "free" ? "Works on the Free plan" : null}
                    </span>
                    <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <ClosingCta />
    </>
  );
}
