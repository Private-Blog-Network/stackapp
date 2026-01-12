import { NextResponse } from "next/server";

/* ===============================
   BOT FILTER MIDDLEWARE (JS)
================================ */

export function middleware(req) {
  const ua = (req.headers.get("user-agent") || "").toLowerCase();

  /* ---- ALLOWED SEO / ADS BOTS ---- */
  const ALLOWED_BOTS = [
    "googlebot",
    "adsbot-google",
    "mediapartners-google",
    "bingbot",
    "duckduckbot",
    "yandex",
    "baiduspider",
    "applebot",
    "facebookexternalhit",
    "twitterbot",
    "linkedinbot",
    "whatsapp",
    "telegrambot"
  ];

  /* ---- BLOCKED SCRAPERS / FAKE BOTS ---- */
  const BLOCKED_BOTS = [
    "ahrefs",
    "semrush",
    "mj12bot",
    "dotbot",
    "bytespider",
    "seznambot",
    "petalbot",
    "crawler",
    "spider",
    "scrape",
    "headless",
    "phantom",
    "puppeteer",
    "playwright",
    "selenium",
    "node-fetch",
    "axios",
    "curl",
    "wget",
    "python",
    "java"
  ];

  /* ---- ALLOW GOOD BOTS ---- */
  if (ALLOWED_BOTS.some(b => ua.includes(b))) {
    return NextResponse.next();
  }

  /* ---- BLOCK BAD BOTS ---- */
  if (BLOCKED_BOTS.some(b => ua.includes(b))) {
    return new NextResponse("Forbidden", {
      status: 403,
      headers: {
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow"
      }
    });
  }

  return NextResponse.next();
}

/* ===============================
   APPLY ROUTES
================================ */

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
