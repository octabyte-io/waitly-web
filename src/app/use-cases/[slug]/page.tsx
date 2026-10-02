import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClosingCta } from "@/components/sections/closing-cta";
import { PostLayout } from "@/components/use-cases/post-layout";
import { pages } from "@/config/pages";
import { POSTS, entryFor, postBySlug, type UseCasePost } from "@/content/use-cases";
import { plainInline } from "@/lib/inline";
import { JsonLd, articleJsonLd, faqJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

const datesOf = (post: UseCasePost) => ({
  published: post.published,
  modified: post.updated ?? post.published,
});

export async function generateMetadata({ params }: PageProps<"/use-cases/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();
  return pageMetadata(entryFor(slug), datesOf(post));
}

export default async function UseCasePostPage({ params }: PageProps<"/use-cases/[slug]">) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const entry = entryFor(slug);
  const faqs = post.faqs.map((faq) => ({ q: faq.q, a: plainInline(faq.a) }));

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(entry, "WebPage", [pages.useCases]),
          articleJsonLd(entry, post.title, datesOf(post)),
          ...(faqs.length ? [faqJsonLd(entry, faqs)] : []),
        ]}
      />
      <PostLayout post={post} />
      <ClosingCta />
    </>
  );
}
