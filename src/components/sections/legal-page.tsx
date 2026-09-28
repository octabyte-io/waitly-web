import Link from "next/link";
import { Container } from "@/components/site/primitives";
import { hasOpenPlaceholders, renderLegal } from "@/lib/legal-markdown";

export function LegalPage({
  file,
  title,
  intro,
  other,
}: {
  file: "privacy" | "dpa";
  title: string;
  intro: string;
  other: { href: string; label: string };
}) {
  const { body, headings } = renderLegal(file);

  return (
    <>
      <section className="pt-10 pb-6 sm:pt-16">
        <Container>
          <h1 className="max-w-4xl text-d2 font-bold tracking-[-0.03em]">{title}</h1>
          <p className="mt-5 max-w-2xl text-lead text-ink/80">{intro}</p>
          {hasOpenPlaceholders ? (
            <p className="mt-8 max-w-2xl rounded-r-[1.25rem] border-l-4 border-signal bg-white/65 px-5 py-4 text-[0.9375rem] ring-1 ring-white/80 backdrop-blur-md">
              This is a pre-publication draft. Highlighted details are still to be filled in, and the
              text has not yet been reviewed by a lawyer.
            </p>
          ) : null}
        </Container>
      </section>
      <Container className="py-6 sm:py-10">
        <div className="glass grid grid-cols-1 gap-12 rounded-[2rem] px-5 py-10 sm:rounded-[2.5rem] sm:px-10 sm:py-14 lg:grid-cols-[15rem_minmax(0,1fr)] lg:px-14">
          <nav aria-label="Sections" className="lg:sticky lg:top-28 lg:self-start">
            <ol className="space-y-1.5 text-[0.9375rem]">
              {headings.map((h) => (
                <li key={h.id}>
                  <a href={`#${h.id}`} className="text-ink-soft hover:text-ink hover:underline underline-offset-4">
                    {h.text}
                  </a>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-[0.9375rem]">
              <Link href={other.href} className="font-semibold underline decoration-signal decoration-2 underline-offset-4">
                {other.label}
              </Link>
            </p>
          </nav>
          <article className="measure text-ink/90 [&>*:first-child]:mt-0">{body}</article>
        </div>
      </Container>
    </>
  );
}
