import { Container, CtaLink } from "@/components/site/primitives";
import { DotQueue } from "@/components/demos/dot-queue";

export default function NotFound() {
  return (
    <section className="bg-sky py-24 sm:py-32">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div>
          <h1 className="text-d1 font-extrabold tracking-[-0.045em] [font-stretch:92%]">
            This page is out of stock
          </h1>
          <p className="mt-6 max-w-xl text-lead text-ink/80">
            The link may be old, or the page may have moved. Start again from the home page, or see
            what Waitly does for sold-out products.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <CtaLink href="/" variant="quiet">
              Go to the home page
            </CtaLink>
            <CtaLink href="/features/back-in-stock/" variant="secondary">
              Back in stock alerts
            </CtaLink>
          </div>
        </div>
        <DotQueue
          states={Array.from({ length: 24 }, (_, i) => (i === 13 ? "missed" : "waiting"))}
          columns={6}
          label="A line of waiting dots with one empty place"
          className="hidden gap-3 lg:grid"
        />
      </Container>
    </section>
  );
}
