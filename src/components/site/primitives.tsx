import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { LEVEL_NAMES, type Level } from "@/content/plans";

export function Container({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[76rem] px-4 sm:px-6 lg:px-10", className)}
      {...props}
    />
  );
}

/**
 * Paper sections sit straight on the window light. The rest are panes of
 * glass: frosted (mist), sky-tinted (sky) or smoked ink (ink).
 */
const PANE_TONES = {
  paper: "",
  mist: "glass text-ink",
  sky: "glass-sky text-ink",
  ink: "on-ink glass-smoke text-paper",
} as const;

export type BandTone = keyof typeof PANE_TONES;

export function Band({
  tone = "paper",
  className,
  children,
  ...props
}: ComponentProps<"section"> & { tone?: BandTone }) {
  const pane = tone !== "paper";
  return (
    <section className={cn(pane ? "py-6 sm:py-10" : "py-16 sm:py-24", className)} {...props}>
      <Container>
        {pane ? (
          <div
            className={cn(
              "rounded-[2rem] px-5 py-12 sm:rounded-[2.5rem] sm:px-10 sm:py-16 lg:px-14",
              PANE_TONES[tone],
            )}
          >
            {children}
          </div>
        ) : (
          children
        )}
      </Container>
    </section>
  );
}

/**
 * A glass bezel around something that stays solid, like a merchant's product
 * page or email: the thing itself, shown behind the shop window.
 */
export function Bezel({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("glass rounded-[1.75rem] p-2 sm:p-2.5", className)}>{children}</div>
  );
}

export function SectionHeading({
  title,
  intro,
  id,
  className,
}: {
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <h2 id={id} className="text-d2 font-bold tracking-[-0.025em]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-lead text-current/75 measure">{intro}</p>
      ) : null}
    </div>
  );
}

const CTA_STYLES = {
  primary:
    "bg-signal text-ink shadow-[inset_0_1px_0_rgb(255_255_255/0.5),0_12px_28px_-12px_rgb(255_107_53/0.85)] hover:bg-[#ff814f] active:translate-y-px",
  secondary:
    "bg-white/60 text-ink ring-1 ring-white/90 ring-inset shadow-[0_8px_20px_-12px_rgb(11_37_69/0.35)] backdrop-blur-md hover:bg-white/85 in-[.on-ink]:bg-white/10 in-[.on-ink]:text-paper in-[.on-ink]:ring-white/25 in-[.on-ink]:shadow-none in-[.on-ink]:hover:bg-white/20",
  quiet:
    "bg-ink text-paper shadow-[inset_0_1px_0_rgb(191_227_255/0.25),0_12px_28px_-14px_rgb(11_37_69/0.8)] hover:bg-ink/90",
} as const;

export function CtaLink({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof CTA_STYLES;
  className?: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const classes = cn(
    "inline-flex h-12 items-center justify-center rounded-full px-6 text-[1rem] font-semibold transition-colors",
    CTA_STYLES[variant],
    className,
  );
  return external ? (
    <a href={href} className={classes}>
      {children}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function InstallLink({
  className,
  variant = "primary",
  children = "Install on Shopify",
}: {
  className?: string;
  variant?: keyof typeof CTA_STYLES;
  children?: ReactNode;
}) {
  return (
    <CtaLink href={siteConfig.installUrl} variant={variant} className={className}>
      {children}
    </CtaLink>
  );
}

/** Marks a feature that needs a paid plan. Free features carry no badge. */
export function PlanBadge({ level, className }: { level: Level; className?: string }) {
  if (level === "free") return null;
  return (
    <span
      className={cn(
        "inline-flex h-6 shrink-0 items-center rounded-full px-2.5 align-middle text-[0.8125rem] font-semibold",
        level === "growth" ? "bg-sky text-ink ring-1 ring-ink/15 ring-inset" : "bg-ink text-sky ring-1 ring-sky/30 ring-inset",
        className,
      )}
    >
      {LEVEL_NAMES[level]}
    </span>
  );
}

export type Setting = {
  name: string;
  detail: ReactNode;
  value?: string;
  level?: Level;
};

/**
 * The real setting names from the Waitly admin, with what they do and their
 * default or range. This is where the site explains features in full.
 */
export function SettingList({
  settings,
  className,
}: {
  settings: Setting[];
  className?: string;
}) {
  return (
    <dl className={cn("divide-y divide-current/15 border-y border-current/15", className)}>
      {settings.map((setting) => (
        <div
          key={setting.name}
          className="grid grid-cols-1 gap-x-8 gap-y-1.5 py-5 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]"
        >
          <dt className="flex flex-wrap items-center gap-2 font-semibold">
            {setting.name}
            {setting.level ? <PlanBadge level={setting.level} /> : null}
          </dt>
          <dd className="text-current/80">
            {setting.detail}
            {setting.value ? (
              <span className="mt-1.5 block text-[0.9375rem] tnum text-current/65">
                {setting.value}
              </span>
            ) : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** A plain two-column prose block: a short heading on the left, words on the right. */
export function Explainer({
  title,
  level,
  children,
  className,
}: {
  title: ReactNode;
  level?: Level;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-12 gap-y-3 border-t border-current/15 pt-8 md:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]",
        className,
      )}
    >
      <h3 className="flex flex-wrap items-center gap-2.5 text-d3 font-semibold tracking-[-0.02em]">
        {title}
        {level ? <PlanBadge level={level} /> : null}
      </h3>
      <div className="space-y-4 text-current/80 measure">{children}</div>
    </div>
  );
}

/** A visible stand-in for legal details that have not been filled in yet. */
export function Placeholder({ value, label }: { value: string | null; label: string }) {
  if (value) return <>{value}</>;
  return (
    <mark className="rounded bg-signal/25 px-1 font-semibold text-ink">[{label}]</mark>
  );
}

export function PageHero({
  title,
  intro,
  children,
  aside,
}: {
  title: ReactNode;
  intro: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="pt-10 pb-10 sm:pt-16 sm:pb-16">
      <Container
        className={cn(
          "grid items-center gap-12",
          aside ? "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]" : "",
        )}
      >
        <div>
          <h1 className="text-d1 font-bold tracking-[-0.03em]">{title}</h1>
          <p className="mt-6 max-w-[34rem] text-lead text-ink/80">{intro}</p>
          {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
        </div>
        {aside ? <div className="min-w-0">{aside}</div> : null}
      </Container>
    </section>
  );
}
