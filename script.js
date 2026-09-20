/* ============================================================
   script.js — Wedding Invitation
   ============================================================ */


// تأكد إن الزر بيظهر حتى لو حصلت مشكلة
window.addEventListener("load", () => {
  setTimeout(() => {
    if (document.body.classList.contains("invitation-opened")) {
      const btn = document.getElementById("musicToggle");
      if (btn) {
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
      }
    }
  }, 100);
});
/* ================= Helpers ================= */

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = String(str ?? "");
  return div.innerHTML;
}

function formatDate(isoString) {
  if (!isoString) return "";
  const d = new Date(isoString);
  if (isNaN(d)) return "";
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

/* ============================================================
   Footer Social Icons (SVG inline — مش إيموجي)
   ============================================================ */

const SOCIAL_ICONS = {
  whatsapp: `
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  `,
  phone: `
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z"/>
    </svg>
  `,
  tiktok: `
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V8.68a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.11z"/>
    </svg>
  `,
  instagram: `
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  `,
  facebook: `
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  `
};

/* ============================================================
   Helper functions
   ============================================================ */

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setImg(id, src, isBackground = false) {
  const el = document.getElementById(id);
  if (!el) return;
  if (isBackground) {
    el.style.backgroundImage = `url("${src}")`;
  } else {
    el.src = src;
  }
}

/* ============================================================
   Render Timeline
   ============================================================ */

function renderTimeline() {
  const list = document.getElementById("timelineList");
  if (!list) return;

  list.innerHTML = "";
  CONFIG.timeline.forEach((item) => {
    const li = document.createElement("li");
    li.className = "timeline-item";

    const time = document.createElement("span");
    time.className = "timeline-time number";
    time.textContent = item.time;

    const dot = document.createElement("span");
    dot.className = "timeline-dot";

    const label = document.createElement("span");
    label.className = "timeline-label";
    label.textContent = item.label;

    li.append(time, dot, label);
    list.appendChild(li);
  });
}

/* ============================================================
   Render Footer
   ============================================================ */

function renderFooter() {
  const footer = document.getElementById("siteFooter");
  if (!footer || !CONFIG.footer) return;

  // العنوان
  const title = document.getElementById("footerTitle");
  if (title) title.textContent = CONFIG.footer.title;

  // السوشيال
  const socialsList = document.getElementById("footerSocials");
  if (socialsList) {
    socialsList.innerHTML = "";
    CONFIG.footer.socials.forEach((social) => {
      const li = document.createElement("li");
      li.className = "footer-social-item";

      const a = document.createElement("a");
      a.className = "footer-social-link";
      a.href = social.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", social.name);

      const iconSpan = document.createElement("span");
      iconSpan.className = "footer-social-icon";
      iconSpan.innerHTML = SOCIAL_ICONS[social.icon] || "";

      const nameSpan = document.createElement("span");
      nameSpan.className = "footer-social-name";
      nameSpan.textContent = social.name;

      a.append(iconSpan, nameSpan);
      li.appendChild(a);
      socialsList.appendChild(li);
    });
  }

  // الجملة الختامية
  const tagline = document.getElementById("footerTagline");
  if (tagline) {
    const safeTagline = escapeHTML(CONFIG.footer.tagline);
    tagline.innerHTML = safeTagline.replace(
      "Loventa",
      `<a href="${CONFIG.footer.designerUrl}" target="_blank" rel="noopener noreferrer" class="footer-credit-link">Loventa</a>`
    );
  }
}

/* ============================================================
   1) تطبيق الـ CONFIG على الـ DOM
   ============================================================ */

function applyConfig() {
  // --- أسماء العروسين في الكارد ---
  const introNames = document.querySelector(".intro-names");
  if (introNames) {
    introNames.innerHTML = `
      <h1>${escapeHTML(CONFIG.groom.name)}</h1>
      <span class="and">&amp;</span>
      <h1>${escapeHTML(CONFIG.bride.name)}</h1>
    `;
  }

  // --- التاريخ في الكارد ---
  const dateEl = document.querySelector(".date-block .date");
  if (dateEl) {
    const { year, dayNumber, month } = CONFIG.displayDate;
    dateEl.innerHTML = `
      <span class="number">${escapeHTML(year)}</span>,
      <span class="number">${escapeHTML(dayNumber)}</span>
      ${escapeHTML(month)}
    `;
  }

  // --- كلمة Invites ---
  const inviteWord = document.querySelector(".invite-word h2");
  if (inviteWord) inviteWord.textContent = CONFIG.texts.invitesText;

  // --- زرار Open ---
  const openBtn = document.getElementById("openInvitation");
  if (openBtn) openBtn.textContent = CONFIG.texts.openButton;

  // --- Hero names ---
  const heroNames = document.querySelector(".hero-names");
  if (heroNames) {
    heroNames.innerHTML = `
      <h1>${escapeHTML(CONFIG.groom.name)}</h1>
      <span class="and">&amp;</span>
      <h1>${escapeHTML(CONFIG.bride.name)}</h1>
    `;
  }

  // --- عناوين الأقسام ---
  setText("ceremonyTitle", CONFIG.texts.ceremonyTitle);
  setText("receptionTitle", CONFIG.texts.receptionTitle);
  setText("countdownTitle", CONFIG.texts.countdownTitle);
  setText("venueTitle", CONFIG.texts.venueTitle);
  setText("scheduleTitle", CONFIG.texts.scheduleTitle);
  setText("guestbookTitle", CONFIG.texts.guestbookTitle);

  // --- نصوص Ceremony ---
  setText("ceremonySub1", CONFIG.texts.ceremonySub1);
  setText("ceremonySub2", CONFIG.texts.ceremonySub2);

  // --- Couple names في الـ details ---
  const detailsNames = document.querySelector(".details-names");
  if (detailsNames) {
    detailsNames.innerHTML = `
      <h1>${escapeHTML(CONFIG.groom.name)}</h1>
      <p class="role">${escapeHTML(CONFIG.groom.role)}</p>
      <span class="and">&amp;</span>
      <h1>${escapeHTML(CONFIG.bride.name)}</h1>
      <p class="role">${escapeHTML(CONFIG.bride.role)}</p>
    `;
  }

  // --- Reception ---
  setText("receptionSub", CONFIG.texts.receptionSub);
  setText("receptionTime", CONFIG.displayDate.time);

  const dateRow = document.querySelector(".date-row");
  if (dateRow) {
    dateRow.innerHTML = `
      <span class="date-part">${escapeHTML(CONFIG.displayDate.day)}</span>
      <span class="date-sep">|</span>
      <span class="date-num number">${escapeHTML(CONFIG.displayDate.dayNumber)}</span>
      <span class="date-sep">|</span>
      <span class="date-part">${escapeHTML(CONFIG.displayDate.month)}</span>
    `;
  }

  setText("receptionYear", CONFIG.displayDate.year);

  // --- Venue ---
  setText("venueName", CONFIG.venue.name);
  const venueBtn = document.getElementById("venueBtn");
  if (venueBtn) {
    venueBtn.href = CONFIG.venue.mapUrl;
    venueBtn.textContent = CONFIG.texts.locationButtonText;
  }

  // --- صور ---
  setImg("cardImage", CONFIG.images.card);
  setImg("heroImage", CONFIG.images.hero, true);       // background
  setImg("sectionBg", CONFIG.images.sectionBg, true);   // background
  setImg("scheduleImage", CONFIG.images.schedule);
  setImg("locationImage", CONFIG.images.location);

  // الديفايدرز
  document.querySelectorAll(".divider img, .hero-divider img").forEach((img) => {
    img.src = CONFIG.images.divider;
  });

  // --- زرار Add to Calendar ---
  const addCalendar = document.getElementById("addToCalendar");
  if (addCalendar) addCalendar.textContent = CONFIG.texts.addCalendarText;

  // --- زرار Confirm ---
  const confirmBtn = document.getElementById("confirmBtn");
  if (confirmBtn) confirmBtn.textContent = CONFIG.texts.confirmButtonText;

  // --- Timeline ---
  renderTimeline();

  // --- Guestbook limits ---
  const nameInput = document.getElementById("guestName");
  const wishInput = document.getElementById("guestWish");
  if (nameInput) nameInput.maxLength = CONFIG.guestbook.maxNameLength;
  if (wishInput) wishInput.maxLength = CONFIG.guestbook.maxWishLength;

  // --- Footer ---
  renderFooter();
}

applyConfig();

/* ============================================================
   2) Stars
   ============================================================ */

const stars = document.getElementById("stars");
const starCount = CONFIG.stars.count;

const starsFragment = document.createDocumentFragment();

for (let i = 0; i < starCount; i++) {
  const star = document.createElement("span");
  star.className = "star";
  star.textContent = "✦";
  star.style.left = `${Math.random() * 100}vw`;
  star.style.animationDuration = `${10 + Math.random() * 8}s`;
  star.style.animationDelay = `${Math.random() * -18}s`;
  star.style.fontSize = `${14 + Math.random() * 8}px`;
  starsFragment.appendChild(star);
}
stars.appendChild(starsFragment);

/* ============================================================
   3) Open Invitation
   ============================================================ */

const openButton = document.getElementById("openInvitation");
const welcomeScreen = document.getElementById("welcomeScreen");
const detailsScreen = document.getElementById("detailsScreen");

openButton.addEventListener("click", () => {
  welcomeScreen.classList.add("is-leaving");
  detailsScreen.classList.add("is-visible");
  document.body.classList.add("invitation-opened");

  setTimeout(() => {
    welcomeScreen.remove();
  }, 1000);
});

/* ============================================================
   4) Countdown
   ============================================================ */

const countdownEl = document.getElementById("countdown");
const weddingDate = new Date(CONFIG.weddingDate);
let countdownTimer = null;

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdownEl.textContent = "The day is here! 🎉";
    if (countdownTimer) clearInterval(countdownTimer);
    return;
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent =
    `${days} days ${hours} hours ${minutes} min ${seconds} sec`;
}

function startCountdown() {
  updateCountdown();
  countdownTimer = setInterval(updateCountdown, 1000);
}

function stopCountdown() {
  if (countdownTimer) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }
}

startCountdown();

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopCountdown();
  } else {
    stopCountdown();
    startCountdown();
  }
});

/* ============================================================
   5) Add to Calendar (.ics)
   ============================================================ */

function pad2(n) {
  return String(n).padStart(2, "0");
}

function toICSDate(date) {
  return (
    date.getFullYear() +
    pad2(date.getMonth() + 1) +
    pad2(date.getDate()) +
    "T" +
    pad2(date.getHours()) +
    pad2(date.getMinutes()) +
    pad2(date.getSeconds())
  );
}

function toICSStamp(date) {
  return (
    date.getUTCFullYear() +
    pad2(date.getUTCMonth() + 1) +
    pad2(date.getUTCDate()) +
    "T" +
    pad2(date.getUTCHours()) +
    pad2(date.getUTCMinutes()) +
    pad2(date.getUTCSeconds()) +
    "Z"
  );
}

function buildICS() {
  const start = new Date(CONFIG.weddingDate);
  const end = new Date(start.getTime() + CONFIG.weddingDurationHours * 60 * 60 * 1000);
  const now = new Date();

  const title = `Wedding of ${CONFIG.groom.name} & ${CONFIG.bride.name}`;
  const description = `We joyfully invite you to celebrate the wedding of ${CONFIG.groom.name} & ${CONFIG.bride.name}.`;

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding//" + CONFIG.groom.name + " & " + CONFIG.bride.name + "//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    "UID:" + Date.now() + "@wedding",
    "DTSTAMP:" + toICSStamp(now),
    "DTSTART:" + toICSDate(start),
    "DTEND:" + toICSDate(end),
    "SUMMARY:" + title,
    "DESCRIPTION:" + description,
    "LOCATION:" + CONFIG.venue.name,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");
}

const addBtn = document.getElementById("addToCalendar");
addBtn.href = "data:text/calendar;charset=utf-8," + encodeURIComponent(buildICS());

/* ============================================================
   6) Confirm Attendance
   ============================================================ */

document.getElementById("confirmBtn").addEventListener("click", () => {
  const method = CONFIG.confirmMethod;

  if (method === "whatsapp") {
    const phone = CONFIG.whatsapp.phone.replace(/\D/g, "");
    const msg = encodeURIComponent(CONFIG.whatsapp.message);
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
    return;
  }

  if (method === "google_form") {
    window.open(CONFIG.googleFormUrl, "_blank");
    return;
  }

  if (method === "link" && CONFIG.customLink) {
    window.open(CONFIG.customLink, "_blank");
    return;
  }

  alert("Confirmation method not configured.");
});

/* ============================================================
   7) Firebase Init
   ============================================================ */

firebase.initializeApp(FIREBASE_CONFIG);
const db = firebase.firestore();

/* ============================================================
   8) Guestbook
   ============================================================ */

const guestbookForm  = document.getElementById("guestbookForm");
const guestNameInput = document.getElementById("guestName");
const guestWishInput = document.getElementById("guestWish");
const guestbookList  = document.getElementById("guestbookList");
const guestbookError = document.getElementById("guestbookError");
const emojiPicker    = document.getElementById("emojiPicker");
const sendBtn        = document.getElementById("guestbookSend");

/* ---- قائمة الكلمات الممنوعة ---- */
const BANNED_WORDS = [
  "fuck", "fuk", "fck", "fucking", "fucker",
  "shit", "sh1t", "bullshit",
  "bitch", "b1tch",
  "asshole", "bastard",
  "dick", "d1ck",
  "pussy", "whore", "slut", "idiot", "retard",
  "nigger", "nigga",
  "عرص", "شرموط", "شرمو", "كسم", "كسك", "متناك",
  "نيك", "منيك", "خول", "قحبة", "قحبه",
  "كلب", "كلبة", "كلاب", "حمار", "حمارة", "حمير",
  "غبي", "غبية", "حقير", "حقيرة", "قذر", "قذرة",
  "زبالة", "لعنة", "يلعن", "ملعون", "تافه", "فاشل",
  "خنزير", "خنازير", "بهيم", "بهيمة", "طز", "خرا", "زفت"
];

function normalizeText(text) {
  return String(text)
    .toLowerCase()
    .replace(/[\u064B-\u0652]/g, "")
    .replace(/[^\u0600-\u06FFa-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function buildBannedRegex(word) {
  const normalized = normalizeText(word);
  const pattern = normalized
    .split("")
    .map((ch) => {
      const map = {
        a: "[a@4]", e: "[e3]", i: "[i1!]", o: "[o0]",
        s: "[s$5]", t: "[t7]", b: "[b8]", g: "[g9]",
        ا: "[اأإآ]", ه: "[هة]", ي: "[يى]", و: "[وؤ]", ك: "[كک]"
      };
      return map[ch] || ch;
    })
    .join("");
  return new RegExp(pattern, "i");
}

const BANNED_REGEXES = BANNED_WORDS.map(buildBannedRegex);

function containsBannedWord(text) {
  const normalized = normalizeText(text);
  return BANNED_REGEXES.some((re) => re.test(normalized));
}

/* ---- Rate limit + Daily limit ---- */
const RATE_LIMIT_KEY = "guestbook_last_message";
const DAILY_COUNT_KEY = "guestbook_daily_count";

const RATE_LIMIT_COOLDOWN = CONFIG.guestbook.rateLimitSeconds * 1000;
const DUPLICATE_WINDOW = CONFIG.guestbook.duplicateWindowMinutes * 60 * 1000;
const MAX_MESSAGES_PER_DAY = CONFIG.guestbook.maxMessagesPerDay;

function checkRateLimit() {
  const last = Number(localStorage.getItem(RATE_LIMIT_KEY) || 0);
  const elapsed = Date.now() - last;
  if (elapsed < RATE_LIMIT_COOLDOWN) {
    const remaining = Math.ceil((RATE_LIMIT_COOLDOWN - elapsed) / 1000);
    return {
      blocked: true,
      message: `⏳ Please wait ${remaining} seconds before sending another message.`
    };
  }
  return { blocked: false };
}

function updateRateLimit() {
  localStorage.setItem(RATE_LIMIT_KEY, String(Date.now()));
}

function checkDailyLimit() {
  const today = new Date().toDateString();
  let data = { date: today, count: 0 };

  try {
    const saved = JSON.parse(localStorage.getItem(DAILY_COUNT_KEY));
    if (saved && saved.date === today) data = saved;
  } catch {}

  if (data.count >= MAX_MESSAGES_PER_DAY) {
    return {
      blocked: true,
      message: `📅 You've reached the daily limit (${MAX_MESSAGES_PER_DAY} messages). Try again tomorrow.`
    };
  }
  return { blocked: false };
}

function incrementDailyCount() {
  const today = new Date().toDateString();
  let data = { date: today, count: 0 };

  try {
    const saved = JSON.parse(localStorage.getItem(DAILY_COUNT_KEY));
    if (saved && saved.date === today) data = saved;
  } catch {}

  data.count += 1;
  data.date = today;
  localStorage.setItem(DAILY_COUNT_KEY, JSON.stringify(data));
}

/* ---- Duplicate check ---- */
async function isDuplicateMessage(name, wish) {
  const cutoff = new Date(Date.now() - DUPLICATE_WINDOW).toISOString();

  try {
    const snapshot = await db
      .collection("guestbook")
      .where("date", ">=", cutoff)
      .get();

    const normalizedName = normalizeText(name);
    const normalizedWish = normalizeText(wish);

    let duplicate = false;
    snapshot.forEach((doc) => {
      const d = doc.data();
      if (
        normalizeText(d.name || "") === normalizedName &&
        normalizeText(d.wish || "") === normalizedWish
      ) {
        duplicate = true;
      }
    });

    return duplicate;
  } catch (err) {
    console.warn("Duplicate check failed:", err);
    return false;
  }
}

/* ---- Render messages ---- */
function renderMessage(msg) {
  const li = document.createElement("li");
  li.className = "guestbook-item";

  const head = document.createElement("div");
  head.className = "guestbook-item__head";

  const nameEl = document.createElement("span");
  nameEl.className = "guestbook-item__name";
  nameEl.textContent = msg.name || "";

  const dateEl = document.createElement("span");
  dateEl.className = "guestbook-item__date";
  dateEl.textContent = formatDate(msg.date);

  const textEl = document.createElement("p");
  textEl.className = "guestbook-item__text";
  textEl.textContent = msg.wish || "";

  head.append(nameEl, dateEl);
  li.append(head, textEl);
  return li;
}

/* ---- Live listener ---- */
db.collection("guestbook")
  .orderBy("date", "desc")
  .onSnapshot(
    (snapshot) => {
      guestbookList.innerHTML = "";
      snapshot.forEach((doc) => {
        guestbookList.appendChild(renderMessage(doc.data()));
      });
    },
    (error) => {
      console.error("Firestore error:", error);
      guestbookError.textContent = "تعذر تحميل الرسائل، حاول تحديث الصفحة.";
    }
  );

/* ---- Submit ---- */
guestbookForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = guestNameInput.value.trim();
  const wish = guestWishInput.value.trim();

  if (!name || !wish) {
    guestbookError.textContent = "Please fill in your name and your wishes.";
    return;
  }

  if (name.length < 2) {
    guestbookError.textContent = "Name is too short.";
    return;
  }

  if (wish.length < 3) {
    guestbookError.textContent = "Your wish is too short.";
    return;
  }

  if (containsBannedWord(name) || containsBannedWord(wish)) {
    guestbookError.textContent = "🚫 Your message contains inappropriate words. Please rewrite it.";
    return;
  }

  const rateCheck = checkRateLimit();
  if (rateCheck.blocked) {
    guestbookError.textContent = rateCheck.message;
    return;
  }

  const dailyCheck = checkDailyLimit();
  if (dailyCheck.blocked) {
    guestbookError.textContent = dailyCheck.message;
    return;
  }

  sendBtn.disabled = true;
  const originalText = sendBtn.textContent;
  sendBtn.textContent = "CHECKING…";

  const duplicate = await isDuplicateMessage(name, wish);
  if (duplicate) {
    guestbookError.textContent = "⚠️ You already sent this message. Please wait a few minutes.";
    sendBtn.disabled = false;
    sendBtn.textContent = originalText;
    return;
  }

  guestbookError.textContent = "";
  sendBtn.textContent = "SENDING…";

  try {
    await db.collection("guestbook").add({
      name,
      wish,
      date: new Date().toISOString()
    });

    updateRateLimit();
    incrementDailyCount();

    guestNameInput.value = "";
    guestWishInput.value = "";
    guestNameInput.focus();

    guestbookError.style.color = "#2A4B7C";
    guestbookError.textContent = "✅ Your message was sent successfully!";
    setTimeout(() => {
      guestbookError.textContent = "";
      guestbookError.style.color = "#c0392b";
    }, 3000);

  } catch (err) {
    console.error(err);
    guestbookError.textContent = "An error occurred, please try again.";
  } finally {
    sendBtn.disabled = false;
    sendBtn.textContent = originalText;
  }
});

/* ---- Emoji picker ---- */
emojiPicker.addEventListener("click", () => {
  const list = CONFIG.guestbook.emojis;
  const emoji = list[Math.floor(Math.random() * list.length)];
  guestWishInput.value += (guestWishInput.value ? " " : "") + emoji;
  guestWishInput.focus();
});

/* ============================================================
   9) Music Player
   ============================================================ */

const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

let musicStarted = false;
let fadeTimer = null;

/* ---- إعداد الموسيقى من الـ config ---- */
if (bgMusic) {
  bgMusic.src = CONFIG.music.src;
  bgMusic.loop = CONFIG.music.loop;
  bgMusic.volume = 0;
  bgMusic.preload = "auto";
}

/* ---- Fade in ناعم ---- */
function fadeInAudio(targetVolume, duration) {
  if (fadeTimer) clearInterval(fadeTimer);
  const steps = 30;
  const stepTime = duration / steps;
  const stepVolume = targetVolume / steps;
  let current = 0;

  fadeTimer = setInterval(() => {
    current += stepVolume;
    if (current >= targetVolume) {
      bgMusic.volume = targetVolume;
      clearInterval(fadeTimer);
      fadeTimer = null;
    } else {
      bgMusic.volume = Math.min(current, 1);
    }
  }, stepTime);
}

/* ---- Fade out ناعم ---- */
function fadeOutAudio(duration, callback) {
  if (fadeTimer) clearInterval(fadeTimer);
  const steps = 30;
  const stepTime = duration / steps;
  const startVolume = bgMusic.volume;
  const stepVolume = startVolume / steps;
  let current = startVolume;

  fadeTimer = setInterval(() => {
    current -= stepVolume;
    if (current <= 0) {
      bgMusic.volume = 0;
      clearInterval(fadeTimer);
      fadeTimer = null;
      if (typeof callback === "function") callback();
    } else {
      bgMusic.volume = Math.max(current, 0);
    }
  }, stepTime);
}

/* ---- Play ---- */
async function playMusic() {
  if (!bgMusic) return;
  try {
    bgMusic.volume = 0;
    await bgMusic.play();
    musicStarted = true;

    if (musicToggle) {
      musicToggle.classList.add("is-playing");
      musicToggle.setAttribute("aria-pressed", "true");
    }

    fadeInAudio(CONFIG.music.volume, CONFIG.music.fadeInDuration);
  } catch (err) {
    console.warn("Music play failed:", err);
  }
}

/* ---- Pause ---- */
function pauseMusic() {
  if (!bgMusic || !musicStarted) return;

  fadeOutAudio(CONFIG.music.fadeOutDuration, () => {
    bgMusic.pause();
  });

  if (musicToggle) {
    musicToggle.classList.remove("is-playing");
    musicToggle.setAttribute("aria-pressed", "false");
  }
}

/* ---- زر التشغيل/الإيقاف ---- */
if (musicToggle) {
  musicToggle.addEventListener("click", () => {
    if (bgMusic.paused) {
      playMusic();
    } else {
      pauseMusic();
    }
  });
}

/* ---- ابدأ الموسيقى لما يدوس Open ---- */
if (openButton && CONFIG.music.autoplayOnOpen) {
  openButton.addEventListener("click", () => {
    setTimeout(() => {
      playMusic();
    }, 400);
  });
}

/* ---- إيقاف/استئناف لما الصفحة تخفى ---- */
document.addEventListener("visibilitychange", () => {
  if (!bgMusic || !musicStarted) return;

  if (document.hidden) {
    bgMusic.pause();
  } else {
    if (musicToggle && musicToggle.classList.contains("is-playing")) {
      bgMusic.play().catch(() => {});
    }
  }
});