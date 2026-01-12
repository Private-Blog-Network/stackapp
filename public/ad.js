/* =====================================================
   HUMAN-ONLY SEO-SAFE AD LOADER (SINGLE FUNCTION)
===================================================== */

function loadAll() {
  /* ---------- BOT EXIT ---------- */
  const ua = navigator.userAgent.toLowerCase();
  const bots = [
    "googlebot","adsbot-google","mediapartners-google",
    "bingbot","duckduckbot","baiduspider","yandex",
    "applebot","petalbot","facebookexternalhit",
    "twitterbot","linkedinbot","whatsapp","telegrambot",
    "bot","crawler","spider","scrape","headless",
    "phantom","puppeteer","playwright","selenium",
    "curl","wget"
  ];
  if (bots.some(b => ua.includes(b))) return;

  /* ---------- RUN ONLY ONCE ---------- */
  if (window.__adsLoaded) return;
  window.__adsLoaded = true;

  /* ---------- HELPERS ---------- */
  const delay = ms => new Promise(r => setTimeout(r, ms));

  function inject(containerSelector, options, src) {
    return new Promise(resolve => {
      const box = document.querySelector(containerSelector);
      if (!box || box.dataset.loaded) return resolve();
      box.dataset.loaded = "1";

      const s1 = document.createElement("script");
      s1.innerHTML = `atOptions = ${JSON.stringify(options)};`;

      const s2 = document.createElement("script");
      s2.src = src;
      s2.async = true;
      s2.onload = resolve;
      s2.onerror = resolve;

      box.appendChild(s1);
      box.appendChild(s2);
    });
  }

  /* ---------- SEQUENTIAL ADS ---------- */
  (async () => {
    await delay(1000);
    await inject(".ad1",
      { key:"286dc2d72d046f16b7c43cfa6ee77ccc", format:"iframe", height:250, width:300, params:{} },
      "https://www.highperformanceformat.com/286dc2d72d046f16b7c43cfa6ee77ccc/invoke.js"
    );

    await delay(1000);
    await inject(".ad2",
      { key:"02034458a3beeb36c2a9ce06e28f6641", format:"iframe", height:60, width:468, params:{} },
      "https://www.highperformanceformat.com/02034458a3beeb36c2a9ce06e28f6641/invoke.js"
    );

    await delay(1000);
    await inject(".ad3",
      { key:"bb7e3041fbe20d7620164eb20a6c46ec", format:"iframe", height:300, width:160, params:{} },
      "https://www.highperformanceformat.com/bb7e3041fbe20d7620164eb20a6c46ec/invoke.js"
    );

    await delay(1000);
    await inject(".ad4",
      { key:"77c8895075b148ec327619ee2e12568c", format:"iframe", height:50, width:320, params:{} },
      "https://www.highperformanceformat.com/77c8895075b148ec327619ee2e12568c/invoke.js"
    );
  })();

  /* ---------- POPUNDER (ONCE PER SESSION) ---------- */
  if (!sessionStorage.getItem("pu")) {
    sessionStorage.setItem("pu","1");
    const pu = document.createElement("script");
    pu.src = "https://pl28462449.effectivegatecpm.com/22/80/72/228072177ff19884e455f289fa6a6b8a.js";
    pu.async = true;
    document.body.appendChild(pu);
  }

  /* ---------- SOCIAL BAR (IDLE LOAD) ---------- */
  if (!sessionStorage.getItem("sb")) {
    sessionStorage.setItem("sb","1");
    const sb = document.createElement("script");
    sb.src = "https://pl21579289.effectivegatecpm.com/91/e0/cb/91e0cbf8ea08300e22465980db367b13.js";
    sb.async = true;

    ("requestIdleCallback" in window)
      ? requestIdleCallback(() => document.body.appendChild(sb), { timeout: 4000 })
      : setTimeout(() => document.body.appendChild(sb), 4000);
  }
}
