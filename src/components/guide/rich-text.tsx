import { Fragment } from "react";

/** Plain text with `**bold**` for the names of buttons, pages and settings. */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-ink">
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

/** The same text with the markers stripped, for alt text, metadata and llms.txt. */
export const plainText = (text: string) => text.replace(/\*\*(.+?)\*\*/g, "$1");
