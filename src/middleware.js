import { NextResponse } from "next/server";

/* ================== BAD BOT USER-AGENTS ================== */
/* If UA contains ANY of these → BLOCK */

const BAD_BOTS = [
  /* CLI / Download tools */
  "curl",
  "wget",
  "httpie",
  "fetch",
  "powershell",
  "restsharp",
  "aria2",
  "uget",
  "axel",
  "httpclient",
  "lwp",
  "libwww",
  "mechanize",

  /* Programming languages / libs */
  "python",
  "python-requests",
  "urllib",
  "urllib3",
  "aiohttp",
  "scrapy",
  "beautifulsoup",
  "bs4",
  "cheerio",
  "node-fetch",
  "axios",
  "undici",
  "got",
  "superagent",
  "request",
  "java",
  "okhttp",
  "apache-httpclient",
  "go-http-client",
  "resty",
  "fasthttp",
  "ruby",
  "faraday",
  "httparty",
  "php",
  "guzzle",
  "symfony",
  "curlphp",

  /* Headless / automation */
  "headless",
  "headlesschrome",
  "phantomjs",
  "slimerjs",
  "nightmare",
  "casperjs",
  "selenium",
  "webdriver",
  "playwright",
  "puppeteer",
  "chromium",
  "electron",

  /* Scanners / security tools */
  "nikto",
  "sqlmap",
  "nmap",
  "masscan",
  "zmap",
  "zgrab",
  "wpscan",
  "joomscan",
  "droopescan",
  "dirbuster",
  "dirb",
  "gobuster",
  "ffuf",
  "wfuzz",
  "whatweb",
  "acunetix",
  "netsparker",
  "burpsuite",
  "owasp",
  "arachni",
  "openvas",
  "nessus",
  "qualys",
  "appscan",
  "vega",

  /* Mirroring / archiving */
  "httrack",
  "teleport",
  "webcopier",
  "sitegrabber",
  "offlineexplorer",
  "archive.org_bot",
  "ia_archiver",

  /* API / testing */
  "postman",
  "postmanruntime",
  "insomnia",
  "paw",
  "hoppscotch",
  "swagger",
  "soapui",
  "katalon",
  "jmeter",

  /* SEO / data scrapers */
  "ahrefs",
  "semrush",
  "mj12bot",
  "dotbot",
  "seokicks",
  "sistrix",
  "serpstat",
  "linkdex",
  "rogerbot",
  "linkpadbot",
  "buzzsumo",
  "majestic",

  /* AI / dataset crawlers */
  "openai",
  "chatgpt",
  "gptbot",
  "claudebot",
  "anthropic",
  "bytespider",
  "ccbot",
  "commoncrawl",
  "applebot",
  "petalbot",
  "tencenttraveler",

  /* Generic bot keywords */
  "bot",
  "crawler",
  "spider",
  "scraper",
  "scanner",
  "monitor",
  "checker",
  "fetcher",
  "extractor",
  "parser",
  "harvest",
  "indexer"
];

/* ================== GOOD BOTS ================== */
/* Always allow these */

const GOOD_BOTS = [
  "googlebot",
  "bingbot",
  "duckduckbot",
  "yandex",
  "baiduspider",
  "slurp",
  "facebookexternalhit",
  "twitterbot",
  "linkedinbot",
  "whatsapp",
  "telegrambot",
  "discordbot"
];

/* ================== MIDDLEWARE ================== */
export function middleware(req) {
  const ua = req.headers.get("user-agent")?.toLowerCase() || "";
  const url = req.nextUrl.href;

  /* ---- LOG URL ---- */
  console.log("from md :", url);

  /* ---- Block empty UA ---- */
  if (!ua) {
    return new NextResponse("Blocked: Empty User-Agent", { status: 403 });
  }

  /* ---- Allow good bots ---- */
  if (GOOD_BOTS.some(bot => ua.includes(bot))) {
    return NextResponse.next();
  }

  /* ---- Block bad bots ---- */
  const matched = BAD_BOTS.find(bot => ua.includes(bot));
  if (matched) {
    return new NextResponse(
      `Blocked: Bad bot detected (${matched})`,
      { status: 403 }
    );
  }

  return NextResponse.next();
}

/* ================== APPLY TO ALL PATHS ================== */
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|ad.js).*)"
  ]
};

