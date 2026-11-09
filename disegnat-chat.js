/* ============================================================
   Disegnat WhatsApp Chat — lead qualification widget
   Load with one line in Squarespace Code injection → Footer:
   <script src="https://cdn.jsdelivr.net/gh/USERNAME/disegnat-chat@v3/disegnat-chat.js" defer></script>
   ============================================================ */
(function () {
  /* ---------- 1. SETTINGS: edit freely ---------- */
  var CONFIG = {
    phone: "385919498429",            // international format, digits only
    name: "Grgo Petrov",
    subtitle: "Owner at Studio Disegnat",
    avatar: "data:image/jpeg;base64,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",  // photo built into the code; or an image URL, or "" for initials
    initials: "GP",
    accent: "#25D366",                // launcher + send button colour
    headerBg: "#1d1d1b",              // panel header colour
    position: "right",                // "right" or "left"
    timeZone: "Europe/Zagreb",
    hours: { days: [1, 2, 3, 4, 5], from: 9, to: 17 },  // Mon–Fri 9–17
    teaserDelay: 10,                  // seconds before the small greeting bubble; 0 = off
    calendlyUrl: "",                  // optional: your Calendly link shows a "book a call" option at the end
    typingDelay: 700,                 // ms of "typing…" before each question
    language: "auto"                  // "auto", or force one: "en", "hr", "de"
  };

  /* ---------- 2. QUESTIONS ----------
     Each step: key (label in your WhatsApp message), q (question), options.
     An option can be plain text, or { label, out, next }:
       out  = what goes into the message (default: the label; null = nothing)
       next = a follow-up question shown only after that answer
     Follow-ups with attach:"paren" add "(answer)" to the line above,
     attach:"dot" adds " · answer" to it. input:true shows a short text field. */
  var TEXT = {
    en: {
      subtitle: "Owner at Studio Disegnat",
      greeting: "Hi there 👋 A few quick questions and we'll continue on WhatsApp.",
      teaser: "Questions about a project? Chat with us.",
      online: "⚡ Usually replies within an hour",
      offline: "🌙 Away · replies next working day",
      steps: [
        { key: "Service", q: "What are you looking for?", options: [
          { label: "Visual identity", next: { q: "Which fits best?", attach: "paren", options: ["New brand", "Refresh existing", "Full rebrand"] } },
          { label: "Website", next: { q: "Which fits best?", attach: "paren", options: ["New website", "Redesign existing", "Updates only"] } },
          { label: "Identity and website", next: { q: "Which fits best?", attach: "paren", options: ["New identity and website", "Rebrand and new website for an existing company"] } },
          { label: "Print materials", next: { q: "What do you need?", attach: "paren", options: ["Brochure or catalogue", "Book or publication", "Poster, flyer or ad", "Packaging", "Souvenirs", "Game", "Illustration", "Something else"] } },
          { label: "Digital materials", next: { q: "What do you need?", attach: "paren", options: ["Social media", "Online ads and banners", "Presentation", "Illustration", "Something else"] } },
          { label: "Trade show booth", next: { q: "Which trade show?", input: true, attach: "paren", placeholder: "Name of the trade show" } },
          "Something else",
          "Not sure yet"
        ] },
        { key: "Start", q: "When would you like to start?", options: [
          { label: "As soon as possible", next: "deadline" },
          { label: "Within a month", next: "deadline" },
          "In 1–3 months", "Later", "Flexible"
        ] },
        { key: "Budget", q: "What budget are you planning?", options: [
          "Under €1,000", "€1,000–3,000", "€3,000–6,000", "€6,000–10,000", "€10,000–20,000", "€20,000+",
          { label: "Not sure yet", next: { q: "Where are you in the process?", attach: "dot", options: ["Just exploring", "Budget is being decided", "Need a quote to get approval"] } }
        ] },
        { key: "Decision", q: "Who decides on the project?", options: [
          "I decide", "Together with partners or team", "Needs management approval"
        ] },
        { key: "Found us via", q: "How did you hear about us?", options: [
          "Google", "Instagram", "LinkedIn",
          { label: "Recommendation", next: { q: "Who recommended us?", input: true, attach: "paren", placeholder: "Name or company" } },
          { label: "Trade show", next: { q: "Which one?", input: true, attach: "paren", placeholder: "Name of the trade show" } },
          "Something else"
        ] }
      ],
      deadline: { q: "Is there a fixed deadline, like an event, launch or season?", attach: "dot", options: [
        { label: "Yes", out: null, next: { key: "Deadline", q: "What's the deadline?", input: true, attach: "dot", placeholder: "e.g. Boot Düsseldorf, mid-January", skipOut: "not specified" } },
        { label: "No", out: "No fixed deadline" }
      ] },
      finalQ: "Thanks! Finally, your name and a few words about the project, then send it on WhatsApp.",
      whoPlaceholder: "Your name (and company, if any)",
      hello: "Hi Grgo,",
      placeholder: "e.g. We're a charter company and need a new booth for Boot Düsseldorf…",
      next: "Next", skip: "Skip",
      send: "Continue on WhatsApp",
      book: "Prefer a call? Book a 30-min discovery call",
      restart: "Start over",
      open: "Chat on WhatsApp",
      close: "Close chat"
    },
    hr: {
      subtitle: "Vlasnik, Studio Disegnat",
      greeting: "Bok 👋 Par kratkih pitanja pa nastavljamo na WhatsAppu.",
      teaser: "Imate pitanje o projektu? Javite nam se.",
      online: "⚡ Obično odgovara unutar sat vremena",
      offline: "🌙 Nije tu · javlja se idući radni dan",
      steps: [
        { key: "Usluga", q: "Što trebate?", options: [
          { label: "Vizualni identitet", next: { q: "Što najbolje odgovara?", attach: "paren", options: ["Novi brend", "Osvježenje postojećeg", "Potpuni rebranding"] } },
          { label: "Web stranica", next: { q: "Što najbolje odgovara?", attach: "paren", options: ["Nova web stranica", "Redizajn postojeće", "Samo izmjene"] } },
          { label: "Identitet i web", next: { q: "Što najbolje odgovara?", attach: "paren", options: ["Novi identitet i web", "Rebranding i novi web postojeće firme"] } },
          { label: "Tiskani materijali", next: { q: "Što vam treba?", attach: "paren", options: ["Brošura ili katalog", "Knjiga ili publikacija", "Plakat, letak ili oglas", "Ambalaža", "Suveniri", "Igra", "Ilustracija", "Nešto drugo"] } },
          { label: "Digitalni materijali", next: { q: "Što vam treba?", attach: "paren", options: ["Društvene mreže", "Online oglasi i banneri", "Prezentacija", "Ilustracija", "Nešto drugo"] } },
          { label: "Sajamski štand", next: { q: "Za koji sajam?", input: true, attach: "paren", placeholder: "Naziv sajma" } },
          "Nešto drugo",
          "Još ne znam"
        ] },
        { key: "Početak", q: "Kada biste željeli početi?", options: [
          { label: "Što prije", next: "deadline" },
          { label: "Unutar mjesec dana", next: "deadline" },
          "Za 1–3 mjeseca", "Kasnije", "Fleksibilno"
        ] },
        { key: "Budžet", q: "Koliki budžet planirate?", options: [
          "Do 1.000 €", "1.000–3.000 €", "3.000–6.000 €", "6.000–10.000 €", "10.000–20.000 €", "20.000+ €",
          { label: "Još ne znam", next: { q: "U kojoj ste fazi?", attach: "dot", options: ["Tek istražujem", "Budžet se još određuje", "Trebam ponudu za odobrenje"] } }
        ] },
        { key: "Odluka", q: "Tko donosi odluku o projektu?", options: [
          "Ja odlučujem", "Zajedno s partnerima ili timom", "Treba odobrenje uprave"
        ] },
        { key: "Za nas ste čuli", q: "Kako ste čuli za nas?", options: [
          "Google", "Instagram", "LinkedIn",
          { label: "Preporuka", next: { q: "Tko nas je preporučio?", input: true, attach: "paren", placeholder: "Ime ili tvrtka" } },
          { label: "Sajam", next: { q: "Koji?", input: true, attach: "paren", placeholder: "Naziv sajma" } },
          "Nešto drugo"
        ] }
      ],
      deadline: { q: "Postoji li fiksni rok, npr. događaj, lansiranje ili sezona?", attach: "dot", options: [
        { label: "Da", out: null, next: { key: "Rok", q: "Koji je rok?", input: true, attach: "dot", placeholder: "npr. Boot Düsseldorf, sredina siječnja", skipOut: "nije naveden" } },
        { label: "Ne", out: "Bez fiksnog roka" }
      ] },
      finalQ: "Hvala! Za kraj vaše ime i par riječi o projektu, pa šaljemo na WhatsApp.",
      whoPlaceholder: "Ime i prezime (i tvrtka, ako postoji)",
      hello: "Bok Grgo,",
      placeholder: "npr. Imamo restoran i trebamo novi vizualni identitet…",
      next: "Dalje", skip: "Preskoči",
      send: "Nastavi na WhatsAppu",
      book: "Radije razgovor? Rezervirajte 30-min poziv",
      restart: "Kreni ispočetka",
      open: "Chat na WhatsAppu",
      close: "Zatvori chat"
    },
    de: {
      subtitle: "Inhaber, Studio Disegnat",
      greeting: "Hallo 👋 Ein paar kurze Fragen, dann geht's auf WhatsApp weiter.",
      teaser: "Fragen zu einem Projekt? Schreiben Sie uns.",
      online: "⚡ Antwortet meist innerhalb einer Stunde",
      offline: "🌙 Gerade nicht da · antwortet am nächsten Werktag",
      steps: [
        { key: "Leistung", q: "Wonach suchen Sie?", options: [
          { label: "Corporate Design", next: { q: "Was trifft am besten zu?", attach: "paren", options: ["Neue Marke", "Bestehendes auffrischen", "Komplettes Rebranding"] } },
          { label: "Website", next: { q: "Was trifft am besten zu?", attach: "paren", options: ["Neue Website", "Bestehende neu gestalten", "Nur Anpassungen"] } },
          { label: "Corporate Design und Website", next: { q: "Was trifft am besten zu?", attach: "paren", options: ["Neues Corporate Design und Website", "Rebranding und neue Website für ein bestehendes Unternehmen"] } },
          { label: "Printmaterialien", next: { q: "Was brauchen Sie?", attach: "paren", options: ["Broschüre oder Katalog", "Buch oder Publikation", "Plakat, Flyer oder Anzeige", "Verpackung", "Souvenirs", "Spiel", "Illustration", "Etwas anderes"] } },
          { label: "Digitale Materialien", next: { q: "Was brauchen Sie?", attach: "paren", options: ["Social Media", "Online-Anzeigen und Banner", "Präsentation", "Illustration", "Etwas anderes"] } },
          { label: "Messestand", next: { q: "Für welche Messe?", input: true, attach: "paren", placeholder: "Name der Messe" } },
          "Etwas anderes",
          "Noch nicht sicher"
        ] },
        { key: "Start", q: "Wann möchten Sie starten?", options: [
          { label: "So bald wie möglich", next: "deadline" },
          { label: "Innerhalb eines Monats", next: "deadline" },
          "In 1–3 Monaten", "Später", "Flexibel"
        ] },
        { key: "Budget", q: "Welches Budget planen Sie?", options: [
          "Unter 1.000 €", "1.000–3.000 €", "3.000–6.000 €", "6.000–10.000 €", "10.000–20.000 €", "20.000+ €",
          { label: "Noch nicht sicher", next: { q: "Wo stehen Sie gerade?", attach: "dot", options: ["Ich informiere mich nur", "Budget wird noch festgelegt", "Brauche ein Angebot zur Freigabe"] } }
        ] },
        { key: "Entscheidung", q: "Wer entscheidet über das Projekt?", options: [
          "Ich entscheide", "Gemeinsam mit Partnern oder Team", "Freigabe durch die Geschäftsführung nötig"
        ] },
        { key: "Gefunden über", q: "Wie sind Sie auf uns aufmerksam geworden?", options: [
          "Google", "Instagram", "LinkedIn",
          { label: "Empfehlung", next: { q: "Wer hat uns empfohlen?", input: true, attach: "paren", placeholder: "Name oder Firma" } },
          { label: "Messe", next: { q: "Welche?", input: true, attach: "paren", placeholder: "Name der Messe" } },
          "Etwas anderes"
        ] }
      ],
      deadline: { q: "Gibt es eine feste Deadline, z. B. eine Veranstaltung, einen Launch oder eine Saison?", attach: "dot", options: [
        { label: "Ja", out: null, next: { key: "Deadline", q: "Wann ist die Deadline?", input: true, attach: "dot", placeholder: "z. B. boot Düsseldorf, Mitte Januar", skipOut: "nicht angegeben" } },
        { label: "Nein", out: "Keine feste Deadline" }
      ] },
      finalQ: "Danke! Zum Schluss Ihr Name und ein paar Worte zum Projekt, dann per WhatsApp senden.",
      whoPlaceholder: "Ihr Name (und Firma, falls vorhanden)",
      hello: "Hallo Grgo,",
      placeholder: "z. B. Wir sind ein Charterunternehmen und brauchen einen neuen Messestand für die boot Düsseldorf…",
      next: "Weiter", skip: "Überspringen",
      send: "Weiter auf WhatsApp",
      book: "Lieber telefonieren? 30-Min.-Erstgespräch buchen",
      restart: "Neu starten",
      open: "Chat auf WhatsApp",
      close: "Chat schließen"
    }
  };

  /* ---------- 3. Language & opening hours ---------- */
  // Order: CONFIG.language if set → language in the URL (/hr/, /de/, /en/)
  // → visitor's browser language → page language → English
  function pick(code) { code = String(code || "").toLowerCase().slice(0, 2); return TEXT[code] ? code : null; }
  var urlLang = (location.pathname.match(/^\/(hr|de|en)(\/|$)/i) || [])[1];
  var browserLangs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
  var lang = pick(CONFIG.language) || pick(urlLang);
  for (var li = 0; !lang && li < browserLangs.length; li++) lang = pick(browserLangs[li]);
  lang = lang || pick(document.documentElement.lang) || "en";
  var T = TEXT[lang];
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function isOnline() {
    try {
      var parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: CONFIG.timeZone, weekday: "short", hour: "numeric", hour12: false
      }).formatToParts(new Date());
      var map = {};
      parts.forEach(function (p) { map[p.type] = p.value; });
      var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(map.weekday);
      var hour = parseInt(map.hour, 10) % 24;
      return CONFIG.hours.days.indexOf(day) > -1 && hour >= CONFIG.hours.from && hour < CONFIG.hours.to;
    } catch (e) { return true; }
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- 4. Styles ---------- */
  var side = CONFIG.position === "left" ? "left" : "right";
  var css =
    ".dsgw,.dsgw *{box-sizing:border-box;font-family:inherit}" +
    ".dsgw{position:fixed;" + side + ":20px;bottom:calc(20px + env(safe-area-inset-bottom,0px));z-index:9999;display:flex;flex-direction:column;align-items:" + (side === "right" ? "flex-end" : "flex-start") + ";gap:12px}" +
    ".dsgw-btn{width:58px;height:58px;border-radius:50%;border:0;cursor:pointer;background:" + CONFIG.accent + ";color:#fff;display:grid;place-items:center;box-shadow:0 8px 24px rgba(0,0,0,.2);transition:transform .2s ease}" +
    ".dsgw-btn:hover{transform:scale(1.06)}" +
    ".dsgw button:focus-visible,.dsgw textarea:focus-visible,.dsgw input:focus-visible,.dsgw a:focus-visible{outline:3px solid #1d1d1b;outline-offset:2px}" +
    ".dsgw-btn svg{width:28px;height:28px}" +
    ".dsgw-teaser{max-width:240px;background:#fff;color:#1d1d1b;padding:12px 14px;border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,.15);font-size:14px;line-height:1.4;cursor:pointer;animation:dsgwIn .3s ease}" +
    ".dsgw-panel{width:350px;max-width:calc(100vw - 24px);background:#f4f1ec;border-radius:18px;overflow:hidden;box-shadow:0 16px 48px rgba(0,0,0,.25);animation:dsgwIn .25s ease;display:flex;flex-direction:column;max-height:min(640px,calc(100vh - 110px))}" +
    ".dsgw-panel[hidden],.dsgw-teaser[hidden]{display:none}" +
    ".dsgw-head{background:" + CONFIG.headerBg + ";color:#fff;padding:16px;display:flex;align-items:center;gap:12px;flex:none}" +
    ".dsgw-ava{width:44px;height:44px;border-radius:50%;background:#fff;color:#1d1d1b;display:grid;place-items:center;font-weight:600;font-size:15px;overflow:hidden;flex:none;position:relative}" +
    ".dsgw-ava img{width:100%;height:100%;object-fit:cover}" +
    ".dsgw-dot{display:inline-block;width:8px;height:8px;border-radius:50%;margin-left:7px;vertical-align:middle;position:relative;top:-1px}" +
    ".dsgw-who{flex:1;min-width:0}.dsgw-name{font-weight:600;font-size:15px;line-height:1.2}" +
    ".dsgw-sub{font-size:12px;opacity:.8;margin-top:2px;line-height:1.3}" +
    ".dsgw-status{font-size:12px;opacity:.9;margin-top:3px;line-height:1.3}" +
    ".dsgw-x{background:none;border:0;color:#fff;font-size:24px;line-height:1;cursor:pointer;padding:4px 6px;opacity:.8}.dsgw-x:hover{opacity:1}" +
    ".dsgw-body{padding:16px;display:flex;flex-direction:column;gap:10px;overflow-y:auto;flex:1;min-height:0}" +
    ".dsgw-msg{padding:11px 14px;font-size:14px;line-height:1.45;max-width:86%;animation:dsgwIn .25s ease;white-space:pre-wrap;overflow-wrap:anywhere}" +
    ".dsgw-bot{background:#fff;color:#1d1d1b;border-radius:4px 14px 14px 14px;box-shadow:0 1px 2px rgba(0,0,0,.06);align-self:flex-start}" +
    ".dsgw-me{background:#1d1d1b;color:#fff;border-radius:14px 4px 14px 14px;align-self:flex-end}" +
    ".dsgw-me.dsgw-skipped{background:transparent;color:#6b665e;border:1px dashed #b5b0a6}" +
    ".dsgw-typing{display:inline-flex;gap:4px;align-items:center;padding:14px 16px}" +
    ".dsgw-typing i{width:6px;height:6px;border-radius:50%;background:#9a948a;animation:dsgwDot 1s infinite ease-in-out}" +
    ".dsgw-typing i:nth-child(2){animation-delay:.15s}.dsgw-typing i:nth-child(3){animation-delay:.3s}" +
    ".dsgw-opts{display:flex;flex-wrap:wrap;gap:6px;animation:dsgwIn .25s ease}" +
    ".dsgw-opt{border:1px solid #1d1d1b;background:transparent;color:#1d1d1b;border-radius:999px;padding:7px 12px;font-size:13px;line-height:1.25;cursor:pointer;text-align:left;transition:background .15s,color .15s}" +
    ".dsgw-opt:hover{background:#1d1d1b;color:#fff}" +
    ".dsgw-ask{display:flex;flex-direction:column;gap:6px;animation:dsgwIn .25s ease}" +
    ".dsgw-row{display:flex;gap:6px}" +
    ".dsgw-field{flex:1;min-width:0;border:1px solid #d6d1c8;border-radius:999px;padding:9px 14px;font-size:14px;background:#fff;color:#1d1d1b}" +
    ".dsgw-go{border:0;border-radius:999px;padding:9px 16px;background:#1d1d1b;color:#fff;font-size:13px;font-weight:600;cursor:pointer}" +
    ".dsgw-final{display:flex;flex-direction:column;gap:10px;animation:dsgwIn .25s ease}" +
    ".dsgw-final .dsgw-field{flex:none;width:100%;border-radius:12px;padding:10px 12px}" +
    ".dsgw-input{width:100%;min-height:84px;resize:vertical;border:1px solid #d6d1c8;border-radius:12px;padding:10px 12px;font-size:14px;line-height:1.4;background:#fff;color:#1d1d1b}" +
    ".dsgw-send{border:0;border-radius:12px;padding:12px;background:" + CONFIG.accent + ";color:#fff;font-weight:600;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px}" +
    ".dsgw-send:hover{filter:brightness(.95)}" +
    ".dsgw-links{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;font-size:12px}" +
    ".dsgw-link{background:none;border:0;padding:0;color:#6b665e;text-decoration:underline;cursor:pointer;font-size:12px;align-self:flex-start}" +
    ".dsgw-link:hover{color:#1d1d1b}" +
    "@keyframes dsgwIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}" +
    "@keyframes dsgwDot{0%,80%,100%{opacity:.3;transform:translateY(0)}40%{opacity:1;transform:translateY(-3px)}}" +
    "@media (max-width:480px){.dsgw{" + side + ":12px;bottom:calc(12px + env(safe-area-inset-bottom,0px))}.dsgw-panel{width:calc(100vw - 24px)}}" +
    "@media (prefers-reduced-motion:reduce){.dsgw *{animation:none!important;transition:none!important}}";

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  /* ---------- 5. Markup ---------- */
  var chatIcon =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3C7.03 3 3 6.86 3 11.62c0 2.4 1.03 4.57 2.7 6.13L5 21l3.56-1.62c1.06.39 2.22.6 3.44.6 4.97 0 9-3.86 9-8.62S16.97 3 12 3z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="8.5" cy="11.6" r="1.1" fill="currentColor"/><circle cx="12" cy="11.6" r="1.1" fill="currentColor"/><circle cx="15.5" cy="11.6" r="1.1" fill="currentColor"/></svg>';
  var sendIcon =
    '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12l16-8-6 16-2.5-6.5L4 12z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';

  var online = isOnline();
  var avatar = CONFIG.avatar ? '<img src="' + esc(CONFIG.avatar) + '" alt="">' : esc(CONFIG.initials);

  var root = document.createElement("div");
  root.className = "dsgw";
  root.innerHTML =
    '<div class="dsgw-teaser" hidden>' + esc(T.teaser) + "</div>" +
    '<div class="dsgw-panel" role="dialog" aria-modal="false" aria-label="' + esc(T.open) + '" hidden>' +
      '<div class="dsgw-head">' +
        '<div class="dsgw-ava">' + avatar + "</div>" +
        '<div class="dsgw-who"><div class="dsgw-name">' + esc(CONFIG.name) + '<span class="dsgw-dot" style="background:' + (online ? "#25D366" : "#b5b0a6") + '" aria-hidden="true"></span></div>' +
        '<div class="dsgw-sub">' + esc(T.subtitle || CONFIG.subtitle) + "</div>" +
        '<div class="dsgw-status">' + esc(online ? T.online : T.offline) + "</div></div>" +
        '<button type="button" class="dsgw-x" aria-label="' + esc(T.close) + '">×</button>' +
      "</div>" +
      '<div class="dsgw-body" aria-live="polite"></div>' +
    "</div>" +
    '<button type="button" class="dsgw-btn" aria-expanded="false" aria-label="' + esc(T.open) + '">' + chatIcon + "</button>";
  document.body.appendChild(root);

  var panel = root.querySelector(".dsgw-panel");
  var body = root.querySelector(".dsgw-body");
  var btn = root.querySelector(".dsgw-btn");
  var teaser = root.querySelector(".dsgw-teaser");

  /* ---------- 6. Conversation engine ---------- */
  var lines = [];      // [{k, v}] — becomes the WhatsApp message
  var started = false;
  var runId = 0;       // cancels pending steps when the visitor starts over

  function scrollDown() { body.scrollTop = body.scrollHeight; }

  function add(html, cls) {
    var el = document.createElement("div");
    el.className = cls;
    el.innerHTML = html;
    body.appendChild(el);
    scrollDown();
    return el;
  }

  function botSay(text, then) {
    var id = runId;
    var delay = reduceMotion ? 0 : CONFIG.typingDelay;
    var typing = delay ? add("<i></i><i></i><i></i>", "dsgw-msg dsgw-bot dsgw-typing") : null;
    setTimeout(function () {
      if (id !== runId) return;
      if (typing) typing.remove();
      add(esc(text), "dsgw-msg dsgw-bot");
      if (then) then();
    }, delay);
  }

  function record(step, out) {
    if (out === null || out === undefined || out === "") return;
    var attach = step.attach || "line";
    var last = lines[lines.length - 1];
    if (attach === "line" || !last) lines.push({ k: step.key, v: out });
    else if (attach === "paren") last.v += " (" + out + ")";
    else last.v += " · " + (step.key ? step.key + ": " : "") + out;
  }

  function resolve(step) { return typeof step === "string" ? T[step] : step; }

  function askStep(step, done) {
    step = resolve(step);
    botSay(step.q, function () {
      if (step.input) showInput(step, done); else showOptions(step, done);
    });
  }

  function showOptions(step, done) {
    var wrap = add("", "dsgw-opts");
    wrap.setAttribute("role", "group");
    wrap.setAttribute("aria-label", step.q);
    step.options.forEach(function (raw) {
      var opt = typeof raw === "string" ? { label: raw } : raw;
      var b = document.createElement("button");
      b.type = "button";
      b.className = "dsgw-opt";
      b.textContent = opt.label;
      b.addEventListener("click", function () {
        wrap.remove();
        add(esc(opt.label), "dsgw-msg dsgw-me");
        record(step, opt.hasOwnProperty("out") ? opt.out : opt.label);
        if (opt.next) askStep(opt.next, done); else done();
      });
      wrap.appendChild(b);
    });
    var first = wrap.querySelector("button");
    if (first) first.focus({ preventScroll: true });
    scrollDown();
  }

  function showInput(step, done) {
    var box = add(
      '<div class="dsgw-row"><input class="dsgw-field" type="text" maxlength="120" placeholder="' + esc(step.placeholder || "") + '" aria-label="' + esc(step.q) + '">' +
      '<button type="button" class="dsgw-go">' + esc(T.next) + "</button></div>" +
      '<button type="button" class="dsgw-link">' + esc(T.skip) + "</button>",
      "dsgw-ask");
    var field = box.querySelector(".dsgw-field");
    function submit(skip) {
      var v = skip ? "" : field.value.trim();
      box.remove();
      if (v) { add(esc(v), "dsgw-msg dsgw-me"); record(step, v); }
      else { add(esc(T.skip), "dsgw-msg dsgw-me dsgw-skipped"); if (step.skipOut) record(step, step.skipOut); }
      done();
    }
    box.querySelector(".dsgw-go").addEventListener("click", function () { submit(false); });
    box.querySelector(".dsgw-link").addEventListener("click", function () { submit(true); });
    field.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); submit(false); }
    });
    field.focus({ preventScroll: true });
    scrollDown();
  }

  function runSteps(i) {
    if (i >= T.steps.length) return askFinal();
    askStep(T.steps[i], function () { runSteps(i + 1); });
  }

  function askFinal() {
    botSay(T.finalQ, function () {
      var box = add(
        '<input class="dsgw-field dsgw-who-field" type="text" maxlength="80" autocomplete="name" placeholder="' + esc(T.whoPlaceholder) + '" aria-label="' + esc(T.whoPlaceholder) + '">' +
        '<textarea class="dsgw-input" rows="3" placeholder="' + esc(T.placeholder) + '" aria-label="' + esc(T.placeholder) + '"></textarea>' +
        '<button type="button" class="dsgw-send">' + sendIcon + esc(T.send) + "</button>" +
        '<div class="dsgw-links">' +
          (CONFIG.calendlyUrl ? '<a class="dsgw-link" href="' + esc(CONFIG.calendlyUrl) + '" target="_blank" rel="noopener">' + esc(T.book) + "</a>" : "<span></span>") +
          '<button type="button" class="dsgw-link dsgw-restart">' + esc(T.restart) + "</button>" +
        "</div>",
        "dsgw-final");
      var input = box.querySelector(".dsgw-input");
      var who = box.querySelector(".dsgw-who-field");
      box.querySelector(".dsgw-send").addEventListener("click", function () { send(input.value, who.value); });
      input.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); send(input.value, who.value); }
      });
      who.addEventListener("keydown", function (e) {
        if (e.key === "Enter") { e.preventDefault(); input.focus(); }
      });
      box.querySelector(".dsgw-restart").addEventListener("click", restart);
      who.focus({ preventScroll: true });
      scrollDown();
    });
  }

  function send(description, who) {
    // Greeting, then the visitor's own words, then the summary of answers
    var out = [T.hello, ""];
    var d = (description || "").trim();
    if (d) { out.push(d); out.push(""); }
    lines.forEach(function (l) { out.push(l.k + ": " + l.v); });
    var w = (who || "").trim();
    if (w) { out.push(""); out.push("— " + w); }
    var url = "https://wa.me/" + CONFIG.phone + "?text=" + encodeURIComponent(out.join("\n"));
    window.open(url, "_blank", "noopener");
  }

  function start() {
    started = true;
    add(esc(T.greeting), "dsgw-msg dsgw-bot");
    runSteps(0);
  }

  function restart() {
    runId++;
    lines = [];
    body.innerHTML = "";
    start();
  }

  /* ---------- 7. Open / close ---------- */
  function setOpen(open) {
    panel.hidden = !open;
    teaser.hidden = true;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? T.close : T.open);
    if (open && !started) start();
    if (!open) btn.focus();
  }

  btn.addEventListener("click", function () { setOpen(panel.hidden); });
  root.querySelector(".dsgw-x").addEventListener("click", function () { setOpen(false); });
  teaser.addEventListener("click", function () { setOpen(true); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !panel.hidden) setOpen(false);
  });

  // Small greeting bubble once per visit
  if (CONFIG.teaserDelay > 0) {
    var seen = false;
    try { seen = sessionStorage.getItem("dsgwTeaser") === "1"; } catch (e) {}
    if (!seen) {
      setTimeout(function () {
        if (panel.hidden) teaser.hidden = false;
        try { sessionStorage.setItem("dsgwTeaser", "1"); } catch (e) {}
      }, CONFIG.teaserDelay * 1000);
    }
  }
})();
