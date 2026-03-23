(async function () {
  // Version + maxim injection
  try {
    const res = await fetch("../data/version.json", { cache: "no-store" });
    const v = await res.json();
    document.querySelectorAll("[data-version]").forEach(el => {
      el.textContent = `${v.codename} ${v.version}`;
      el.title = `Published: ${v.published} • Authority: ${v.authority}`;
    });
    const lab = document.querySelector("[data-maxim-label]");
    const txt = document.querySelector("[data-maxim-text]");
    if (lab) lab.textContent = v.maxim_label || "Aegis Foundational Maxim";
    if (txt) txt.textContent = v.maxim_text || "Capability without constraint is not intelligence";
  } catch (e) {}

  // Active nav
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("nav a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  // Render markdown into page
  const host = document.querySelector("[data-md]");
  if (!host) return;
  const mdPath = host.getAttribute("data-md");
  const mdTarget = document.getElementById("doc");
  const tocTarget = document.getElementById("toc");

  // Load markdown-it + footnote plugin (CDN), then render
  function loadScript(src){
    return new Promise((resolve,reject)=>{
      const s=document.createElement("script");
      s.src=src; s.async=true;
      s.onload=()=>resolve();
      s.onerror=()=>reject(new Error("Failed to load "+src));
      document.head.appendChild(s);
    });
  }

  // Ensure libraries loaded
  try{
    if (!window.markdownit) {
      await loadScript("https://unpkg.com/markdown-it@14.1.0/dist/markdown-it.min.js");
    }
    if (!window.markdownitFootnote) {
      await loadScript("https://unpkg.com/markdown-it-footnote@4.0.0/dist/markdown-it-footnote.min.js");
    }
  } catch(e){
    mdTarget.innerHTML = "<p>Failed to load markdown renderer. Please check internet access for CDN libraries.</p>";
    return;
  }

  const md = window.markdownit({
    html: false,
    linkify: true,
    typographer: true
  }).use(window.markdownitFootnote);

  let raw = "";
  try {
    const res = await fetch(mdPath, { cache: "no-store" });
    raw = await res.text();
  } catch (e) {
    mdTarget.innerHTML = "<p>Failed to load canonical markdown.</p>";
    return;
  }

  // Render
  const html = md.render(raw);
  mdTarget.innerHTML = html;

  // Add IDs to headings (for TOC)
  const headings = mdTarget.querySelectorAll("h1, h2, h3");
  const used = new Map();
  function slugify(t){
    return t.toLowerCase()
      .replace(/[^a-z0-9\s-]/g,"")
      .trim()
      .replace(/\s+/g,"-")
      .replace(/-+/g,"-");
  }
  headings.forEach(h => {
    const base = slugify(h.textContent || "section");
    let id = base;
    let n = used.get(base) || 0;
    if (n) id = `${base}-${n+1}`;
    used.set(base, n+1);
    h.id = id;
  });

  // Build TOC from h2/h3 primarily
  const items = [];
  headings.forEach(h => {
    const tag = h.tagName.toLowerCase();
    if (tag === "h2" || tag === "h3") {
      items.push({ id: h.id, text: h.textContent || "", level: tag });
    }
  });
  tocTarget.innerHTML = items.map(it => {
    const indent = it.level === "h3" ? " style=\"margin-left:10px;\"" : "";
    return `<li><a${indent} href="#${it.id}">${it.text}</a></li>`;
  }).join("");

  // Scroll spy
  const tocLinks = Array.from(tocTarget.querySelectorAll("a"));
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        tocLinks.forEach(a => a.classList.remove("toc-active"));
        const match = tocLinks.find(a => a.getAttribute("href") === "#"+en.target.id);
        if (match) match.classList.add("toc-active");
      }
    });
  }, { rootMargin: "-20% 0px -70% 0px", threshold: 0.01 });

  headings.forEach(h => {
    if (h.tagName.toLowerCase() === "h2" || h.tagName.toLowerCase() === "h3") obs.observe(h);
  });
})();

// Deprecation banner for aegissystems.app (v0.1.1-locked)
(function() {
  var banner = document.createElement('div');
  banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:9999;background:#92400e;color:#fef3c7;text-align:center;padding:10px 16px;font-family:system-ui,sans-serif;font-size:14px;line-height:1.4;box-shadow:0 2px 8px rgba(0,0,0,0.3);';
  banner.innerHTML = 'You are viewing <strong>AEGIS Constitution v0.1.1</strong> (archived). The current version is available at <a href="https://aegis-constitution.com" style="color:#fde68a;text-decoration:underline;font-weight:600;">aegis-constitution.com</a>';
  document.body.insertBefore(banner, document.body.firstChild);
  document.body.style.paddingTop = (banner.offsetHeight) + 'px';
})();
