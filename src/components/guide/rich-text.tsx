import { Inline, plainInline } from "@/lib/inline";

/**
 * Plain text with `**bold**` for the names of buttons, pages and settings,
 * and `[label](/path/)` for a link. The same markup as use-case posts.
 */
export function RichText({ text }: { text: string }) {
  return <Inline text={text} />;
}

/** The same text with the markup stripped, for alt text, metadata and llms.txt. */
export const plainText = plainInline;
