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

const BAND_TONES = {
  paper: "bg-paper text-ink",
  mist: "bg-mist text-ink",
  sky: "bg-sky text-ink",
  ink: "on-ink bg-ink text-paper",
} as const;

export type BandTone = keyof typeof BAND_TONES;

/** A full-bleed section. Topics are separated by tone, not by boxes. */
export function Band({
  tone = "paper",
  className,
  children,
  ...props
}: ComponentProps<"section"> & { tone?: BandTone }) {
  return (
    <section
      className={cn("py-20 sm:py-28", BAND_TONES[tone], className)}
      {...props}
    >
      <Container>{children}</Container>
    </section>
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
      <h2 id={id} className="text-d2 font-extrabold tracking-[-0.03em]">
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
    "bg-signal text-ink hover:bg-[#ff814f] shadow-[0_2px_0_0_var(--ink)] active:translate-y-px active:shadow-none",
  secondary:
    "bg-transparent text-current ring-2 ring-current/80 ring-inset hover:bg-current/[0.06]",
  quiet: "bg-ink text-paper hover:bg-ink/90",
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
        level === "growth" ? "bg-sky text-ink" : "bg-ink text-sky",
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
      <h3 className="flex flex-wrap items-center gap-2.5 text-d3 font-bold tracking-[-0.02em]">
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
  tone = "sky",
}: {
  title: ReactNode;
  intro: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
  tone?: BandTone;
}) {
  return (
    <section className={cn("pt-14 pb-20 sm:pt-20 sm:pb-24", BAND_TONES[tone])}>
      <Container
        className={cn(
          "grid items-center gap-12",
          aside ? "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]" : "",
        )}
      >
        <div>
          <h1 className="text-d1 font-extrabold tracking-[-0.045em] [font-stretch:92%]">
            {title}
          </h1>
          <p className="mt-6 max-w-[34rem] text-lead text-current/80">{intro}</p>
          {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
        </div>
        {aside ? <div className="min-w-0">{aside}</div> : null}
      </Container>
    </section>
  );
}
