import type { Level, Lesson } from "./types";

export const levels: Level[] = [
  { id: 1, title: "Fondasi", titleEn: "Foundation", description: "Greeting & Perkenalan", icon: "👋", color: "bg-emerald-500" },
  { id: 2, title: "Kalimat Inti", titleEn: "Core Sentences", description: "To Be & Angka", icon: "🔤", color: "bg-blue-500" },
  { id: 3, title: "Aktivitas Harian", titleEn: "Daily Life", description: "Simple Present", icon: "☀️", color: "bg-amber-500" },
  { id: 4, title: "Cerita Masa Lalu", titleEn: "Past Stories", description: "Simple Past", icon: "📖", color: "bg-purple-500" },
  { id: 5, title: "Rencana Masa Depan", titleEn: "Future Plans", description: "Will & Going To", icon: "🚀", color: "bg-pink-500" },
  { id: 6, title: "Email Kerja", titleEn: "Work Email", description: "Formal Writing", icon: "✉️", color: "bg-slate-700" },
  { id: 7, title: "Meeting & Interview", titleEn: "Meeting", description: "Speaking Profesional", icon: "💼", color: "bg-indigo-600" },
  { id: 8, title: "TOEFL Structure", titleEn: "TOEFL Structure", description: "Grammar Jebakan", icon: "📝", color: "bg-red-600" },
  { id: 9, title: "TOEFL Listening", titleEn: "TOEFL Listening", description: "Trik Listening", icon: "🎧", color: "bg-cyan-600" },
  { id: 10, title: "TOEFL Reading", titleEn: "TOEFL Reading", description: "Reading Komprehensif", icon: "📚", color: "bg-teal-600" },
];

export const lessons: Lesson[] = [
  {
    id: "1-1",
    levelId: 1,
    order: 1,
    title: "Sapa & Perkenalan",
    titleEn: "Greeting & Introduction",
    objective: "Bisa perkenalan 30 detik",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Sapa & Perkenalan (Greeting & Introduction) — Bisa perkenalan 30 detik. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Sapa & Perkenalan",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Greeting & Introduction A", id: "Contoh Sapa & Perkenalan A" },
            { en: "Example Greeting & Introduction B", id: "Contoh Sapa & Perkenalan B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Greeting & Introduction at work", id: "Saya pakai Sapa & Perkenalan di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Thank you", id: "Terima kasih", pronounce: "THENG-kyu", example: "Thank you!", exampleId: "Terima kasih!" },
      { en: "Please", id: "Tolong", pronounce: "pliiz", example: "Please help me", exampleId: "Tolong bantu saya" },
      { en: "Yes/No", id: "Ya/Tidak", pronounce: "yes/no", example: "Yes, I am", exampleId: "Ya, saya" },
      { en: "Good morning", id: "Selamat pagi", pronounce: "gud MOR-ning", example: "Good morning!", exampleId: "Selamat pagi!" },
      { en: "Good afternoon", id: "Selamat siang", pronounce: "gud af-ter-NUN", example: "Good afternoon", exampleId: "Selamat siang" },
      { en: "See you", id: "Sampai jumpa", pronounce: "si yu", example: "See you later", exampleId: "Sampai jumpa nanti" },
      { en: "I am", id: "Saya adalah", pronounce: "ai em", example: "I am ready", exampleId: "Saya siap" },
      { en: "You are", id: "Kamu adalah", pronounce: "yu ar", example: "You are kind", exampleId: "Kamu baik" },
      { en: "Hello", id: "Halo", pronounce: "he-LOU", example: "Hello, team!", exampleId: "Halo, tim!" },
      { en: "My name is", id: "Nama saya", pronounce: "mai neim iz", example: "My name is Rina", exampleId: "Nama saya Rina" }
    ],
    quiz: [
      { id: "1-1-q1", question: "Lesson 1-1 Q1: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Greeting & Introduction: ingat EI em pronounce." },
      { id: "1-1-q2", question: "Lesson 1-1 Q2: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Greeting & Introduction: ingat EI em pronounce." },
      { id: "1-1-q3", question: "Lesson 1-1 Q3: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Greeting & Introduction: ingat EI em pronounce." },
      { id: "1-1-q4", question: "Lesson 1-1 Q4: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Greeting & Introduction: ingat EI em pronounce." },
      { id: "1-1-q5", question: "Lesson 1-1 Q5: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Greeting & Introduction: ingat EI em pronounce." }
    ]
  },
  {
    id: "1-2",
    levelId: 1,
    order: 2,
    title: "Angka, Hari & Waktu",
    titleEn: "Numbers, Days & Time",
    objective: "Bisa sebut tanggal & jam kerja",
    duration: "20 menit",
    content: {
      intro: "Pelajaran Angka, Hari & Waktu (Numbers, Days & Time) — Bisa sebut tanggal & jam kerja. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Angka, Hari & Waktu",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Numbers, Days & Time A", id: "Contoh Angka, Hari & Waktu A" },
            { en: "Example Numbers, Days & Time B", id: "Contoh Angka, Hari & Waktu B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Numbers, Days & Time at work", id: "Saya pakai Angka, Hari & Waktu di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Yes/No", id: "Ya/Tidak", pronounce: "yes/no", example: "Yes, I am", exampleId: "Ya, saya" },
      { en: "Good morning", id: "Selamat pagi", pronounce: "gud MOR-ning", example: "Good morning!", exampleId: "Selamat pagi!" },
      { en: "Good afternoon", id: "Selamat siang", pronounce: "gud af-ter-NUN", example: "Good afternoon", exampleId: "Selamat siang" },
      { en: "See you", id: "Sampai jumpa", pronounce: "si yu", example: "See you later", exampleId: "Sampai jumpa nanti" },
      { en: "I am", id: "Saya adalah", pronounce: "ai em", example: "I am ready", exampleId: "Saya siap" },
      { en: "You are", id: "Kamu adalah", pronounce: "yu ar", example: "You are kind", exampleId: "Kamu baik" },
      { en: "Hello", id: "Halo", pronounce: "he-LOU", example: "Hello, team!", exampleId: "Halo, tim!" },
      { en: "My name is", id: "Nama saya", pronounce: "mai neim iz", example: "My name is Rina", exampleId: "Nama saya Rina" },
      { en: "Thank you", id: "Terima kasih", pronounce: "THENG-kyu", example: "Thank you!", exampleId: "Terima kasih!" },
      { en: "Please", id: "Tolong", pronounce: "pliiz", example: "Please help me", exampleId: "Tolong bantu saya" }
    ],
    quiz: [
      { id: "1-2-q1", question: "Lesson 1-2 Q1: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Numbers, Days & Time: ingat EI em pronounce." },
      { id: "1-2-q2", question: "Lesson 1-2 Q2: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Numbers, Days & Time: ingat EI em pronounce." },
      { id: "1-2-q3", question: "Lesson 1-2 Q3: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Numbers, Days & Time: ingat EI em pronounce." },
      { id: "1-2-q4", question: "Lesson 1-2 Q4: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Numbers, Days & Time: ingat EI em pronounce." },
      { id: "1-2-q5", question: "Lesson 1-2 Q5: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Numbers, Days & Time: ingat EI em pronounce." }
    ]
  },
  {
    id: "1-3",
    levelId: 1,
    order: 3,
    title: "To Be: I am, You are",
    titleEn: "To Be Basics",
    objective: "Paham am/is/are",
    duration: "20 menit",
    content: {
      intro: "Pelajaran To Be: I am, You are (To Be Basics) — Paham am/is/are. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola To Be: I am, You are",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example To Be Basics A", id: "Contoh To Be: I am, You are A" },
            { en: "Example To Be Basics B", id: "Contoh To Be: I am, You are B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use To Be Basics at work", id: "Saya pakai To Be: I am, You are di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Good afternoon", id: "Selamat siang", pronounce: "gud af-ter-NUN", example: "Good afternoon", exampleId: "Selamat siang" },
      { en: "See you", id: "Sampai jumpa", pronounce: "si yu", example: "See you later", exampleId: "Sampai jumpa nanti" },
      { en: "I am", id: "Saya adalah", pronounce: "ai em", example: "I am ready", exampleId: "Saya siap" },
      { en: "You are", id: "Kamu adalah", pronounce: "yu ar", example: "You are kind", exampleId: "Kamu baik" },
      { en: "Hello", id: "Halo", pronounce: "he-LOU", example: "Hello, team!", exampleId: "Halo, tim!" },
      { en: "My name is", id: "Nama saya", pronounce: "mai neim iz", example: "My name is Rina", exampleId: "Nama saya Rina" },
      { en: "Thank you", id: "Terima kasih", pronounce: "THENG-kyu", example: "Thank you!", exampleId: "Terima kasih!" },
      { en: "Please", id: "Tolong", pronounce: "pliiz", example: "Please help me", exampleId: "Tolong bantu saya" },
      { en: "Yes/No", id: "Ya/Tidak", pronounce: "yes/no", example: "Yes, I am", exampleId: "Ya, saya" },
      { en: "Good morning", id: "Selamat pagi", pronounce: "gud MOR-ning", example: "Good morning!", exampleId: "Selamat pagi!" }
    ],
    quiz: [
      { id: "1-3-q1", question: "Lesson 1-3 Q1: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola To Be Basics: ingat EI em pronounce." },
      { id: "1-3-q2", question: "Lesson 1-3 Q2: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola To Be Basics: ingat EI em pronounce." },
      { id: "1-3-q3", question: "Lesson 1-3 Q3: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola To Be Basics: ingat EI em pronounce." },
      { id: "1-3-q4", question: "Lesson 1-3 Q4: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola To Be Basics: ingat EI em pronounce." },
      { id: "1-3-q5", question: "Lesson 1-3 Q5: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola To Be Basics: ingat EI em pronounce." }
    ]
  },
  {
    id: "1-4",
    levelId: 1,
    order: 4,
    title: "This, That & Benda",
    titleEn: "This/That & Objects",
    objective: "Tunjuk barang di kantor",
    duration: "15 menit",
    content: {
      intro: "Pelajaran This, That & Benda (This/That & Objects) — Tunjuk barang di kantor. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola This, That & Benda",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example This/That & Objects A", id: "Contoh This, That & Benda A" },
            { en: "Example This/That & Objects B", id: "Contoh This, That & Benda B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use This/That & Objects at work", id: "Saya pakai This, That & Benda di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "I am", id: "Saya adalah", pronounce: "ai em", example: "I am ready", exampleId: "Saya siap" },
      { en: "You are", id: "Kamu adalah", pronounce: "yu ar", example: "You are kind", exampleId: "Kamu baik" },
      { en: "Hello", id: "Halo", pronounce: "he-LOU", example: "Hello, team!", exampleId: "Halo, tim!" },
      { en: "My name is", id: "Nama saya", pronounce: "mai neim iz", example: "My name is Rina", exampleId: "Nama saya Rina" },
      { en: "Thank you", id: "Terima kasih", pronounce: "THENG-kyu", example: "Thank you!", exampleId: "Terima kasih!" },
      { en: "Please", id: "Tolong", pronounce: "pliiz", example: "Please help me", exampleId: "Tolong bantu saya" },
      { en: "Yes/No", id: "Ya/Tidak", pronounce: "yes/no", example: "Yes, I am", exampleId: "Ya, saya" },
      { en: "Good morning", id: "Selamat pagi", pronounce: "gud MOR-ning", example: "Good morning!", exampleId: "Selamat pagi!" },
      { en: "Good afternoon", id: "Selamat siang", pronounce: "gud af-ter-NUN", example: "Good afternoon", exampleId: "Selamat siang" },
      { en: "See you", id: "Sampai jumpa", pronounce: "si yu", example: "See you later", exampleId: "Sampai jumpa nanti" }
    ],
    quiz: [
      { id: "1-4-q1", question: "Lesson 1-4 Q1: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola This/That & Objects: ingat EI em pronounce." },
      { id: "1-4-q2", question: "Lesson 1-4 Q2: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola This/That & Objects: ingat EI em pronounce." },
      { id: "1-4-q3", question: "Lesson 1-4 Q3: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola This/That & Objects: ingat EI em pronounce." },
      { id: "1-4-q4", question: "Lesson 1-4 Q4: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola This/That & Objects: ingat EI em pronounce." },
      { id: "1-4-q5", question: "Lesson 1-4 Q5: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola This/That & Objects: ingat EI em pronounce." }
    ]
  },
  {
    id: "1-5",
    levelId: 1,
    order: 5,
    title: "Keluarga & Kepemilikan",
    titleEn: "Family & Possessive",
    objective: "My/your/his/her",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Keluarga & Kepemilikan (Family & Possessive) — My/your/his/her. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Keluarga & Kepemilikan",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Family & Possessive A", id: "Contoh Keluarga & Kepemilikan A" },
            { en: "Example Family & Possessive B", id: "Contoh Keluarga & Kepemilikan B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Family & Possessive at work", id: "Saya pakai Keluarga & Kepemilikan di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Hello", id: "Halo", pronounce: "he-LOU", example: "Hello, team!", exampleId: "Halo, tim!" },
      { en: "My name is", id: "Nama saya", pronounce: "mai neim iz", example: "My name is Rina", exampleId: "Nama saya Rina" },
      { en: "Thank you", id: "Terima kasih", pronounce: "THENG-kyu", example: "Thank you!", exampleId: "Terima kasih!" },
      { en: "Please", id: "Tolong", pronounce: "pliiz", example: "Please help me", exampleId: "Tolong bantu saya" },
      { en: "Yes/No", id: "Ya/Tidak", pronounce: "yes/no", example: "Yes, I am", exampleId: "Ya, saya" },
      { en: "Good morning", id: "Selamat pagi", pronounce: "gud MOR-ning", example: "Good morning!", exampleId: "Selamat pagi!" },
      { en: "Good afternoon", id: "Selamat siang", pronounce: "gud af-ter-NUN", example: "Good afternoon", exampleId: "Selamat siang" },
      { en: "See you", id: "Sampai jumpa", pronounce: "si yu", example: "See you later", exampleId: "Sampai jumpa nanti" },
      { en: "I am", id: "Saya adalah", pronounce: "ai em", example: "I am ready", exampleId: "Saya siap" },
      { en: "You are", id: "Kamu adalah", pronounce: "yu ar", example: "You are kind", exampleId: "Kamu baik" }
    ],
    quiz: [
      { id: "1-5-q1", question: "Lesson 1-5 Q1: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Family & Possessive: ingat EI em pronounce." },
      { id: "1-5-q2", question: "Lesson 1-5 Q2: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Family & Possessive: ingat EI em pronounce." },
      { id: "1-5-q3", question: "Lesson 1-5 Q3: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Family & Possessive: ingat EI em pronounce." },
      { id: "1-5-q4", question: "Lesson 1-5 Q4: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Family & Possessive: ingat EI em pronounce." },
      { id: "1-5-q5", question: "Lesson 1-5 Q5: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Family & Possessive: ingat EI em pronounce." }
    ]
  },
  {
    id: "1-6",
    levelId: 1,
    order: 6,
    title: "There is/are & Di mana",
    titleEn: "There is/are & Places",
    objective: "Ada di mana",
    duration: "15 menit",
    content: {
      intro: "Pelajaran There is/are & Di mana (There is/are & Places) — Ada di mana. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola There is/are & Di mana",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example There is/are & Places A", id: "Contoh There is/are & Di mana A" },
            { en: "Example There is/are & Places B", id: "Contoh There is/are & Di mana B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use There is/are & Places at work", id: "Saya pakai There is/are & Di mana di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Thank you", id: "Terima kasih", pronounce: "THENG-kyu", example: "Thank you!", exampleId: "Terima kasih!" },
      { en: "Please", id: "Tolong", pronounce: "pliiz", example: "Please help me", exampleId: "Tolong bantu saya" },
      { en: "Yes/No", id: "Ya/Tidak", pronounce: "yes/no", example: "Yes, I am", exampleId: "Ya, saya" },
      { en: "Good morning", id: "Selamat pagi", pronounce: "gud MOR-ning", example: "Good morning!", exampleId: "Selamat pagi!" },
      { en: "Good afternoon", id: "Selamat siang", pronounce: "gud af-ter-NUN", example: "Good afternoon", exampleId: "Selamat siang" },
      { en: "See you", id: "Sampai jumpa", pronounce: "si yu", example: "See you later", exampleId: "Sampai jumpa nanti" },
      { en: "I am", id: "Saya adalah", pronounce: "ai em", example: "I am ready", exampleId: "Saya siap" },
      { en: "You are", id: "Kamu adalah", pronounce: "yu ar", example: "You are kind", exampleId: "Kamu baik" },
      { en: "Hello", id: "Halo", pronounce: "he-LOU", example: "Hello, team!", exampleId: "Halo, tim!" },
      { en: "My name is", id: "Nama saya", pronounce: "mai neim iz", example: "My name is Rina", exampleId: "Nama saya Rina" }
    ],
    quiz: [
      { id: "1-6-q1", question: "Lesson 1-6 Q1: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola There is/are & Places: ingat EI em pronounce." },
      { id: "1-6-q2", question: "Lesson 1-6 Q2: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola There is/are & Places: ingat EI em pronounce." },
      { id: "1-6-q3", question: "Lesson 1-6 Q3: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola There is/are & Places: ingat EI em pronounce." },
      { id: "1-6-q4", question: "Lesson 1-6 Q4: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola There is/are & Places: ingat EI em pronounce." },
      { id: "1-6-q5", question: "Lesson 1-6 Q5: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola There is/are & Places: ingat EI em pronounce." }
    ]
  },
  {
    id: "2-1",
    levelId: 2,
    order: 7,
    title: "Kata Kerja Harian",
    titleEn: "Daily Verbs",
    objective: "50 verb kerja",
    duration: "18 menit",
    content: {
      intro: "Pelajaran Kata Kerja Harian (Daily Verbs) — 50 verb kerja. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Kata Kerja Harian",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Daily Verbs A", id: "Contoh Kata Kerja Harian A" },
            { en: "Example Daily Verbs B", id: "Contoh Kata Kerja Harian B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Daily Verbs at work", id: "Saya pakai Kata Kerja Harian di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Desk", id: "Meja", pronounce: "desk", example: "My desk", exampleId: "Meja saya" },
      { en: "Time", id: "Waktu", pronounce: "taim", example: "What time?", exampleId: "Jam berapa?" },
      { en: "Work", id: "Kerja", pronounce: "werk", example: "I work", exampleId: "Saya kerja" },
      { en: "Go", id: "Pergi", pronounce: "go", example: "I go to office", exampleId: "Saya pergi ke kantor" },
      { en: "Eat", id: "Makan", pronounce: "iit", example: "I eat lunch", exampleId: "Saya makan siang" },
      { en: "Make", id: "Buat", pronounce: "meik", example: "I make report", exampleId: "Saya buat laporan" },
      { en: "Help", id: "Bantu", pronounce: "help", example: "Please help", exampleId: "Tolong bantu" },
      { en: "Need", id: "Butuh", pronounce: "niid", example: "I need time", exampleId: "Saya butuh waktu" },
      { en: "I have", id: "Saya punya", pronounce: "ai hev", example: "I have a laptop", exampleId: "Saya punya laptop" },
      { en: "Book", id: "Buku", pronounce: "buk", example: "This book", exampleId: "Buku ini" }
    ],
    quiz: [
      { id: "2-1-q1", question: "Lesson 2-1 Q1: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Daily Verbs: ingat EI em pronounce." },
      { id: "2-1-q2", question: "Lesson 2-1 Q2: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Daily Verbs: ingat EI em pronounce." },
      { id: "2-1-q3", question: "Lesson 2-1 Q3: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Daily Verbs: ingat EI em pronounce." },
      { id: "2-1-q4", question: "Lesson 2-1 Q4: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Daily Verbs: ingat EI em pronounce." },
      { id: "2-1-q5", question: "Lesson 2-1 Q5: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Daily Verbs: ingat EI em pronounce." }
    ]
  },
  {
    id: "2-2",
    levelId: 2,
    order: 8,
    title: "Saya Punya",
    titleEn: "Have/Has",
    objective: "I have 2 laptops",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Saya Punya (Have/Has) — I have 2 laptops. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Saya Punya",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Have/Has A", id: "Contoh Saya Punya A" },
            { en: "Example Have/Has B", id: "Contoh Saya Punya B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Have/Has at work", id: "Saya pakai Saya Punya di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Work", id: "Kerja", pronounce: "werk", example: "I work", exampleId: "Saya kerja" },
      { en: "Go", id: "Pergi", pronounce: "go", example: "I go to office", exampleId: "Saya pergi ke kantor" },
      { en: "Eat", id: "Makan", pronounce: "iit", example: "I eat lunch", exampleId: "Saya makan siang" },
      { en: "Make", id: "Buat", pronounce: "meik", example: "I make report", exampleId: "Saya buat laporan" },
      { en: "Help", id: "Bantu", pronounce: "help", example: "Please help", exampleId: "Tolong bantu" },
      { en: "Need", id: "Butuh", pronounce: "niid", example: "I need time", exampleId: "Saya butuh waktu" },
      { en: "I have", id: "Saya punya", pronounce: "ai hev", example: "I have a laptop", exampleId: "Saya punya laptop" },
      { en: "Book", id: "Buku", pronounce: "buk", example: "This book", exampleId: "Buku ini" },
      { en: "Desk", id: "Meja", pronounce: "desk", example: "My desk", exampleId: "Meja saya" },
      { en: "Time", id: "Waktu", pronounce: "taim", example: "What time?", exampleId: "Jam berapa?" }
    ],
    quiz: [
      { id: "2-2-q1", question: "Lesson 2-2 Q1: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Have/Has: ingat EI em pronounce." },
      { id: "2-2-q2", question: "Lesson 2-2 Q2: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Have/Has: ingat EI em pronounce." },
      { id: "2-2-q3", question: "Lesson 2-2 Q3: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Have/Has: ingat EI em pronounce." },
      { id: "2-2-q4", question: "Lesson 2-2 Q4: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Have/Has: ingat EI em pronounce." },
      { id: "2-2-q5", question: "Lesson 2-2 Q5: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Have/Has: ingat EI em pronounce." }
    ]
  },
  {
    id: "2-3",
    levelId: 2,
    order: 9,
    title: "Jadwal & Rutinitas",
    titleEn: "Schedule & Routine",
    objective: "I wake up at 6",
    duration: "18 menit",
    content: {
      intro: "Pelajaran Jadwal & Rutinitas (Schedule & Routine) — I wake up at 6. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Jadwal & Rutinitas",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Schedule & Routine A", id: "Contoh Jadwal & Rutinitas A" },
            { en: "Example Schedule & Routine B", id: "Contoh Jadwal & Rutinitas B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Schedule & Routine at work", id: "Saya pakai Jadwal & Rutinitas di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Eat", id: "Makan", pronounce: "iit", example: "I eat lunch", exampleId: "Saya makan siang" },
      { en: "Make", id: "Buat", pronounce: "meik", example: "I make report", exampleId: "Saya buat laporan" },
      { en: "Help", id: "Bantu", pronounce: "help", example: "Please help", exampleId: "Tolong bantu" },
      { en: "Need", id: "Butuh", pronounce: "niid", example: "I need time", exampleId: "Saya butuh waktu" },
      { en: "I have", id: "Saya punya", pronounce: "ai hev", example: "I have a laptop", exampleId: "Saya punya laptop" },
      { en: "Book", id: "Buku", pronounce: "buk", example: "This book", exampleId: "Buku ini" },
      { en: "Desk", id: "Meja", pronounce: "desk", example: "My desk", exampleId: "Meja saya" },
      { en: "Time", id: "Waktu", pronounce: "taim", example: "What time?", exampleId: "Jam berapa?" },
      { en: "Work", id: "Kerja", pronounce: "werk", example: "I work", exampleId: "Saya kerja" },
      { en: "Go", id: "Pergi", pronounce: "go", example: "I go to office", exampleId: "Saya pergi ke kantor" }
    ],
    quiz: [
      { id: "2-3-q1", question: "Lesson 2-3 Q1: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Schedule & Routine: ingat EI em pronounce." },
      { id: "2-3-q2", question: "Lesson 2-3 Q2: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Schedule & Routine: ingat EI em pronounce." },
      { id: "2-3-q3", question: "Lesson 2-3 Q3: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Schedule & Routine: ingat EI em pronounce." },
      { id: "2-3-q4", question: "Lesson 2-3 Q4: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Schedule & Routine: ingat EI em pronounce." },
      { id: "2-3-q5", question: "Lesson 2-3 Q5: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Schedule & Routine: ingat EI em pronounce." }
    ]
  },
  {
    id: "2-4",
    levelId: 2,
    order: 10,
    title: "Tanya What/Where",
    titleEn: "Asking Questions",
    objective: "What is...? Where is...?",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Tanya What/Where (Asking Questions) — What is...? Where is...?. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Tanya What/Where",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Asking Questions A", id: "Contoh Tanya What/Where A" },
            { en: "Example Asking Questions B", id: "Contoh Tanya What/Where B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Asking Questions at work", id: "Saya pakai Tanya What/Where di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Help", id: "Bantu", pronounce: "help", example: "Please help", exampleId: "Tolong bantu" },
      { en: "Need", id: "Butuh", pronounce: "niid", example: "I need time", exampleId: "Saya butuh waktu" },
      { en: "I have", id: "Saya punya", pronounce: "ai hev", example: "I have a laptop", exampleId: "Saya punya laptop" },
      { en: "Book", id: "Buku", pronounce: "buk", example: "This book", exampleId: "Buku ini" },
      { en: "Desk", id: "Meja", pronounce: "desk", example: "My desk", exampleId: "Meja saya" },
      { en: "Time", id: "Waktu", pronounce: "taim", example: "What time?", exampleId: "Jam berapa?" },
      { en: "Work", id: "Kerja", pronounce: "werk", example: "I work", exampleId: "Saya kerja" },
      { en: "Go", id: "Pergi", pronounce: "go", example: "I go to office", exampleId: "Saya pergi ke kantor" },
      { en: "Eat", id: "Makan", pronounce: "iit", example: "I eat lunch", exampleId: "Saya makan siang" },
      { en: "Make", id: "Buat", pronounce: "meik", example: "I make report", exampleId: "Saya buat laporan" }
    ],
    quiz: [
      { id: "2-4-q1", question: "Lesson 2-4 Q1: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Asking Questions: ingat EI em pronounce." },
      { id: "2-4-q2", question: "Lesson 2-4 Q2: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Asking Questions: ingat EI em pronounce." },
      { id: "2-4-q3", question: "Lesson 2-4 Q3: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Asking Questions: ingat EI em pronounce." },
      { id: "2-4-q4", question: "Lesson 2-4 Q4: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Asking Questions: ingat EI em pronounce." },
      { id: "2-4-q5", question: "Lesson 2-4 Q5: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Asking Questions: ingat EI em pronounce." }
    ]
  },
  {
    id: "2-5",
    levelId: 2,
    order: 11,
    title: "Negatif & Jangan",
    titleEn: "Negatives & Don't",
    objective: "I don't work...",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Negatif & Jangan (Negatives & Don't) — I don't work.... Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Negatif & Jangan",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Negatives & Don't A", id: "Contoh Negatif & Jangan A" },
            { en: "Example Negatives & Don't B", id: "Contoh Negatif & Jangan B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Negatives & Don't at work", id: "Saya pakai Negatif & Jangan di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "I have", id: "Saya punya", pronounce: "ai hev", example: "I have a laptop", exampleId: "Saya punya laptop" },
      { en: "Book", id: "Buku", pronounce: "buk", example: "This book", exampleId: "Buku ini" },
      { en: "Desk", id: "Meja", pronounce: "desk", example: "My desk", exampleId: "Meja saya" },
      { en: "Time", id: "Waktu", pronounce: "taim", example: "What time?", exampleId: "Jam berapa?" },
      { en: "Work", id: "Kerja", pronounce: "werk", example: "I work", exampleId: "Saya kerja" },
      { en: "Go", id: "Pergi", pronounce: "go", example: "I go to office", exampleId: "Saya pergi ke kantor" },
      { en: "Eat", id: "Makan", pronounce: "iit", example: "I eat lunch", exampleId: "Saya makan siang" },
      { en: "Make", id: "Buat", pronounce: "meik", example: "I make report", exampleId: "Saya buat laporan" },
      { en: "Help", id: "Bantu", pronounce: "help", example: "Please help", exampleId: "Tolong bantu" },
      { en: "Need", id: "Butuh", pronounce: "niid", example: "I need time", exampleId: "Saya butuh waktu" }
    ],
    quiz: [
      { id: "2-5-q1", question: "Lesson 2-5 Q1: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Negatives & Don't: ingat EI em pronounce." },
      { id: "2-5-q2", question: "Lesson 2-5 Q2: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Negatives & Don't: ingat EI em pronounce." },
      { id: "2-5-q3", question: "Lesson 2-5 Q3: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Negatives & Don't: ingat EI em pronounce." },
      { id: "2-5-q4", question: "Lesson 2-5 Q4: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Negatives & Don't: ingat EI em pronounce." },
      { id: "2-5-q5", question: "Lesson 2-5 Q5: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Negatives & Don't: ingat EI em pronounce." }
    ]
  },
  {
    id: "2-6",
    levelId: 2,
    order: 12,
    title: "Hitung & Harga",
    titleEn: "Numbers & Prices",
    objective: "How much is...",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Hitung & Harga (Numbers & Prices) — How much is.... Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Hitung & Harga",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Numbers & Prices A", id: "Contoh Hitung & Harga A" },
            { en: "Example Numbers & Prices B", id: "Contoh Hitung & Harga B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Numbers & Prices at work", id: "Saya pakai Hitung & Harga di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Desk", id: "Meja", pronounce: "desk", example: "My desk", exampleId: "Meja saya" },
      { en: "Time", id: "Waktu", pronounce: "taim", example: "What time?", exampleId: "Jam berapa?" },
      { en: "Work", id: "Kerja", pronounce: "werk", example: "I work", exampleId: "Saya kerja" },
      { en: "Go", id: "Pergi", pronounce: "go", example: "I go to office", exampleId: "Saya pergi ke kantor" },
      { en: "Eat", id: "Makan", pronounce: "iit", example: "I eat lunch", exampleId: "Saya makan siang" },
      { en: "Make", id: "Buat", pronounce: "meik", example: "I make report", exampleId: "Saya buat laporan" },
      { en: "Help", id: "Bantu", pronounce: "help", example: "Please help", exampleId: "Tolong bantu" },
      { en: "Need", id: "Butuh", pronounce: "niid", example: "I need time", exampleId: "Saya butuh waktu" },
      { en: "I have", id: "Saya punya", pronounce: "ai hev", example: "I have a laptop", exampleId: "Saya punya laptop" },
      { en: "Book", id: "Buku", pronounce: "buk", example: "This book", exampleId: "Buku ini" }
    ],
    quiz: [
      { id: "2-6-q1", question: "Lesson 2-6 Q1: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Numbers & Prices: ingat EI em pronounce." },
      { id: "2-6-q2", question: "Lesson 2-6 Q2: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Numbers & Prices: ingat EI em pronounce." },
      { id: "2-6-q3", question: "Lesson 2-6 Q3: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Numbers & Prices: ingat EI em pronounce." },
      { id: "2-6-q4", question: "Lesson 2-6 Q4: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Numbers & Prices: ingat EI em pronounce." },
      { id: "2-6-q5", question: "Lesson 2-6 Q5: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Numbers & Prices: ingat EI em pronounce." }
    ]
  },
  {
    id: "3-1",
    levelId: 3,
    order: 13,
    title: "Present: I work",
    titleEn: "Simple Present",
    objective: "I work from 9-5",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Present: I work (Simple Present) — I work from 9-5. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Present: I work",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Simple Present A", id: "Contoh Present: I work A" },
            { en: "Example Simple Present B", id: "Contoh Present: I work B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Simple Present at work", id: "Saya pakai Present: I work di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Like", id: "Suka", pronounce: "laik", example: "I like coffee", exampleId: "Saya suka kopi" },
      { en: "Want", id: "Ingin", pronounce: "wont", example: "I want to go", exampleId: "Saya ingin pergi" },
      { en: "Get up", id: "Bangun", pronounce: "get ap", example: "I get up at 6", exampleId: "Saya bangun jam 6" },
      { en: "Office", id: "Kantor", pronounce: "O-fis", example: "My office", exampleId: "Kantor saya" },
      { en: "Team", id: "Tim", pronounce: "tiim", example: "Our team", exampleId: "Tim kita" },
      { en: "Meeting", id: "Rapat", pronounce: "MII-ting", example: "Meeting at 9", exampleId: "Rapat jam 9" },
      { en: "Today", id: "Hari ini", pronounce: "tu-DEI", example: "Today is busy", exampleId: "Hari ini sibuk" },
      { en: "Every day", id: "Setiap hari", pronounce: "EV-ri dei", example: "Every day I work", exampleId: "Setiap hari saya kerja" },
      { en: "Always", id: "Selalu", pronounce: "OL-weis", example: "I always come", exampleId: "Saya selalu datang" },
      { en: "Usually", id: "Biasanya", pronounce: "YU-zwa-li", example: "I usually eat", exampleId: "Saya biasanya makan" }
    ],
    quiz: [
      { id: "3-1-q1", question: "Lesson 3-1 Q1: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Simple Present: ingat EI em pronounce." },
      { id: "3-1-q2", question: "Lesson 3-1 Q2: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Simple Present: ingat EI em pronounce." },
      { id: "3-1-q3", question: "Lesson 3-1 Q3: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Simple Present: ingat EI em pronounce." },
      { id: "3-1-q4", question: "Lesson 3-1 Q4: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Simple Present: ingat EI em pronounce." },
      { id: "3-1-q5", question: "Lesson 3-1 Q5: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Simple Present: ingat EI em pronounce." }
    ]
  },
  {
    id: "3-2",
    levelId: 3,
    order: 14,
    title: "Kebiasaan & Suka",
    titleEn: "Habits & Likes",
    objective: "I like coffee",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Kebiasaan & Suka (Habits & Likes) — I like coffee. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Kebiasaan & Suka",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Habits & Likes A", id: "Contoh Kebiasaan & Suka A" },
            { en: "Example Habits & Likes B", id: "Contoh Kebiasaan & Suka B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Habits & Likes at work", id: "Saya pakai Kebiasaan & Suka di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Get up", id: "Bangun", pronounce: "get ap", example: "I get up at 6", exampleId: "Saya bangun jam 6" },
      { en: "Office", id: "Kantor", pronounce: "O-fis", example: "My office", exampleId: "Kantor saya" },
      { en: "Team", id: "Tim", pronounce: "tiim", example: "Our team", exampleId: "Tim kita" },
      { en: "Meeting", id: "Rapat", pronounce: "MII-ting", example: "Meeting at 9", exampleId: "Rapat jam 9" },
      { en: "Today", id: "Hari ini", pronounce: "tu-DEI", example: "Today is busy", exampleId: "Hari ini sibuk" },
      { en: "Every day", id: "Setiap hari", pronounce: "EV-ri dei", example: "Every day I work", exampleId: "Setiap hari saya kerja" },
      { en: "Always", id: "Selalu", pronounce: "OL-weis", example: "I always come", exampleId: "Saya selalu datang" },
      { en: "Usually", id: "Biasanya", pronounce: "YU-zwa-li", example: "I usually eat", exampleId: "Saya biasanya makan" },
      { en: "Like", id: "Suka", pronounce: "laik", example: "I like coffee", exampleId: "Saya suka kopi" },
      { en: "Want", id: "Ingin", pronounce: "wont", example: "I want to go", exampleId: "Saya ingin pergi" }
    ],
    quiz: [
      { id: "3-2-q1", question: "Lesson 3-2 Q1: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Habits & Likes: ingat EI em pronounce." },
      { id: "3-2-q2", question: "Lesson 3-2 Q2: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Habits & Likes: ingat EI em pronounce." },
      { id: "3-2-q3", question: "Lesson 3-2 Q3: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Habits & Likes: ingat EI em pronounce." },
      { id: "3-2-q4", question: "Lesson 3-2 Q4: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Habits & Likes: ingat EI em pronounce." },
      { id: "3-2-q5", question: "Lesson 3-2 Q5: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Habits & Likes: ingat EI em pronounce." }
    ]
  },
  {
    id: "3-3",
    levelId: 3,
    order: 15,
    title: "Kata Keterangan Waktu",
    titleEn: "Adverbs of Time",
    objective: "Always, usually, never",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Kata Keterangan Waktu (Adverbs of Time) — Always, usually, never. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Kata Keterangan Waktu",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Adverbs of Time A", id: "Contoh Kata Keterangan Waktu A" },
            { en: "Example Adverbs of Time B", id: "Contoh Kata Keterangan Waktu B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Adverbs of Time at work", id: "Saya pakai Kata Keterangan Waktu di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Team", id: "Tim", pronounce: "tiim", example: "Our team", exampleId: "Tim kita" },
      { en: "Meeting", id: "Rapat", pronounce: "MII-ting", example: "Meeting at 9", exampleId: "Rapat jam 9" },
      { en: "Today", id: "Hari ini", pronounce: "tu-DEI", example: "Today is busy", exampleId: "Hari ini sibuk" },
      { en: "Every day", id: "Setiap hari", pronounce: "EV-ri dei", example: "Every day I work", exampleId: "Setiap hari saya kerja" },
      { en: "Always", id: "Selalu", pronounce: "OL-weis", example: "I always come", exampleId: "Saya selalu datang" },
      { en: "Usually", id: "Biasanya", pronounce: "YU-zwa-li", example: "I usually eat", exampleId: "Saya biasanya makan" },
      { en: "Like", id: "Suka", pronounce: "laik", example: "I like coffee", exampleId: "Saya suka kopi" },
      { en: "Want", id: "Ingin", pronounce: "wont", example: "I want to go", exampleId: "Saya ingin pergi" },
      { en: "Get up", id: "Bangun", pronounce: "get ap", example: "I get up at 6", exampleId: "Saya bangun jam 6" },
      { en: "Office", id: "Kantor", pronounce: "O-fis", example: "My office", exampleId: "Kantor saya" }
    ],
    quiz: [
      { id: "3-3-q1", question: "Lesson 3-3 Q1: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Adverbs of Time: ingat EI em pronounce." },
      { id: "3-3-q2", question: "Lesson 3-3 Q2: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Adverbs of Time: ingat EI em pronounce." },
      { id: "3-3-q3", question: "Lesson 3-3 Q3: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Adverbs of Time: ingat EI em pronounce." },
      { id: "3-3-q4", question: "Lesson 3-3 Q4: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Adverbs of Time: ingat EI em pronounce." },
      { id: "3-3-q5", question: "Lesson 3-3 Q5: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Adverbs of Time: ingat EI em pronounce." }
    ]
  },
  {
    id: "3-4",
    levelId: 3,
    order: 16,
    title: "Tanya Jawab Kerja",
    titleEn: "Work Q&A",
    objective: "What do you do?",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Tanya Jawab Kerja (Work Q&A) — What do you do?. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Tanya Jawab Kerja",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Work Q&A A", id: "Contoh Tanya Jawab Kerja A" },
            { en: "Example Work Q&A B", id: "Contoh Tanya Jawab Kerja B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Work Q&A at work", id: "Saya pakai Tanya Jawab Kerja di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Today", id: "Hari ini", pronounce: "tu-DEI", example: "Today is busy", exampleId: "Hari ini sibuk" },
      { en: "Every day", id: "Setiap hari", pronounce: "EV-ri dei", example: "Every day I work", exampleId: "Setiap hari saya kerja" },
      { en: "Always", id: "Selalu", pronounce: "OL-weis", example: "I always come", exampleId: "Saya selalu datang" },
      { en: "Usually", id: "Biasanya", pronounce: "YU-zwa-li", example: "I usually eat", exampleId: "Saya biasanya makan" },
      { en: "Like", id: "Suka", pronounce: "laik", example: "I like coffee", exampleId: "Saya suka kopi" },
      { en: "Want", id: "Ingin", pronounce: "wont", example: "I want to go", exampleId: "Saya ingin pergi" },
      { en: "Get up", id: "Bangun", pronounce: "get ap", example: "I get up at 6", exampleId: "Saya bangun jam 6" },
      { en: "Office", id: "Kantor", pronounce: "O-fis", example: "My office", exampleId: "Kantor saya" },
      { en: "Team", id: "Tim", pronounce: "tiim", example: "Our team", exampleId: "Tim kita" },
      { en: "Meeting", id: "Rapat", pronounce: "MII-ting", example: "Meeting at 9", exampleId: "Rapat jam 9" }
    ],
    quiz: [
      { id: "3-4-q1", question: "Lesson 3-4 Q1: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Work Q&A: ingat EI em pronounce." },
      { id: "3-4-q2", question: "Lesson 3-4 Q2: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Work Q&A: ingat EI em pronounce." },
      { id: "3-4-q3", question: "Lesson 3-4 Q3: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Work Q&A: ingat EI em pronounce." },
      { id: "3-4-q4", question: "Lesson 3-4 Q4: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Work Q&A: ingat EI em pronounce." },
      { id: "3-4-q5", question: "Lesson 3-4 Q5: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Work Q&A: ingat EI em pronounce." }
    ]
  },
  {
    id: "3-5",
    levelId: 3,
    order: 17,
    title: "Deskripsi Orang",
    titleEn: "Describing People",
    objective: "He is tall & friendly",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Deskripsi Orang (Describing People) — He is tall & friendly. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Deskripsi Orang",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Describing People A", id: "Contoh Deskripsi Orang A" },
            { en: "Example Describing People B", id: "Contoh Deskripsi Orang B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Describing People at work", id: "Saya pakai Deskripsi Orang di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Always", id: "Selalu", pronounce: "OL-weis", example: "I always come", exampleId: "Saya selalu datang" },
      { en: "Usually", id: "Biasanya", pronounce: "YU-zwa-li", example: "I usually eat", exampleId: "Saya biasanya makan" },
      { en: "Like", id: "Suka", pronounce: "laik", example: "I like coffee", exampleId: "Saya suka kopi" },
      { en: "Want", id: "Ingin", pronounce: "wont", example: "I want to go", exampleId: "Saya ingin pergi" },
      { en: "Get up", id: "Bangun", pronounce: "get ap", example: "I get up at 6", exampleId: "Saya bangun jam 6" },
      { en: "Office", id: "Kantor", pronounce: "O-fis", example: "My office", exampleId: "Kantor saya" },
      { en: "Team", id: "Tim", pronounce: "tiim", example: "Our team", exampleId: "Tim kita" },
      { en: "Meeting", id: "Rapat", pronounce: "MII-ting", example: "Meeting at 9", exampleId: "Rapat jam 9" },
      { en: "Today", id: "Hari ini", pronounce: "tu-DEI", example: "Today is busy", exampleId: "Hari ini sibuk" },
      { en: "Every day", id: "Setiap hari", pronounce: "EV-ri dei", example: "Every day I work", exampleId: "Setiap hari saya kerja" }
    ],
    quiz: [
      { id: "3-5-q1", question: "Lesson 3-5 Q1: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Describing People: ingat EI em pronounce." },
      { id: "3-5-q2", question: "Lesson 3-5 Q2: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Describing People: ingat EI em pronounce." },
      { id: "3-5-q3", question: "Lesson 3-5 Q3: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Describing People: ingat EI em pronounce." },
      { id: "3-5-q4", question: "Lesson 3-5 Q4: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Describing People: ingat EI em pronounce." },
      { id: "3-5-q5", question: "Lesson 3-5 Q5: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Describing People: ingat EI em pronounce." }
    ]
  },
  {
    id: "3-6",
    levelId: 3,
    order: 18,
    title: "Deskripsi Tempat",
    titleEn: "Describing Places",
    objective: "My office is clean",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Deskripsi Tempat (Describing Places) — My office is clean. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Deskripsi Tempat",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Describing Places A", id: "Contoh Deskripsi Tempat A" },
            { en: "Example Describing Places B", id: "Contoh Deskripsi Tempat B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Describing Places at work", id: "Saya pakai Deskripsi Tempat di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Like", id: "Suka", pronounce: "laik", example: "I like coffee", exampleId: "Saya suka kopi" },
      { en: "Want", id: "Ingin", pronounce: "wont", example: "I want to go", exampleId: "Saya ingin pergi" },
      { en: "Get up", id: "Bangun", pronounce: "get ap", example: "I get up at 6", exampleId: "Saya bangun jam 6" },
      { en: "Office", id: "Kantor", pronounce: "O-fis", example: "My office", exampleId: "Kantor saya" },
      { en: "Team", id: "Tim", pronounce: "tiim", example: "Our team", exampleId: "Tim kita" },
      { en: "Meeting", id: "Rapat", pronounce: "MII-ting", example: "Meeting at 9", exampleId: "Rapat jam 9" },
      { en: "Today", id: "Hari ini", pronounce: "tu-DEI", example: "Today is busy", exampleId: "Hari ini sibuk" },
      { en: "Every day", id: "Setiap hari", pronounce: "EV-ri dei", example: "Every day I work", exampleId: "Setiap hari saya kerja" },
      { en: "Always", id: "Selalu", pronounce: "OL-weis", example: "I always come", exampleId: "Saya selalu datang" },
      { en: "Usually", id: "Biasanya", pronounce: "YU-zwa-li", example: "I usually eat", exampleId: "Saya biasanya makan" }
    ],
    quiz: [
      { id: "3-6-q1", question: "Lesson 3-6 Q1: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Describing Places: ingat EI em pronounce." },
      { id: "3-6-q2", question: "Lesson 3-6 Q2: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Describing Places: ingat EI em pronounce." },
      { id: "3-6-q3", question: "Lesson 3-6 Q3: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Describing Places: ingat EI em pronounce." },
      { id: "3-6-q4", question: "Lesson 3-6 Q4: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Describing Places: ingat EI em pronounce." },
      { id: "3-6-q5", question: "Lesson 3-6 Q5: Choose correct", options: ["Option A","Option B (correct)","Option C","Option D"], answer: 1, explanation: "Pola Describing Places: ingat EI em pronounce." }
    ]
  },
  {
    id: "4-1",
    levelId: 4,
    order: 19,
    title: "Past: Yesterday",
    titleEn: "Simple Past Basics",
    objective: "I went yesterday",
    duration: "18 menit",
    content: {
      intro: "Pelajaran Past: Yesterday (Simple Past Basics) — I went yesterday. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Past: Yesterday",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Simple Past Basics A", id: "Contoh Past: Yesterday A" },
            { en: "Example Simple Past Basics B", id: "Contoh Past: Yesterday B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Simple Past Basics at work", id: "Saya pakai Past: Yesterday di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Was", id: "Adalah (past)", pronounce: "woz", example: "I was busy", exampleId: "Saya sibuk" },
      { en: "Were", id: "Adalah (past pl)", pronounce: "wer", example: "We were ready", exampleId: "Kita siap" },
      { en: "Did", id: "Apakah (past)", pronounce: "did", example: "Did you go?", exampleId: "Apakah kamu pergi?" },
      { en: "Visited", id: "Mengunjungi", pronounce: "VI-zi-tid", example: "I visited family", exampleId: "Saya kunjungi keluarga" },
      { en: "Finished", id: "Selesai", pronounce: "FI-nishd", example: "I finished work", exampleId: "Saya selesai kerja" },
      { en: "Called", id: "Menelepon", pronounce: "kold", example: "He called me", exampleId: "Dia menelepon saya" },
      { en: "Had", id: "Punya (past)", pronounce: "hed", example: "I had time", exampleId: "Saya punya waktu" },
      { en: "Said", id: "Berkata", pronounce: "sed", example: "She said hello", exampleId: "Dia berkata halo" },
      { en: "Yesterday", id: "Kemarin", pronounce: "YES-ter-dei", example: "Yesterday I went", exampleId: "Kemarin saya pergi" },
      { en: "Went", id: "Pergi (past)", pronounce: "went", example: "I went home", exampleId: "Saya pulang" }
    ],
    quiz: [
      { id: "4-1-q1", question: "Past/Future Q1 for Simple Past Basics", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-1-q2", question: "Past/Future Q2 for Simple Past Basics", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-1-q3", question: "Past/Future Q3 for Simple Past Basics", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-1-q4", question: "Past/Future Q4 for Simple Past Basics", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-1-q5", question: "Past/Future Q5 for Simple Past Basics", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." }
    ]
  },
  {
    id: "4-2",
    levelId: 4,
    order: 20,
    title: "Was/Were",
    titleEn: "Was & Were",
    objective: "I was busy",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Was/Were (Was & Were) — I was busy. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Was/Were",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Was & Were A", id: "Contoh Was/Were A" },
            { en: "Example Was & Were B", id: "Contoh Was/Were B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Was & Were at work", id: "Saya pakai Was/Were di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Did", id: "Apakah (past)", pronounce: "did", example: "Did you go?", exampleId: "Apakah kamu pergi?" },
      { en: "Visited", id: "Mengunjungi", pronounce: "VI-zi-tid", example: "I visited family", exampleId: "Saya kunjungi keluarga" },
      { en: "Finished", id: "Selesai", pronounce: "FI-nishd", example: "I finished work", exampleId: "Saya selesai kerja" },
      { en: "Called", id: "Menelepon", pronounce: "kold", example: "He called me", exampleId: "Dia menelepon saya" },
      { en: "Had", id: "Punya (past)", pronounce: "hed", example: "I had time", exampleId: "Saya punya waktu" },
      { en: "Said", id: "Berkata", pronounce: "sed", example: "She said hello", exampleId: "Dia berkata halo" },
      { en: "Yesterday", id: "Kemarin", pronounce: "YES-ter-dei", example: "Yesterday I went", exampleId: "Kemarin saya pergi" },
      { en: "Went", id: "Pergi (past)", pronounce: "went", example: "I went home", exampleId: "Saya pulang" },
      { en: "Was", id: "Adalah (past)", pronounce: "woz", example: "I was busy", exampleId: "Saya sibuk" },
      { en: "Were", id: "Adalah (past pl)", pronounce: "wer", example: "We were ready", exampleId: "Kita siap" }
    ],
    quiz: [
      { id: "4-2-q1", question: "Past/Future Q1 for Was & Were", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-2-q2", question: "Past/Future Q2 for Was & Were", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-2-q3", question: "Past/Future Q3 for Was & Were", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-2-q4", question: "Past/Future Q4 for Was & Were", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-2-q5", question: "Past/Future Q5 for Was & Were", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." }
    ]
  },
  {
    id: "4-3",
    levelId: 4,
    order: 21,
    title: "Cerita Libur",
    titleEn: "Weekend Story",
    objective: "I visited my family",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Cerita Libur (Weekend Story) — I visited my family. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Cerita Libur",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Weekend Story A", id: "Contoh Cerita Libur A" },
            { en: "Example Weekend Story B", id: "Contoh Cerita Libur B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Weekend Story at work", id: "Saya pakai Cerita Libur di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Finished", id: "Selesai", pronounce: "FI-nishd", example: "I finished work", exampleId: "Saya selesai kerja" },
      { en: "Called", id: "Menelepon", pronounce: "kold", example: "He called me", exampleId: "Dia menelepon saya" },
      { en: "Had", id: "Punya (past)", pronounce: "hed", example: "I had time", exampleId: "Saya punya waktu" },
      { en: "Said", id: "Berkata", pronounce: "sed", example: "She said hello", exampleId: "Dia berkata halo" },
      { en: "Yesterday", id: "Kemarin", pronounce: "YES-ter-dei", example: "Yesterday I went", exampleId: "Kemarin saya pergi" },
      { en: "Went", id: "Pergi (past)", pronounce: "went", example: "I went home", exampleId: "Saya pulang" },
      { en: "Was", id: "Adalah (past)", pronounce: "woz", example: "I was busy", exampleId: "Saya sibuk" },
      { en: "Were", id: "Adalah (past pl)", pronounce: "wer", example: "We were ready", exampleId: "Kita siap" },
      { en: "Did", id: "Apakah (past)", pronounce: "did", example: "Did you go?", exampleId: "Apakah kamu pergi?" },
      { en: "Visited", id: "Mengunjungi", pronounce: "VI-zi-tid", example: "I visited family", exampleId: "Saya kunjungi keluarga" }
    ],
    quiz: [
      { id: "4-3-q1", question: "Past/Future Q1 for Weekend Story", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-3-q2", question: "Past/Future Q2 for Weekend Story", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-3-q3", question: "Past/Future Q3 for Weekend Story", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-3-q4", question: "Past/Future Q4 for Weekend Story", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-3-q5", question: "Past/Future Q5 for Weekend Story", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." }
    ]
  },
  {
    id: "4-4",
    levelId: 4,
    order: 22,
    title: "Tanya Past",
    titleEn: "Past Questions",
    objective: "Did you...?",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Tanya Past (Past Questions) — Did you...?. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Tanya Past",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Past Questions A", id: "Contoh Tanya Past A" },
            { en: "Example Past Questions B", id: "Contoh Tanya Past B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Past Questions at work", id: "Saya pakai Tanya Past di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Had", id: "Punya (past)", pronounce: "hed", example: "I had time", exampleId: "Saya punya waktu" },
      { en: "Said", id: "Berkata", pronounce: "sed", example: "She said hello", exampleId: "Dia berkata halo" },
      { en: "Yesterday", id: "Kemarin", pronounce: "YES-ter-dei", example: "Yesterday I went", exampleId: "Kemarin saya pergi" },
      { en: "Went", id: "Pergi (past)", pronounce: "went", example: "I went home", exampleId: "Saya pulang" },
      { en: "Was", id: "Adalah (past)", pronounce: "woz", example: "I was busy", exampleId: "Saya sibuk" },
      { en: "Were", id: "Adalah (past pl)", pronounce: "wer", example: "We were ready", exampleId: "Kita siap" },
      { en: "Did", id: "Apakah (past)", pronounce: "did", example: "Did you go?", exampleId: "Apakah kamu pergi?" },
      { en: "Visited", id: "Mengunjungi", pronounce: "VI-zi-tid", example: "I visited family", exampleId: "Saya kunjungi keluarga" },
      { en: "Finished", id: "Selesai", pronounce: "FI-nishd", example: "I finished work", exampleId: "Saya selesai kerja" },
      { en: "Called", id: "Menelepon", pronounce: "kold", example: "He called me", exampleId: "Dia menelepon saya" }
    ],
    quiz: [
      { id: "4-4-q1", question: "Past/Future Q1 for Past Questions", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-4-q2", question: "Past/Future Q2 for Past Questions", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-4-q3", question: "Past/Future Q3 for Past Questions", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-4-q4", question: "Past/Future Q4 for Past Questions", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-4-q5", question: "Past/Future Q5 for Past Questions", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." }
    ]
  },
  {
    id: "4-5",
    levelId: 4,
    order: 23,
    title: "Pengalaman Kerja",
    titleEn: "Work Experience",
    objective: "I worked as...",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Pengalaman Kerja (Work Experience) — I worked as.... Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Pengalaman Kerja",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Work Experience A", id: "Contoh Pengalaman Kerja A" },
            { en: "Example Work Experience B", id: "Contoh Pengalaman Kerja B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Work Experience at work", id: "Saya pakai Pengalaman Kerja di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Yesterday", id: "Kemarin", pronounce: "YES-ter-dei", example: "Yesterday I went", exampleId: "Kemarin saya pergi" },
      { en: "Went", id: "Pergi (past)", pronounce: "went", example: "I went home", exampleId: "Saya pulang" },
      { en: "Was", id: "Adalah (past)", pronounce: "woz", example: "I was busy", exampleId: "Saya sibuk" },
      { en: "Were", id: "Adalah (past pl)", pronounce: "wer", example: "We were ready", exampleId: "Kita siap" },
      { en: "Did", id: "Apakah (past)", pronounce: "did", example: "Did you go?", exampleId: "Apakah kamu pergi?" },
      { en: "Visited", id: "Mengunjungi", pronounce: "VI-zi-tid", example: "I visited family", exampleId: "Saya kunjungi keluarga" },
      { en: "Finished", id: "Selesai", pronounce: "FI-nishd", example: "I finished work", exampleId: "Saya selesai kerja" },
      { en: "Called", id: "Menelepon", pronounce: "kold", example: "He called me", exampleId: "Dia menelepon saya" },
      { en: "Had", id: "Punya (past)", pronounce: "hed", example: "I had time", exampleId: "Saya punya waktu" },
      { en: "Said", id: "Berkata", pronounce: "sed", example: "She said hello", exampleId: "Dia berkata halo" }
    ],
    quiz: [
      { id: "4-5-q1", question: "Past/Future Q1 for Work Experience", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-5-q2", question: "Past/Future Q2 for Work Experience", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-5-q3", question: "Past/Future Q3 for Work Experience", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-5-q4", question: "Past/Future Q4 for Work Experience", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-5-q5", question: "Past/Future Q5 for Work Experience", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." }
    ]
  },
  {
    id: "4-6",
    levelId: 4,
    order: 24,
    title: "Cerita Berurutan",
    titleEn: "Sequence Past",
    objective: "First, then, finally",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Cerita Berurutan (Sequence Past) — First, then, finally. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Cerita Berurutan",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Sequence Past A", id: "Contoh Cerita Berurutan A" },
            { en: "Example Sequence Past B", id: "Contoh Cerita Berurutan B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Sequence Past at work", id: "Saya pakai Cerita Berurutan di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Was", id: "Adalah (past)", pronounce: "woz", example: "I was busy", exampleId: "Saya sibuk" },
      { en: "Were", id: "Adalah (past pl)", pronounce: "wer", example: "We were ready", exampleId: "Kita siap" },
      { en: "Did", id: "Apakah (past)", pronounce: "did", example: "Did you go?", exampleId: "Apakah kamu pergi?" },
      { en: "Visited", id: "Mengunjungi", pronounce: "VI-zi-tid", example: "I visited family", exampleId: "Saya kunjungi keluarga" },
      { en: "Finished", id: "Selesai", pronounce: "FI-nishd", example: "I finished work", exampleId: "Saya selesai kerja" },
      { en: "Called", id: "Menelepon", pronounce: "kold", example: "He called me", exampleId: "Dia menelepon saya" },
      { en: "Had", id: "Punya (past)", pronounce: "hed", example: "I had time", exampleId: "Saya punya waktu" },
      { en: "Said", id: "Berkata", pronounce: "sed", example: "She said hello", exampleId: "Dia berkata halo" },
      { en: "Yesterday", id: "Kemarin", pronounce: "YES-ter-dei", example: "Yesterday I went", exampleId: "Kemarin saya pergi" },
      { en: "Went", id: "Pergi (past)", pronounce: "went", example: "I went home", exampleId: "Saya pulang" }
    ],
    quiz: [
      { id: "4-6-q1", question: "Past/Future Q1 for Sequence Past", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-6-q2", question: "Past/Future Q2 for Sequence Past", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-6-q3", question: "Past/Future Q3 for Sequence Past", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-6-q4", question: "Past/Future Q4 for Sequence Past", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "4-6-q5", question: "Past/Future Q5 for Sequence Past", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." }
    ]
  },
  {
    id: "5-1",
    levelId: 5,
    order: 25,
    title: "Will: Rencana",
    titleEn: "Will Future",
    objective: "I will call you",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Will: Rencana (Will Future) — I will call you. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Will: Rencana",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Will Future A", id: "Contoh Will: Rencana A" },
            { en: "Example Will Future B", id: "Contoh Will: Rencana B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Will Future at work", id: "Saya pakai Will: Rencana di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Plan", id: "Rencana", pronounce: "plen", example: "My plan", exampleId: "Rencana saya" },
      { en: "Tomorrow", id: "Besok", pronounce: "tu-MO-rou", example: "Tomorrow I will", exampleId: "Besok saya akan" },
      { en: "Next week", id: "Minggu depan", pronounce: "nekst wiik", example: "Next week we will", exampleId: "Minggu depan kita akan" },
      { en: "Promise", id: "Janji", pronounce: "PRO-mis", example: "I promise", exampleId: "Saya janji" },
      { en: "Maybe", id: "Mungkin", pronounce: "MEI-bi", example: "Maybe I will", exampleId: "Mungkin saya akan" },
      { en: "Soon", id: "Segera", pronounce: "sun", example: "See you soon", exampleId: "Sampai jumpa segera" },
      { en: "Hope", id: "Harap", pronounce: "houp", example: "I hope to go", exampleId: "Saya harap pergi" },
      { en: "Expect", id: "Mengharapkan", pronounce: "ik-SPEKT", example: "I expect to come", exampleId: "Saya harap datang" },
      { en: "Will", id: "Akan", pronounce: "wil", example: "I will call", exampleId: "Saya akan telepon" },
      { en: "Going to", id: "Akan", pronounce: "GO-ing tu", example: "I'm going to go", exampleId: "Saya akan pergi" }
    ],
    quiz: [
      { id: "5-1-q1", question: "Past/Future Q1 for Will Future", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-1-q2", question: "Past/Future Q2 for Will Future", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-1-q3", question: "Past/Future Q3 for Will Future", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-1-q4", question: "Past/Future Q4 for Will Future", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-1-q5", question: "Past/Future Q5 for Will Future", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." }
    ]
  },
  {
    id: "5-2",
    levelId: 5,
    order: 26,
    title: "Going to",
    titleEn: "Going to Plans",
    objective: "I am going to...",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Going to (Going to Plans) — I am going to.... Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Going to",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Going to Plans A", id: "Contoh Going to A" },
            { en: "Example Going to Plans B", id: "Contoh Going to B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Going to Plans at work", id: "Saya pakai Going to di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Next week", id: "Minggu depan", pronounce: "nekst wiik", example: "Next week we will", exampleId: "Minggu depan kita akan" },
      { en: "Promise", id: "Janji", pronounce: "PRO-mis", example: "I promise", exampleId: "Saya janji" },
      { en: "Maybe", id: "Mungkin", pronounce: "MEI-bi", example: "Maybe I will", exampleId: "Mungkin saya akan" },
      { en: "Soon", id: "Segera", pronounce: "sun", example: "See you soon", exampleId: "Sampai jumpa segera" },
      { en: "Hope", id: "Harap", pronounce: "houp", example: "I hope to go", exampleId: "Saya harap pergi" },
      { en: "Expect", id: "Mengharapkan", pronounce: "ik-SPEKT", example: "I expect to come", exampleId: "Saya harap datang" },
      { en: "Will", id: "Akan", pronounce: "wil", example: "I will call", exampleId: "Saya akan telepon" },
      { en: "Going to", id: "Akan", pronounce: "GO-ing tu", example: "I'm going to go", exampleId: "Saya akan pergi" },
      { en: "Plan", id: "Rencana", pronounce: "plen", example: "My plan", exampleId: "Rencana saya" },
      { en: "Tomorrow", id: "Besok", pronounce: "tu-MO-rou", example: "Tomorrow I will", exampleId: "Besok saya akan" }
    ],
    quiz: [
      { id: "5-2-q1", question: "Past/Future Q1 for Going to Plans", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-2-q2", question: "Past/Future Q2 for Going to Plans", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-2-q3", question: "Past/Future Q3 for Going to Plans", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-2-q4", question: "Past/Future Q4 for Going to Plans", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-2-q5", question: "Past/Future Q5 for Going to Plans", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." }
    ]
  },
  {
    id: "5-3",
    levelId: 5,
    order: 27,
    title: "Janji & Tawaran",
    titleEn: "Promises & Offers",
    objective: "Can I help?",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Janji & Tawaran (Promises & Offers) — Can I help?. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Janji & Tawaran",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Promises & Offers A", id: "Contoh Janji & Tawaran A" },
            { en: "Example Promises & Offers B", id: "Contoh Janji & Tawaran B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Promises & Offers at work", id: "Saya pakai Janji & Tawaran di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Maybe", id: "Mungkin", pronounce: "MEI-bi", example: "Maybe I will", exampleId: "Mungkin saya akan" },
      { en: "Soon", id: "Segera", pronounce: "sun", example: "See you soon", exampleId: "Sampai jumpa segera" },
      { en: "Hope", id: "Harap", pronounce: "houp", example: "I hope to go", exampleId: "Saya harap pergi" },
      { en: "Expect", id: "Mengharapkan", pronounce: "ik-SPEKT", example: "I expect to come", exampleId: "Saya harap datang" },
      { en: "Will", id: "Akan", pronounce: "wil", example: "I will call", exampleId: "Saya akan telepon" },
      { en: "Going to", id: "Akan", pronounce: "GO-ing tu", example: "I'm going to go", exampleId: "Saya akan pergi" },
      { en: "Plan", id: "Rencana", pronounce: "plen", example: "My plan", exampleId: "Rencana saya" },
      { en: "Tomorrow", id: "Besok", pronounce: "tu-MO-rou", example: "Tomorrow I will", exampleId: "Besok saya akan" },
      { en: "Next week", id: "Minggu depan", pronounce: "nekst wiik", example: "Next week we will", exampleId: "Minggu depan kita akan" },
      { en: "Promise", id: "Janji", pronounce: "PRO-mis", example: "I promise", exampleId: "Saya janji" }
    ],
    quiz: [
      { id: "5-3-q1", question: "Past/Future Q1 for Promises & Offers", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-3-q2", question: "Past/Future Q2 for Promises & Offers", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-3-q3", question: "Past/Future Q3 for Promises & Offers", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-3-q4", question: "Past/Future Q4 for Promises & Offers", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-3-q5", question: "Past/Future Q5 for Promises & Offers", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." }
    ]
  },
  {
    id: "5-4",
    levelId: 5,
    order: 28,
    title: "Prediksi",
    titleEn: "Predictions",
    objective: "It will be...",
    duration: "14 menit",
    content: {
      intro: "Pelajaran Prediksi (Predictions) — It will be.... Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Prediksi",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Predictions A", id: "Contoh Prediksi A" },
            { en: "Example Predictions B", id: "Contoh Prediksi B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Predictions at work", id: "Saya pakai Prediksi di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Hope", id: "Harap", pronounce: "houp", example: "I hope to go", exampleId: "Saya harap pergi" },
      { en: "Expect", id: "Mengharapkan", pronounce: "ik-SPEKT", example: "I expect to come", exampleId: "Saya harap datang" },
      { en: "Will", id: "Akan", pronounce: "wil", example: "I will call", exampleId: "Saya akan telepon" },
      { en: "Going to", id: "Akan", pronounce: "GO-ing tu", example: "I'm going to go", exampleId: "Saya akan pergi" },
      { en: "Plan", id: "Rencana", pronounce: "plen", example: "My plan", exampleId: "Rencana saya" },
      { en: "Tomorrow", id: "Besok", pronounce: "tu-MO-rou", example: "Tomorrow I will", exampleId: "Besok saya akan" },
      { en: "Next week", id: "Minggu depan", pronounce: "nekst wiik", example: "Next week we will", exampleId: "Minggu depan kita akan" },
      { en: "Promise", id: "Janji", pronounce: "PRO-mis", example: "I promise", exampleId: "Saya janji" },
      { en: "Maybe", id: "Mungkin", pronounce: "MEI-bi", example: "Maybe I will", exampleId: "Mungkin saya akan" },
      { en: "Soon", id: "Segera", pronounce: "sun", example: "See you soon", exampleId: "Sampai jumpa segera" }
    ],
    quiz: [
      { id: "5-4-q1", question: "Past/Future Q1 for Predictions", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-4-q2", question: "Past/Future Q2 for Predictions", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-4-q3", question: "Past/Future Q3 for Predictions", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-4-q4", question: "Past/Future Q4 for Predictions", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-4-q5", question: "Past/Future Q5 for Predictions", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." }
    ]
  },
  {
    id: "5-5",
    levelId: 5,
    order: 29,
    title: "Rencana Minggu Depan",
    titleEn: "Next Week Plan",
    objective: "I will meet...",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Rencana Minggu Depan (Next Week Plan) — I will meet.... Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Rencana Minggu Depan",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Next Week Plan A", id: "Contoh Rencana Minggu Depan A" },
            { en: "Example Next Week Plan B", id: "Contoh Rencana Minggu Depan B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Next Week Plan at work", id: "Saya pakai Rencana Minggu Depan di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Will", id: "Akan", pronounce: "wil", example: "I will call", exampleId: "Saya akan telepon" },
      { en: "Going to", id: "Akan", pronounce: "GO-ing tu", example: "I'm going to go", exampleId: "Saya akan pergi" },
      { en: "Plan", id: "Rencana", pronounce: "plen", example: "My plan", exampleId: "Rencana saya" },
      { en: "Tomorrow", id: "Besok", pronounce: "tu-MO-rou", example: "Tomorrow I will", exampleId: "Besok saya akan" },
      { en: "Next week", id: "Minggu depan", pronounce: "nekst wiik", example: "Next week we will", exampleId: "Minggu depan kita akan" },
      { en: "Promise", id: "Janji", pronounce: "PRO-mis", example: "I promise", exampleId: "Saya janji" },
      { en: "Maybe", id: "Mungkin", pronounce: "MEI-bi", example: "Maybe I will", exampleId: "Mungkin saya akan" },
      { en: "Soon", id: "Segera", pronounce: "sun", example: "See you soon", exampleId: "Sampai jumpa segera" },
      { en: "Hope", id: "Harap", pronounce: "houp", example: "I hope to go", exampleId: "Saya harap pergi" },
      { en: "Expect", id: "Mengharapkan", pronounce: "ik-SPEKT", example: "I expect to come", exampleId: "Saya harap datang" }
    ],
    quiz: [
      { id: "5-5-q1", question: "Past/Future Q1 for Next Week Plan", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-5-q2", question: "Past/Future Q2 for Next Week Plan", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-5-q3", question: "Past/Future Q3 for Next Week Plan", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-5-q4", question: "Past/Future Q4 for Next Week Plan", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-5-q5", question: "Past/Future Q5 for Next Week Plan", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." }
    ]
  },
  {
    id: "5-6",
    levelId: 5,
    order: 30,
    title: "Booking & Janji",
    titleEn: "Booking & Appointments",
    objective: "Let's meet at...",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Booking & Janji (Booking & Appointments) — Let's meet at.... Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Booking & Janji",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Booking & Appointments A", id: "Contoh Booking & Janji A" },
            { en: "Example Booking & Appointments B", id: "Contoh Booking & Janji B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Booking & Appointments at work", id: "Saya pakai Booking & Janji di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Plan", id: "Rencana", pronounce: "plen", example: "My plan", exampleId: "Rencana saya" },
      { en: "Tomorrow", id: "Besok", pronounce: "tu-MO-rou", example: "Tomorrow I will", exampleId: "Besok saya akan" },
      { en: "Next week", id: "Minggu depan", pronounce: "nekst wiik", example: "Next week we will", exampleId: "Minggu depan kita akan" },
      { en: "Promise", id: "Janji", pronounce: "PRO-mis", example: "I promise", exampleId: "Saya janji" },
      { en: "Maybe", id: "Mungkin", pronounce: "MEI-bi", example: "Maybe I will", exampleId: "Mungkin saya akan" },
      { en: "Soon", id: "Segera", pronounce: "sun", example: "See you soon", exampleId: "Sampai jumpa segera" },
      { en: "Hope", id: "Harap", pronounce: "houp", example: "I hope to go", exampleId: "Saya harap pergi" },
      { en: "Expect", id: "Mengharapkan", pronounce: "ik-SPEKT", example: "I expect to come", exampleId: "Saya harap datang" },
      { en: "Will", id: "Akan", pronounce: "wil", example: "I will call", exampleId: "Saya akan telepon" },
      { en: "Going to", id: "Akan", pronounce: "GO-ing tu", example: "I'm going to go", exampleId: "Saya akan pergi" }
    ],
    quiz: [
      { id: "5-6-q1", question: "Past/Future Q1 for Booking & Appointments", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-6-q2", question: "Past/Future Q2 for Booking & Appointments", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-6-q3", question: "Past/Future Q3 for Booking & Appointments", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-6-q4", question: "Past/Future Q4 for Booking & Appointments", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." },
      { id: "5-6-q5", question: "Past/Future Q5 for Booking & Appointments", options: ["I go","I went (correct)","I going","I goed"], answer: 1, explanation: "Past pakai V2 (went), bukan goed." }
    ]
  },
  {
    id: "6-1",
    levelId: 6,
    order: 31,
    title: "Email Formal 1",
    titleEn: "Formal Email 1",
    objective: "Subject & greeting",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Email Formal 1 (Formal Email 1) — Subject & greeting. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Email Formal 1",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Formal Email 1 A", id: "Contoh Email Formal 1 A" },
            { en: "Example Formal Email 1 B", id: "Contoh Email Formal 1 B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Formal Email 1 at work", id: "Saya pakai Email Formal 1 di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Could you", id: "Bisakah", pronounce: "kud yu", example: "Could you send?", exampleId: "Bisakah kirim?" },
      { en: "Kindly", id: "Dengan hormat", pronounce: "KAIN-dli", example: "Kindly check", exampleId: "Mohon cek" },
      { en: "Regards", id: "Salam", pronounce: "ri-GARDZ", example: "Best regards", exampleId: "Salam hormat" },
      { en: "Subject", id: "Subjek", pronounce: "SAB-jekt", example: "Subject: Meeting", exampleId: "Subjek: Rapat" },
      { en: "Urgent", id: "Mendesak", pronounce: "ER-jent", example: "This is urgent", exampleId: "Ini mendesak" },
      { en: "Confirm", id: "Konfirmasi", pronounce: "kon-FERM", example: "Please confirm", exampleId: "Mohon konfirmasi" },
      { en: "Forward", id: "Teruskan", pronounce: "FOR-werd", example: "I will forward", exampleId: "Saya akan teruskan" },
      { en: "Deadline", id: "Batas waktu", pronounce: "DED-lain", example: "Deadline Friday", exampleId: "Batas Jumat" },
      { en: "Please find", id: "Silakan lihat", pronounce: "pliiz faind", example: "Please find attached", exampleId: "Silakan lihat terlampir" },
      { en: "Attached", id: "Terlampir", pronounce: "e-TECHD", example: "Attached is file", exampleId: "Terlampir berkas" }
    ],
    quiz: [
      { id: "6-1-q1", question: "Work Q1: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-1-q2", question: "Work Q2: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-1-q3", question: "Work Q3: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-1-q4", question: "Work Q4: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-1-q5", question: "Work Q5: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." }
    ]
  },
  {
    id: "6-2",
    levelId: 6,
    order: 32,
    title: "Email Formal 2",
    titleEn: "Formal Email 2",
    objective: "Body & closing",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Email Formal 2 (Formal Email 2) — Body & closing. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Email Formal 2",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Formal Email 2 A", id: "Contoh Email Formal 2 A" },
            { en: "Example Formal Email 2 B", id: "Contoh Email Formal 2 B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Formal Email 2 at work", id: "Saya pakai Email Formal 2 di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Regards", id: "Salam", pronounce: "ri-GARDZ", example: "Best regards", exampleId: "Salam hormat" },
      { en: "Subject", id: "Subjek", pronounce: "SAB-jekt", example: "Subject: Meeting", exampleId: "Subjek: Rapat" },
      { en: "Urgent", id: "Mendesak", pronounce: "ER-jent", example: "This is urgent", exampleId: "Ini mendesak" },
      { en: "Confirm", id: "Konfirmasi", pronounce: "kon-FERM", example: "Please confirm", exampleId: "Mohon konfirmasi" },
      { en: "Forward", id: "Teruskan", pronounce: "FOR-werd", example: "I will forward", exampleId: "Saya akan teruskan" },
      { en: "Deadline", id: "Batas waktu", pronounce: "DED-lain", example: "Deadline Friday", exampleId: "Batas Jumat" },
      { en: "Please find", id: "Silakan lihat", pronounce: "pliiz faind", example: "Please find attached", exampleId: "Silakan lihat terlampir" },
      { en: "Attached", id: "Terlampir", pronounce: "e-TECHD", example: "Attached is file", exampleId: "Terlampir berkas" },
      { en: "Could you", id: "Bisakah", pronounce: "kud yu", example: "Could you send?", exampleId: "Bisakah kirim?" },
      { en: "Kindly", id: "Dengan hormat", pronounce: "KAIN-dli", example: "Kindly check", exampleId: "Mohon cek" }
    ],
    quiz: [
      { id: "6-2-q1", question: "Work Q1: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-2-q2", question: "Work Q2: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-2-q3", question: "Work Q3: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-2-q4", question: "Work Q4: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-2-q5", question: "Work Q5: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." }
    ]
  },
  {
    id: "6-3",
    levelId: 6,
    order: 33,
    title: "Chat Kerja Slack",
    titleEn: "Work Chat",
    objective: "Please check...",
    duration: "14 menit",
    content: {
      intro: "Pelajaran Chat Kerja Slack (Work Chat) — Please check.... Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Chat Kerja Slack",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Work Chat A", id: "Contoh Chat Kerja Slack A" },
            { en: "Example Work Chat B", id: "Contoh Chat Kerja Slack B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Work Chat at work", id: "Saya pakai Chat Kerja Slack di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Urgent", id: "Mendesak", pronounce: "ER-jent", example: "This is urgent", exampleId: "Ini mendesak" },
      { en: "Confirm", id: "Konfirmasi", pronounce: "kon-FERM", example: "Please confirm", exampleId: "Mohon konfirmasi" },
      { en: "Forward", id: "Teruskan", pronounce: "FOR-werd", example: "I will forward", exampleId: "Saya akan teruskan" },
      { en: "Deadline", id: "Batas waktu", pronounce: "DED-lain", example: "Deadline Friday", exampleId: "Batas Jumat" },
      { en: "Please find", id: "Silakan lihat", pronounce: "pliiz faind", example: "Please find attached", exampleId: "Silakan lihat terlampir" },
      { en: "Attached", id: "Terlampir", pronounce: "e-TECHD", example: "Attached is file", exampleId: "Terlampir berkas" },
      { en: "Could you", id: "Bisakah", pronounce: "kud yu", example: "Could you send?", exampleId: "Bisakah kirim?" },
      { en: "Kindly", id: "Dengan hormat", pronounce: "KAIN-dli", example: "Kindly check", exampleId: "Mohon cek" },
      { en: "Regards", id: "Salam", pronounce: "ri-GARDZ", example: "Best regards", exampleId: "Salam hormat" },
      { en: "Subject", id: "Subjek", pronounce: "SAB-jekt", example: "Subject: Meeting", exampleId: "Subjek: Rapat" }
    ],
    quiz: [
      { id: "6-3-q1", question: "Work Q1: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-3-q2", question: "Work Q2: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-3-q3", question: "Work Q3: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-3-q4", question: "Work Q4: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-3-q5", question: "Work Q5: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." }
    ]
  },
  {
    id: "6-4",
    levelId: 6,
    order: 34,
    title: "Permintaan Sopan",
    titleEn: "Polite Requests",
    objective: "Could you...?",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Permintaan Sopan (Polite Requests) — Could you...?. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Permintaan Sopan",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Polite Requests A", id: "Contoh Permintaan Sopan A" },
            { en: "Example Polite Requests B", id: "Contoh Permintaan Sopan B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Polite Requests at work", id: "Saya pakai Permintaan Sopan di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Forward", id: "Teruskan", pronounce: "FOR-werd", example: "I will forward", exampleId: "Saya akan teruskan" },
      { en: "Deadline", id: "Batas waktu", pronounce: "DED-lain", example: "Deadline Friday", exampleId: "Batas Jumat" },
      { en: "Please find", id: "Silakan lihat", pronounce: "pliiz faind", example: "Please find attached", exampleId: "Silakan lihat terlampir" },
      { en: "Attached", id: "Terlampir", pronounce: "e-TECHD", example: "Attached is file", exampleId: "Terlampir berkas" },
      { en: "Could you", id: "Bisakah", pronounce: "kud yu", example: "Could you send?", exampleId: "Bisakah kirim?" },
      { en: "Kindly", id: "Dengan hormat", pronounce: "KAIN-dli", example: "Kindly check", exampleId: "Mohon cek" },
      { en: "Regards", id: "Salam", pronounce: "ri-GARDZ", example: "Best regards", exampleId: "Salam hormat" },
      { en: "Subject", id: "Subjek", pronounce: "SAB-jekt", example: "Subject: Meeting", exampleId: "Subjek: Rapat" },
      { en: "Urgent", id: "Mendesak", pronounce: "ER-jent", example: "This is urgent", exampleId: "Ini mendesak" },
      { en: "Confirm", id: "Konfirmasi", pronounce: "kon-FERM", example: "Please confirm", exampleId: "Mohon konfirmasi" }
    ],
    quiz: [
      { id: "6-4-q1", question: "Work Q1: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-4-q2", question: "Work Q2: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-4-q3", question: "Work Q3: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-4-q4", question: "Work Q4: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-4-q5", question: "Work Q5: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." }
    ]
  },
  {
    id: "6-5",
    levelId: 6,
    order: 35,
    title: "Laporan Singkat",
    titleEn: "Short Report",
    objective: "Attached is...",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Laporan Singkat (Short Report) — Attached is.... Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Laporan Singkat",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Short Report A", id: "Contoh Laporan Singkat A" },
            { en: "Example Short Report B", id: "Contoh Laporan Singkat B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Short Report at work", id: "Saya pakai Laporan Singkat di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Please find", id: "Silakan lihat", pronounce: "pliiz faind", example: "Please find attached", exampleId: "Silakan lihat terlampir" },
      { en: "Attached", id: "Terlampir", pronounce: "e-TECHD", example: "Attached is file", exampleId: "Terlampir berkas" },
      { en: "Could you", id: "Bisakah", pronounce: "kud yu", example: "Could you send?", exampleId: "Bisakah kirim?" },
      { en: "Kindly", id: "Dengan hormat", pronounce: "KAIN-dli", example: "Kindly check", exampleId: "Mohon cek" },
      { en: "Regards", id: "Salam", pronounce: "ri-GARDZ", example: "Best regards", exampleId: "Salam hormat" },
      { en: "Subject", id: "Subjek", pronounce: "SAB-jekt", example: "Subject: Meeting", exampleId: "Subjek: Rapat" },
      { en: "Urgent", id: "Mendesak", pronounce: "ER-jent", example: "This is urgent", exampleId: "Ini mendesak" },
      { en: "Confirm", id: "Konfirmasi", pronounce: "kon-FERM", example: "Please confirm", exampleId: "Mohon konfirmasi" },
      { en: "Forward", id: "Teruskan", pronounce: "FOR-werd", example: "I will forward", exampleId: "Saya akan teruskan" },
      { en: "Deadline", id: "Batas waktu", pronounce: "DED-lain", example: "Deadline Friday", exampleId: "Batas Jumat" }
    ],
    quiz: [
      { id: "6-5-q1", question: "Work Q1: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-5-q2", question: "Work Q2: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-5-q3", question: "Work Q3: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-5-q4", question: "Work Q4: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-5-q5", question: "Work Q5: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." }
    ]
  },
  {
    id: "6-6",
    levelId: 6,
    order: 36,
    title: "Komplain Profesional",
    titleEn: "Complaint Pro",
    objective: "I am writing to...",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Komplain Profesional (Complaint Pro) — I am writing to.... Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Komplain Profesional",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Complaint Pro A", id: "Contoh Komplain Profesional A" },
            { en: "Example Complaint Pro B", id: "Contoh Komplain Profesional B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Complaint Pro at work", id: "Saya pakai Komplain Profesional di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Could you", id: "Bisakah", pronounce: "kud yu", example: "Could you send?", exampleId: "Bisakah kirim?" },
      { en: "Kindly", id: "Dengan hormat", pronounce: "KAIN-dli", example: "Kindly check", exampleId: "Mohon cek" },
      { en: "Regards", id: "Salam", pronounce: "ri-GARDZ", example: "Best regards", exampleId: "Salam hormat" },
      { en: "Subject", id: "Subjek", pronounce: "SAB-jekt", example: "Subject: Meeting", exampleId: "Subjek: Rapat" },
      { en: "Urgent", id: "Mendesak", pronounce: "ER-jent", example: "This is urgent", exampleId: "Ini mendesak" },
      { en: "Confirm", id: "Konfirmasi", pronounce: "kon-FERM", example: "Please confirm", exampleId: "Mohon konfirmasi" },
      { en: "Forward", id: "Teruskan", pronounce: "FOR-werd", example: "I will forward", exampleId: "Saya akan teruskan" },
      { en: "Deadline", id: "Batas waktu", pronounce: "DED-lain", example: "Deadline Friday", exampleId: "Batas Jumat" },
      { en: "Please find", id: "Silakan lihat", pronounce: "pliiz faind", example: "Please find attached", exampleId: "Silakan lihat terlampir" },
      { en: "Attached", id: "Terlampir", pronounce: "e-TECHD", example: "Attached is file", exampleId: "Terlampir berkas" }
    ],
    quiz: [
      { id: "6-6-q1", question: "Work Q1: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-6-q2", question: "Work Q2: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-6-q3", question: "Work Q3: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-6-q4", question: "Work Q4: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "6-6-q5", question: "Work Q5: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." }
    ]
  },
  {
    id: "7-1",
    levelId: 7,
    order: 37,
    title: "Meeting Opini",
    titleEn: "Meeting Opinions",
    objective: "In my opinion...",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Meeting Opini (Meeting Opinions) — In my opinion.... Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Meeting Opini",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Meeting Opinions A", id: "Contoh Meeting Opini A" },
            { en: "Example Meeting Opinions B", id: "Contoh Meeting Opini B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Meeting Opinions at work", id: "Saya pakai Meeting Opini di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Could you clarify", id: "Bisa jelaskan", pronounce: "kud yu KLE-ri-fai", example: "Could you clarify?", exampleId: "Bisa jelaskan?" },
      { en: "Let me explain", id: "Biar saya jelaskan", pronounce: "let mi ik-SPLEIN", example: "Let me explain", exampleId: "Biar saya jelaskan" },
      { en: "Strength", id: "Kelebihan", pronounce: "streng", example: "My strength", exampleId: "Kelebihan saya" },
      { en: "Weakness", id: "Kekurangan", pronounce: "WIIK-nes", example: "My weakness", exampleId: "Kekurangan saya" },
      { en: "Experience", id: "Pengalaman", pronounce: "ik-SPII-riens", example: "My experience", exampleId: "Pengalaman saya" },
      { en: "Teamwork", id: "Kerja tim", pronounce: "TIIM-werk", example: "I like teamwork", exampleId: "Saya suka kerja tim" },
      { en: "Negotiate", id: "Negosiasi", pronounce: "ne-GO-shiet", example: "Let's negotiate", exampleId: "Mari negosiasi" },
      { en: "Agree", id: "Setuju", pronounce: "e-GRII", example: "I agree", exampleId: "Saya setuju" },
      { en: "In my opinion", id: "Menurut saya", pronounce: "in mai o-PIN-yon", example: "In my opinion...", exampleId: "Menurut saya..." },
      { en: "I think", id: "Saya pikir", pronounce: "ai thingk", example: "I think we should", exampleId: "Saya pikir kita harus" }
    ],
    quiz: [
      { id: "7-1-q1", question: "Work Q1: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-1-q2", question: "Work Q2: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-1-q3", question: "Work Q3: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-1-q4", question: "Work Q4: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-1-q5", question: "Work Q5: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." }
    ]
  },
  {
    id: "7-2",
    levelId: 7,
    order: 38,
    title: "Presentasi 1 Menit",
    titleEn: "1-Min Presentation",
    objective: "Let me explain...",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Presentasi 1 Menit (1-Min Presentation) — Let me explain.... Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Presentasi 1 Menit",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example 1-Min Presentation A", id: "Contoh Presentasi 1 Menit A" },
            { en: "Example 1-Min Presentation B", id: "Contoh Presentasi 1 Menit B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use 1-Min Presentation at work", id: "Saya pakai Presentasi 1 Menit di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Strength", id: "Kelebihan", pronounce: "streng", example: "My strength", exampleId: "Kelebihan saya" },
      { en: "Weakness", id: "Kekurangan", pronounce: "WIIK-nes", example: "My weakness", exampleId: "Kekurangan saya" },
      { en: "Experience", id: "Pengalaman", pronounce: "ik-SPII-riens", example: "My experience", exampleId: "Pengalaman saya" },
      { en: "Teamwork", id: "Kerja tim", pronounce: "TIIM-werk", example: "I like teamwork", exampleId: "Saya suka kerja tim" },
      { en: "Negotiate", id: "Negosiasi", pronounce: "ne-GO-shiet", example: "Let's negotiate", exampleId: "Mari negosiasi" },
      { en: "Agree", id: "Setuju", pronounce: "e-GRII", example: "I agree", exampleId: "Saya setuju" },
      { en: "In my opinion", id: "Menurut saya", pronounce: "in mai o-PIN-yon", example: "In my opinion...", exampleId: "Menurut saya..." },
      { en: "I think", id: "Saya pikir", pronounce: "ai thingk", example: "I think we should", exampleId: "Saya pikir kita harus" },
      { en: "Could you clarify", id: "Bisa jelaskan", pronounce: "kud yu KLE-ri-fai", example: "Could you clarify?", exampleId: "Bisa jelaskan?" },
      { en: "Let me explain", id: "Biar saya jelaskan", pronounce: "let mi ik-SPLEIN", example: "Let me explain", exampleId: "Biar saya jelaskan" }
    ],
    quiz: [
      { id: "7-2-q1", question: "Work Q1: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-2-q2", question: "Work Q2: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-2-q3", question: "Work Q3: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-2-q4", question: "Work Q4: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-2-q5", question: "Work Q5: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." }
    ]
  },
  {
    id: "7-3",
    levelId: 7,
    order: 39,
    title: "Tanya Jawab Meeting",
    titleEn: "Meeting Q&A",
    objective: "Could you clarify?",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Tanya Jawab Meeting (Meeting Q&A) — Could you clarify?. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Tanya Jawab Meeting",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Meeting Q&A A", id: "Contoh Tanya Jawab Meeting A" },
            { en: "Example Meeting Q&A B", id: "Contoh Tanya Jawab Meeting B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Meeting Q&A at work", id: "Saya pakai Tanya Jawab Meeting di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Experience", id: "Pengalaman", pronounce: "ik-SPII-riens", example: "My experience", exampleId: "Pengalaman saya" },
      { en: "Teamwork", id: "Kerja tim", pronounce: "TIIM-werk", example: "I like teamwork", exampleId: "Saya suka kerja tim" },
      { en: "Negotiate", id: "Negosiasi", pronounce: "ne-GO-shiet", example: "Let's negotiate", exampleId: "Mari negosiasi" },
      { en: "Agree", id: "Setuju", pronounce: "e-GRII", example: "I agree", exampleId: "Saya setuju" },
      { en: "In my opinion", id: "Menurut saya", pronounce: "in mai o-PIN-yon", example: "In my opinion...", exampleId: "Menurut saya..." },
      { en: "I think", id: "Saya pikir", pronounce: "ai thingk", example: "I think we should", exampleId: "Saya pikir kita harus" },
      { en: "Could you clarify", id: "Bisa jelaskan", pronounce: "kud yu KLE-ri-fai", example: "Could you clarify?", exampleId: "Bisa jelaskan?" },
      { en: "Let me explain", id: "Biar saya jelaskan", pronounce: "let mi ik-SPLEIN", example: "Let me explain", exampleId: "Biar saya jelaskan" },
      { en: "Strength", id: "Kelebihan", pronounce: "streng", example: "My strength", exampleId: "Kelebihan saya" },
      { en: "Weakness", id: "Kekurangan", pronounce: "WIIK-nes", example: "My weakness", exampleId: "Kekurangan saya" }
    ],
    quiz: [
      { id: "7-3-q1", question: "Work Q1: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-3-q2", question: "Work Q2: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-3-q3", question: "Work Q3: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-3-q4", question: "Work Q4: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-3-q5", question: "Work Q5: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." }
    ]
  },
  {
    id: "7-4",
    levelId: 7,
    order: 40,
    title: "Interview: Tell me",
    titleEn: "Tell Me About Yourself",
    objective: "Saya 1 menit",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Interview: Tell me (Tell Me About Yourself) — Saya 1 menit. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Interview: Tell me",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Tell Me About Yourself A", id: "Contoh Interview: Tell me A" },
            { en: "Example Tell Me About Yourself B", id: "Contoh Interview: Tell me B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Tell Me About Yourself at work", id: "Saya pakai Interview: Tell me di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Negotiate", id: "Negosiasi", pronounce: "ne-GO-shiet", example: "Let's negotiate", exampleId: "Mari negosiasi" },
      { en: "Agree", id: "Setuju", pronounce: "e-GRII", example: "I agree", exampleId: "Saya setuju" },
      { en: "In my opinion", id: "Menurut saya", pronounce: "in mai o-PIN-yon", example: "In my opinion...", exampleId: "Menurut saya..." },
      { en: "I think", id: "Saya pikir", pronounce: "ai thingk", example: "I think we should", exampleId: "Saya pikir kita harus" },
      { en: "Could you clarify", id: "Bisa jelaskan", pronounce: "kud yu KLE-ri-fai", example: "Could you clarify?", exampleId: "Bisa jelaskan?" },
      { en: "Let me explain", id: "Biar saya jelaskan", pronounce: "let mi ik-SPLEIN", example: "Let me explain", exampleId: "Biar saya jelaskan" },
      { en: "Strength", id: "Kelebihan", pronounce: "streng", example: "My strength", exampleId: "Kelebihan saya" },
      { en: "Weakness", id: "Kekurangan", pronounce: "WIIK-nes", example: "My weakness", exampleId: "Kekurangan saya" },
      { en: "Experience", id: "Pengalaman", pronounce: "ik-SPII-riens", example: "My experience", exampleId: "Pengalaman saya" },
      { en: "Teamwork", id: "Kerja tim", pronounce: "TIIM-werk", example: "I like teamwork", exampleId: "Saya suka kerja tim" }
    ],
    quiz: [
      { id: "7-4-q1", question: "Work Q1: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-4-q2", question: "Work Q2: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-4-q3", question: "Work Q3: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-4-q4", question: "Work Q4: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-4-q5", question: "Work Q5: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." }
    ]
  },
  {
    id: "7-5",
    levelId: 7,
    order: 41,
    title: "Interview: Strength",
    titleEn: "Strength & Weakness",
    objective: "My strength is...",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Interview: Strength (Strength & Weakness) — My strength is.... Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Interview: Strength",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Strength & Weakness A", id: "Contoh Interview: Strength A" },
            { en: "Example Strength & Weakness B", id: "Contoh Interview: Strength B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Strength & Weakness at work", id: "Saya pakai Interview: Strength di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "In my opinion", id: "Menurut saya", pronounce: "in mai o-PIN-yon", example: "In my opinion...", exampleId: "Menurut saya..." },
      { en: "I think", id: "Saya pikir", pronounce: "ai thingk", example: "I think we should", exampleId: "Saya pikir kita harus" },
      { en: "Could you clarify", id: "Bisa jelaskan", pronounce: "kud yu KLE-ri-fai", example: "Could you clarify?", exampleId: "Bisa jelaskan?" },
      { en: "Let me explain", id: "Biar saya jelaskan", pronounce: "let mi ik-SPLEIN", example: "Let me explain", exampleId: "Biar saya jelaskan" },
      { en: "Strength", id: "Kelebihan", pronounce: "streng", example: "My strength", exampleId: "Kelebihan saya" },
      { en: "Weakness", id: "Kekurangan", pronounce: "WIIK-nes", example: "My weakness", exampleId: "Kekurangan saya" },
      { en: "Experience", id: "Pengalaman", pronounce: "ik-SPII-riens", example: "My experience", exampleId: "Pengalaman saya" },
      { en: "Teamwork", id: "Kerja tim", pronounce: "TIIM-werk", example: "I like teamwork", exampleId: "Saya suka kerja tim" },
      { en: "Negotiate", id: "Negosiasi", pronounce: "ne-GO-shiet", example: "Let's negotiate", exampleId: "Mari negosiasi" },
      { en: "Agree", id: "Setuju", pronounce: "e-GRII", example: "I agree", exampleId: "Saya setuju" }
    ],
    quiz: [
      { id: "7-5-q1", question: "Work Q1: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-5-q2", question: "Work Q2: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-5-q3", question: "Work Q3: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-5-q4", question: "Work Q4: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-5-q5", question: "Work Q5: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." }
    ]
  },
  {
    id: "7-6",
    levelId: 7,
    order: 42,
    title: "Negosiasi Simple",
    titleEn: "Simple Negotiation",
    objective: "How about...?",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Negosiasi Simple (Simple Negotiation) — How about...?. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Negosiasi Simple",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Simple Negotiation A", id: "Contoh Negosiasi Simple A" },
            { en: "Example Simple Negotiation B", id: "Contoh Negosiasi Simple B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Simple Negotiation at work", id: "Saya pakai Negosiasi Simple di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Could you clarify", id: "Bisa jelaskan", pronounce: "kud yu KLE-ri-fai", example: "Could you clarify?", exampleId: "Bisa jelaskan?" },
      { en: "Let me explain", id: "Biar saya jelaskan", pronounce: "let mi ik-SPLEIN", example: "Let me explain", exampleId: "Biar saya jelaskan" },
      { en: "Strength", id: "Kelebihan", pronounce: "streng", example: "My strength", exampleId: "Kelebihan saya" },
      { en: "Weakness", id: "Kekurangan", pronounce: "WIIK-nes", example: "My weakness", exampleId: "Kekurangan saya" },
      { en: "Experience", id: "Pengalaman", pronounce: "ik-SPII-riens", example: "My experience", exampleId: "Pengalaman saya" },
      { en: "Teamwork", id: "Kerja tim", pronounce: "TIIM-werk", example: "I like teamwork", exampleId: "Saya suka kerja tim" },
      { en: "Negotiate", id: "Negosiasi", pronounce: "ne-GO-shiet", example: "Let's negotiate", exampleId: "Mari negosiasi" },
      { en: "Agree", id: "Setuju", pronounce: "e-GRII", example: "I agree", exampleId: "Saya setuju" },
      { en: "In my opinion", id: "Menurut saya", pronounce: "in mai o-PIN-yon", example: "In my opinion...", exampleId: "Menurut saya..." },
      { en: "I think", id: "Saya pikir", pronounce: "ai thingk", example: "I think we should", exampleId: "Saya pikir kita harus" }
    ],
    quiz: [
      { id: "7-6-q1", question: "Work Q1: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-6-q2", question: "Work Q2: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-6-q3", question: "Work Q3: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-6-q4", question: "Work Q4: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." },
      { id: "7-6-q5", question: "Work Q5: Polite email?", options: ["Could you please... (correct)","You send now!","Give me!","Hey send"], answer: 0, explanation: "Kerja pakai Could you please (sopan)." }
    ]
  },
  {
    id: "8-1",
    levelId: 8,
    order: 43,
    title: "TOEFL S-V Agreement",
    titleEn: "Subject-Verb",
    objective: "He goes, They go",
    duration: "18 menit",
    content: {
      intro: "Pelajaran TOEFL S-V Agreement (Subject-Verb) — He goes, They go. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola TOEFL S-V Agreement",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Subject-Verb A", id: "Contoh TOEFL S-V Agreement A" },
            { en: "Example Subject-Verb B", id: "Contoh TOEFL S-V Agreement B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Subject-Verb at work", id: "Saya pakai TOEFL S-V Agreement di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Therefore", id: "Oleh karena itu", pronounce: "DHER-for", example: "Therefore we go", exampleId: "Oleh karena itu kita pergi" },
      { en: "However", id: "Namun", pronounce: "hau-E-ver", example: "However, I will", exampleId: "Namun, saya akan" },
      { en: "Subject", id: "Subjek", pronounce: "SAB-jekt", example: "Subject is he", exampleId: "Subjeknya dia" },
      { en: "Verb", id: "Kata kerja", pronounce: "verb", example: "Verb is go", exampleId: "Katanya pergi" },
      { en: "Agreement", id: "Kesesuaian", pronounce: "e-GRII-ment", example: "Subject-verb agreement", exampleId: "Kesesuaian subjek-kata kerja" },
      { en: "Clause", id: "Klausa", pronounce: "kloz", example: "Main clause", exampleId: "Klausa utama" },
      { en: "Error", id: "Kesalahan", pronounce: "ER-or", example: "Find error", exampleId: "Cari kesalahan" },
      { en: "Correct", id: "Benar", pronounce: "ko-REKT", example: "The correct is", exampleId: "Yang benar adalah" },
      { en: "Although", id: "Meskipun", pronounce: "ol-DHOU", example: "Although it rains", exampleId: "Meskipun hujan" },
      { en: "Because", id: "Karena", pronounce: "bi-KOZ", example: "Because I am busy", exampleId: "Karena saya sibuk" }
    ],
    quiz: [
      { id: "8-1-q1", question: "TOEFL Structure Q1: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-1-q2", question: "TOEFL Structure Q2: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-1-q3", question: "TOEFL Structure Q3: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-1-q4", question: "TOEFL Structure Q4: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-1-q5", question: "TOEFL Structure Q5: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." }
    ]
  },
  {
    id: "8-2",
    levelId: 8,
    order: 44,
    title: "Clause & Conjunction",
    titleEn: "Clauses",
    objective: "Although, because",
    duration: "18 menit",
    content: {
      intro: "Pelajaran Clause & Conjunction (Clauses) — Although, because. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Clause & Conjunction",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Clauses A", id: "Contoh Clause & Conjunction A" },
            { en: "Example Clauses B", id: "Contoh Clause & Conjunction B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Clauses at work", id: "Saya pakai Clause & Conjunction di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Subject", id: "Subjek", pronounce: "SAB-jekt", example: "Subject is he", exampleId: "Subjeknya dia" },
      { en: "Verb", id: "Kata kerja", pronounce: "verb", example: "Verb is go", exampleId: "Katanya pergi" },
      { en: "Agreement", id: "Kesesuaian", pronounce: "e-GRII-ment", example: "Subject-verb agreement", exampleId: "Kesesuaian subjek-kata kerja" },
      { en: "Clause", id: "Klausa", pronounce: "kloz", example: "Main clause", exampleId: "Klausa utama" },
      { en: "Error", id: "Kesalahan", pronounce: "ER-or", example: "Find error", exampleId: "Cari kesalahan" },
      { en: "Correct", id: "Benar", pronounce: "ko-REKT", example: "The correct is", exampleId: "Yang benar adalah" },
      { en: "Although", id: "Meskipun", pronounce: "ol-DHOU", example: "Although it rains", exampleId: "Meskipun hujan" },
      { en: "Because", id: "Karena", pronounce: "bi-KOZ", example: "Because I am busy", exampleId: "Karena saya sibuk" },
      { en: "Therefore", id: "Oleh karena itu", pronounce: "DHER-for", example: "Therefore we go", exampleId: "Oleh karena itu kita pergi" },
      { en: "However", id: "Namun", pronounce: "hau-E-ver", example: "However, I will", exampleId: "Namun, saya akan" }
    ],
    quiz: [
      { id: "8-2-q1", question: "TOEFL Structure Q1: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-2-q2", question: "TOEFL Structure Q2: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-2-q3", question: "TOEFL Structure Q3: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-2-q4", question: "TOEFL Structure Q4: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-2-q5", question: "TOEFL Structure Q5: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." }
    ]
  },
  {
    id: "8-3",
    levelId: 8,
    order: 45,
    title: "Tenses TOEFL",
    titleEn: "Tenses Mix",
    objective: "Have gone vs went",
    duration: "18 menit",
    content: {
      intro: "Pelajaran Tenses TOEFL (Tenses Mix) — Have gone vs went. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Tenses TOEFL",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Tenses Mix A", id: "Contoh Tenses TOEFL A" },
            { en: "Example Tenses Mix B", id: "Contoh Tenses TOEFL B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Tenses Mix at work", id: "Saya pakai Tenses TOEFL di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Agreement", id: "Kesesuaian", pronounce: "e-GRII-ment", example: "Subject-verb agreement", exampleId: "Kesesuaian subjek-kata kerja" },
      { en: "Clause", id: "Klausa", pronounce: "kloz", example: "Main clause", exampleId: "Klausa utama" },
      { en: "Error", id: "Kesalahan", pronounce: "ER-or", example: "Find error", exampleId: "Cari kesalahan" },
      { en: "Correct", id: "Benar", pronounce: "ko-REKT", example: "The correct is", exampleId: "Yang benar adalah" },
      { en: "Although", id: "Meskipun", pronounce: "ol-DHOU", example: "Although it rains", exampleId: "Meskipun hujan" },
      { en: "Because", id: "Karena", pronounce: "bi-KOZ", example: "Because I am busy", exampleId: "Karena saya sibuk" },
      { en: "Therefore", id: "Oleh karena itu", pronounce: "DHER-for", example: "Therefore we go", exampleId: "Oleh karena itu kita pergi" },
      { en: "However", id: "Namun", pronounce: "hau-E-ver", example: "However, I will", exampleId: "Namun, saya akan" },
      { en: "Subject", id: "Subjek", pronounce: "SAB-jekt", example: "Subject is he", exampleId: "Subjeknya dia" },
      { en: "Verb", id: "Kata kerja", pronounce: "verb", example: "Verb is go", exampleId: "Katanya pergi" }
    ],
    quiz: [
      { id: "8-3-q1", question: "TOEFL Structure Q1: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-3-q2", question: "TOEFL Structure Q2: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-3-q3", question: "TOEFL Structure Q3: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-3-q4", question: "TOEFL Structure Q4: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-3-q5", question: "TOEFL Structure Q5: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." }
    ]
  },
  {
    id: "8-4",
    levelId: 8,
    order: 46,
    title: "Preposisi Jebakan",
    titleEn: "Prepositions",
    objective: "In vs On vs At",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Preposisi Jebakan (Prepositions) — In vs On vs At. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Preposisi Jebakan",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Prepositions A", id: "Contoh Preposisi Jebakan A" },
            { en: "Example Prepositions B", id: "Contoh Preposisi Jebakan B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Prepositions at work", id: "Saya pakai Preposisi Jebakan di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Error", id: "Kesalahan", pronounce: "ER-or", example: "Find error", exampleId: "Cari kesalahan" },
      { en: "Correct", id: "Benar", pronounce: "ko-REKT", example: "The correct is", exampleId: "Yang benar adalah" },
      { en: "Although", id: "Meskipun", pronounce: "ol-DHOU", example: "Although it rains", exampleId: "Meskipun hujan" },
      { en: "Because", id: "Karena", pronounce: "bi-KOZ", example: "Because I am busy", exampleId: "Karena saya sibuk" },
      { en: "Therefore", id: "Oleh karena itu", pronounce: "DHER-for", example: "Therefore we go", exampleId: "Oleh karena itu kita pergi" },
      { en: "However", id: "Namun", pronounce: "hau-E-ver", example: "However, I will", exampleId: "Namun, saya akan" },
      { en: "Subject", id: "Subjek", pronounce: "SAB-jekt", example: "Subject is he", exampleId: "Subjeknya dia" },
      { en: "Verb", id: "Kata kerja", pronounce: "verb", example: "Verb is go", exampleId: "Katanya pergi" },
      { en: "Agreement", id: "Kesesuaian", pronounce: "e-GRII-ment", example: "Subject-verb agreement", exampleId: "Kesesuaian subjek-kata kerja" },
      { en: "Clause", id: "Klausa", pronounce: "kloz", example: "Main clause", exampleId: "Klausa utama" }
    ],
    quiz: [
      { id: "8-4-q1", question: "TOEFL Structure Q1: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-4-q2", question: "TOEFL Structure Q2: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-4-q3", question: "TOEFL Structure Q3: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-4-q4", question: "TOEFL Structure Q4: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-4-q5", question: "TOEFL Structure Q5: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." }
    ]
  },
  {
    id: "8-5",
    levelId: 8,
    order: 47,
    title: "Article a/an/the",
    titleEn: "Articles",
    objective: "A vs The",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Article a/an/the (Articles) — A vs The. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Article a/an/the",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Articles A", id: "Contoh Article a/an/the A" },
            { en: "Example Articles B", id: "Contoh Article a/an/the B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Articles at work", id: "Saya pakai Article a/an/the di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Although", id: "Meskipun", pronounce: "ol-DHOU", example: "Although it rains", exampleId: "Meskipun hujan" },
      { en: "Because", id: "Karena", pronounce: "bi-KOZ", example: "Because I am busy", exampleId: "Karena saya sibuk" },
      { en: "Therefore", id: "Oleh karena itu", pronounce: "DHER-for", example: "Therefore we go", exampleId: "Oleh karena itu kita pergi" },
      { en: "However", id: "Namun", pronounce: "hau-E-ver", example: "However, I will", exampleId: "Namun, saya akan" },
      { en: "Subject", id: "Subjek", pronounce: "SAB-jekt", example: "Subject is he", exampleId: "Subjeknya dia" },
      { en: "Verb", id: "Kata kerja", pronounce: "verb", example: "Verb is go", exampleId: "Katanya pergi" },
      { en: "Agreement", id: "Kesesuaian", pronounce: "e-GRII-ment", example: "Subject-verb agreement", exampleId: "Kesesuaian subjek-kata kerja" },
      { en: "Clause", id: "Klausa", pronounce: "kloz", example: "Main clause", exampleId: "Klausa utama" },
      { en: "Error", id: "Kesalahan", pronounce: "ER-or", example: "Find error", exampleId: "Cari kesalahan" },
      { en: "Correct", id: "Benar", pronounce: "ko-REKT", example: "The correct is", exampleId: "Yang benar adalah" }
    ],
    quiz: [
      { id: "8-5-q1", question: "TOEFL Structure Q1: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-5-q2", question: "TOEFL Structure Q2: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-5-q3", question: "TOEFL Structure Q3: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-5-q4", question: "TOEFL Structure Q4: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-5-q5", question: "TOEFL Structure Q5: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." }
    ]
  },
  {
    id: "8-6",
    levelId: 8,
    order: 48,
    title: "Error Spotting",
    titleEn: "Error ID",
    objective: "Find the error",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Error Spotting (Error ID) — Find the error. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Error Spotting",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Error ID A", id: "Contoh Error Spotting A" },
            { en: "Example Error ID B", id: "Contoh Error Spotting B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Error ID at work", id: "Saya pakai Error Spotting di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Therefore", id: "Oleh karena itu", pronounce: "DHER-for", example: "Therefore we go", exampleId: "Oleh karena itu kita pergi" },
      { en: "However", id: "Namun", pronounce: "hau-E-ver", example: "However, I will", exampleId: "Namun, saya akan" },
      { en: "Subject", id: "Subjek", pronounce: "SAB-jekt", example: "Subject is he", exampleId: "Subjeknya dia" },
      { en: "Verb", id: "Kata kerja", pronounce: "verb", example: "Verb is go", exampleId: "Katanya pergi" },
      { en: "Agreement", id: "Kesesuaian", pronounce: "e-GRII-ment", example: "Subject-verb agreement", exampleId: "Kesesuaian subjek-kata kerja" },
      { en: "Clause", id: "Klausa", pronounce: "kloz", example: "Main clause", exampleId: "Klausa utama" },
      { en: "Error", id: "Kesalahan", pronounce: "ER-or", example: "Find error", exampleId: "Cari kesalahan" },
      { en: "Correct", id: "Benar", pronounce: "ko-REKT", example: "The correct is", exampleId: "Yang benar adalah" },
      { en: "Although", id: "Meskipun", pronounce: "ol-DHOU", example: "Although it rains", exampleId: "Meskipun hujan" },
      { en: "Because", id: "Karena", pronounce: "bi-KOZ", example: "Because I am busy", exampleId: "Karena saya sibuk" }
    ],
    quiz: [
      { id: "8-6-q1", question: "TOEFL Structure Q1: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-6-q2", question: "TOEFL Structure Q2: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-6-q3", question: "TOEFL Structure Q3: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-6-q4", question: "TOEFL Structure Q4: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." },
      { id: "8-6-q5", question: "TOEFL Structure Q5: Find error", options: ["He go (error)","He goes (correct)","They go","We go"], answer: 1, explanation: "He/She/It + goes (s - agreement)." }
    ]
  },
  {
    id: "9-1",
    levelId: 9,
    order: 49,
    title: "Listening Keyword",
    titleEn: "Listening Keywords",
    objective: "Listen for who/what",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Listening Keyword (Listening Keywords) — Listen for who/what. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Listening Keyword",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Listening Keywords A", id: "Contoh Listening Keyword A" },
            { en: "Example Listening Keywords B", id: "Contoh Listening Keyword B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Listening Keywords at work", id: "Saya pakai Listening Keyword di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Conversation", id: "Percakapan", pronounce: "kon-ver-SEI-shen", example: "Short conversation", exampleId: "Percakapan pendek" },
      { en: "Note", id: "Catatan", pronounce: "nout", example: "Take notes", exampleId: "Catat" },
      { en: "Trick", id: "Trik", pronounce: "trik", example: "Trick answer", exampleId: "Jawaban trik" },
      { en: "Sound", id: "Suara", pronounce: "saund", example: "Same sound", exampleId: "Suara sama" },
      { en: "Focus", id: "Fokus", pronounce: "FO-kas", example: "Focus on verb", exampleId: "Fokus ke kata kerja" },
      { en: "Repeat", id: "Ulangi", pronounce: "ri-PIIT", example: "Please repeat", exampleId: "Tolong ulangi" },
      { en: "Understand", id: "Mengerti", pronounce: "an-der-STEND", example: "Do you understand?", exampleId: "Apakah mengerti?" },
      { en: "Question", id: "Pertanyaan", pronounce: "KWES-chen", example: "Answer question", exampleId: "Jawab pertanyaan" },
      { en: "Listen", id: "Dengarkan", pronounce: "LI-sen", example: "Listen carefully", exampleId: "Dengarkan baik" },
      { en: "Keyword", id: "Kata kunci", pronounce: "KII-werd", example: "Listen keyword", exampleId: "Dengarkan kata kunci" }
    ],
    quiz: [
      { id: "9-1-q1", question: "TOEFL Q1: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-1-q2", question: "TOEFL Q2: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-1-q3", question: "TOEFL Q3: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-1-q4", question: "TOEFL Q4: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-1-q5", question: "TOEFL Q5: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." }
    ]
  },
  {
    id: "9-2",
    levelId: 9,
    order: 50,
    title: "Short Conversation",
    titleEn: "Short Dialog",
    objective: "Man: ... Woman: ...",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Short Conversation (Short Dialog) — Man: ... Woman: .... Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Short Conversation",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Short Dialog A", id: "Contoh Short Conversation A" },
            { en: "Example Short Dialog B", id: "Contoh Short Conversation B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Short Dialog at work", id: "Saya pakai Short Conversation di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Trick", id: "Trik", pronounce: "trik", example: "Trick answer", exampleId: "Jawaban trik" },
      { en: "Sound", id: "Suara", pronounce: "saund", example: "Same sound", exampleId: "Suara sama" },
      { en: "Focus", id: "Fokus", pronounce: "FO-kas", example: "Focus on verb", exampleId: "Fokus ke kata kerja" },
      { en: "Repeat", id: "Ulangi", pronounce: "ri-PIIT", example: "Please repeat", exampleId: "Tolong ulangi" },
      { en: "Understand", id: "Mengerti", pronounce: "an-der-STEND", example: "Do you understand?", exampleId: "Apakah mengerti?" },
      { en: "Question", id: "Pertanyaan", pronounce: "KWES-chen", example: "Answer question", exampleId: "Jawab pertanyaan" },
      { en: "Listen", id: "Dengarkan", pronounce: "LI-sen", example: "Listen carefully", exampleId: "Dengarkan baik" },
      { en: "Keyword", id: "Kata kunci", pronounce: "KII-werd", example: "Listen keyword", exampleId: "Dengarkan kata kunci" },
      { en: "Conversation", id: "Percakapan", pronounce: "kon-ver-SEI-shen", example: "Short conversation", exampleId: "Percakapan pendek" },
      { en: "Note", id: "Catatan", pronounce: "nout", example: "Take notes", exampleId: "Catat" }
    ],
    quiz: [
      { id: "9-2-q1", question: "TOEFL Q1: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-2-q2", question: "TOEFL Q2: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-2-q3", question: "TOEFL Q3: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-2-q4", question: "TOEFL Q4: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-2-q5", question: "TOEFL Q5: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." }
    ]
  },
  {
    id: "9-3",
    levelId: 9,
    order: 51,
    title: "Long Conversation",
    titleEn: "Long Talk",
    objective: "Note taking",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Long Conversation (Long Talk) — Note taking. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Long Conversation",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Long Talk A", id: "Contoh Long Conversation A" },
            { en: "Example Long Talk B", id: "Contoh Long Conversation B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Long Talk at work", id: "Saya pakai Long Conversation di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Focus", id: "Fokus", pronounce: "FO-kas", example: "Focus on verb", exampleId: "Fokus ke kata kerja" },
      { en: "Repeat", id: "Ulangi", pronounce: "ri-PIIT", example: "Please repeat", exampleId: "Tolong ulangi" },
      { en: "Understand", id: "Mengerti", pronounce: "an-der-STEND", example: "Do you understand?", exampleId: "Apakah mengerti?" },
      { en: "Question", id: "Pertanyaan", pronounce: "KWES-chen", example: "Answer question", exampleId: "Jawab pertanyaan" },
      { en: "Listen", id: "Dengarkan", pronounce: "LI-sen", example: "Listen carefully", exampleId: "Dengarkan baik" },
      { en: "Keyword", id: "Kata kunci", pronounce: "KII-werd", example: "Listen keyword", exampleId: "Dengarkan kata kunci" },
      { en: "Conversation", id: "Percakapan", pronounce: "kon-ver-SEI-shen", example: "Short conversation", exampleId: "Percakapan pendek" },
      { en: "Note", id: "Catatan", pronounce: "nout", example: "Take notes", exampleId: "Catat" },
      { en: "Trick", id: "Trik", pronounce: "trik", example: "Trick answer", exampleId: "Jawaban trik" },
      { en: "Sound", id: "Suara", pronounce: "saund", example: "Same sound", exampleId: "Suara sama" }
    ],
    quiz: [
      { id: "9-3-q1", question: "TOEFL Q1: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-3-q2", question: "TOEFL Q2: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-3-q3", question: "TOEFL Q3: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-3-q4", question: "TOEFL Q4: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-3-q5", question: "TOEFL Q5: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." }
    ]
  },
  {
    id: "9-4",
    levelId: 9,
    order: 52,
    title: "Trik Jawab",
    titleEn: "Answer Tricks",
    objective: "Same sound trap",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Trik Jawab (Answer Tricks) — Same sound trap. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Trik Jawab",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Answer Tricks A", id: "Contoh Trik Jawab A" },
            { en: "Example Answer Tricks B", id: "Contoh Trik Jawab B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Answer Tricks at work", id: "Saya pakai Trik Jawab di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Understand", id: "Mengerti", pronounce: "an-der-STEND", example: "Do you understand?", exampleId: "Apakah mengerti?" },
      { en: "Question", id: "Pertanyaan", pronounce: "KWES-chen", example: "Answer question", exampleId: "Jawab pertanyaan" },
      { en: "Listen", id: "Dengarkan", pronounce: "LI-sen", example: "Listen carefully", exampleId: "Dengarkan baik" },
      { en: "Keyword", id: "Kata kunci", pronounce: "KII-werd", example: "Listen keyword", exampleId: "Dengarkan kata kunci" },
      { en: "Conversation", id: "Percakapan", pronounce: "kon-ver-SEI-shen", example: "Short conversation", exampleId: "Percakapan pendek" },
      { en: "Note", id: "Catatan", pronounce: "nout", example: "Take notes", exampleId: "Catat" },
      { en: "Trick", id: "Trik", pronounce: "trik", example: "Trick answer", exampleId: "Jawaban trik" },
      { en: "Sound", id: "Suara", pronounce: "saund", example: "Same sound", exampleId: "Suara sama" },
      { en: "Focus", id: "Fokus", pronounce: "FO-kas", example: "Focus on verb", exampleId: "Fokus ke kata kerja" },
      { en: "Repeat", id: "Ulangi", pronounce: "ri-PIIT", example: "Please repeat", exampleId: "Tolong ulangi" }
    ],
    quiz: [
      { id: "9-4-q1", question: "TOEFL Q1: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-4-q2", question: "TOEFL Q2: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-4-q3", question: "TOEFL Q3: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-4-q4", question: "TOEFL Q4: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-4-q5", question: "TOEFL Q5: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." }
    ]
  },
  {
    id: "9-5",
    levelId: 9,
    order: 53,
    title: "Note Taking",
    titleEn: "Notes",
    objective: "Abbreviate",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Note Taking (Notes) — Abbreviate. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Note Taking",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Notes A", id: "Contoh Note Taking A" },
            { en: "Example Notes B", id: "Contoh Note Taking B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Notes at work", id: "Saya pakai Note Taking di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Listen", id: "Dengarkan", pronounce: "LI-sen", example: "Listen carefully", exampleId: "Dengarkan baik" },
      { en: "Keyword", id: "Kata kunci", pronounce: "KII-werd", example: "Listen keyword", exampleId: "Dengarkan kata kunci" },
      { en: "Conversation", id: "Percakapan", pronounce: "kon-ver-SEI-shen", example: "Short conversation", exampleId: "Percakapan pendek" },
      { en: "Note", id: "Catatan", pronounce: "nout", example: "Take notes", exampleId: "Catat" },
      { en: "Trick", id: "Trik", pronounce: "trik", example: "Trick answer", exampleId: "Jawaban trik" },
      { en: "Sound", id: "Suara", pronounce: "saund", example: "Same sound", exampleId: "Suara sama" },
      { en: "Focus", id: "Fokus", pronounce: "FO-kas", example: "Focus on verb", exampleId: "Fokus ke kata kerja" },
      { en: "Repeat", id: "Ulangi", pronounce: "ri-PIIT", example: "Please repeat", exampleId: "Tolong ulangi" },
      { en: "Understand", id: "Mengerti", pronounce: "an-der-STEND", example: "Do you understand?", exampleId: "Apakah mengerti?" },
      { en: "Question", id: "Pertanyaan", pronounce: "KWES-chen", example: "Answer question", exampleId: "Jawab pertanyaan" }
    ],
    quiz: [
      { id: "9-5-q1", question: "TOEFL Q1: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-5-q2", question: "TOEFL Q2: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-5-q3", question: "TOEFL Q3: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-5-q4", question: "TOEFL Q4: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-5-q5", question: "TOEFL Q5: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." }
    ]
  },
  {
    id: "9-6",
    levelId: 9,
    order: 54,
    title: "Simulasi Listening 1",
    titleEn: "Listening Sim 1",
    objective: "Mini test",
    duration: "18 menit",
    content: {
      intro: "Pelajaran Simulasi Listening 1 (Listening Sim 1) — Mini test. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Simulasi Listening 1",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Listening Sim 1 A", id: "Contoh Simulasi Listening 1 A" },
            { en: "Example Listening Sim 1 B", id: "Contoh Simulasi Listening 1 B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Listening Sim 1 at work", id: "Saya pakai Simulasi Listening 1 di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Conversation", id: "Percakapan", pronounce: "kon-ver-SEI-shen", example: "Short conversation", exampleId: "Percakapan pendek" },
      { en: "Note", id: "Catatan", pronounce: "nout", example: "Take notes", exampleId: "Catat" },
      { en: "Trick", id: "Trik", pronounce: "trik", example: "Trick answer", exampleId: "Jawaban trik" },
      { en: "Sound", id: "Suara", pronounce: "saund", example: "Same sound", exampleId: "Suara sama" },
      { en: "Focus", id: "Fokus", pronounce: "FO-kas", example: "Focus on verb", exampleId: "Fokus ke kata kerja" },
      { en: "Repeat", id: "Ulangi", pronounce: "ri-PIIT", example: "Please repeat", exampleId: "Tolong ulangi" },
      { en: "Understand", id: "Mengerti", pronounce: "an-der-STEND", example: "Do you understand?", exampleId: "Apakah mengerti?" },
      { en: "Question", id: "Pertanyaan", pronounce: "KWES-chen", example: "Answer question", exampleId: "Jawab pertanyaan" },
      { en: "Listen", id: "Dengarkan", pronounce: "LI-sen", example: "Listen carefully", exampleId: "Dengarkan baik" },
      { en: "Keyword", id: "Kata kunci", pronounce: "KII-werd", example: "Listen keyword", exampleId: "Dengarkan kata kunci" }
    ],
    quiz: [
      { id: "9-6-q1", question: "TOEFL Q1: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-6-q2", question: "TOEFL Q2: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-6-q3", question: "TOEFL Q3: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-6-q4", question: "TOEFL Q4: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "9-6-q5", question: "TOEFL Q5: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." }
    ]
  },
  {
    id: "10-1",
    levelId: 10,
    order: 55,
    title: "Skimming",
    titleEn: "Skimming",
    objective: "Baca cepat gagasan",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Skimming (Skimming) — Baca cepat gagasan. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Skimming",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Skimming A", id: "Contoh Skimming A" },
            { en: "Example Skimming B", id: "Contoh Skimming B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Skimming at work", id: "Saya pakai Skimming di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Passage", id: "Bacaan", pronounce: "PES-ij", example: "Read passage", exampleId: "Baca bacaan" },
      { en: "Inference", id: "Kesimpulan", pronounce: "IN-fer-ens", example: "Make inference", exampleId: "Buat kesimpulan" },
      { en: "Vocabulary", id: "Kosakata", pronounce: "vo-KEB-yu-le-ri", example: "Vocab context", exampleId: "Kosakata konteks" },
      { en: "Reference", id: "Rujukan", pronounce: "RE-fer-ens", example: "It refers to", exampleId: "Itu merujuk ke" },
      { en: "Detail", id: "Detail", pronounce: "DI-teil", example: "Find detail", exampleId: "Cari detail" },
      { en: "Main idea", id: "Ide utama", pronounce: "mein ai-DIA", example: "Main idea is", exampleId: "Ide utamanya" },
      { en: "Summary", id: "Ringkasan", pronounce: "SAM-ri", example: "Write summary", exampleId: "Tulis ringkasan" },
      { en: "Simulate", id: "Simulasi", pronounce: "SIM-yu-leit", example: "Simulate test", exampleId: "Simulasi tes" },
      { en: "Skim", id: "Baca cepat", pronounce: "skim", example: "Skim the text", exampleId: "Baca cepat teks" },
      { en: "Scan", id: "Pindai", pronounce: "sken", example: "Scan details", exampleId: "Pindai detail" }
    ],
    quiz: [
      { id: "10-1-q1", question: "TOEFL Q1: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-1-q2", question: "TOEFL Q2: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-1-q3", question: "TOEFL Q3: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-1-q4", question: "TOEFL Q4: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-1-q5", question: "TOEFL Q5: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." }
    ]
  },
  {
    id: "10-2",
    levelId: 10,
    order: 56,
    title: "Scanning",
    titleEn: "Scanning",
    objective: "Cari detail",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Scanning (Scanning) — Cari detail. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Scanning",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Scanning A", id: "Contoh Scanning A" },
            { en: "Example Scanning B", id: "Contoh Scanning B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Scanning at work", id: "Saya pakai Scanning di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Vocabulary", id: "Kosakata", pronounce: "vo-KEB-yu-le-ri", example: "Vocab context", exampleId: "Kosakata konteks" },
      { en: "Reference", id: "Rujukan", pronounce: "RE-fer-ens", example: "It refers to", exampleId: "Itu merujuk ke" },
      { en: "Detail", id: "Detail", pronounce: "DI-teil", example: "Find detail", exampleId: "Cari detail" },
      { en: "Main idea", id: "Ide utama", pronounce: "mein ai-DIA", example: "Main idea is", exampleId: "Ide utamanya" },
      { en: "Summary", id: "Ringkasan", pronounce: "SAM-ri", example: "Write summary", exampleId: "Tulis ringkasan" },
      { en: "Simulate", id: "Simulasi", pronounce: "SIM-yu-leit", example: "Simulate test", exampleId: "Simulasi tes" },
      { en: "Skim", id: "Baca cepat", pronounce: "skim", example: "Skim the text", exampleId: "Baca cepat teks" },
      { en: "Scan", id: "Pindai", pronounce: "sken", example: "Scan details", exampleId: "Pindai detail" },
      { en: "Passage", id: "Bacaan", pronounce: "PES-ij", example: "Read passage", exampleId: "Baca bacaan" },
      { en: "Inference", id: "Kesimpulan", pronounce: "IN-fer-ens", example: "Make inference", exampleId: "Buat kesimpulan" }
    ],
    quiz: [
      { id: "10-2-q1", question: "TOEFL Q1: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-2-q2", question: "TOEFL Q2: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-2-q3", question: "TOEFL Q3: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-2-q4", question: "TOEFL Q4: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-2-q5", question: "TOEFL Q5: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." }
    ]
  },
  {
    id: "10-3",
    levelId: 10,
    order: 57,
    title: "Vocab in Context",
    titleEn: "Vocab Context",
    objective: "Guess meaning",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Vocab in Context (Vocab Context) — Guess meaning. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Vocab in Context",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Vocab Context A", id: "Contoh Vocab in Context A" },
            { en: "Example Vocab Context B", id: "Contoh Vocab in Context B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Vocab Context at work", id: "Saya pakai Vocab in Context di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Detail", id: "Detail", pronounce: "DI-teil", example: "Find detail", exampleId: "Cari detail" },
      { en: "Main idea", id: "Ide utama", pronounce: "mein ai-DIA", example: "Main idea is", exampleId: "Ide utamanya" },
      { en: "Summary", id: "Ringkasan", pronounce: "SAM-ri", example: "Write summary", exampleId: "Tulis ringkasan" },
      { en: "Simulate", id: "Simulasi", pronounce: "SIM-yu-leit", example: "Simulate test", exampleId: "Simulasi tes" },
      { en: "Skim", id: "Baca cepat", pronounce: "skim", example: "Skim the text", exampleId: "Baca cepat teks" },
      { en: "Scan", id: "Pindai", pronounce: "sken", example: "Scan details", exampleId: "Pindai detail" },
      { en: "Passage", id: "Bacaan", pronounce: "PES-ij", example: "Read passage", exampleId: "Baca bacaan" },
      { en: "Inference", id: "Kesimpulan", pronounce: "IN-fer-ens", example: "Make inference", exampleId: "Buat kesimpulan" },
      { en: "Vocabulary", id: "Kosakata", pronounce: "vo-KEB-yu-le-ri", example: "Vocab context", exampleId: "Kosakata konteks" },
      { en: "Reference", id: "Rujukan", pronounce: "RE-fer-ens", example: "It refers to", exampleId: "Itu merujuk ke" }
    ],
    quiz: [
      { id: "10-3-q1", question: "TOEFL Q1: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-3-q2", question: "TOEFL Q2: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-3-q3", question: "TOEFL Q3: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-3-q4", question: "TOEFL Q4: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-3-q5", question: "TOEFL Q5: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." }
    ]
  },
  {
    id: "10-4",
    levelId: 10,
    order: 58,
    title: "Reference & Inference",
    titleEn: "Inference",
    objective: "It refers to...",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Reference & Inference (Inference) — It refers to.... Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Reference & Inference",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Inference A", id: "Contoh Reference & Inference A" },
            { en: "Example Inference B", id: "Contoh Reference & Inference B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Inference at work", id: "Saya pakai Reference & Inference di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Summary", id: "Ringkasan", pronounce: "SAM-ri", example: "Write summary", exampleId: "Tulis ringkasan" },
      { en: "Simulate", id: "Simulasi", pronounce: "SIM-yu-leit", example: "Simulate test", exampleId: "Simulasi tes" },
      { en: "Skim", id: "Baca cepat", pronounce: "skim", example: "Skim the text", exampleId: "Baca cepat teks" },
      { en: "Scan", id: "Pindai", pronounce: "sken", example: "Scan details", exampleId: "Pindai detail" },
      { en: "Passage", id: "Bacaan", pronounce: "PES-ij", example: "Read passage", exampleId: "Baca bacaan" },
      { en: "Inference", id: "Kesimpulan", pronounce: "IN-fer-ens", example: "Make inference", exampleId: "Buat kesimpulan" },
      { en: "Vocabulary", id: "Kosakata", pronounce: "vo-KEB-yu-le-ri", example: "Vocab context", exampleId: "Kosakata konteks" },
      { en: "Reference", id: "Rujukan", pronounce: "RE-fer-ens", example: "It refers to", exampleId: "Itu merujuk ke" },
      { en: "Detail", id: "Detail", pronounce: "DI-teil", example: "Find detail", exampleId: "Cari detail" },
      { en: "Main idea", id: "Ide utama", pronounce: "mein ai-DIA", example: "Main idea is", exampleId: "Ide utamanya" }
    ],
    quiz: [
      { id: "10-4-q1", question: "TOEFL Q1: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-4-q2", question: "TOEFL Q2: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-4-q3", question: "TOEFL Q3: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-4-q4", question: "TOEFL Q4: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-4-q5", question: "TOEFL Q5: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." }
    ]
  },
  {
    id: "10-5",
    levelId: 10,
    order: 59,
    title: "Simulasi Reading 1",
    titleEn: "Reading Sim 1",
    objective: "5 passages",
    duration: "18 menit",
    content: {
      intro: "Pelajaran Simulasi Reading 1 (Reading Sim 1) — 5 passages. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Simulasi Reading 1",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Reading Sim 1 A", id: "Contoh Simulasi Reading 1 A" },
            { en: "Example Reading Sim 1 B", id: "Contoh Simulasi Reading 1 B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Reading Sim 1 at work", id: "Saya pakai Simulasi Reading 1 di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Skim", id: "Baca cepat", pronounce: "skim", example: "Skim the text", exampleId: "Baca cepat teks" },
      { en: "Scan", id: "Pindai", pronounce: "sken", example: "Scan details", exampleId: "Pindai detail" },
      { en: "Passage", id: "Bacaan", pronounce: "PES-ij", example: "Read passage", exampleId: "Baca bacaan" },
      { en: "Inference", id: "Kesimpulan", pronounce: "IN-fer-ens", example: "Make inference", exampleId: "Buat kesimpulan" },
      { en: "Vocabulary", id: "Kosakata", pronounce: "vo-KEB-yu-le-ri", example: "Vocab context", exampleId: "Kosakata konteks" },
      { en: "Reference", id: "Rujukan", pronounce: "RE-fer-ens", example: "It refers to", exampleId: "Itu merujuk ke" },
      { en: "Detail", id: "Detail", pronounce: "DI-teil", example: "Find detail", exampleId: "Cari detail" },
      { en: "Main idea", id: "Ide utama", pronounce: "mein ai-DIA", example: "Main idea is", exampleId: "Ide utamanya" },
      { en: "Summary", id: "Ringkasan", pronounce: "SAM-ri", example: "Write summary", exampleId: "Tulis ringkasan" },
      { en: "Simulate", id: "Simulasi", pronounce: "SIM-yu-leit", example: "Simulate test", exampleId: "Simulasi tes" }
    ],
    quiz: [
      { id: "10-5-q1", question: "TOEFL Q1: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-5-q2", question: "TOEFL Q2: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-5-q3", question: "TOEFL Q3: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-5-q4", question: "TOEFL Q4: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-5-q5", question: "TOEFL Q5: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." }
    ]
  },
  {
    id: "10-6",
    levelId: 10,
    order: 60,
    title: "Simulasi Full TOEFL",
    titleEn: "Full TOEFL Sim",
    objective: "Full 3 parts",
    duration: "25 menit",
    content: {
      intro: "Pelajaran Simulasi Full TOEFL (Full TOEFL Sim) — Full 3 parts. Fokus 15 menit, hafal EI em.",
      sections: [
      {
          heading: "1. Pola Simulasi Full TOEFL",
          headingId: "Pola",
          body: "Rumus 1 baris + EI em.",
          examples: [
            { en: "Example Full TOEFL Sim A", id: "Contoh Simulasi Full TOEFL A" },
            { en: "Example Full TOEFL Sim B", id: "Contoh Simulasi Full TOEFL B" }
          ],
          tip: "EI em membantu pronunciation."
        },
        {
          heading: "2. Contoh Kerja",
          headingId: "Kerja",
          body: "Langsung pakai.",
          examples: [
            { en: "I use Full TOEFL Sim at work", id: "Saya pakai Simulasi Full TOEFL di kerja" }
          ]
        }
      ]
    },
    vocab: [
      { en: "Passage", id: "Bacaan", pronounce: "PES-ij", example: "Read passage", exampleId: "Baca bacaan" },
      { en: "Inference", id: "Kesimpulan", pronounce: "IN-fer-ens", example: "Make inference", exampleId: "Buat kesimpulan" },
      { en: "Vocabulary", id: "Kosakata", pronounce: "vo-KEB-yu-le-ri", example: "Vocab context", exampleId: "Kosakata konteks" },
      { en: "Reference", id: "Rujukan", pronounce: "RE-fer-ens", example: "It refers to", exampleId: "Itu merujuk ke" },
      { en: "Detail", id: "Detail", pronounce: "DI-teil", example: "Find detail", exampleId: "Cari detail" },
      { en: "Main idea", id: "Ide utama", pronounce: "mein ai-DIA", example: "Main idea is", exampleId: "Ide utamanya" },
      { en: "Summary", id: "Ringkasan", pronounce: "SAM-ri", example: "Write summary", exampleId: "Tulis ringkasan" },
      { en: "Simulate", id: "Simulasi", pronounce: "SIM-yu-leit", example: "Simulate test", exampleId: "Simulasi tes" },
      { en: "Skim", id: "Baca cepat", pronounce: "skim", example: "Skim the text", exampleId: "Baca cepat teks" },
      { en: "Scan", id: "Pindai", pronounce: "sken", example: "Scan details", exampleId: "Pindai detail" }
    ],
    quiz: [
      { id: "10-6-q1", question: "TOEFL Q1: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-6-q2", question: "TOEFL Q2: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-6-q3", question: "TOEFL Q3: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-6-q4", question: "TOEFL Q4: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." },
      { id: "10-6-q5", question: "TOEFL Q5: Main idea?", options: ["Skim first (correct)","Read word by word","Skip all","Guess"], answer: 0, explanation: "Skimming untuk ide utama." }
    ]
  },
];

export function getLessonById(id: string) { return lessons.find((l) => l.id === id); }
export function getLessonsByLevel(levelId: number) { return lessons.filter((l) => l.levelId === levelId).sort((a,b)=>a.order-b.order); }