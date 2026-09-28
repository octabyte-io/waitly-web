import { Container, CtaLink, InstallLink } from "@/components/site/primitives";
import { Dot } from "@/components/demos/dot-queue";

export function ClosingCta({
  title = "Put a Notify me button on your sold-out products today.",
  intro = "Start on the free plan. It takes two steps and no code, and every sold-out variant starts collecting demand straight away.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="py-6 sm:py-10">
      <Container>
        <div className="on-ink glass-smoke relative isolate overflow-hidden rounded-[2rem] px-5 py-14 text-paper sm:rounded-[2.5rem] sm:px-10 sm:py-20 lg:px-14">
          {/* The restock light, behind the one shopper about to hear back. */}
          <span
            aria-hidden="true"
            className="absolute -right-24 -bottom-40 -z-10 size-[34rem] rounded-full bg-[radial-gradient(closest-side,rgb(255_107_53/0.55),transparent)]"
          />
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div className="max-w-2xl">
              <h2 className="text-d2 font-bold tracking-[-0.025em]">{title}</h2>
              <p className="mt-5 text-lead text-paper/80">{intro}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <InstallLink />
                <CtaLink href="/pricing/" variant="secondary">
                  Compare plans
                </CtaLink>
              </div>
            </div>
            <div aria-hidden="true" className="hidden grid-cols-6 gap-2.5 lg:grid">
              {Array.from({ length: 24 }, (_, i) => (
                <Dot
                  key={i}
                  state={i === 9 ? "bought" : "waiting"}
                  className={i === 9 ? "size-5 shadow-[0_0_24px_4px_rgb(255_107_53/0.7)]" : "size-5 bg-paper/25"}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
