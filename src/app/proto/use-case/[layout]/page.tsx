import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClosingCta } from "@/components/sections/closing-cta";
import { GlanceRail } from "@/components/use-cases/layouts/glance-rail";
import { LongRead } from "@/components/use-cases/layouts/long-read";
import { TwoPart } from "@/components/use-cases/layouts/two-part";
import { PROTO_LAYOUTS, ProtoSwitcher, type ProtoLayout } from "@/components/use-cases/proto-switcher";
import { POSTS } from "@/content/use-cases";

/**
 * The pilot use-case post in three layouts, to compare side by side.
 * Not linked, not in the sitemap, and deleted once a layout is chosen.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return PROTO_LAYOUTS.map((layout) => ({ layout: layout.key }));
}

export const metadata: Metadata = {
  title: "Use-case layout prototypes",
  robots: { index: false, follow: false },
};

const LAYOUTS = { a: LongRead, b: TwoPart, c: GlanceRail };

export default async function ProtoUseCasePage({ params }: PageProps<"/proto/use-case/[layout]">) {
  const { layout } = await params;
  const post = POSTS[0];
  if (!post || !(layout in LAYOUTS)) notFound();
  const Layout = LAYOUTS[layout as ProtoLayout];

  return (
    <>
      <Layout post={post} />
      <ClosingCta />
      <ProtoSwitcher current={layout as ProtoLayout} />
    </>
  );
}
