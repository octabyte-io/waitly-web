import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { PageEntry } from "@/config/pages";
import { siteConfig } from "@/config/site";

/**
 * The share card for a page: the window light, the logo and the page's
 * headline. Rendered once per page at build time by `app/og/[image]/route.tsx`.
 */
export const ogSize = { width: 1200, height: 630 };

const asset = (...path: string[]) => readFile(join(process.cwd(), ...path));

export async function ogImage(page: PageEntry) {
  const [bold, medium, logo] = await Promise.all([
    asset("src/assets/fonts/MonaSans-Bold-SemiExpanded.ttf"),
    asset("src/assets/fonts/MonaSans-Medium.ttf"),
    asset("public/brand/waitly-logo.svg"),
  ]);
  const isHome = page.path === "/";
  const headline = page.headline ?? page.title;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          color: "#0b2545",
          fontFamily: "Mona Sans",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- rendered by ImageResponse, not the browser */}
        <img src={WINDOW_LIGHT} width={ogSize.width} height={ogSize.height} alt="" style={{ position: "absolute" }} />
        <div
          style={{
            position: "absolute",
            top: 48,
            right: 48,
            bottom: 48,
            left: 48,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 64px",
            borderRadius: 40,
            background: "rgba(255, 255, 255, 0.55)",
            border: "2px solid rgba(255, 255, 255, 0.9)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- rendered by ImageResponse, not the browser */}
          <img
            src={`data:image/svg+xml;base64,${logo.toString("base64")}`}
            width={221}
            height={70}
            alt=""
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {isHome ? null : (
              <div style={{ fontSize: 30, fontWeight: 500, color: "#48617e" }}>{page.title}</div>
            )}
            <div
              style={{
                fontSize: headline.length > 44 ? 62 : 72,
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                maxWidth: 960,
              }}
            >
              {headline}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 26,
              fontWeight: 500,
              color: "#48617e",
            }}
          >
            <span>Back in stock alerts and preorders for Shopify</span>
            <span>{new URL(siteConfig.url).host}</span>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Mona Sans", data: bold, weight: 700, style: "normal" },
        { name: "Mona Sans", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}

/** The site's window light: soft blurred circles behind the glass. */
const WINDOW_LIGHT = `data:image/svg+xml;base64,${Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${ogSize.width}" height="${ogSize.height}">
    <defs><filter id="b" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="70"/></filter></defs>
    <rect width="100%" height="100%" fill="#eaf5ff"/>
    <g filter="url(#b)">
      <circle cx="120" cy="60" r="330" fill="#bfe3ff"/>
      <circle cx="1120" cy="220" r="240" fill="#c9d3ff"/>
      <circle cx="1130" cy="640" r="200" fill="#ffc7ad"/>
      <circle cx="140" cy="660" r="180" fill="#bfe3ff"/>
    </g>
  </svg>`,
).toString("base64")}`;
