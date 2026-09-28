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
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-4 lg:px-6">
      <div className="relative z-0 mx-auto flex h-16 w-full max-w-[76rem] items-center gap-6 rounded-full pr-2.5 pl-5 sm:pl-6">
        {/*
          The pill's frost lives on its own layer. An element with a backdrop
          blur only lets its children blur what's inside it, so if the pill
          itself were frosted, the Features menu couldn't blur the page.
        */}
        <span aria-hidden="true" className="glass-thin absolute inset-0 -z-10 rounded-full" />
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
                "inline-flex h-10 items-center gap-1 rounded-full px-3.5 font-medium hover:bg-white/60",
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
                className="glass absolute top-14 left-0 w-[34rem] rounded-[1.75rem] bg-white/70 p-2"
              >
                <ul className="grid gap-0.5">
                  {featureNav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={pathname === item.href ? "page" : undefined}
                        className="block rounded-[1.25rem] px-4 py-3 hover:bg-white/70 aria-[current=page]:bg-white/70"
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
              className="inline-flex h-10 items-center rounded-full px-3.5 font-medium hover:bg-white/60 aria-[current=page]:underline aria-[current=page]:decoration-signal aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-[6px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={siteConfig.installUrl}
            className="hidden h-11 items-center rounded-full bg-ink px-5 font-semibold text-paper shadow-[inset_0_1px_0_rgb(191_227_255/0.25)] hover:bg-ink/90 sm:inline-flex"
          >
            Install on Shopify
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full hover:bg-white/60 md:hidden"
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
          className="glass mx-auto mt-2 max-h-[calc(100dvh-6rem)] max-w-[76rem] overflow-y-auto rounded-[1.75rem] bg-white/70 px-3 pt-3 pb-4 md:hidden"
        >
          <p className="px-3 pt-2 pb-1 text-[0.9375rem] text-ink-soft">Features</p>
          <ul>
            {featureNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block rounded-[1.25rem] px-3 py-3 text-lg font-semibold hover:bg-white/70">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-2 border-t border-ink/10 pt-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block rounded-[1.25rem] px-3 py-3 text-lg font-semibold hover:bg-white/70">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={siteConfig.installUrl}
            className="mt-4 flex h-12 items-center justify-center rounded-full bg-signal font-semibold text-ink shadow-[inset_0_1px_0_rgb(255_255_255/0.5)]"
          >
            Install on Shopify
          </a>
        </nav>
      ) : null}
    </header>
  );
}
