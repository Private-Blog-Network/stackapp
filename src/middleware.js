import { NextResponse } from "next/server";

/* ===============================
   BOT FILTER MIDDLEWARE (SAFE)
================================ */

export function middleware(req) {
  const h = req.headers;
  const ua = (h.get("user-agent") || "").toLowerCase();

  /* ---- ALLOWED GOOD BOTS (NEVER BLOCK) ---- */
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

  /* ---- IMMEDIATE ALLOW FOR GOOD BOTS ---- */
  if (ALLOWED_BOTS.some(b => ua.includes(b))) {
    return NextResponse.next();
  }

  /* ---- HARD BLOCKED SCRAPERS ---- */
  const HARD_BLOCK = [
    "ahrefs",
    "semrush",
    "mj12bot",
    "dotbot",
    "bytespider",
    "seznambot",
    "petalbot"
  ];

  if (HARD_BLOCK.some(b => ua.includes(b))) {
    return block();
  }

  /* ---- NON-BROWSER / SCRIPTED TOOLS ---- */
  const SCRIPT_TOOLS = [
    "curl",
    "wget",
    "python",
    "java",
    "node-fetch",
    "axios"
  ];

  if (SCRIPT_TOOLS.some(b => ua.includes(b))) {
    return block();
  }

  /* ---- HEADLESS / AUTOMATION ---- */
  const HEADLESS = [
    "headless",
    "phantom",
    "puppeteer",
    "playwright",
    "selenium"
  ];

  if (HEADLESS.some(b => ua.includes(b))) {
    return block();
  }

  /* ---- FAKE BROWSER DETECTION ---- */
  const looksLikeChrome =
    ua.includes("chrome") && !ua.includes("edg");

  const hasClientHints = h.get("sec-ch-ua");
  const hasLang = h.get("accept-language");
  const hasEncoding = h.get("accept-encoding");

  // Chrome UA but missing browser headers = fake
  if (looksLikeChrome && (!hasClientHints || !hasLang || !hasEncoding)) {
    return block();
  }

  return NextResponse.next();
}

/* ===============================
   BLOCK RESPONSE
================================ */
function block() {
  return new NextResponse("Forbidden", {
    status: 403,
    headers: {
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow"
    }
  });
}

/* ===============================
   APPLY ROUTES
================================ */

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|ad.js).*)",
  ],
};
