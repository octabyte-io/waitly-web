import { pages } from "@/config/pages";
import { ogImage } from "@/lib/og-image";
import { ogImageName } from "@/lib/seo";

/**
 * One share card per page, exported as `/og/<page>.png`. A route handler
 * rather than `opengraph-image.tsx` because a static export writes those
 * without a file extension, and GitHub Pages then serves them untyped.
 */
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(pages).map((page) => ({ image: ogImageName(page) }));
}

export async function GET(_request: Request, ctx: RouteContext<"/og/[image]">) {
  const { image } = await ctx.params;
  const page = Object.values(pages).find((entry) => ogImageName(entry) === image);
  if (!page) return new Response("Not found", { status: 404 });
  return ogImage(page);
}
