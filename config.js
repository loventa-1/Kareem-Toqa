/* ============================================================
   config.js — كل الإعدادات في مكان واحد
   عدّل هنا فقط، ومش هتحتاج تلمس باقي الملفات
   ============================================================ */

const CONFIG = {
  /* ---------- العروسين ---------- */
  groom: {
    name: "Kareem",
    role: "GROOM",
  },
  bride: {
    name: "Tuqa",
    role: "BRIDE",
  },

  /* ---------- التاريخ والوقت ---------- */
  // ⚠️ مهم: اكتب التاريخ بصيغة ISO
  // الصيغة: YYYY-MM-DDTHH:mm:ss  (بالتوقيت المحلي)
  weddingDate: "2026-11-06T20:00:00",
  weddingDurationHours: 5, // مدة الحفل بالساعات

  // تفاصيل العرض
  displayDate: {
    day: "THURSDAY",
    dayNumber: "06",
    month: "NOVEMBER",
    year: "2026",
    time: "20:00",
  },

  /* ---------- المكان ---------- */
  venue: {
    name: "L'opulence, Al-Madfaeya Gardens",
    mapUrl:
      "https://www.google.com/maps/place/30%C2%B004'49.1%22N+31%C2%B022'58.4%22E/@30.0803146,31.380312,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.0803146!4d31.3828869?hl=en&entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D",
  },

  /* ---------- الصور ---------- */
  images: {
    card: "assets/images/card.jpg",
    hero: "assets/images/hero.jpg",
    sectionBg: "assets/images/secBG.jpg",
    divider: "assets/images/divider.png",
    schedule: "assets/images/schedule.jpg",
    location: "assets/images/location.jpg",
  },

  /* ---------- الجدول الزمني ---------- */
  timeline: [
    { time: "19:00", label: "Welcome" },
    { time: "20:00", label: "Katb Ketab" },
    { time: "21:30", label: "Buffet" },
    { time: "23:00", label: "Ending" },
  ],

  /* ---------- تأكيد الحضور ---------- */
  // اختار واحد: "whatsapp" أو "google_form" أو "link"
  confirmMethod: "whatsapp",

  whatsapp: {
    phone: "201234567890", // ⚠️ بدون + وبدون مسافات
    message: "أؤكد حضوري لحفل زفاف كريم و تقى 💐",
  },

  googleFormUrl: "https://forms.gle/YOUR_FORM_ID",
  customLink: "",

  /* ---------- نصوص الموقع ---------- */
  texts: {
    ceremonyTitle: "CEREMONY INFO",
    ceremonySub1: "WE JOYFULLY ANNOUNCE",
    ceremonySub2: "THE WEDDING OF OUR CHILDREN",
    receptionTitle: "RECEPTION INFO",
    receptionSub: "THE RECEPTION WILL TAKE PLACE AT:",
    countdownTitle: "COUNTDOWN",
    venueTitle: "WEDDING RECEPTION VENUE",
    scheduleTitle: "WEDDING DAY SCHEDULE",
    guestbookTitle: "GUESTBOOK",
    openButton: "Open",
    invitesText: "Cordially Invites",
    addCalendarText: "Add to Calendar",
    confirmButtonText: "CONFIRM ATTENDANCE",
    locationButtonText: "GET LOCATION",
  },

  /* ---------- Guestbook ---------- */
  guestbook: {
    maxNameLength: 40,
    maxWishLength: 300,
    rateLimitSeconds: 60, // وقت الانتظار بين الرسائل
    duplicateWindowMinutes: 5, // منع نفس الرسالة خلال كام دقيقة
    maxMessagesPerDay: 3, // أقصى عدد رسائل في اليوم
    emojis: ["💐", "🎉", "❤️", "🥂", "💍", "✨", "🌹", "🎊", "💖", "🕊️"],
  },

  /* ---------- النجوم في الخلفية ---------- */
  stars: {
    count: 25,
  },

  /* ---------- Music ---------- */
  music: {
    src: "assets/music/wedding.mp3", // مسار ملف الموسيقى
    volume: 0.5, // مستوى الصوت (0.0 إلى 1.0)
    loop: true, // تكرار لا نهائي
    autoplayOnOpen: true, // يشتغل تلقائياً لما يدوس Open
    fadeInDuration: 1500, // مدة ظهور الصوت (ms)
    fadeOutDuration: 800, // مدة اختفاء الصوت (ms)
  },

  /* ---------- Footer ---------- */
  footer: {
    title: "Contact us to design your invitation",
    tagline: "Made with love by Loventa",
    designerUrl: "https://www.instagram.com/love__nta/", // لينك Loventa
    socials: [
      {
        name: "WhatsApp",
        url: "https://wa.me/201505646406",
        icon: "whatsapp",
      },
      {
        name: "Phone",
        url: "tel:+201505646406",
        icon: "phone",
      },
      {
        name: "TikTok",
        url: "https://tiktok.com/@loventa68",
        icon: "tiktok",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/love__nta/",
        icon: "instagram",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61565289157594",
        icon: "facebook",
      },
    ],
  },
};

/* ============================================================
   Firebase Config
   ============================================================ */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCRNhDyP_jif2aSYE_7wLwpxgOwVxrkZIU",
  authDomain: "wedding-invitation-ab1d6.firebaseapp.com",
  projectId: "wedding-invitation-ab1d6",
  storageBucket: "wedding-invitation-ab1d6.firebasestorage.app",
  messagingSenderId: "425698725677",
  appId: "1:425698725677:web:c4ad24b19edbfb4bfc4da4",
  measurementId: "G-JVFQ088YCE",
};
