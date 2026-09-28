import { Band, CtaLink, InstallLink } from "@/components/site/primitives";
import { Dot } from "@/components/demos/dot-queue";

export function ClosingCta({
  title = "Put a Notify me button on your sold-out products today.",
  intro = "Start on the free plan. It takes two steps and no code, and every sold-out variant starts collecting demand straight away.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <Band tone="ink" className="overflow-hidden">
      <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
        <div className="max-w-2xl">
          <h2 className="text-d2 font-extrabold tracking-[-0.03em]">{title}</h2>
          <p className="mt-5 text-lead text-paper/80">{intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <InstallLink />
            <CtaLink href="/pricing/" variant="secondary">
              Compare plans
            </CtaLink>
          </div>
        </div>
        {/* The line, with one shopper about to hear back. */}
        <div aria-hidden="true" className="hidden grid-cols-6 gap-2.5 lg:grid">
          {Array.from({ length: 24 }, (_, i) => (
            <Dot
              key={i}
              state={i === 9 ? "bought" : "waiting"}
              className={i === 9 ? "size-5" : "size-5 bg-paper/25"}
            />
          ))}
        </div>
      </div>
    </Band>
  );
}
