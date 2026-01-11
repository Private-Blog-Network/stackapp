import { NextResponse } from "next/server";

/* ================= CONFIG ================= */

const BAN_TIME = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 40;        // per IP
const WINDOW_TIME = 60 * 1000;  // 1 minute

/* ================= EDGE-SAFE MEMORY ================= */

const g = globalThis;

if (!g.__ipHits) g.__ipHits = new Map();
if (!g.__bannedIPs) g.__bannedIPs = new Map();

const ipHits = g.__ipHits;
const bannedIPs = g.__bannedIPs;

/* ================= ALLOWLISTS ================= */

/* ---- SEARCH ENGINES ---- */
const GOOD_BOTS = [
  "googlebot",
  "adsbot-google",
  "mediapartners-google",
  "bingbot",
  "msnbot",
  "duckduckbot",
  "mojeekbot",
  "gibiru",
  "baiduspider",
  "sogou",
  "360spider",
  "haosouspider",
  "yandex",
  "mail.ru_bot",
  "sputnikbot",
  "exabot",
  "qwantify",
  "seznambot",
  "seekportbot",
  "najdibot",
  "naverbot",
  "yeti",
  "applebot",
  "petalbot",
  "facebookexternalhit",
  "twitterbot",
  "linkedinbot",
  "whatsapp",
  "telegrambot",
];

/* ---- ADSTERRA / AD VERIFICATION ---- */
const AD_ALLOW = [
  "adsterra",
  "terraads",
  "doubleverify",
  "integralads",
  "ias",
  "moat",
  "scorecardresearch",
  "quantserve",
];

/* ---- DEFINITE BAD ---- */
const DEFINITE_BAD = [
  "curl",
  "wget",
  "httpie",
  "aria2",
  "axel",
  "python-requests",
  "scrapy",
  "aiohttp",
  "beautifulsoup",
  "bs4",
  "cheerio",
  "phantomjs",
  "slimerjs",
  "nightmare",
  "casperjs",
  "selenium",
  "playwright",
  "puppeteer",
  "nikto",
  "sqlmap",
  "nmap",
  "masscan",
  "zmap",
  "gobuster",
  "ffuf",
  "wfuzz",
  "httrack",
  "offlineexplorer",
  "teleport",
  "webcopier",
  "ahrefs",
  "semrush",
  "mj12bot",
  "dotbot",
  "gptbot",
  "openai",
  "chatgpt",
  "ccbot",
  "anthropic",
  "claudebot",
];

/* ================= UTILS ================= */

function ban(ip) {
  bannedIPs.set(ip, Date.now() + BAN_TIME);
}

function isBanned(ip) {
  const until = bannedIPs.get(ip);
  if (!until) return false;
  if (Date.now() > until) {
    bannedIPs.delete(ip);
    return false;
  }
  return true;
}

/* ================= MIDDLEWARE ================= */

export function middleware(req) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    req.ip ||
    "unknown";

  const ua = (req.headers.get("user-agent") || "").toLowerCase();
  const path = req.nextUrl.pathname;
  const now = Date.now();

  /* ---- HARD BAN ---- */
  if (isBanned(ip)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  /* ---- ALLOW ADS ---- */
  if (AD_ALLOW.some(a => ua.includes(a))) {
    return NextResponse.next();
  }

  /* ---- ALLOW GOOD BOTS ---- */
  if (GOOD_BOTS.some(b => ua.includes(b))) {
    return NextResponse.next();
  }

  /* ---- DEFINITE BAD ---- */
  if (DEFINITE_BAD.some(b => ua.includes(b))) {
    ban(ip);
    return new NextResponse("Forbidden", { status: 403 });
  }

  /* ================= RATE LIMIT ================= */

  let hit = ipHits.get(ip);
  if (!hit) hit = { count: 0, time: now };

  hit.count++;

  if (now - hit.time > WINDOW_TIME) {
    hit.count = 1;
    hit.time = now;
  }

  ipHits.set(ip, hit);

  if (hit.count > MAX_REQUESTS) {
    ban(ip);
    return new NextResponse("Too Many Requests", { status: 429 });
  }

  /* ================= SPOOF DETECTION ================= */

  const accept = req.headers.get("accept");
  const lang = req.headers.get("accept-language");
  const encoding = req.headers.get("accept-encoding");
  const cookies = req.headers.get("cookie");

  let suspicion = 0;

  if (!accept) suspicion++;
  if (!lang) suspicion++;
  if (!encoding) suspicion++;

  if (!cookies && path.startsWith("/answer")) suspicion++;
  if (path === "/robots.txt") suspicion += 2;

  if (suspicion >= 4) {
    ban(ip);
    return new NextResponse("Forbidden", { status: 403 });
  }

  return NextResponse.next();
}

/* ================= MATCHER ================= */

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|ads.txt|ad.js).*)",
  ],
};
