import Link from "next/link";
import { Fragment, type ReactNode } from "react";

/**
 * The inline markup of a use-case post: `**bold**` and `[label](href)`,
 * nothing else. An href is a site path with a trailing slash (`/pricing/`),
 * or a full `https://` address.
 */
const TOKEN = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

const LINK = "font-semibold underline decoration-signal decoration-2 underline-offset-4";

export function Inline({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(TOKEN)) {
    const [whole, bold, label, href] = match;
    if (match.index > last) nodes.push(<Fragment key={last}>{text.slice(last, match.index)}</Fragment>);
    if (bold !== undefined) {
      nodes.push(
        <strong key={match.index} className="font-semibold text-ink">
          {bold}
        </strong>,
      );
    } else if (href.startsWith("/")) {
      nodes.push(
        <Link key={match.index} href={href} className={LINK}>
          {label}
        </Link>,
      );
    } else {
      nodes.push(
        <a key={match.index} href={href} className={LINK}>
          {label}
        </a>,
      );
    }
    last = match.index + whole.length;
  }
  if (last < text.length) nodes.push(<Fragment key={last}>{text.slice(last)}</Fragment>);
  return <>{nodes}</>;
}

/** The same text with the markup stripped, for metadata, JSON-LD and llms.txt. */
export const plainInline = (text: string) =>
  text.replace(TOKEN, (_whole, bold, label) => bold ?? label);

/** Every href in the text, so a post's links can be checked at build time. */
export const linksIn = (text: string) =>
  [...text.matchAll(TOKEN)].flatMap((match) => (match[3] ? [match[3]] : []));
