import { pages } from "@/config/pages";
import { guideEntries } from "@/content/guide";
import { useCaseEntries } from "@/content/use-cases";
import { ogImage } from "@/lib/og-image";
import { ogImageName } from "@/lib/seo";

/**
 * One share card per page, exported as `/og/<page>.png`. A route handler
 * rather than `opengraph-image.tsx` because a static export writes those
 * without a file extension, and GitHub Pages then serves them untyped.
 */
export const dynamic = "force-static";
export const dynamicParams = false;

const entries = [...Object.values(pages), ...guideEntries, ...useCaseEntries];

const names = entries.map(ogImageName);
const repeated = names.filter((name, i) => names.indexOf(name) !== i);
if (repeated.length) {
  throw new Error(`Two pages share a share-card name: ${repeated.join(", ")}. Give one an ogName.`);
}

export function generateStaticParams() {
  return entries.map((page) => ({ image: ogImageName(page) }));
}

export async function GET(_request: Request, ctx: RouteContext<"/og/[image]">) {
  const { image } = await ctx.params;
  const page = entries.find((entry) => ogImageName(entry) === image);
  if (!page) return new Response("Not found", { status: 404 });
  return ogImage(page);
}
