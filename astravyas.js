(function refineAstraVyas() {
  "use strict";

  const phone = "8839961889";
  const whatsappNumber = `91${phone}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const callUrl = `tel:+91${phone}`;

  const copy = {
    en: {
      nav: {
        "#overview": "Home",
        "#services": "Services",
        "#gemstones": "Gemstones",
        "#rudraksha": "Rudraksha",
        "#consultation": "Consultation",
        "#testimonials": "Testimonials",
        "#faq": "FAQ",
        "#contact": "Contact"
      },
      status: "Vyas legacy field active.",
      heroEyebrow: "Vyas Legacy Astrology",
      heroTitleA: "Astra Vyas",
      heroTitleB: "Vedic clarity carried through lineage.",
      heroText: "Guidance by Raghvendra Kumar Vyas, carrying forward the values of Shri Jamnalal Vyas Jyotirvigyan Kendra with a calm, ethical and personal consultation approach.",
      primary: "Book Consultation",
      secondary: "WhatsApp Now",
      servicesTitle: "Focused Vedic guidance for important life decisions.",
      gemsTitle: "Gemstones selected with chart-based care.",
      rudrakshaTitle: "Sacred remedies guided by tradition, not fear.",
      consultationTitle: "A private consultation built around your real question.",
      processTitle: "From question to clarity.",
      knowledgeTitle: "About Astra Vyas",
      knowledgeText: "Astra Vyas is rooted in the legacy of Shri Jamnalal Vyas Jyotirvigyan Kendra. Raghvendra Kumar Vyas continues this tradition with personal analysis, respectful guidance and a modern digital experience.",
      testimonialsTitle: "Trust built through clear, personal guidance.",
      faqTitle: "Simple answers before consultation.",
      contactTitle: "Start with your question. Guidance opens on WhatsApp.",
      footer: "Astra Vyas. Vyas Legacy Astrology."
    },
    hi: {
      nav: {
        "#overview": "होम",
        "#services": "सेवाएं",
        "#gemstones": "रत्न",
        "#rudraksha": "रुद्राक्ष",
        "#consultation": "परामर्श",
        "#testimonials": "अनुभव",
        "#faq": "प्रश्न",
        "#contact": "संपर्क"
      },
      status: "व्यास परंपरा सक्रिय है.",
      heroEyebrow: "व्यास परंपरा ज्योतिष",
      heroTitleA: "अस्त्र व्यास",
      heroTitleB: "परंपरा से जुड़ी वैदिक स्पष्टता.",
      heroText: "श्री जमनालाल व्यास ज्योतिर्विज्ञान केंद्र की प्रेरणा और मूल्यों को आगे बढ़ाते हुए राघवेन्द्र कुमार व्यास व्यक्तिगत, शांत और नैतिक ज्योतिष परामर्श प्रदान करते हैं.",
      primary: "परामर्श बुक करें",
      secondary: "व्हाट्सऐप करें",
      servicesTitle: "जीवन के महत्वपूर्ण निर्णयों के लिए केंद्रित वैदिक मार्गदर्शन.",
      gemsTitle: "कुंडली के अनुसार सावधानी से चुने गए रत्न.",
      rudrakshaTitle: "भय नहीं, परंपरा और समझ से जुड़े उपाय.",
      consultationTitle: "आपके वास्तविक प्रश्न पर आधारित निजी परामर्श.",
      processTitle: "प्रश्न से स्पष्टता तक.",
      knowledgeTitle: "अस्त्र व्यास के बारे में",
      knowledgeText: "अस्त्र व्यास की जड़ें श्री जमनालाल व्यास ज्योतिर्विज्ञान केंद्र की विरासत में हैं. राघवेन्द्र कुमार व्यास इसी परंपरा को व्यक्तिगत विश्लेषण, सम्मानपूर्ण मार्गदर्शन और आधुनिक डिजिटल अनुभव के साथ आगे बढ़ा रहे हैं.",
      testimonialsTitle: "स्पष्ट और व्यक्तिगत मार्गदर्शन से बना विश्वास.",
      faqTitle: "परामर्श से पहले सरल उत्तर.",
      contactTitle: "अपने प्रश्न से शुरुआत करें. मार्गदर्शन WhatsApp पर खुलेगा.",
      footer: "अस्त्र व्यास. व्यास परंपरा ज्योतिष."
    }
  };

  function setText(selector, text) {
    const el = document.querySelector(selector);
    if (el && text) el.textContent = text;
  }

  function setHtml(selector, html) {
    const el = document.querySelector(selector);
    if (el && html) el.innerHTML = html;
  }

  function updatePhone() {
    document.querySelectorAll("a[href*='wa.me'], a[href^='tel:']").forEach((link) => {
      if (link.href.includes("wa.me")) link.href = whatsappUrl;
      if (link.href.startsWith("tel:")) link.href = callUrl;
      if (/8839\d+/.test(link.textContent || "")) link.textContent = phone;
    });

    document.querySelectorAll("strong, span, p, a").forEach((el) => {
      if (el.childElementCount === 0 && /8839\d+/.test(el.textContent || "")) {
        el.textContent = el.textContent.replace(/88399961889|8839961889/g, phone);
      }
    });
  }

  function rebrandStaticText() {
    document.querySelectorAll(".brand strong, .loader-brand, .footer-brand strong").forEach((el) => {
      el.textContent = "ASTRA VYAS";
    });
    document.querySelectorAll(".brand small").forEach((el) => {
      el.textContent = "Vyas Legacy Astrology";
    });
    document.querySelectorAll(".brand-orb").forEach((el) => {
      el.textContent = "AV";
    });
    document.querySelectorAll(".footer-motto").forEach((el) => {
      el.textContent = "Carrying the Vyas legacy with clarity.";
    });
    document.querySelectorAll(".footer-brand p").forEach((el) => {
      el.textContent = "Vedic clarity. Personal guidance.";
    });
  }

  function limitNavigation(lang) {
    const allowed = Object.keys(copy[lang].nav);
    document.querySelectorAll(".side-panel nav a").forEach((link) => {
      const href = link.getAttribute("href");
      if (!allowed.includes(href)) {
        link.remove();
        return;
      }
      link.textContent = copy[lang].nav[href];
    });
  }

  function addLanguageToggle() {
    if (document.querySelector(".vyas-language")) return;
    const topbar = document.querySelector(".topbar");
    const whatsapp = document.querySelector(".whatsapp-mini");
    if (!topbar || !whatsapp) return;

    const switcher = document.createElement("div");
    switcher.className = "vyas-language";
    switcher.setAttribute("role", "group");
    switcher.setAttribute("aria-label", "Language");
    switcher.innerHTML = `
      <button type="button" class="active" data-vyas-lang="en">EN</button>
      <button type="button" data-vyas-lang="hi">हिन्दी</button>
    `;
    topbar.insertBefore(switcher, whatsapp);
    switcher.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => applyLanguage(btn.dataset.vyasLang || "en"));
    });
  }

  function addFloatingCta() {
    if (document.querySelector(".vyas-floating-cta")) return;
    const cta = document.createElement("div");
    cta.className = "vyas-floating-cta";
    cta.innerHTML = `
      <a href="${callUrl}" aria-label="Call Astra Vyas"><span>Call</span></a>
      <a href="${whatsappUrl}" target="_blank" rel="noreferrer" aria-label="WhatsApp Astra Vyas"><span>WhatsApp</span></a>
    `;
    document.body.appendChild(cta);
  }

  function refineContent(lang) {
    const t = copy[lang];

    setText("[data-core-message]", t.status);
    setText(".hero .eyebrow", t.heroEyebrow);
    setHtml(".hero-title", `<span class="line">${t.heroTitleA}</span><span class="line accent">${t.heroTitleB}</span>`);
    setText(".hero-copy > p:not(.eyebrow)", t.heroText);

    const heroButtons = document.querySelectorAll(".hero-actions a");
    if (heroButtons[0]) heroButtons[0].textContent = t.primary;
    if (heroButtons[1]) {
      heroButtons[1].textContent = t.secondary;
      heroButtons[1].href = whatsappUrl;
    }

    setText("#services .section-title h2", t.servicesTitle);
    setText("#gemstones .section-title h2", t.gemsTitle);
    setText("#rudraksha .section-title h2", t.rudrakshaTitle);
    setText("#consultation h2", t.consultationTitle);
    setText("#journey .section-title h2", t.processTitle);
    setText("#knowledge .eyebrow", lang === "hi" ? "व्यास विरासत" : "Vyas Legacy");
    setText("#knowledge h2", t.knowledgeTitle);
    setText("#knowledge .knowledge-copy > p:not(.eyebrow)", t.knowledgeText);
    setText("#testimonials .section-title h2", t.testimonialsTitle);
    setText("#faq .section-title h2", t.faqTitle);
    setText("#contact h2", t.contactTitle);

    setHtml(".footer-bottom p", `© <span data-year>${new Date().getFullYear()}</span> ${t.footer}`);
  }

  function addLegacyCard() {
    if (document.querySelector(".vyas-legacy-card")) return;
    const knowledge = document.querySelector("#knowledge .knowledge-copy");
    if (!knowledge) return;
    const card = document.createElement("div");
    card.className = "vyas-legacy-card";
    card.innerHTML = `
      <span>Legacy Foundation</span>
      <strong>श्री जमनालाल व्यास ज्योतिर्विज्ञान केंद्र</strong>
      <p>Astrologer tradition continued by Raghvendra Kumar Vyas through Astra Vyas.</p>
    `;
    knowledge.appendChild(card);
  }

  function refineTestimonials() {
    const data = [
      ["PS", "Priya S.", "Delhi", "The gemstone guidance was practical, calm and clearly explained."],
      ["AM", "Arjun & Meera", "Jaipur", "Marriage matching felt personal, respectful and easy to understand."],
      ["VK", "Vikram K.", "Mumbai", "The remedy guidance brought clarity without fear or pressure."]
    ];
    document.querySelectorAll(".testimonial-card").forEach((card, index) => {
      const item = data[index];
      if (!item || card.querySelector(".client-initials")) return;
      const [initials, name, city, text] = item;
      card.innerHTML = `
        <div class="testimonial-head">
          <span class="client-initials">${initials}</span>
          <div><div class="stars">★★★★★</div><strong>${name}</strong><small>${city}</small></div>
        </div>
        <p>"${text}"</p>
      `;
    });
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
    document.querySelectorAll("[data-vyas-lang]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.vyasLang === lang);
    });
    limitNavigation(lang);
    refineContent(lang);
    document.body.classList.add("language-shifting");
    setTimeout(() => document.body.classList.remove("language-shifting"), 260);
  }

  function initAutoObsidianTrigger() {
    const trigger = document.querySelector(".obsidian-trigger");
    if (!trigger) return;
    let userActed = false;
    const markActed = () => { userActed = true; };
    trigger.addEventListener("click", markActed, { once: true });
    document.querySelector("#skip-entry")?.addEventListener("click", markActed, { once: true });

    setTimeout(() => {
      const vault = document.querySelector(".vault");
      if (userActed || vault?.dataset.state === "awakened") return;
      trigger.click();
    }, window.matchMedia("(max-width: 768px)").matches ? 1500 : 1800);
  }

  function init() {
    updatePhone();
    rebrandStaticText();
    addLanguageToggle();
    addFloatingCta();
    addLegacyCard();
    refineTestimonials();
    applyLanguage("en");
    initAutoObsidianTrigger();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
