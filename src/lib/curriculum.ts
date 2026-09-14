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
  // LEVEL 1 - LESSON 1
  {
    id: "1-1",
    levelId: 1,
    order: 1,
    title: "Sapa & Perkenalan",
    titleEn: "Greeting & Introduction",
    objective: "Bisa perkenalan diri 30 detik + sapa orang dengan benar",
    duration: "15 menit",
    content: {
      intro: "Ini pelajaran paling penting. 90% percakapan kerja dimulai dari sini. Hafalin polanya, jangan kata per kata.",
      sections: [
        {
          heading: "1. Sapaan Dasar",
          headingId: "Sapaan Dasar",
          body: "Pakai ini sesuai waktu. Jangan pakai Good Night untuk sapa, itu untuk pamit tidur.",
          examples: [
            { en: "Hello! / Hi!", id: "Halo!" },
            { en: "Good morning (pagi)", id: "Selamat pagi" },
            { en: "Good afternoon (siang)", id: "Selamat siang" },
            { en: "Good evening (sore/malam)", id: "Selamat sore" },
            { en: "How are you?", id: "Apa kabar?" },
          ],
          tip: "Jawab How are you? -> I'm good, thank you. And you? Jangan jawab I'm fine kalau lagi gak fine, orang bule anggap itu aneh.",
        },
        {
          heading: "2. Perkenalan Diri - Pola Wajib",
          headingId: "Pola Perkenalan",
          body: "Hafalin 3 kalimat ini. Ganti [nama] & [pekerjaan] sesuai kamu. Ini template interview juga.",
          examples: [
            { en: "Hello, my name is Farha.", id: "Halo, nama saya Farha." },
            { en: "I am from Indonesia.", id: "Saya dari Indonesia." },
            { en: "I work as a marketing staff.", id: "Saya kerja sebagai staff marketing." },
            { en: "Nice to meet you!", id: "Senang bertemu denganmu!" },
          ],
          tip: "Rumus: My name is... / I am from... / I work as a...  -  I = Saya, am/is/are = adalah",
        },
        {
          heading: "3. Pamit",
          headingId: "Pamit",
          body: "Setelah kenalan, tutup dengan sopan.",
          examples: [
            { en: "Nice to meet you too!", id: "Senang bertemu denganmu juga!" },
            { en: "See you later!", id: "Sampai jumpa nanti!" },
            { en: "Have a great day!", id: "Semoga harimu menyenangkan!" },
          ],
        },
      ],
    },
    vocab: [
      { en: "Hello", id: "Halo", pronounce: "he-LOU", example: "Hello, my name is Andi.", exampleId: "Halo, nama saya Andi." },
      { en: "My name is", id: "Nama saya adalah", pronounce: "mai neim iz", example: "My name is Sinta.", exampleId: "Nama saya Sinta." },
      { en: "I am from", id: "Saya dari", pronounce: "ai em from", example: "I am from Jakarta.", exampleId: "Saya dari Jakarta." },
      { en: "I work as", id: "Saya bekerja sebagai", pronounce: "ai work ez", example: "I work as a teacher.", exampleId: "Saya bekerja sebagai guru." },
      { en: "Nice to meet you", id: "Senang bertemu denganmu", pronounce: "nais tu mit yu", example: "Nice to meet you, John!", exampleId: "Senang bertemu denganmu, John!" },
      { en: "How are you?", id: "Apa kabar?", pronounce: "hau ar yu", example: "How are you today?", exampleId: "Apa kabarmu hari ini?" },
      { en: "I am good", id: "Saya baik", pronounce: "ai em gud", example: "I am good, thank you.", exampleId: "Saya baik, terima kasih." },
      { en: "Thank you", id: "Terima kasih", pronounce: "theng-kyu", example: "Thank you so much!", exampleId: "Terima kasih banyak!" },
      { en: "See you", id: "Sampai jumpa", pronounce: "si yu", example: "See you tomorrow!", exampleId: "Sampai jumpa besok!" },
      { en: "Good morning", id: "Selamat pagi", pronounce: "gud mor-ning", example: "Good morning, team!", exampleId: "Selamat pagi, tim!" },
    ],
    quiz: [
      {
        id: "1-1-q1",
        question: "How to introduce your name correctly?",
        questionId: "Gimana cara perkenalan nama yang benar?",
        options: ["My name John", "My name is John", "I name is John", "Name is John"],
        answer: 1,
        explanation: "Pola wajib: My name IS John. Jangan lupa 'is'.",
      },
      {
        id: "1-1-q2",
        question: "What do you answer when someone says 'How are you?'",
        questionId: "Jawab apa kalau ditanya 'How are you?'",
        options: ["I am good, thank you.", "I good thank you", "Good night", "My name is good"],
        answer: 0,
        explanation: "Jawaban natural: I'm good / I'm fine, thank you. And you?",
      },
      {
        id: "1-1-q3",
        question: "'Saya bekerja sebagai staff' in English is...",
        questionId: "'Saya bekerja sebagai staff' bahasa Inggrisnya...",
        options: ["I work staff", "I am work as staff", "I work as a staff", "I working as staff"],
        answer: 2,
        explanation: "Pola: I work AS A [pekerjaan].",
      },
      {
        id: "1-1-q4",
        question: "Which one is for saying goodbye in the morning?",
        questionId: "Yang mana untuk pamit di pagi hari?",
        options: ["Good night", "Good morning and see you later!", "Hello", "Nice to meet you"],
        answer: 1,
        explanation: "Good night hanya untuk mau tidur. Pagi/siang pakai See you later / Have a great day.",
      },
      {
        id: "1-1-q5",
        question: "Translate: 'Senang bertemu denganmu!'",
        options: ["Nice to meet you!", "How are you?", "Good evening!", "My name is nice"],
        answer: 0,
        explanation: "Nice to meet you = Senang bertemu denganmu. Wajib hafal.",
      },
    ],
  },
  // LEVEL 1 - LESSON 2
  {
    id: "1-2",
    levelId: 1,
    order: 2,
    title: "Angka, Hari & Waktu",
    titleEn: "Numbers, Days & Time",
    objective: "Bisa sebut tanggal, jam, dan jadwal kerja",
    duration: "20 menit",
    content: {
      intro: "Buat kerja, kamu wajib bisa sebut angka, hari, dan jam. Meeting jam berapa? Deadline kapan? Ini kuncinya.",
      sections: [
        {
          heading: "1. Angka 1-20 (Wajib Hafal)",
          headingId: "Angka",
          body: "1-10 dulu, sisanya ngikutin pola.",
          examples: [
            { en: "1 one, 2 two, 3 three, 4 four, 5 five", id: "1 satu, 2 dua, 3 tiga..." },
            { en: "10 ten, 11 eleven, 12 twelve", id: "10 sepuluh, 11 sebelas..." },
            { en: "20 twenty, 30 thirty", id: "20 dua puluh, 30 tiga puluh" },
          ],
        },
        {
          heading: "2. Hari & Bulan",
          headingId: "Hari & Bulan",
          body: "Hafal 7 hari. Bulan cukup tau singkatan.",
          examples: [
            { en: "Monday, Tuesday, Wednesday, Thursday, Friday", id: "Senin - Jumat" },
            { en: "Saturday, Sunday", id: "Sabtu, Minggu" },
            { en: "January, February, March... December", id: "Januari - Desember" },
          ],
          tip: "Trick: Tulis jadwal kerjamu pakai bahasa Inggris minggu ini.",
        },
        {
          heading: "3. Jam & Waktu Kerja",
          headingId: "Jam",
          body: "Pola jam: It's [jam] o'clock / at [jam]",
          examples: [
            { en: "It's 9 o'clock.", id: "Jam 9 tepat." },
            { en: "The meeting is at 10 AM.", id: "Meeting jam 10 pagi." },
            { en: "I work from 9 AM to 5 PM.", id: "Saya kerja jam 9 pagi sampai 5 sore." },
            { en: "See you on Monday!", id: "Sampai jumpa hari Senin!" },
          ],
        },
      ],
    },
    vocab: [
      { en: "Monday", id: "Senin", pronounce: "MAN-dei", example: "Meeting on Monday.", exampleId: "Meeting hari Senin." },
      { en: "Today", id: "Hari ini", pronounce: "tu-DEI", example: "Today is Monday.", exampleId: "Hari ini Senin." },
      { en: "Tomorrow", id: "Besok", pronounce: "tu-MO-rou", example: "See you tomorrow!", exampleId: "Sampai jumpa besok!" },
      { en: "Time", id: "Waktu / Jam", pronounce: "taim", example: "What time is the meeting?", exampleId: "Jam berapa meetingnya?" },
      { en: "At 9 AM", id: "Jam 9 pagi", pronounce: "et nain ei-em", example: "I start work at 9 AM.", exampleId: "Saya mulai kerja jam 9 pagi." },
      { en: "O'clock", id: "Tepat (jam)", pronounce: "o-klok", example: "It's 5 o'clock.", exampleId: "Jam 5 tepat." },
      { en: "Weekend", id: "Akhir pekan", pronounce: "wik-end", example: "I rest on the weekend.", exampleId: "Saya istirahat akhir pekan." },
      { en: "Deadline", id: "Batas waktu", pronounce: "DED-lain", example: "Deadline is on Friday.", exampleId: "Deadline hari Jumat." },
      { en: "Schedule", id: "Jadwal", pronounce: "SKE-jul", example: "What is your schedule?", exampleId: "Apa jadwalmu?" },
      { en: "Early / Late", id: "Awal / Terlambat", pronounce: "ER-li / leit", example: "Don't be late!", exampleId: "Jangan terlambat!" },
    ],
    quiz: [
      {
        id: "1-2-q1",
        question: "How do you say 'Jumat' in English?",
        options: ["Monday", "Thursday", "Friday", "Sunday"],
        answer: 2,
        explanation: "Friday = Jumat.",
      },
      {
        id: "1-2-q2",
        question: "The meeting is at 9 AM. What does it mean?",
        questionId: "Artinya apa?",
        options: ["Meeting jam 9 malam", "Meeting jam 9 pagi", "Meeting jam 9 siang", "Meeting kemarin"],
        answer: 1,
        explanation: "AM = pagi (00-12), PM = siang/malam (12-24).",
      },
      {
        id: "1-2-q3",
        question: "Translate: 'Sampai jumpa besok!'",
        options: ["See you today", "See you tomorrow", "Good night tomorrow", "See you on Monday"],
        answer: 1,
        explanation: "Tomorrow = besok, Today = hari ini.",
      },
      {
        id: "1-2-q4",
        question: "It's 3 o'clock. What time is it?",
        options: ["Jam 3 tepat", "Jam 13", "Jam 3 lewat", "Jam setengah 3"],
        answer: 0,
        explanation: "O'clock = tepat.",
      },
      {
        id: "1-2-q5",
        question: "Which is correct? 'Meeting hari Senin'",
        options: ["Meeting on Monday", "Meeting in Monday", "Meeting at Monday", "Meeting Monday"],
        answer: 0,
        explanation: "Hari pakai ON: on Monday, on Friday.",
      },
    ],
  },
  // LEVEL 1 - LESSON 3
  {
    id: "1-3",
    levelId: 1,
    order: 3,
    title: "To Be: I am, You are",
    titleEn: "To Be Basics",
    objective: "Paham 'adalah' dalam bahasa Inggris (is/am/are)",
    duration: "20 menit",
    content: {
      intro: "Di Indonesia 'adalah' satu kata, di Inggris ada 3: am / is / are. Ini fondasi grammar TOEFL juga.",
      sections: [
        {
          heading: "1. Rumus To Be",
          headingId: "Rumus To Be",
          body: "Pilih sesuai subjek:",
          examples: [
            { en: "I AM happy.", id: "Saya senang." },
            { en: "You ARE happy. / We ARE happy. / They ARE happy.", id: "Kamu/Kita/Mereka senang." },
            { en: "He IS happy. / She IS happy. / It IS happy.", id: "Dia (laki/perempuan/benda) senang." },
          ],
          tip: "Hafalin: I AM, HE/SHE/IT IS, YOU/WE/THEY ARE",
        },
        {
          heading: "2. Negatif & Tanya",
          headingId: "Negatif & Tanya",
          body: "Tinggal tambah NOT untuk negatif, balik posisi untuk tanya.",
          examples: [
            { en: "I am NOT busy.", id: "Saya tidak sibuk." },
            { en: "Are you busy?", id: "Apakah kamu sibuk?" },
            { en: "Is he ready?", id: "Apakah dia siap?" },
            { en: "Yes, I am. / No, I'm not.", id: "Ya / Tidak." },
          ],
        },
        {
          heading: "3. Contoh Kerja",
          headingId: "Contoh Kerja",
          body: "Langsung pakai di kantor:",
          examples: [
            { en: "I am ready for the meeting.", id: "Saya siap untuk meeting." },
            { en: "She is my manager.", id: "Dia manajer saya." },
            { en: "They are on time.", id: "Mereka tepat waktu." },
            { en: "We are busy today.", id: "Kita sibuk hari ini." },
          ],
        },
      ],
    },
    vocab: [
      { en: "I am", id: "Saya adalah", pronounce: "ai em", example: "I am ready.", exampleId: "Saya siap." },
      { en: "You are", id: "Kamu adalah", pronounce: "yu ar", example: "You are late.", exampleId: "Kamu terlambat." },
      { en: "He is / She is", id: "Dia adalah", pronounce: "hi iz / shi iz", example: "He is my boss.", exampleId: "Dia bos saya." },
      { en: "We are", id: "Kita adalah", pronounce: "wi ar", example: "We are a team.", exampleId: "Kita adalah tim." },
      { en: "They are", id: "Mereka adalah", pronounce: "dei ar", example: "They are ready.", exampleId: "Mereka siap." },
      { en: "Ready", id: "Siap", pronounce: "RE-di", example: "Are you ready?", exampleId: "Apakah kamu siap?" },
      { en: "Busy", id: "Sibuk", pronounce: "BI-zi", example: "I am busy.", exampleId: "Saya sibuk." },
      { en: "Happy", id: "Senang", pronounce: "HE-pi", example: "I am happy.", exampleId: "Saya senang." },
      { en: "Not", id: "Tidak", pronounce: "not", example: "I am not busy.", exampleId: "Saya tidak sibuk." },
      { en: "Are you...?", id: "Apakah kamu...?", pronounce: "ar yu", example: "Are you ready?", exampleId: "Apakah kamu siap?" },
    ],
    quiz: [
      {
        id: "1-3-q1",
        question: "Choose correct: 'She ___ my manager.'",
        options: ["am", "is", "are", "be"],
        answer: 1,
        explanation: "She -> IS. He/She/It pakai IS.",
      },
      {
        id: "1-3-q2",
        question: "Choose correct: 'They ___ busy.'",
        options: ["is", "am", "are", "be"],
        answer: 2,
        explanation: "They -> ARE.",
      },
      {
        id: "1-3-q3",
        question: "How to make negative? 'I am ready' -> 'Saya tidak siap'",
        options: ["I am not ready", "I not am ready", "I am no ready", "I isn't ready"],
        answer: 0,
        explanation: "Negatif: am/is/are + NOT.",
      },
      {
        id: "1-3-q4",
        question: "How to ask: 'Apakah kamu sibuk?'",
        options: ["You are busy?", "Are you busy?", "Is you busy?", "Am you busy?"],
        answer: 1,
        explanation: "Tanya: Are you...? (dibalik)",
      },
      {
        id: "1-3-q5",
        question: "'We are a team' artinya?",
        options: ["Saya adalah tim", "Mereka adalah tim", "Kita adalah tim", "Dia adalah tim"],
        answer: 2,
        explanation: "We = Kita/Kami.",
      },
    ],
  },
  // LEVEL 2 - PREVIEW (locked content example)
  {
    id: "2-1",
    levelId: 2,
    order: 4,
    title: "This, That & Kata Benda",
    titleEn: "This / That & Nouns",
    objective: "Bisa tunjuk barang & sebut benda kerja",
    duration: "20 menit",
    content: {
      intro: "Buat presentasi dan tunjuk barang di kantor.",
      sections: [
        {
          heading: "Preview - Selesaikan Level 1 dulu",
          headingId: "Preview",
          body: "Lesson ini akan kebuka setelah kamu selesaikan 3 lesson di Level 1. Tetap semangat!",
          examples: [
            { en: "This is my laptop.", id: "Ini laptop saya." },
            { en: "That is your book.", id: "Itu buku kamu." },
          ],
        },
      ],
    },
    vocab: [
      { en: "This", id: "Ini", pronounce: "dis", example: "This is my desk.", exampleId: "Ini meja saya." },
      { en: "That", id: "Itu", pronounce: "det", example: "That is your chair.", exampleId: "Itu kursimu." },
      { en: "Laptop", id: "Laptop", pronounce: "LEP-top", example: "This laptop is new.", exampleId: "Laptop ini baru." },
      { en: "Book", id: "Buku", pronounce: "buk", example: "That book is mine.", exampleId: "Buku itu milikku." },
      { en: "Desk", id: "Meja", pronounce: "desk", example: "My desk is clean.", exampleId: "Meja saya bersih." },
      { en: "Chair", id: "Kursi", pronounce: "cer", example: "Your chair is there.", exampleId: "Kursimu di sana." },
      { en: "Pen", id: "Pulpen", pronounce: "pen", example: "This pen is blue.", exampleId: "Pulpen ini biru." },
      { en: "Paper", id: "Kertas", pronounce: "PEI-per", example: "I need paper.", exampleId: "Saya butuh kertas." },
      { en: "File", id: "Berkas", pronounce: "fail", example: "That file is important.", exampleId: "Berkas itu penting." },
      { en: "Office", id: "Kantor", pronounce: "O-fis", example: "This is my office.", exampleId: "Ini kantor saya." },
    ],
    quiz: [
      {
        id: "2-1-q1",
        question: "This vs That - This is for?",
        options: ["Far away (jauh)", "Nearby (dekat)", "Past", "Future"],
        answer: 1,
        explanation: "This = dekat, That = jauh.",
      },
      {
        id: "2-1-q2",
        question: "Translate: 'Ini adalah laptop saya'",
        options: ["That is my laptop", "This is my laptop", "These is my laptop", "This are my laptop"],
        answer: 1,
        explanation: "This is...",
      },
      {
        id: "2-1-q3",
        question: "Which is correct?",
        options: ["This book are good", "This book is good", "That book are good", "This books is good"],
        answer: 1,
        explanation: "This/That + singular + is.",
      },
      {
        id: "2-1-q4",
        question: "'Itu kursimu' = ?",
        options: ["This is your chair", "That is your chair", "This is my chair", "That are your chair"],
        answer: 1,
        explanation: "That is your chair (jauh).",
      },
      {
        id: "2-1-q5",
        question: "Plural of 'This is my book'?",
        options: ["This are my books", "These are my books", "That are my books", "These is my books"],
        answer: 1,
        explanation: "Plural: These are... / Those are...",
      },
    ],
  },
];

export function getLessonById(id: string) {
  return lessons.find((l) => l.id === id);
}

export function getLessonsByLevel(levelId: number) {
  return lessons.filter((l) => l.levelId === levelId).sort((a, b) => a.order - b.order);
}
