(function () {
  const LANGS = [
    ["en", "English"],
    ["fr", "Francais"],
    ["ar", "Arabic"]
  ];
  const DEFAULT_LANG = "en";

  const TEXT = {
    en: {
      "nav.home": "Home",
      "nav.sovereign": "Sovereign Focus",
      "nav.ghana": "Ghana Gold",
      "nav.clients": "Clients",
      "nav.contact": "Contact",
      "ghana.nav.overview": "Overview",
      "ghana.nav.packs": "Intelligence Packs",
      "ghana.nav.workflow": "Workflow",
      "ghana.nav.contact": "Ghana Contact",

      "landing.hero.eyebrow": "Concession & Deal Intelligence",
      "landing.hero.title": "Discover high-value resource opportunities before the market does.",
      "landing.hero.lead": "Aurora OSI identifies, ranks, and de-risks concession and open-ground opportunities across global mineral and hydrocarbon belts - turning subsurface signals into acquisition-ready deal flow.",
      "landing.hero.ghanaCta": "Explore Ghana Gold opportunities ->",
      "landing.snapshot.ghanaCta": "Review Ghana mandate focus",
      "landing.snapshot.contactCta": "Discuss sovereign engagement",
      "landing.snapshot.eyebrow": "Sovereign Intelligence Snapshot",
      "landing.snapshot.title": "Aurora OSI converts subsurface evidence into sovereign-grade deal intelligence.",
      "landing.snapshot.lead": "Aurora OSI packages completed intelligence artifacts into sovereign resource strategy, national mineral prioritisation, hydrocarbon basin screening, and strategic partnership dossiers. Active operator and sovereign work remains private.",
      "landing.services.eyebrow": "Sovereign Engagement Focus",
      "landing.services.title": "National resource intelligence for governments and strategic partners.",
      "landing.services.lead": "Aurora OSI is now focused on sovereign mandates: country-scale resource mapping, mineral and hydrocarbon strategy, investment-grade technical dossiers, and discreet government-to-government opportunity development.",
      "landing.contact.title": "Ready to discuss a sovereign resource mandate?",
      "landing.contact.lead": "Send a short mandate note with the country, agency or partner, target resource system, geography, decision timeline, and the output you need from Aurora OSI.",
      "landing.contact.email": "Email mandate note",
      "landing.contact.focus": "Sovereign Focus",

      "ghana.hero.eyebrow": "Aurora OSI Concession Intelligence",
      "ghana.hero.title": "Discover Ghana's next generation gold opportunities before the market does.",
      "ghana.hero.lead": "Africa's largest gold producer continues to attract exploration capital from companies around the world. Aurora OSI provides the intelligence layer that helps exploration companies identify, prioritize, and evaluate concession opportunities before committing capital.",
      "ghana.hero.contactCta": "Discuss Ghana mandate engagement",
      "ghana.hero.packsCta": "View Intelligence Packs",
      "ghana.hero.workflowCta": "How Aurora OSI Works",
      "ghana.why.eyebrow": "Why Ghana",
      "ghana.why.title": "Africa's leading gold jurisdiction",
      "ghana.why.lead": "Ghana remains one of the world's most attractive gold exploration destinations. The opportunity is significant; the challenge is knowing where to focus, which districts deserve capital, and which positions should move first.",
      "ghana.advantage.eyebrow": "The Aurora OSI Advantage",
      "ghana.advantage.title": "From manual review to a data-driven intelligence workflow",
      "ghana.advantage.lead": "Aurora OSI evaluates concession opportunities across multiple dimensions so capital is focused where the technical evidence is strongest.",
      "ghana.contact.eyebrow": "Sovereign Engagement",
      "ghana.contact.title": "Discuss Ghana gold intelligence as a mandate-level engagement.",
      "ghana.contact.lead": "For governments, operators, and strategic capital partners, Aurora OSI handles Ghana opportunity work through direct engagement rather than public brief requests. Send a short mandate note with geography, resource focus, decision timeline, and required output.",
      "ghana.contact.formTitle": "Ghana mandate discussion",
      "ghana.contact.submit": "Send mandate note",
      "ghana.contact.note": "We'll respond with how Aurora OSI can support the mandate. Your details are sent directly to our team."
    },
    fr: {
      "nav.home": "Accueil",
      "nav.sovereign": "Priorite souveraine",
      "nav.ghana": "Or du Ghana",
      "nav.clients": "Clients",
      "nav.contact": "Contact",
      "ghana.nav.overview": "Vue d'ensemble",
      "ghana.nav.packs": "Packs d'intelligence",
      "ghana.nav.workflow": "Flux de travail",
      "ghana.nav.contact": "Contact Ghana",

      "landing.hero.eyebrow": "Intelligence des concessions et des accords",
      "landing.hero.title": "Identifiez les opportunites de ressources a forte valeur avant le marche.",
      "landing.hero.lead": "Aurora OSI identifie, classe et reduit les risques des concessions et terrains ouverts dans les ceintures minerales et petrolieres mondiales, en transformant les signaux du sous-sol en opportunites pretes a l'engagement.",
      "landing.hero.ghanaCta": "Explorer les opportunites auriferes du Ghana ->",
      "landing.snapshot.ghanaCta": "Voir la priorite Ghana",
      "landing.snapshot.contactCta": "Discuter d'un mandat souverain",
      "landing.snapshot.eyebrow": "Instantane d'intelligence souveraine",
      "landing.snapshot.title": "Aurora OSI transforme les preuves du sous-sol en intelligence decisionnelle souveraine.",
      "landing.snapshot.lead": "Aurora OSI convertit les artefacts d'intelligence finalises en strategie nationale des ressources, priorisation minerale, analyse de bassins hydrocarbures et dossiers de partenariat strategique. Les travaux actifs des operateurs et des Etats restent prives.",
      "landing.services.eyebrow": "Priorite d'engagement souverain",
      "landing.services.title": "Intelligence nationale des ressources pour gouvernements et partenaires strategiques.",
      "landing.services.lead": "Aurora OSI se concentre sur les mandats souverains: cartographie nationale des ressources, strategie minerale et hydrocarbures, dossiers techniques de qualite decisionnelle et developpement discret d'opportunites entre gouvernements.",
      "landing.contact.title": "Pret a discuter d'un mandat souverain sur les ressources ?",
      "landing.contact.lead": "Envoyez une courte note de mandat avec le pays, l'agence ou le partenaire, le systeme de ressources vise, la geographie, le calendrier de decision et le livrable attendu d'Aurora OSI.",
      "landing.contact.email": "Envoyer la note de mandat",
      "landing.contact.focus": "Priorite souveraine",

      "ghana.hero.eyebrow": "Aurora OSI Concession Intelligence",
      "ghana.hero.title": "Identifiez la prochaine generation d'opportunites auriferes au Ghana avant le marche.",
      "ghana.hero.lead": "Le Ghana, premier producteur d'or d'Afrique, continue d'attirer les capitaux d'exploration. Aurora OSI fournit la couche d'intelligence qui aide a identifier, prioriser et evaluer les opportunites avant l'engagement de capital.",
      "ghana.hero.contactCta": "Discuter d'un mandat Ghana",
      "ghana.hero.packsCta": "Voir les packs d'intelligence",
      "ghana.hero.workflowCta": "Comment fonctionne Aurora OSI",
      "ghana.why.eyebrow": "Pourquoi le Ghana",
      "ghana.why.title": "La principale juridiction aurifere d'Afrique",
      "ghana.why.lead": "Le Ghana demeure l'une des destinations d'exploration aurifere les plus attractives au monde. L'opportunite est importante; l'enjeu est de savoir ou concentrer les moyens, quels districts meritent le capital et quelles positions avancer d'abord.",
      "ghana.advantage.eyebrow": "L'avantage Aurora OSI",
      "ghana.advantage.title": "De l'examen manuel a un flux d'intelligence fonde sur les donnees",
      "ghana.advantage.lead": "Aurora OSI evalue les opportunites de concession selon plusieurs dimensions afin de concentrer le capital la ou les preuves techniques sont les plus solides.",
      "ghana.contact.eyebrow": "Engagement souverain",
      "ghana.contact.title": "Discuter l'intelligence aurifere du Ghana comme mandat strategique.",
      "ghana.contact.lead": "Pour les gouvernements, operateurs et partenaires de capital strategique, Aurora OSI traite les travaux Ghana par engagement direct plutot que par demandes publiques de brief. Envoyez une note courte avec la geographie, la ressource visee, le calendrier de decision et le livrable requis.",
      "ghana.contact.formTitle": "Discussion de mandat Ghana",
      "ghana.contact.submit": "Envoyer la note de mandat",
      "ghana.contact.note": "Nous repondrons sur la facon dont Aurora OSI peut soutenir le mandat. Vos informations sont envoyees directement a notre equipe."
    },
    ar: {
      "nav.home": "الرئيسية",
      "nav.sovereign": "التركيز السيادي",
      "nav.ghana": "ذهب غانا",
      "nav.clients": "العملاء",
      "nav.contact": "التواصل",
      "ghana.nav.overview": "نظرة عامة",
      "ghana.nav.packs": "حزم الاستخبارات",
      "ghana.nav.workflow": "آلية العمل",
      "ghana.nav.contact": "تواصل غانا",

      "landing.hero.eyebrow": "استخبارات الامتيازات والصفقات",
      "landing.hero.title": "اكتشف فرص الموارد عالية القيمة قبل السوق.",
      "landing.hero.lead": "تحدد Aurora OSI فرص الامتيازات والأراضي المفتوحة وتصنفها وتخفض مخاطرها عبر الأحزمة المعدنية والهيدروكربونية العالمية، وتحول إشارات باطن الأرض إلى فرص جاهزة للنقاش.",
      "landing.hero.ghanaCta": "استكشاف فرص ذهب غانا ->",
      "landing.snapshot.ghanaCta": "مراجعة تركيز غانا",
      "landing.snapshot.contactCta": "مناقشة engagement سيادي",
      "landing.snapshot.eyebrow": "لمحة استخبارات سيادية",
      "landing.snapshot.title": "تحول Aurora OSI أدلة باطن الأرض إلى استخبارات صالحة للقرار السيادي.",
      "landing.snapshot.lead": "تجمع Aurora OSI مخرجات الاستخبارات المكتملة في استراتيجية موارد سيادية، وترتيب أولويات المعادن، وفحص أحواض الهيدروكربونات، وملفات شراكة استراتيجية. أما أعمال المشغلين والجهات السيادية الجارية فتبقى خاصة.",
      "landing.services.eyebrow": "تركيز engagement السيادي",
      "landing.services.title": "استخبارات موارد وطنية للحكومات والشركاء الاستراتيجيين.",
      "landing.services.lead": "تركز Aurora OSI الآن على الولايات السيادية: رسم خرائط موارد على مستوى الدولة، استراتيجية المعادن والهيدروكربونات، ملفات فنية صالحة للقرار، وتطوير فرص حكومية بشكل هادئ.",
      "landing.contact.title": "هل تريد مناقشة ولاية سيادية للموارد؟",
      "landing.contact.lead": "أرسل مذكرة قصيرة تتضمن الدولة، والجهة أو الشريك، ونظام الموارد المستهدف، والجغرافيا، وجدول القرار، والمخرج المطلوب من Aurora OSI.",
      "landing.contact.email": "إرسال مذكرة الولاية",
      "landing.contact.focus": "التركيز السيادي",

      "ghana.hero.eyebrow": "Aurora OSI Concession Intelligence",
      "ghana.hero.title": "اكتشف الجيل القادم من فرص الذهب في غانا قبل السوق.",
      "ghana.hero.lead": "تواصل غانا، أكبر منتج للذهب في أفريقيا، جذب رأس مال الاستكشاف من مختلف أنحاء العالم. توفر Aurora OSI طبقة الاستخبارات التي تساعد على تحديد فرص الامتيازات وترتيبها وتقييمها قبل تخصيص رأس المال.",
      "ghana.hero.contactCta": "مناقشة engagement غانا",
      "ghana.hero.packsCta": "عرض حزم الاستخبارات",
      "ghana.hero.workflowCta": "كيف تعمل Aurora OSI",
      "ghana.why.eyebrow": "لماذا غانا",
      "ghana.why.title": "أهم ولاية ذهب في أفريقيا",
      "ghana.why.lead": "تظل غانا واحدة من أكثر وجهات استكشاف الذهب جاذبية في العالم. الفرصة كبيرة؛ والتحدي هو معرفة أين يجب تركيز الجهد، وأي مناطق تستحق رأس المال، وأي مواقع يجب أن تتحرك أولا.",
      "ghana.advantage.eyebrow": "ميزة Aurora OSI",
      "ghana.advantage.title": "من المراجعة اليدوية إلى سير عمل استخباراتي قائم على البيانات",
      "ghana.advantage.lead": "تقيم Aurora OSI فرص الامتيازات عبر أبعاد متعددة حتى يتركز رأس المال حيث تكون الأدلة الفنية أقوى.",
      "ghana.contact.eyebrow": "engagement سيادي",
      "ghana.contact.title": "ناقش استخبارات ذهب غانا كولاية استراتيجية.",
      "ghana.contact.lead": "بالنسبة للحكومات والمشغلين وشركاء رأس المال الاستراتيجي، تتعامل Aurora OSI مع عمل غانا عبر تواصل مباشر بدلا من طلبات brief عامة. أرسل مذكرة قصيرة تتضمن الجغرافيا، والتركيز المعدني، وجدول القرار، والمخرج المطلوب.",
      "ghana.contact.formTitle": "مناقشة ولاية غانا",
      "ghana.contact.submit": "إرسال مذكرة الولاية",
      "ghana.contact.note": "سنرد بكيفية دعم Aurora OSI لهذه الولاية. يتم إرسال بياناتك مباشرة إلى فريقنا."
    }
  };

  function getLang() {
    const urlLang = new URLSearchParams(location.search).get("lang");
    const stored = localStorage.getItem("aurora_lang");
    const lang = (urlLang || stored || DEFAULT_LANG).toLowerCase().slice(0, 2).replace(/[^a-z]/g, "");
    return TEXT[lang] ? lang : DEFAULT_LANG;
  }

  function applyText(lang) {
    const dict = TEXT[lang] || TEXT[DEFAULT_LANG];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", lang === "ar");
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
  }

  function installSwitcher(lang) {
    if (document.querySelector(".lang-switcher")) return;
    const host = document.querySelector("nav") || document.querySelector(".topbar") || document.body;
    const wrap = document.createElement("div");
    wrap.className = "lang-switcher";
    wrap.style.display = "inline-flex";
    wrap.style.gap = "4px";
    wrap.style.alignItems = "center";
    wrap.style.marginLeft = "8px";
    LANGS.forEach(([code, label]) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = code.toUpperCase();
      btn.title = label;
      btn.style.border = "1px solid rgba(148,163,184,.35)";
      btn.style.background = code === lang ? "#33d6ff" : "transparent";
      btn.style.color = code === lang ? "#031018" : "inherit";
      btn.style.borderRadius = "5px";
      btn.style.padding = "7px 8px";
      btn.style.cursor = "pointer";
      btn.style.fontWeight = "700";
      btn.onclick = () => {
        localStorage.setItem("aurora_lang", code);
        applyText(code);
        document.querySelectorAll(".lang-switcher button").forEach((b) => {
          b.style.background = "transparent";
          b.style.color = "inherit";
        });
        btn.style.background = "#33d6ff";
        btn.style.color = "#031018";
      };
      wrap.appendChild(btn);
    });
    host.appendChild(wrap);
  }

  const lang = getLang();
  localStorage.setItem("aurora_lang", lang);
  installSwitcher(lang);
  applyText(lang);
})();
