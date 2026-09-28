"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { featureNav, mainNav, siteConfig } from "@/config/site";
import { Logo } from "./logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const mobileId = useId();

  // Close menus when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setFeaturesOpen(false);
    setMobileOpen(false);
  }

  useEffect(() => {
    if (!featuresOpen) return;
    const onPointer = (event: PointerEvent) => {
      if (!featuresRef.current?.contains(event.target as Node)) setFeaturesOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFeaturesOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [featuresOpen]);

  const inFeatures = pathname.startsWith("/features");

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="mx-auto flex h-16 w-full max-w-[76rem] items-center gap-6 px-4 sm:px-6 lg:px-10">
        <Link href="/" className="shrink-0 rounded-md" aria-label="Waitly home">
          <Logo className="h-8" />
        </Link>

        <nav aria-label="Main" className="ml-4 hidden items-center gap-1 md:flex">
          <div ref={featuresRef} className="relative">
            <button
              type="button"
              aria-expanded={featuresOpen}
              aria-controls={panelId}
              onClick={() => setFeaturesOpen((open) => !open)}
              className={cn(
                "inline-flex h-10 items-center gap-1 rounded-full px-3.5 font-medium hover:bg-mist",
                inFeatures && "text-ink underline decoration-signal decoration-2 underline-offset-[6px]",
              )}
            >
              Features
              <ChevronDown
                aria-hidden="true"
                className={cn("size-4 transition-transform", featuresOpen && "rotate-180")}
              />
            </button>
            {featuresOpen ? (
              <div
                id={panelId}
                className="absolute top-12 left-0 w-[34rem] rounded-2xl border border-line bg-paper p-2 shadow-[0_18px_40px_-18px_rgba(11,37,69,0.35)]"
              >
                <ul className="grid gap-0.5">
                  {featureNav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={pathname === item.href ? "page" : undefined}
                        className="block rounded-xl px-4 py-3 hover:bg-mist aria-[current=page]:bg-mist"
                      >
                        <span className="block font-semibold">{item.label}</span>
                        <span className="block text-[0.9375rem] text-ink-soft">{item.blurb}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="inline-flex h-10 items-center rounded-full px-3.5 font-medium hover:bg-mist aria-[current=page]:underline aria-[current=page]:decoration-signal aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-[6px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={siteConfig.installUrl}
            className="hidden h-10 items-center rounded-full bg-ink px-5 font-semibold text-paper hover:bg-ink/90 sm:inline-flex"
          >
            Install on Shopify
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full hover:bg-mist md:hidden"
            aria-expanded={mobileOpen}
            aria-controls={mobileId}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          id={mobileId}
          aria-label="Mobile"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-paper px-4 pt-3 pb-6 md:hidden"
        >
          <p className="px-3 pt-2 pb-1 text-[0.9375rem] text-ink-soft">Features</p>
          <ul>
            {featureNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block rounded-xl px-3 py-3 text-lg font-semibold hover:bg-mist">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-2 border-t border-line pt-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block rounded-xl px-3 py-3 text-lg font-semibold hover:bg-mist">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={siteConfig.installUrl}
            className="mt-4 flex h-12 items-center justify-center rounded-full bg-signal font-semibold text-ink"
          >
            Install on Shopify
          </a>
        </nav>
      ) : null}
    </header>
  );
}
