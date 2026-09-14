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
    objective: "Bisa perkenalan 30 detik + sapa sesuai jam",
    duration: "15 menit",
    content: {
      intro: "Ini pelajaran paling penting. 90% kerja dimulai dari sapa & perkenalan. Hafal EI em, jangan kata per kata.",
      sections: [
      {
          heading: "1. Sapaan Sesuai Jam (EI em)",
          headingId: "Sapaan",
          body: "Hello/Hi bebas. Good morning (pagi), afternoon (siang 12-18), evening (sore), Good night HANYA mau tidur — jangan buat sapa!",
          examples: [
            { en: "Hello! Hi! Good morning, team!", id: "Halo! Hai! Selamat pagi, tim!" },
            { en: "Good afternoon, Mr. Andi. Good evening!", id: "Selamat siang Pak Andi. Selamat sore!" },
            { en: "How are you? — I'm good, thank you. And you?", id: "Apa kabar? — Saya baik, terima kasih. Kamu?" }
          ],
          tip: "Jawab How are you? → I'm good / I'm great, thanks. And you? Jangan I'm fine terus kalau bos tanya."
        },
        {
          heading: "2. Perkenalan 30 Detik (Template Wajib Kerja)",
          headingId: "Template",
          body: "Hafal 3 kalimat ini. Ganti [nama] [kota] [job]. Ini juga template interview Tell me about yourself.",
          examples: [
            { en: "Hello, my name is Farha. I am from Jakarta.", id: "Halo, nama saya Farha. Saya dari Jakarta." },
            { en: "I work as a marketing staff at SIMPEG.", id: "Saya kerja sebagai staff marketing di SIMPEG." },
            { en: "Nice to meet you! I am ready for the meeting.", id: "Senang bertemu! Saya siap rapat." }
          ],
          tip: "Rumus: My name is... / I am from... / I work as a... — I = AI, am = em, is = iz, are = ar"
        },
        {
          heading: "3. Pamit Sopan",
          headingId: "Pamit",
          body: "Tutup dengan sopan. Have a great day dipakai bos bule tiap hari.",
          examples: [
            { en: "Nice to meet you too! See you later!", id: "Senang bertemu juga! Sampai nanti!" },
            { en: "Have a great day! Thank you so much!", id: "Semoga harimu bagus! Terima kasih banyak!" }
          ],
          tip: "Hindari Good night untuk sapa — itu pamit tidur."
        }
      ]
    },
    vocab: [
      { en: "Please help me", id: "Tolong bantu saya", pronounce: "pliiz help mi", example: "Please help me with this.", exampleId: "Tolong bantu saya dengan ini." },
      { en: "Nice to meet you", id: "Senang bertemu", pronounce: "nais tu miit yu", example: "Nice to meet you, John!", exampleId: "Senang bertemu, John!" },
      { en: "Good morning team", id: "Selamat pagi tim", pronounce: "gud MOR-ning tiim", example: "Good morning, team! Ready?", exampleId: "Selamat pagi, tim! Siap?" },
      { en: "How are you", id: "Apa kabar", pronounce: "hau ar yu", example: "How are you today?", exampleId: "Apa kabar hari ini?" },
      { en: "I am from Jakarta", id: "Saya dari Jakarta", pronounce: "ai em from ja-KAR-ta", example: "I am from Jakarta.", exampleId: "Saya dari Jakarta." },
      { en: "See you tomorrow", id: "Sampai jumpa besok", pronounce: "si yu tu-MO-rou", example: "See you tomorrow at 9!", exampleId: "Sampai jumpa besok jam 9!" },
      { en: "I am ready", id: "Saya siap", pronounce: "ai em RE-di", example: "I am ready for meeting.", exampleId: "Saya siap untuk rapat." },
      { en: "Hello", id: "Halo", pronounce: "he-LOU", example: "Hello, team! Good morning.", exampleId: "Halo, tim! Selamat pagi." },
      { en: "My name is", id: "Nama saya", pronounce: "mai neim iz", example: "My name is Rina Wijaya.", exampleId: "Nama saya Rina Wijaya." },
      { en: "Thank you so much", id: "Terima kasih banyak", pronounce: "THENG-kyu sou mach", example: "Thank you so much for help!", exampleId: "Terima kasih banyak atas bantuannya!" }
    ],
    quiz: [
      { id: "1-1-q1", question: "My name ____ John (is?)", options: ["My name John", "My name is John (correct)", "I is John", "My are John"], answer: 1, explanation: "My name + IS + nama. EI em: IZ" },
      { id: "1-1-q2", question: "How are you? Jawab", options: ["I good", "I am good, thank you (correct)", "Me good", "Good you"], answer: 1, explanation: "I AM good, thank you. And you?" },
      { id: "1-1-q3", question: "I work as a ____ (staff)", options: ["work staff", "work as a staff (correct)", "as work staff", "working as"], answer: 1, explanation: "I work AS A staff." },
      { id: "1-1-q4", question: "Good morning artinya", options: ["Selamat malam", "Selamat pagi (correct)", "Selamat siang", "Halo"], answer: 1, explanation: "Good morning = pagi, Good night = tidur." },
      { id: "1-1-q5", question: "Nice to meet you", options: ["Senang bertemu (correct)", "Apa kabar", "Nama saya", "Halo"], answer: 0, explanation: "Nice to meet you = senang bertemu." }
    ]
  },
  {
    id: "1-2",
    levelId: 1,
    order: 2,
    title: "Angka, Hari & Waktu",
    titleEn: "Numbers, Days & Time",
    objective: "Bisa sebut tanggal & jam meeting",
    duration: "20 menit",
    content: {
      intro: "Pelajaran Angka, Hari & Waktu (Numbers, Days & Time) — Bisa sebut tanggal & jam meeting. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Pola Inti + EI em",
          headingId: "Pola Inti + EI em",
          body: "Hafal pola, jangan kata per kata. EI em: baca pelan.",
          examples: [
            { en: "Nice to meet you, John!", id: "Senang bertemu, John!" },
            { en: "Good morning, team! Ready?", id: "Selamat pagi, tim! Siap?" }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Contoh Real Kerja",
          headingId: "Contoh Real Kerja",
          body: "Pakai besok pagi di kantor/slack.",
          examples: [
            { en: "How are you today?", id: "Apa kabar hari ini?" },
            { en: "I use Numbers, Days & Time at work today.", id: "Saya pakai Angka, Hari & Waktu di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Latihan Shadowing",
          headingId: "Latihan Shadowing",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Numbers, Days & Time now.", id: "Mari latihan Angka, Hari & Waktu sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "How are you", id: "Apa kabar", pronounce: "hau ar yu", example: "How are you today?", exampleId: "Apa kabar hari ini?" },
      { en: "I am from Jakarta", id: "Saya dari Jakarta", pronounce: "ai em from ja-KAR-ta", example: "I am from Jakarta.", exampleId: "Saya dari Jakarta." },
      { en: "See you tomorrow", id: "Sampai jumpa besok", pronounce: "si yu tu-MO-rou", example: "See you tomorrow at 9!", exampleId: "Sampai jumpa besok jam 9!" },
      { en: "I am ready", id: "Saya siap", pronounce: "ai em RE-di", example: "I am ready for meeting.", exampleId: "Saya siap untuk rapat." },
      { en: "Hello", id: "Halo", pronounce: "he-LOU", example: "Hello, team! Good morning.", exampleId: "Halo, tim! Selamat pagi." },
      { en: "My name is", id: "Nama saya", pronounce: "mai neim iz", example: "My name is Rina Wijaya.", exampleId: "Nama saya Rina Wijaya." },
      { en: "Thank you so much", id: "Terima kasih banyak", pronounce: "THENG-kyu sou mach", example: "Thank you so much for help!", exampleId: "Terima kasih banyak atas bantuannya!" },
      { en: "Please help me", id: "Tolong bantu saya", pronounce: "pliiz help mi", example: "Please help me with this.", exampleId: "Tolong bantu saya dengan ini." },
      { en: "Nice to meet you", id: "Senang bertemu", pronounce: "nais tu miit yu", example: "Nice to meet you, John!", exampleId: "Senang bertemu, John!" },
      { en: "Good morning team", id: "Selamat pagi tim", pronounce: "gud MOR-ning tiim", example: "Good morning, team! Ready?", exampleId: "Selamat pagi, tim! Siap?" }
    ],
    quiz: [
      { id: "1-2-q1", question: "My name ____ John (is?)", options: ["My name John", "My name is John (correct)", "I is John", "My are John"], answer: 1, explanation: "My name + IS + nama. EI em: IZ" },
      { id: "1-2-q2", question: "How are you? Jawab", options: ["I good", "I am good, thank you (correct)", "Me good", "Good you"], answer: 1, explanation: "I AM good, thank you. And you?" },
      { id: "1-2-q3", question: "I work as a ____ (staff)", options: ["work staff", "work as a staff (correct)", "as work staff", "working as"], answer: 1, explanation: "I work AS A staff." },
      { id: "1-2-q4", question: "Good morning artinya", options: ["Selamat malam", "Selamat pagi (correct)", "Selamat siang", "Halo"], answer: 1, explanation: "Good morning = pagi, Good night = tidur." },
      { id: "1-2-q5", question: "Nice to meet you", options: ["Senang bertemu (correct)", "Apa kabar", "Nama saya", "Halo"], answer: 0, explanation: "Nice to meet you = senang bertemu." }
    ]
  },
  {
    id: "1-3",
    levelId: 1,
    order: 3,
    title: "To Be: I am, You are",
    titleEn: "To Be Basics",
    objective: "Paham am/is/are tanpa ngapalin",
    duration: "20 menit",
    content: {
      intro: "Di Indonesia 'adalah' satu kata, Inggris ada 3: am/is/are. Ini fondasi TOEFL juga.",
      sections: [
      {
          heading: "1. Rumus To Be (EI em)",
          headingId: "Rumus",
          body: "I AM (ai em), You/We/They ARE (yu ar/wi ar/dhei ar), He/She/It IS (hi iz/shi iz). Hafal ini 1 menit.",
          examples: [
            { en: "I am happy. You are kind. We are ready.", id: "Saya senang. Kamu baik. Kita siap." },
            { en: "He is my manager. She is busy. It is important.", id: "Dia (laki) manajer. Dia (perempuan) sibuk. Ini penting." }
          ],
          tip: "He/She/It selalu IS, bukan are. Ini jebakan TOEFL #1."
        },
        {
          heading: "2. Negatif: tambah NOT",
          headingId: "Negatif",
          body: "I am NOT busy. Are you busy? — dibalik untuk tanya.",
          examples: [
            { en: "I am not busy. She is not ready.", id: "Saya tidak sibuk. Dia tidak siap." },
            { en: "Are you ready? Yes, I am. / No, I'm not.", id: "Apakah siap? Ya. / Tidak." },
            { en: "Is he your boss? Yes, he is.", id: "Apakah dia bosmu? Ya." }
          ],
          tip: "Singkat: I'm not, She isn't, They aren't — pakai di chat kerja biar natural."
        },
        {
          heading: "3. Pakai di Kantor (Collocation)",
          headingId: "Kantor",
          body: "Langsung pakai 3 kalimat ini besok pagi.",
          examples: [
            { en: "I am ready for the meeting at 9.", id: "Saya siap rapat jam 9." },
            { en: "She is on time. We are busy today.", id: "Dia tepat waktu. Kita sibuk hari ini." }
          ],
          tip: "Latih shadowing: denger 🔊 Native → rekam di Speaking 3D → bandingin waveform."
        }
      ]
    },
    vocab: [
      { en: "I am ready", id: "Saya siap", pronounce: "ai em RE-di", example: "I am ready for meeting.", exampleId: "Saya siap untuk rapat." },
      { en: "Hello", id: "Halo", pronounce: "he-LOU", example: "Hello, team! Good morning.", exampleId: "Halo, tim! Selamat pagi." },
      { en: "My name is", id: "Nama saya", pronounce: "mai neim iz", example: "My name is Rina Wijaya.", exampleId: "Nama saya Rina Wijaya." },
      { en: "Thank you so much", id: "Terima kasih banyak", pronounce: "THENG-kyu sou mach", example: "Thank you so much for help!", exampleId: "Terima kasih banyak atas bantuannya!" },
      { en: "Please help me", id: "Tolong bantu saya", pronounce: "pliiz help mi", example: "Please help me with this.", exampleId: "Tolong bantu saya dengan ini." },
      { en: "Nice to meet you", id: "Senang bertemu", pronounce: "nais tu miit yu", example: "Nice to meet you, John!", exampleId: "Senang bertemu, John!" },
      { en: "Good morning team", id: "Selamat pagi tim", pronounce: "gud MOR-ning tiim", example: "Good morning, team! Ready?", exampleId: "Selamat pagi, tim! Siap?" },
      { en: "How are you", id: "Apa kabar", pronounce: "hau ar yu", example: "How are you today?", exampleId: "Apa kabar hari ini?" },
      { en: "I am from Jakarta", id: "Saya dari Jakarta", pronounce: "ai em from ja-KAR-ta", example: "I am from Jakarta.", exampleId: "Saya dari Jakarta." },
      { en: "See you tomorrow", id: "Sampai jumpa besok", pronounce: "si yu tu-MO-rou", example: "See you tomorrow at 9!", exampleId: "Sampai jumpa besok jam 9!" }
    ],
    quiz: [
      { id: "1-3-q1", question: "My name ____ John (is?)", options: ["My name John", "My name is John (correct)", "I is John", "My are John"], answer: 1, explanation: "My name + IS + nama. EI em: IZ" },
      { id: "1-3-q2", question: "How are you? Jawab", options: ["I good", "I am good, thank you (correct)", "Me good", "Good you"], answer: 1, explanation: "I AM good, thank you. And you?" },
      { id: "1-3-q3", question: "I work as a ____ (staff)", options: ["work staff", "work as a staff (correct)", "as work staff", "working as"], answer: 1, explanation: "I work AS A staff." },
      { id: "1-3-q4", question: "Good morning artinya", options: ["Selamat malam", "Selamat pagi (correct)", "Selamat siang", "Halo"], answer: 1, explanation: "Good morning = pagi, Good night = tidur." },
      { id: "1-3-q5", question: "Nice to meet you", options: ["Senang bertemu (correct)", "Apa kabar", "Nama saya", "Halo"], answer: 0, explanation: "Nice to meet you = senang bertemu." }
    ]
  },
  {
    id: "1-4",
    levelId: 1,
    order: 4,
    title: "This, That & Benda",
    titleEn: "This/That & Objects",
    objective: "Tunjuk barang di kantor dengan tepat",
    duration: "15 menit",
    content: {
      intro: "Pelajaran This, That & Benda (This/That & Objects) — Tunjuk barang di kantor dengan tepat. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Pola Inti + EI em",
          headingId: "Pola Inti + EI em",
          body: "Hafal pola, jangan kata per kata. EI em: baca pelan.",
          examples: [
            { en: "See you tomorrow at 9!", id: "Sampai jumpa besok jam 9!" },
            { en: "I am ready for meeting.", id: "Saya siap untuk rapat." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Contoh Real Kerja",
          headingId: "Contoh Real Kerja",
          body: "Pakai besok pagi di kantor/slack.",
          examples: [
            { en: "Hello, team! Good morning.", id: "Halo, tim! Selamat pagi." },
            { en: "I use This/That & Objects at work today.", id: "Saya pakai This, That & Benda di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Latihan Shadowing",
          headingId: "Latihan Shadowing",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice This/That & Objects now.", id: "Mari latihan This, That & Benda sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Thank you so much", id: "Terima kasih banyak", pronounce: "THENG-kyu sou mach", example: "Thank you so much for help!", exampleId: "Terima kasih banyak atas bantuannya!" },
      { en: "Please help me", id: "Tolong bantu saya", pronounce: "pliiz help mi", example: "Please help me with this.", exampleId: "Tolong bantu saya dengan ini." },
      { en: "Nice to meet you", id: "Senang bertemu", pronounce: "nais tu miit yu", example: "Nice to meet you, John!", exampleId: "Senang bertemu, John!" },
      { en: "Good morning team", id: "Selamat pagi tim", pronounce: "gud MOR-ning tiim", example: "Good morning, team! Ready?", exampleId: "Selamat pagi, tim! Siap?" },
      { en: "How are you", id: "Apa kabar", pronounce: "hau ar yu", example: "How are you today?", exampleId: "Apa kabar hari ini?" },
      { en: "I am from Jakarta", id: "Saya dari Jakarta", pronounce: "ai em from ja-KAR-ta", example: "I am from Jakarta.", exampleId: "Saya dari Jakarta." },
      { en: "See you tomorrow", id: "Sampai jumpa besok", pronounce: "si yu tu-MO-rou", example: "See you tomorrow at 9!", exampleId: "Sampai jumpa besok jam 9!" },
      { en: "I am ready", id: "Saya siap", pronounce: "ai em RE-di", example: "I am ready for meeting.", exampleId: "Saya siap untuk rapat." },
      { en: "Hello", id: "Halo", pronounce: "he-LOU", example: "Hello, team! Good morning.", exampleId: "Halo, tim! Selamat pagi." },
      { en: "My name is", id: "Nama saya", pronounce: "mai neim iz", example: "My name is Rina Wijaya.", exampleId: "Nama saya Rina Wijaya." }
    ],
    quiz: [
      { id: "1-4-q1", question: "My name ____ John (is?)", options: ["My name John", "My name is John (correct)", "I is John", "My are John"], answer: 1, explanation: "My name + IS + nama. EI em: IZ" },
      { id: "1-4-q2", question: "How are you? Jawab", options: ["I good", "I am good, thank you (correct)", "Me good", "Good you"], answer: 1, explanation: "I AM good, thank you. And you?" },
      { id: "1-4-q3", question: "I work as a ____ (staff)", options: ["work staff", "work as a staff (correct)", "as work staff", "working as"], answer: 1, explanation: "I work AS A staff." },
      { id: "1-4-q4", question: "Good morning artinya", options: ["Selamat malam", "Selamat pagi (correct)", "Selamat siang", "Halo"], answer: 1, explanation: "Good morning = pagi, Good night = tidur." },
      { id: "1-4-q5", question: "Nice to meet you", options: ["Senang bertemu (correct)", "Apa kabar", "Nama saya", "Halo"], answer: 0, explanation: "Nice to meet you = senang bertemu." }
    ]
  },
  {
    id: "1-5",
    levelId: 1,
    order: 5,
    title: "Keluarga & Kepemilikan",
    titleEn: "Family & Possessive",
    objective: "My/your/his/her + 's",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Keluarga & Kepemilikan (Family & Possessive) — My/your/his/her + 's. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Pola Inti + EI em",
          headingId: "Pola Inti + EI em",
          body: "Hafal pola, jangan kata per kata. EI em: baca pelan.",
          examples: [
            { en: "Hello, team! Good morning.", id: "Halo, tim! Selamat pagi." },
            { en: "My name is Rina Wijaya.", id: "Nama saya Rina Wijaya." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Contoh Real Kerja",
          headingId: "Contoh Real Kerja",
          body: "Pakai besok pagi di kantor/slack.",
          examples: [
            { en: "Thank you so much for help!", id: "Terima kasih banyak atas bantuannya!" },
            { en: "I use Family & Possessive at work today.", id: "Saya pakai Keluarga & Kepemilikan di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Latihan Shadowing",
          headingId: "Latihan Shadowing",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Family & Possessive now.", id: "Mari latihan Keluarga & Kepemilikan sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Good morning team", id: "Selamat pagi tim", pronounce: "gud MOR-ning tiim", example: "Good morning, team! Ready?", exampleId: "Selamat pagi, tim! Siap?" },
      { en: "How are you", id: "Apa kabar", pronounce: "hau ar yu", example: "How are you today?", exampleId: "Apa kabar hari ini?" },
      { en: "I am from Jakarta", id: "Saya dari Jakarta", pronounce: "ai em from ja-KAR-ta", example: "I am from Jakarta.", exampleId: "Saya dari Jakarta." },
      { en: "See you tomorrow", id: "Sampai jumpa besok", pronounce: "si yu tu-MO-rou", example: "See you tomorrow at 9!", exampleId: "Sampai jumpa besok jam 9!" },
      { en: "I am ready", id: "Saya siap", pronounce: "ai em RE-di", example: "I am ready for meeting.", exampleId: "Saya siap untuk rapat." },
      { en: "Hello", id: "Halo", pronounce: "he-LOU", example: "Hello, team! Good morning.", exampleId: "Halo, tim! Selamat pagi." },
      { en: "My name is", id: "Nama saya", pronounce: "mai neim iz", example: "My name is Rina Wijaya.", exampleId: "Nama saya Rina Wijaya." },
      { en: "Thank you so much", id: "Terima kasih banyak", pronounce: "THENG-kyu sou mach", example: "Thank you so much for help!", exampleId: "Terima kasih banyak atas bantuannya!" },
      { en: "Please help me", id: "Tolong bantu saya", pronounce: "pliiz help mi", example: "Please help me with this.", exampleId: "Tolong bantu saya dengan ini." },
      { en: "Nice to meet you", id: "Senang bertemu", pronounce: "nais tu miit yu", example: "Nice to meet you, John!", exampleId: "Senang bertemu, John!" }
    ],
    quiz: [
      { id: "1-5-q1", question: "My name ____ John (is?)", options: ["My name John", "My name is John (correct)", "I is John", "My are John"], answer: 1, explanation: "My name + IS + nama. EI em: IZ" },
      { id: "1-5-q2", question: "How are you? Jawab", options: ["I good", "I am good, thank you (correct)", "Me good", "Good you"], answer: 1, explanation: "I AM good, thank you. And you?" },
      { id: "1-5-q3", question: "I work as a ____ (staff)", options: ["work staff", "work as a staff (correct)", "as work staff", "working as"], answer: 1, explanation: "I work AS A staff." },
      { id: "1-5-q4", question: "Good morning artinya", options: ["Selamat malam", "Selamat pagi (correct)", "Selamat siang", "Halo"], answer: 1, explanation: "Good morning = pagi, Good night = tidur." },
      { id: "1-5-q5", question: "Nice to meet you", options: ["Senang bertemu (correct)", "Apa kabar", "Nama saya", "Halo"], answer: 0, explanation: "Nice to meet you = senang bertemu." }
    ]
  },
  {
    id: "1-6",
    levelId: 1,
    order: 6,
    title: "There is/are & Di mana",
    titleEn: "There is/are & Places",
    objective: "Ada di mana + preposisi",
    duration: "15 menit",
    content: {
      intro: "Pelajaran There is/are & Di mana (There is/are & Places) — Ada di mana + preposisi. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Pola Inti + EI em",
          headingId: "Pola Inti + EI em",
          body: "Hafal pola, jangan kata per kata. EI em: baca pelan.",
          examples: [
            { en: "Thank you so much for help!", id: "Terima kasih banyak atas bantuannya!" },
            { en: "Please help me with this.", id: "Tolong bantu saya dengan ini." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Contoh Real Kerja",
          headingId: "Contoh Real Kerja",
          body: "Pakai besok pagi di kantor/slack.",
          examples: [
            { en: "Nice to meet you, John!", id: "Senang bertemu, John!" },
            { en: "I use There is/are & Places at work today.", id: "Saya pakai There is/are & Di mana di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Latihan Shadowing",
          headingId: "Latihan Shadowing",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice There is/are & Places now.", id: "Mari latihan There is/are & Di mana sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "See you tomorrow", id: "Sampai jumpa besok", pronounce: "si yu tu-MO-rou", example: "See you tomorrow at 9!", exampleId: "Sampai jumpa besok jam 9!" },
      { en: "I am ready", id: "Saya siap", pronounce: "ai em RE-di", example: "I am ready for meeting.", exampleId: "Saya siap untuk rapat." },
      { en: "Hello", id: "Halo", pronounce: "he-LOU", example: "Hello, team! Good morning.", exampleId: "Halo, tim! Selamat pagi." },
      { en: "My name is", id: "Nama saya", pronounce: "mai neim iz", example: "My name is Rina Wijaya.", exampleId: "Nama saya Rina Wijaya." },
      { en: "Thank you so much", id: "Terima kasih banyak", pronounce: "THENG-kyu sou mach", example: "Thank you so much for help!", exampleId: "Terima kasih banyak atas bantuannya!" },
      { en: "Please help me", id: "Tolong bantu saya", pronounce: "pliiz help mi", example: "Please help me with this.", exampleId: "Tolong bantu saya dengan ini." },
      { en: "Nice to meet you", id: "Senang bertemu", pronounce: "nais tu miit yu", example: "Nice to meet you, John!", exampleId: "Senang bertemu, John!" },
      { en: "Good morning team", id: "Selamat pagi tim", pronounce: "gud MOR-ning tiim", example: "Good morning, team! Ready?", exampleId: "Selamat pagi, tim! Siap?" },
      { en: "How are you", id: "Apa kabar", pronounce: "hau ar yu", example: "How are you today?", exampleId: "Apa kabar hari ini?" },
      { en: "I am from Jakarta", id: "Saya dari Jakarta", pronounce: "ai em from ja-KAR-ta", example: "I am from Jakarta.", exampleId: "Saya dari Jakarta." }
    ],
    quiz: [
      { id: "1-6-q1", question: "My name ____ John (is?)", options: ["My name John", "My name is John (correct)", "I is John", "My are John"], answer: 1, explanation: "My name + IS + nama. EI em: IZ" },
      { id: "1-6-q2", question: "How are you? Jawab", options: ["I good", "I am good, thank you (correct)", "Me good", "Good you"], answer: 1, explanation: "I AM good, thank you. And you?" },
      { id: "1-6-q3", question: "I work as a ____ (staff)", options: ["work staff", "work as a staff (correct)", "as work staff", "working as"], answer: 1, explanation: "I work AS A staff." },
      { id: "1-6-q4", question: "Good morning artinya", options: ["Selamat malam", "Selamat pagi (correct)", "Selamat siang", "Halo"], answer: 1, explanation: "Good morning = pagi, Good night = tidur." },
      { id: "1-6-q5", question: "Nice to meet you", options: ["Senang bertemu (correct)", "Apa kabar", "Nama saya", "Halo"], answer: 0, explanation: "Nice to meet you = senang bertemu." }
    ]
  },
  {
    id: "2-1",
    levelId: 2,
    order: 7,
    title: "Kata Kerja Harian",
    titleEn: "Daily Verbs",
    objective: "50 verb kerja paling sering",
    duration: "18 menit",
    content: {
      intro: "Pelajaran Kata Kerja Harian (Daily Verbs) — 50 verb kerja paling sering. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Pola Inti + EI em",
          headingId: "Pola Inti + EI em",
          body: "Hafal pola, jangan kata per kata. EI em: baca pelan.",
          examples: [
            { en: "What time is the meeting?", id: "Jam berapa rapatnya?" },
            { en: "I work at 9 AM every day.", id: "Saya kerja jam 9 tiap hari." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Contoh Real Kerja",
          headingId: "Contoh Real Kerja",
          body: "Pakai besok pagi di kantor/slack.",
          examples: [
            { en: "I go to office by bus.", id: "Saya ke kantor naik bus." },
            { en: "I use Daily Verbs at work today.", id: "Saya pakai Kata Kerja Harian di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Latihan Shadowing",
          headingId: "Latihan Shadowing",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Daily Verbs now.", id: "Mari latihan Kata Kerja Harian sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "I work at 9", id: "Saya kerja jam 9", pronounce: "ai werk et nain", example: "I work at 9 AM every day.", exampleId: "Saya kerja jam 9 tiap hari." },
      { en: "I go to office", id: "Saya pergi ke kantor", pronounce: "ai go tu O-fis", example: "I go to office by bus.", exampleId: "Saya ke kantor naik bus." },
      { en: "I need help", id: "Saya butuh bantuan", pronounce: "ai niid help", example: "I need help with Excel.", exampleId: "Saya butuh bantuan Excel." },
      { en: "How much is it", id: "Berapa harganya", pronounce: "hau mach iz it", example: "How much is this book?", exampleId: "Berapa harga buku ini?" },
      { en: "Please check", id: "Tolong cek", pronounce: "pliiz chek", example: "Please check the file.", exampleId: "Tolong cek berkasnya." },
      { en: "I don't understand", id: "Saya tidak paham", pronounce: "ai dount an-der-STEND", example: "I don't understand, sorry.", exampleId: "Saya tidak paham, maaf." },
      { en: "Where is my desk", id: "Di mana meja saya", pronounce: "wer iz mai desk", example: "Where is my desk?", exampleId: "Di mana meja saya?" },
      { en: "I have a laptop", id: "Saya punya laptop", pronounce: "ai hev e LEP-top", example: "I have a laptop and a mouse.", exampleId: "Saya punya laptop dan mouse." },
      { en: "This is my book", id: "Ini buku saya", pronounce: "dis iz mai buk", example: "This is my book, that is yours.", exampleId: "Ini buku saya, itu milikmu." },
      { en: "What time is it", id: "Jam berapa", pronounce: "wot taim iz it", example: "What time is the meeting?", exampleId: "Jam berapa rapatnya?" }
    ],
    quiz: [
      { id: "2-1-q1", question: "I ____ a laptop (have)", options: ["has", "have (correct)", "having", "had"], answer: 1, explanation: "I have, She has." },
      { id: "2-1-q2", question: "This is ____ book", options: ["me", "my (correct)", "I", "mine"], answer: 1, explanation: "This is MY book." },
      { id: "2-1-q3", question: "What time ____ it", options: ["are", "is (correct)", "am", "be"], answer: 1, explanation: "What time IS it?" },
      { id: "2-1-q4", question: "I ____ to office", options: ["go (correct)", "goes", "going", "went"], answer: 0, explanation: "I go, He goes." },
      { id: "2-1-q5", question: "I don't ____ (understand)", options: ["understands", "understand (correct)", "understanding", "understood"], answer: 1, explanation: "I don't + V1." }
    ]
  },
  {
    id: "2-2",
    levelId: 2,
    order: 8,
    title: "Saya Punya",
    titleEn: "Have/Has",
    objective: "I have vs She has",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Saya Punya (Have/Has) — I have vs She has. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Pola Inti + EI em",
          headingId: "Pola Inti + EI em",
          body: "Hafal pola, jangan kata per kata. EI em: baca pelan.",
          examples: [
            { en: "I go to office by bus.", id: "Saya ke kantor naik bus." },
            { en: "I need help with Excel.", id: "Saya butuh bantuan Excel." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Contoh Real Kerja",
          headingId: "Contoh Real Kerja",
          body: "Pakai besok pagi di kantor/slack.",
          examples: [
            { en: "How much is this book?", id: "Berapa harga buku ini?" },
            { en: "I use Have/Has at work today.", id: "Saya pakai Saya Punya di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Latihan Shadowing",
          headingId: "Latihan Shadowing",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Have/Has now.", id: "Mari latihan Saya Punya sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "How much is it", id: "Berapa harganya", pronounce: "hau mach iz it", example: "How much is this book?", exampleId: "Berapa harga buku ini?" },
      { en: "Please check", id: "Tolong cek", pronounce: "pliiz chek", example: "Please check the file.", exampleId: "Tolong cek berkasnya." },
      { en: "I don't understand", id: "Saya tidak paham", pronounce: "ai dount an-der-STEND", example: "I don't understand, sorry.", exampleId: "Saya tidak paham, maaf." },
      { en: "Where is my desk", id: "Di mana meja saya", pronounce: "wer iz mai desk", example: "Where is my desk?", exampleId: "Di mana meja saya?" },
      { en: "I have a laptop", id: "Saya punya laptop", pronounce: "ai hev e LEP-top", example: "I have a laptop and a mouse.", exampleId: "Saya punya laptop dan mouse." },
      { en: "This is my book", id: "Ini buku saya", pronounce: "dis iz mai buk", example: "This is my book, that is yours.", exampleId: "Ini buku saya, itu milikmu." },
      { en: "What time is it", id: "Jam berapa", pronounce: "wot taim iz it", example: "What time is the meeting?", exampleId: "Jam berapa rapatnya?" },
      { en: "I work at 9", id: "Saya kerja jam 9", pronounce: "ai werk et nain", example: "I work at 9 AM every day.", exampleId: "Saya kerja jam 9 tiap hari." },
      { en: "I go to office", id: "Saya pergi ke kantor", pronounce: "ai go tu O-fis", example: "I go to office by bus.", exampleId: "Saya ke kantor naik bus." },
      { en: "I need help", id: "Saya butuh bantuan", pronounce: "ai niid help", example: "I need help with Excel.", exampleId: "Saya butuh bantuan Excel." }
    ],
    quiz: [
      { id: "2-2-q1", question: "I ____ a laptop (have)", options: ["has", "have (correct)", "having", "had"], answer: 1, explanation: "I have, She has." },
      { id: "2-2-q2", question: "This is ____ book", options: ["me", "my (correct)", "I", "mine"], answer: 1, explanation: "This is MY book." },
      { id: "2-2-q3", question: "What time ____ it", options: ["are", "is (correct)", "am", "be"], answer: 1, explanation: "What time IS it?" },
      { id: "2-2-q4", question: "I ____ to office", options: ["go (correct)", "goes", "going", "went"], answer: 0, explanation: "I go, He goes." },
      { id: "2-2-q5", question: "I don't ____ (understand)", options: ["understands", "understand (correct)", "understanding", "understood"], answer: 1, explanation: "I don't + V1." }
    ]
  },
  {
    id: "2-3",
    levelId: 2,
    order: 9,
    title: "Jadwal & Rutinitas",
    titleEn: "Schedule & Routine",
    objective: "I wake up at 6, I go to...",
    duration: "18 menit",
    content: {
      intro: "Pelajaran Jadwal & Rutinitas (Schedule & Routine) — I wake up at 6, I go to.... Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Pola Inti + EI em",
          headingId: "Pola Inti + EI em",
          body: "Hafal pola, jangan kata per kata. EI em: baca pelan.",
          examples: [
            { en: "How much is this book?", id: "Berapa harga buku ini?" },
            { en: "Please check the file.", id: "Tolong cek berkasnya." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Contoh Real Kerja",
          headingId: "Contoh Real Kerja",
          body: "Pakai besok pagi di kantor/slack.",
          examples: [
            { en: "I don't understand, sorry.", id: "Saya tidak paham, maaf." },
            { en: "I use Schedule & Routine at work today.", id: "Saya pakai Jadwal & Rutinitas di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Latihan Shadowing",
          headingId: "Latihan Shadowing",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Schedule & Routine now.", id: "Mari latihan Jadwal & Rutinitas sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Where is my desk", id: "Di mana meja saya", pronounce: "wer iz mai desk", example: "Where is my desk?", exampleId: "Di mana meja saya?" },
      { en: "I have a laptop", id: "Saya punya laptop", pronounce: "ai hev e LEP-top", example: "I have a laptop and a mouse.", exampleId: "Saya punya laptop dan mouse." },
      { en: "This is my book", id: "Ini buku saya", pronounce: "dis iz mai buk", example: "This is my book, that is yours.", exampleId: "Ini buku saya, itu milikmu." },
      { en: "What time is it", id: "Jam berapa", pronounce: "wot taim iz it", example: "What time is the meeting?", exampleId: "Jam berapa rapatnya?" },
      { en: "I work at 9", id: "Saya kerja jam 9", pronounce: "ai werk et nain", example: "I work at 9 AM every day.", exampleId: "Saya kerja jam 9 tiap hari." },
      { en: "I go to office", id: "Saya pergi ke kantor", pronounce: "ai go tu O-fis", example: "I go to office by bus.", exampleId: "Saya ke kantor naik bus." },
      { en: "I need help", id: "Saya butuh bantuan", pronounce: "ai niid help", example: "I need help with Excel.", exampleId: "Saya butuh bantuan Excel." },
      { en: "How much is it", id: "Berapa harganya", pronounce: "hau mach iz it", example: "How much is this book?", exampleId: "Berapa harga buku ini?" },
      { en: "Please check", id: "Tolong cek", pronounce: "pliiz chek", example: "Please check the file.", exampleId: "Tolong cek berkasnya." },
      { en: "I don't understand", id: "Saya tidak paham", pronounce: "ai dount an-der-STEND", example: "I don't understand, sorry.", exampleId: "Saya tidak paham, maaf." }
    ],
    quiz: [
      { id: "2-3-q1", question: "I ____ a laptop (have)", options: ["has", "have (correct)", "having", "had"], answer: 1, explanation: "I have, She has." },
      { id: "2-3-q2", question: "This is ____ book", options: ["me", "my (correct)", "I", "mine"], answer: 1, explanation: "This is MY book." },
      { id: "2-3-q3", question: "What time ____ it", options: ["are", "is (correct)", "am", "be"], answer: 1, explanation: "What time IS it?" },
      { id: "2-3-q4", question: "I ____ to office", options: ["go (correct)", "goes", "going", "went"], answer: 0, explanation: "I go, He goes." },
      { id: "2-3-q5", question: "I don't ____ (understand)", options: ["understands", "understand (correct)", "understanding", "understood"], answer: 1, explanation: "I don't + V1." }
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
      intro: "Pelajaran Tanya What/Where (Asking Questions) — What is...? Where is...?. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Pola Inti + EI em",
          headingId: "Pola Inti + EI em",
          body: "Hafal pola, jangan kata per kata. EI em: baca pelan.",
          examples: [
            { en: "I don't understand, sorry.", id: "Saya tidak paham, maaf." },
            { en: "Where is my desk?", id: "Di mana meja saya?" }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Contoh Real Kerja",
          headingId: "Contoh Real Kerja",
          body: "Pakai besok pagi di kantor/slack.",
          examples: [
            { en: "I have a laptop and a mouse.", id: "Saya punya laptop dan mouse." },
            { en: "I use Asking Questions at work today.", id: "Saya pakai Tanya What/Where di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Latihan Shadowing",
          headingId: "Latihan Shadowing",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Asking Questions now.", id: "Mari latihan Tanya What/Where sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "What time is it", id: "Jam berapa", pronounce: "wot taim iz it", example: "What time is the meeting?", exampleId: "Jam berapa rapatnya?" },
      { en: "I work at 9", id: "Saya kerja jam 9", pronounce: "ai werk et nain", example: "I work at 9 AM every day.", exampleId: "Saya kerja jam 9 tiap hari." },
      { en: "I go to office", id: "Saya pergi ke kantor", pronounce: "ai go tu O-fis", example: "I go to office by bus.", exampleId: "Saya ke kantor naik bus." },
      { en: "I need help", id: "Saya butuh bantuan", pronounce: "ai niid help", example: "I need help with Excel.", exampleId: "Saya butuh bantuan Excel." },
      { en: "How much is it", id: "Berapa harganya", pronounce: "hau mach iz it", example: "How much is this book?", exampleId: "Berapa harga buku ini?" },
      { en: "Please check", id: "Tolong cek", pronounce: "pliiz chek", example: "Please check the file.", exampleId: "Tolong cek berkasnya." },
      { en: "I don't understand", id: "Saya tidak paham", pronounce: "ai dount an-der-STEND", example: "I don't understand, sorry.", exampleId: "Saya tidak paham, maaf." },
      { en: "Where is my desk", id: "Di mana meja saya", pronounce: "wer iz mai desk", example: "Where is my desk?", exampleId: "Di mana meja saya?" },
      { en: "I have a laptop", id: "Saya punya laptop", pronounce: "ai hev e LEP-top", example: "I have a laptop and a mouse.", exampleId: "Saya punya laptop dan mouse." },
      { en: "This is my book", id: "Ini buku saya", pronounce: "dis iz mai buk", example: "This is my book, that is yours.", exampleId: "Ini buku saya, itu milikmu." }
    ],
    quiz: [
      { id: "2-4-q1", question: "I ____ a laptop (have)", options: ["has", "have (correct)", "having", "had"], answer: 1, explanation: "I have, She has." },
      { id: "2-4-q2", question: "This is ____ book", options: ["me", "my (correct)", "I", "mine"], answer: 1, explanation: "This is MY book." },
      { id: "2-4-q3", question: "What time ____ it", options: ["are", "is (correct)", "am", "be"], answer: 1, explanation: "What time IS it?" },
      { id: "2-4-q4", question: "I ____ to office", options: ["go (correct)", "goes", "going", "went"], answer: 0, explanation: "I go, He goes." },
      { id: "2-4-q5", question: "I don't ____ (understand)", options: ["understands", "understand (correct)", "understanding", "understood"], answer: 1, explanation: "I don't + V1." }
    ]
  },
  {
    id: "2-5",
    levelId: 2,
    order: 11,
    title: "Negatif & Jangan",
    titleEn: "Negatives & Don't",
    objective: "I don't, He doesn't",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Negatif & Jangan (Negatives & Don't) — I don't, He doesn't. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Pola Inti + EI em",
          headingId: "Pola Inti + EI em",
          body: "Hafal pola, jangan kata per kata. EI em: baca pelan.",
          examples: [
            { en: "I have a laptop and a mouse.", id: "Saya punya laptop dan mouse." },
            { en: "This is my book, that is yours.", id: "Ini buku saya, itu milikmu." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Contoh Real Kerja",
          headingId: "Contoh Real Kerja",
          body: "Pakai besok pagi di kantor/slack.",
          examples: [
            { en: "What time is the meeting?", id: "Jam berapa rapatnya?" },
            { en: "I use Negatives & Don't at work today.", id: "Saya pakai Negatif & Jangan di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Latihan Shadowing",
          headingId: "Latihan Shadowing",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Negatives & Don't now.", id: "Mari latihan Negatif & Jangan sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "I need help", id: "Saya butuh bantuan", pronounce: "ai niid help", example: "I need help with Excel.", exampleId: "Saya butuh bantuan Excel." },
      { en: "How much is it", id: "Berapa harganya", pronounce: "hau mach iz it", example: "How much is this book?", exampleId: "Berapa harga buku ini?" },
      { en: "Please check", id: "Tolong cek", pronounce: "pliiz chek", example: "Please check the file.", exampleId: "Tolong cek berkasnya." },
      { en: "I don't understand", id: "Saya tidak paham", pronounce: "ai dount an-der-STEND", example: "I don't understand, sorry.", exampleId: "Saya tidak paham, maaf." },
      { en: "Where is my desk", id: "Di mana meja saya", pronounce: "wer iz mai desk", example: "Where is my desk?", exampleId: "Di mana meja saya?" },
      { en: "I have a laptop", id: "Saya punya laptop", pronounce: "ai hev e LEP-top", example: "I have a laptop and a mouse.", exampleId: "Saya punya laptop dan mouse." },
      { en: "This is my book", id: "Ini buku saya", pronounce: "dis iz mai buk", example: "This is my book, that is yours.", exampleId: "Ini buku saya, itu milikmu." },
      { en: "What time is it", id: "Jam berapa", pronounce: "wot taim iz it", example: "What time is the meeting?", exampleId: "Jam berapa rapatnya?" },
      { en: "I work at 9", id: "Saya kerja jam 9", pronounce: "ai werk et nain", example: "I work at 9 AM every day.", exampleId: "Saya kerja jam 9 tiap hari." },
      { en: "I go to office", id: "Saya pergi ke kantor", pronounce: "ai go tu O-fis", example: "I go to office by bus.", exampleId: "Saya ke kantor naik bus." }
    ],
    quiz: [
      { id: "2-5-q1", question: "I ____ a laptop (have)", options: ["has", "have (correct)", "having", "had"], answer: 1, explanation: "I have, She has." },
      { id: "2-5-q2", question: "This is ____ book", options: ["me", "my (correct)", "I", "mine"], answer: 1, explanation: "This is MY book." },
      { id: "2-5-q3", question: "What time ____ it", options: ["are", "is (correct)", "am", "be"], answer: 1, explanation: "What time IS it?" },
      { id: "2-5-q4", question: "I ____ to office", options: ["go (correct)", "goes", "going", "went"], answer: 0, explanation: "I go, He goes." },
      { id: "2-5-q5", question: "I don't ____ (understand)", options: ["understands", "understand (correct)", "understanding", "understood"], answer: 1, explanation: "I don't + V1." }
    ]
  },
  {
    id: "2-6",
    levelId: 2,
    order: 12,
    title: "Hitung & Harga",
    titleEn: "Numbers & Prices",
    objective: "How much? How many?",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Hitung & Harga (Numbers & Prices) — How much? How many?. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Pola Inti + EI em",
          headingId: "Pola Inti + EI em",
          body: "Hafal pola, jangan kata per kata. EI em: baca pelan.",
          examples: [
            { en: "What time is the meeting?", id: "Jam berapa rapatnya?" },
            { en: "I work at 9 AM every day.", id: "Saya kerja jam 9 tiap hari." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Contoh Real Kerja",
          headingId: "Contoh Real Kerja",
          body: "Pakai besok pagi di kantor/slack.",
          examples: [
            { en: "I go to office by bus.", id: "Saya ke kantor naik bus." },
            { en: "I use Numbers & Prices at work today.", id: "Saya pakai Hitung & Harga di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Latihan Shadowing",
          headingId: "Latihan Shadowing",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Numbers & Prices now.", id: "Mari latihan Hitung & Harga sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "I don't understand", id: "Saya tidak paham", pronounce: "ai dount an-der-STEND", example: "I don't understand, sorry.", exampleId: "Saya tidak paham, maaf." },
      { en: "Where is my desk", id: "Di mana meja saya", pronounce: "wer iz mai desk", example: "Where is my desk?", exampleId: "Di mana meja saya?" },
      { en: "I have a laptop", id: "Saya punya laptop", pronounce: "ai hev e LEP-top", example: "I have a laptop and a mouse.", exampleId: "Saya punya laptop dan mouse." },
      { en: "This is my book", id: "Ini buku saya", pronounce: "dis iz mai buk", example: "This is my book, that is yours.", exampleId: "Ini buku saya, itu milikmu." },
      { en: "What time is it", id: "Jam berapa", pronounce: "wot taim iz it", example: "What time is the meeting?", exampleId: "Jam berapa rapatnya?" },
      { en: "I work at 9", id: "Saya kerja jam 9", pronounce: "ai werk et nain", example: "I work at 9 AM every day.", exampleId: "Saya kerja jam 9 tiap hari." },
      { en: "I go to office", id: "Saya pergi ke kantor", pronounce: "ai go tu O-fis", example: "I go to office by bus.", exampleId: "Saya ke kantor naik bus." },
      { en: "I need help", id: "Saya butuh bantuan", pronounce: "ai niid help", example: "I need help with Excel.", exampleId: "Saya butuh bantuan Excel." },
      { en: "How much is it", id: "Berapa harganya", pronounce: "hau mach iz it", example: "How much is this book?", exampleId: "Berapa harga buku ini?" },
      { en: "Please check", id: "Tolong cek", pronounce: "pliiz chek", example: "Please check the file.", exampleId: "Tolong cek berkasnya." }
    ],
    quiz: [
      { id: "2-6-q1", question: "I ____ a laptop (have)", options: ["has", "have (correct)", "having", "had"], answer: 1, explanation: "I have, She has." },
      { id: "2-6-q2", question: "This is ____ book", options: ["me", "my (correct)", "I", "mine"], answer: 1, explanation: "This is MY book." },
      { id: "2-6-q3", question: "What time ____ it", options: ["are", "is (correct)", "am", "be"], answer: 1, explanation: "What time IS it?" },
      { id: "2-6-q4", question: "I ____ to office", options: ["go (correct)", "goes", "going", "went"], answer: 0, explanation: "I go, He goes." },
      { id: "2-6-q5", question: "I don't ____ (understand)", options: ["understands", "understand (correct)", "understanding", "understood"], answer: 1, explanation: "I don't + V1." }
    ]
  },
  {
    id: "3-1",
    levelId: 3,
    order: 13,
    title: "Present: I work",
    titleEn: "Simple Present",
    objective: "I work from 9-5 + s/es",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Present: I work (Simple Present) — I work from 9-5 + s/es. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Pola Inti + EI em",
          headingId: "Pola Inti + EI em",
          body: "Hafal pola, jangan kata per kata. EI em: baca pelan.",
          examples: [
            { en: "I like strong coffee in morning.", id: "Saya suka kopi kental pagi." },
            { en: "I want to learn English.", id: "Saya ingin belajar Inggris." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Contoh Real Kerja",
          headingId: "Contoh Real Kerja",
          body: "Pakai besok pagi di kantor/slack.",
          examples: [
            { en: "I get up at 6 every day.", id: "Saya bangun jam 6 tiap hari." },
            { en: "I use Simple Present at work today.", id: "Saya pakai Present: I work di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Latihan Shadowing",
          headingId: "Latihan Shadowing",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Simple Present now.", id: "Mari latihan Present: I work sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "I want to learn", id: "Saya ingin belajar", pronounce: "ai wont tu lern", example: "I want to learn English.", exampleId: "Saya ingin belajar Inggris." },
      { en: "I get up at 6", id: "Saya bangun jam 6", pronounce: "ai get ap et siks", example: "I get up at 6 every day.", exampleId: "Saya bangun jam 6 tiap hari." },
      { en: "Our team is friendly", id: "Tim kita ramah", pronounce: "aur tiim iz FREN-dli", example: "Our team is friendly and busy.", exampleId: "Tim kita ramah dan sibuk." },
      { en: "Meeting at 9 sharp", id: "Rapat jam 9 tepat", pronounce: "MII-ting et nain sharp", example: "Meeting at 9 sharp!", exampleId: "Rapat jam 9 tepat!" },
      { en: "How are you today", id: "Apa kabar hari ini", pronounce: "hau ar yu tu-DEI", example: "How are you today, Rina?", exampleId: "Apa kabar hari ini, Rina?" },
      { en: "I work from home", id: "Saya kerja dari rumah", pronounce: "ai werk from houm", example: "I work from home today.", exampleId: "Saya kerja dari rumah hari ini." },
      { en: "Every day I practice", id: "Tiap hari saya latihan", pronounce: "EV-ri dei ai PREK-tis", example: "Every day I practice 15 minutes.", exampleId: "Tiap hari saya latihan 15 menit." },
      { en: "I always come early", id: "Saya selalu datang awal", pronounce: "ai OL-weis kam ER-li", example: "I always come early on Monday.", exampleId: "Saya selalu datang awal Senin." },
      { en: "I usually have lunch", id: "Saya biasanya makan siang", pronounce: "ai YU-zwa-li hev lanch", example: "I usually have lunch at 12.", exampleId: "Saya biasanya makan siang jam 12." },
      { en: "I like strong coffee", id: "Saya suka kopi kental", pronounce: "ai laik strong KO-fi", example: "I like strong coffee in morning.", exampleId: "Saya suka kopi kental pagi." }
    ],
    quiz: [
      { id: "3-1-q1", question: "I ____ (work) at 9", options: ["work (correct)", "works", "working", "worked"], answer: 0, explanation: "I work, He works + s." },
      { id: "3-1-q2", question: "She ____ coffee (like)", options: ["like", "likes (correct)", "liking", "liked"], answer: 1, explanation: "She likes." },
      { id: "3-1-q3", question: "I ____ come early", options: ["always (correct) always", "always come?", "come always", "always coming"], answer: 0, explanation: "Always sebelum verb." },
      { id: "3-1-q4", question: "What ____ you do", options: ["do (correct)", "does", "doing", "did"], answer: 0, explanation: "What DO you do?" },
      { id: "3-1-q5", question: "Office is ____ (clean)", options: ["clean (correct)", "cleaning", "cleans", "cleaned"], answer: 0, explanation: "to be + adjective." }
    ]
  },
  {
    id: "3-2",
    levelId: 3,
    order: 14,
    title: "Kebiasaan & Suka",
    titleEn: "Habits & Likes",
    objective: "I like, I want, I need",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Kebiasaan & Suka (Habits & Likes) — I like, I want, I need. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Pola Inti + EI em",
          headingId: "Pola Inti + EI em",
          body: "Hafal pola, jangan kata per kata. EI em: baca pelan.",
          examples: [
            { en: "I get up at 6 every day.", id: "Saya bangun jam 6 tiap hari." },
            { en: "Our team is friendly and busy.", id: "Tim kita ramah dan sibuk." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Contoh Real Kerja",
          headingId: "Contoh Real Kerja",
          body: "Pakai besok pagi di kantor/slack.",
          examples: [
            { en: "Meeting at 9 sharp!", id: "Rapat jam 9 tepat!" },
            { en: "I use Habits & Likes at work today.", id: "Saya pakai Kebiasaan & Suka di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Latihan Shadowing",
          headingId: "Latihan Shadowing",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Habits & Likes now.", id: "Mari latihan Kebiasaan & Suka sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Meeting at 9 sharp", id: "Rapat jam 9 tepat", pronounce: "MII-ting et nain sharp", example: "Meeting at 9 sharp!", exampleId: "Rapat jam 9 tepat!" },
      { en: "How are you today", id: "Apa kabar hari ini", pronounce: "hau ar yu tu-DEI", example: "How are you today, Rina?", exampleId: "Apa kabar hari ini, Rina?" },
      { en: "I work from home", id: "Saya kerja dari rumah", pronounce: "ai werk from houm", example: "I work from home today.", exampleId: "Saya kerja dari rumah hari ini." },
      { en: "Every day I practice", id: "Tiap hari saya latihan", pronounce: "EV-ri dei ai PREK-tis", example: "Every day I practice 15 minutes.", exampleId: "Tiap hari saya latihan 15 menit." },
      { en: "I always come early", id: "Saya selalu datang awal", pronounce: "ai OL-weis kam ER-li", example: "I always come early on Monday.", exampleId: "Saya selalu datang awal Senin." },
      { en: "I usually have lunch", id: "Saya biasanya makan siang", pronounce: "ai YU-zwa-li hev lanch", example: "I usually have lunch at 12.", exampleId: "Saya biasanya makan siang jam 12." },
      { en: "I like strong coffee", id: "Saya suka kopi kental", pronounce: "ai laik strong KO-fi", example: "I like strong coffee in morning.", exampleId: "Saya suka kopi kental pagi." },
      { en: "I want to learn", id: "Saya ingin belajar", pronounce: "ai wont tu lern", example: "I want to learn English.", exampleId: "Saya ingin belajar Inggris." },
      { en: "I get up at 6", id: "Saya bangun jam 6", pronounce: "ai get ap et siks", example: "I get up at 6 every day.", exampleId: "Saya bangun jam 6 tiap hari." },
      { en: "Our team is friendly", id: "Tim kita ramah", pronounce: "aur tiim iz FREN-dli", example: "Our team is friendly and busy.", exampleId: "Tim kita ramah dan sibuk." }
    ],
    quiz: [
      { id: "3-2-q1", question: "I ____ (work) at 9", options: ["work (correct)", "works", "working", "worked"], answer: 0, explanation: "I work, He works + s." },
      { id: "3-2-q2", question: "She ____ coffee (like)", options: ["like", "likes (correct)", "liking", "liked"], answer: 1, explanation: "She likes." },
      { id: "3-2-q3", question: "I ____ come early", options: ["always (correct) always", "always come?", "come always", "always coming"], answer: 0, explanation: "Always sebelum verb." },
      { id: "3-2-q4", question: "What ____ you do", options: ["do (correct)", "does", "doing", "did"], answer: 0, explanation: "What DO you do?" },
      { id: "3-2-q5", question: "Office is ____ (clean)", options: ["clean (correct)", "cleaning", "cleans", "cleaned"], answer: 0, explanation: "to be + adjective." }
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
      intro: "Pelajaran Kata Keterangan Waktu (Adverbs of Time) — Always, usually, never. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Pola Inti + EI em",
          headingId: "Pola Inti + EI em",
          body: "Hafal pola, jangan kata per kata. EI em: baca pelan.",
          examples: [
            { en: "Meeting at 9 sharp!", id: "Rapat jam 9 tepat!" },
            { en: "How are you today, Rina?", id: "Apa kabar hari ini, Rina?" }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Contoh Real Kerja",
          headingId: "Contoh Real Kerja",
          body: "Pakai besok pagi di kantor/slack.",
          examples: [
            { en: "I work from home today.", id: "Saya kerja dari rumah hari ini." },
            { en: "I use Adverbs of Time at work today.", id: "Saya pakai Kata Keterangan Waktu di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Latihan Shadowing",
          headingId: "Latihan Shadowing",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Adverbs of Time now.", id: "Mari latihan Kata Keterangan Waktu sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Every day I practice", id: "Tiap hari saya latihan", pronounce: "EV-ri dei ai PREK-tis", example: "Every day I practice 15 minutes.", exampleId: "Tiap hari saya latihan 15 menit." },
      { en: "I always come early", id: "Saya selalu datang awal", pronounce: "ai OL-weis kam ER-li", example: "I always come early on Monday.", exampleId: "Saya selalu datang awal Senin." },
      { en: "I usually have lunch", id: "Saya biasanya makan siang", pronounce: "ai YU-zwa-li hev lanch", example: "I usually have lunch at 12.", exampleId: "Saya biasanya makan siang jam 12." },
      { en: "I like strong coffee", id: "Saya suka kopi kental", pronounce: "ai laik strong KO-fi", example: "I like strong coffee in morning.", exampleId: "Saya suka kopi kental pagi." },
      { en: "I want to learn", id: "Saya ingin belajar", pronounce: "ai wont tu lern", example: "I want to learn English.", exampleId: "Saya ingin belajar Inggris." },
      { en: "I get up at 6", id: "Saya bangun jam 6", pronounce: "ai get ap et siks", example: "I get up at 6 every day.", exampleId: "Saya bangun jam 6 tiap hari." },
      { en: "Our team is friendly", id: "Tim kita ramah", pronounce: "aur tiim iz FREN-dli", example: "Our team is friendly and busy.", exampleId: "Tim kita ramah dan sibuk." },
      { en: "Meeting at 9 sharp", id: "Rapat jam 9 tepat", pronounce: "MII-ting et nain sharp", example: "Meeting at 9 sharp!", exampleId: "Rapat jam 9 tepat!" },
      { en: "How are you today", id: "Apa kabar hari ini", pronounce: "hau ar yu tu-DEI", example: "How are you today, Rina?", exampleId: "Apa kabar hari ini, Rina?" },
      { en: "I work from home", id: "Saya kerja dari rumah", pronounce: "ai werk from houm", example: "I work from home today.", exampleId: "Saya kerja dari rumah hari ini." }
    ],
    quiz: [
      { id: "3-3-q1", question: "I ____ (work) at 9", options: ["work (correct)", "works", "working", "worked"], answer: 0, explanation: "I work, He works + s." },
      { id: "3-3-q2", question: "She ____ coffee (like)", options: ["like", "likes (correct)", "liking", "liked"], answer: 1, explanation: "She likes." },
      { id: "3-3-q3", question: "I ____ come early", options: ["always (correct) always", "always come?", "come always", "always coming"], answer: 0, explanation: "Always sebelum verb." },
      { id: "3-3-q4", question: "What ____ you do", options: ["do (correct)", "does", "doing", "did"], answer: 0, explanation: "What DO you do?" },
      { id: "3-3-q5", question: "Office is ____ (clean)", options: ["clean (correct)", "cleaning", "cleans", "cleaned"], answer: 0, explanation: "to be + adjective." }
    ]
  },
  {
    id: "3-4",
    levelId: 3,
    order: 16,
    title: "Tanya Jawab Kerja",
    titleEn: "Work Q&A",
    objective: "What do you do? Where do you work?",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Tanya Jawab Kerja (Work Q&A) — What do you do? Where do you work?. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Pola Inti + EI em",
          headingId: "Pola Inti + EI em",
          body: "Hafal pola, jangan kata per kata. EI em: baca pelan.",
          examples: [
            { en: "I work from home today.", id: "Saya kerja dari rumah hari ini." },
            { en: "Every day I practice 15 minutes.", id: "Tiap hari saya latihan 15 menit." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Contoh Real Kerja",
          headingId: "Contoh Real Kerja",
          body: "Pakai besok pagi di kantor/slack.",
          examples: [
            { en: "I always come early on Monday.", id: "Saya selalu datang awal Senin." },
            { en: "I use Work Q&A at work today.", id: "Saya pakai Tanya Jawab Kerja di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Latihan Shadowing",
          headingId: "Latihan Shadowing",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Work Q&A now.", id: "Mari latihan Tanya Jawab Kerja sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "I like strong coffee", id: "Saya suka kopi kental", pronounce: "ai laik strong KO-fi", example: "I like strong coffee in morning.", exampleId: "Saya suka kopi kental pagi." },
      { en: "I want to learn", id: "Saya ingin belajar", pronounce: "ai wont tu lern", example: "I want to learn English.", exampleId: "Saya ingin belajar Inggris." },
      { en: "I get up at 6", id: "Saya bangun jam 6", pronounce: "ai get ap et siks", example: "I get up at 6 every day.", exampleId: "Saya bangun jam 6 tiap hari." },
      { en: "Our team is friendly", id: "Tim kita ramah", pronounce: "aur tiim iz FREN-dli", example: "Our team is friendly and busy.", exampleId: "Tim kita ramah dan sibuk." },
      { en: "Meeting at 9 sharp", id: "Rapat jam 9 tepat", pronounce: "MII-ting et nain sharp", example: "Meeting at 9 sharp!", exampleId: "Rapat jam 9 tepat!" },
      { en: "How are you today", id: "Apa kabar hari ini", pronounce: "hau ar yu tu-DEI", example: "How are you today, Rina?", exampleId: "Apa kabar hari ini, Rina?" },
      { en: "I work from home", id: "Saya kerja dari rumah", pronounce: "ai werk from houm", example: "I work from home today.", exampleId: "Saya kerja dari rumah hari ini." },
      { en: "Every day I practice", id: "Tiap hari saya latihan", pronounce: "EV-ri dei ai PREK-tis", example: "Every day I practice 15 minutes.", exampleId: "Tiap hari saya latihan 15 menit." },
      { en: "I always come early", id: "Saya selalu datang awal", pronounce: "ai OL-weis kam ER-li", example: "I always come early on Monday.", exampleId: "Saya selalu datang awal Senin." },
      { en: "I usually have lunch", id: "Saya biasanya makan siang", pronounce: "ai YU-zwa-li hev lanch", example: "I usually have lunch at 12.", exampleId: "Saya biasanya makan siang jam 12." }
    ],
    quiz: [
      { id: "3-4-q1", question: "I ____ (work) at 9", options: ["work (correct)", "works", "working", "worked"], answer: 0, explanation: "I work, He works + s." },
      { id: "3-4-q2", question: "She ____ coffee (like)", options: ["like", "likes (correct)", "liking", "liked"], answer: 1, explanation: "She likes." },
      { id: "3-4-q3", question: "I ____ come early", options: ["always (correct) always", "always come?", "come always", "always coming"], answer: 0, explanation: "Always sebelum verb." },
      { id: "3-4-q4", question: "What ____ you do", options: ["do (correct)", "does", "doing", "did"], answer: 0, explanation: "What DO you do?" },
      { id: "3-4-q5", question: "Office is ____ (clean)", options: ["clean (correct)", "cleaning", "cleans", "cleaned"], answer: 0, explanation: "to be + adjective." }
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
      intro: "Pelajaran Deskripsi Orang (Describing People) — He is tall & friendly. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Pola Inti + EI em",
          headingId: "Pola Inti + EI em",
          body: "Hafal pola, jangan kata per kata. EI em: baca pelan.",
          examples: [
            { en: "I always come early on Monday.", id: "Saya selalu datang awal Senin." },
            { en: "I usually have lunch at 12.", id: "Saya biasanya makan siang jam 12." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Contoh Real Kerja",
          headingId: "Contoh Real Kerja",
          body: "Pakai besok pagi di kantor/slack.",
          examples: [
            { en: "I like strong coffee in morning.", id: "Saya suka kopi kental pagi." },
            { en: "I use Describing People at work today.", id: "Saya pakai Deskripsi Orang di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Latihan Shadowing",
          headingId: "Latihan Shadowing",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Describing People now.", id: "Mari latihan Deskripsi Orang sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Our team is friendly", id: "Tim kita ramah", pronounce: "aur tiim iz FREN-dli", example: "Our team is friendly and busy.", exampleId: "Tim kita ramah dan sibuk." },
      { en: "Meeting at 9 sharp", id: "Rapat jam 9 tepat", pronounce: "MII-ting et nain sharp", example: "Meeting at 9 sharp!", exampleId: "Rapat jam 9 tepat!" },
      { en: "How are you today", id: "Apa kabar hari ini", pronounce: "hau ar yu tu-DEI", example: "How are you today, Rina?", exampleId: "Apa kabar hari ini, Rina?" },
      { en: "I work from home", id: "Saya kerja dari rumah", pronounce: "ai werk from houm", example: "I work from home today.", exampleId: "Saya kerja dari rumah hari ini." },
      { en: "Every day I practice", id: "Tiap hari saya latihan", pronounce: "EV-ri dei ai PREK-tis", example: "Every day I practice 15 minutes.", exampleId: "Tiap hari saya latihan 15 menit." },
      { en: "I always come early", id: "Saya selalu datang awal", pronounce: "ai OL-weis kam ER-li", example: "I always come early on Monday.", exampleId: "Saya selalu datang awal Senin." },
      { en: "I usually have lunch", id: "Saya biasanya makan siang", pronounce: "ai YU-zwa-li hev lanch", example: "I usually have lunch at 12.", exampleId: "Saya biasanya makan siang jam 12." },
      { en: "I like strong coffee", id: "Saya suka kopi kental", pronounce: "ai laik strong KO-fi", example: "I like strong coffee in morning.", exampleId: "Saya suka kopi kental pagi." },
      { en: "I want to learn", id: "Saya ingin belajar", pronounce: "ai wont tu lern", example: "I want to learn English.", exampleId: "Saya ingin belajar Inggris." },
      { en: "I get up at 6", id: "Saya bangun jam 6", pronounce: "ai get ap et siks", example: "I get up at 6 every day.", exampleId: "Saya bangun jam 6 tiap hari." }
    ],
    quiz: [
      { id: "3-5-q1", question: "I ____ (work) at 9", options: ["work (correct)", "works", "working", "worked"], answer: 0, explanation: "I work, He works + s." },
      { id: "3-5-q2", question: "She ____ coffee (like)", options: ["like", "likes (correct)", "liking", "liked"], answer: 1, explanation: "She likes." },
      { id: "3-5-q3", question: "I ____ come early", options: ["always (correct) always", "always come?", "come always", "always coming"], answer: 0, explanation: "Always sebelum verb." },
      { id: "3-5-q4", question: "What ____ you do", options: ["do (correct)", "does", "doing", "did"], answer: 0, explanation: "What DO you do?" },
      { id: "3-5-q5", question: "Office is ____ (clean)", options: ["clean (correct)", "cleaning", "cleans", "cleaned"], answer: 0, explanation: "to be + adjective." }
    ]
  },
  {
    id: "3-6",
    levelId: 3,
    order: 18,
    title: "Deskripsi Tempat",
    titleEn: "Describing Places",
    objective: "My office is clean & big",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Deskripsi Tempat (Describing Places) — My office is clean & big. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Pola Inti + EI em",
          headingId: "Pola Inti + EI em",
          body: "Hafal pola, jangan kata per kata. EI em: baca pelan.",
          examples: [
            { en: "I like strong coffee in morning.", id: "Saya suka kopi kental pagi." },
            { en: "I want to learn English.", id: "Saya ingin belajar Inggris." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Contoh Real Kerja",
          headingId: "Contoh Real Kerja",
          body: "Pakai besok pagi di kantor/slack.",
          examples: [
            { en: "I get up at 6 every day.", id: "Saya bangun jam 6 tiap hari." },
            { en: "I use Describing Places at work today.", id: "Saya pakai Deskripsi Tempat di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Latihan Shadowing",
          headingId: "Latihan Shadowing",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Describing Places now.", id: "Mari latihan Deskripsi Tempat sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "I work from home", id: "Saya kerja dari rumah", pronounce: "ai werk from houm", example: "I work from home today.", exampleId: "Saya kerja dari rumah hari ini." },
      { en: "Every day I practice", id: "Tiap hari saya latihan", pronounce: "EV-ri dei ai PREK-tis", example: "Every day I practice 15 minutes.", exampleId: "Tiap hari saya latihan 15 menit." },
      { en: "I always come early", id: "Saya selalu datang awal", pronounce: "ai OL-weis kam ER-li", example: "I always come early on Monday.", exampleId: "Saya selalu datang awal Senin." },
      { en: "I usually have lunch", id: "Saya biasanya makan siang", pronounce: "ai YU-zwa-li hev lanch", example: "I usually have lunch at 12.", exampleId: "Saya biasanya makan siang jam 12." },
      { en: "I like strong coffee", id: "Saya suka kopi kental", pronounce: "ai laik strong KO-fi", example: "I like strong coffee in morning.", exampleId: "Saya suka kopi kental pagi." },
      { en: "I want to learn", id: "Saya ingin belajar", pronounce: "ai wont tu lern", example: "I want to learn English.", exampleId: "Saya ingin belajar Inggris." },
      { en: "I get up at 6", id: "Saya bangun jam 6", pronounce: "ai get ap et siks", example: "I get up at 6 every day.", exampleId: "Saya bangun jam 6 tiap hari." },
      { en: "Our team is friendly", id: "Tim kita ramah", pronounce: "aur tiim iz FREN-dli", example: "Our team is friendly and busy.", exampleId: "Tim kita ramah dan sibuk." },
      { en: "Meeting at 9 sharp", id: "Rapat jam 9 tepat", pronounce: "MII-ting et nain sharp", example: "Meeting at 9 sharp!", exampleId: "Rapat jam 9 tepat!" },
      { en: "How are you today", id: "Apa kabar hari ini", pronounce: "hau ar yu tu-DEI", example: "How are you today, Rina?", exampleId: "Apa kabar hari ini, Rina?" }
    ],
    quiz: [
      { id: "3-6-q1", question: "I ____ (work) at 9", options: ["work (correct)", "works", "working", "worked"], answer: 0, explanation: "I work, He works + s." },
      { id: "3-6-q2", question: "She ____ coffee (like)", options: ["like", "likes (correct)", "liking", "liked"], answer: 1, explanation: "She likes." },
      { id: "3-6-q3", question: "I ____ come early", options: ["always (correct) always", "always come?", "come always", "always coming"], answer: 0, explanation: "Always sebelum verb." },
      { id: "3-6-q4", question: "What ____ you do", options: ["do (correct)", "does", "doing", "did"], answer: 0, explanation: "What DO you do?" },
      { id: "3-6-q5", question: "Office is ____ (clean)", options: ["clean (correct)", "cleaning", "cleans", "cleaned"], answer: 0, explanation: "to be + adjective." }
    ]
  },
  {
    id: "4-1",
    levelId: 4,
    order: 19,
    title: "Past: Yesterday",
    titleEn: "Simple Past Basics",
    objective: "I went yesterday + V2",
    duration: "18 menit",
    content: {
      intro: "Pelajaran Past: Yesterday (Simple Past Basics) — I went yesterday + V2. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus 1 Baris",
          headingId: "Rumus 1 Baris",
          body: "Tulis rumus di sticky: S + V2 / S + will + V1.",
          examples: [
            { en: "We were at office at 8.", id: "Kita di kantor jam 8." },
            { en: "Did you call me yesterday?", id: "Apakah kamu telepon saya kemarin?" }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Cerita Pendek",
          headingId: "Cerita Pendek",
          body: "Sambung 3 kalimat jadi cerita 30 detik.",
          examples: [
            { en: "I visited my family on weekend.", id: "Saya kunjungi keluarga akhir pekan." },
            { en: "I use Simple Past Basics at work today.", id: "Saya pakai Past: Yesterday di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Tanya Jawab",
          headingId: "Tanya Jawab",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Simple Past Basics now.", id: "Mari latihan Past: Yesterday sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Did you call me", id: "Apakah kamu telepon saya", pronounce: "did yu kol mi", example: "Did you call me yesterday?", exampleId: "Apakah kamu telepon saya kemarin?" },
      { en: "I visited my family", id: "Saya kunjungi keluarga", pronounce: "ai VI-zi-tid mai FEM-li", example: "I visited my family on weekend.", exampleId: "Saya kunjungi keluarga akhir pekan." },
      { en: "I finished the report", id: "Saya selesaikan laporan", pronounce: "ai FI-nishd dhe ri-PORT", example: "I finished the report at 5.", exampleId: "Saya selesaikan laporan jam 5." },
      { en: "She said thank you", id: "Dia bilang terima kasih", pronounce: "shi sed THENG-kyu", example: "She said thank you so much.", exampleId: "Dia bilang terima kasih banyak." },
      { en: "I had lunch at 12", id: "Saya makan siang jam 12", pronounce: "ai hed lanch et twelv", example: "I had lunch at 12 with team.", exampleId: "Saya makan siang jam 12 dengan tim." },
      { en: "First I woke up, then I went", id: "Pertama bangun, lalu pergi", pronounce: "ferst ai wouk ap dhen ai went", example: "First I woke up, then I went to work.", exampleId: "Pertama bangun, lalu pergi kerja." },
      { en: "How was your weekend", id: "Gimana akhir pekanmu", pronounce: "hau woz yor wiik-END", example: "How was your weekend?", exampleId: "Gimana akhir pekanmu?" },
      { en: "Yesterday I went home", id: "Kemarin saya pulang", pronounce: "YES-ter-dei ai went houm", example: "Yesterday I went home late.", exampleId: "Kemarin saya pulang telat." },
      { en: "I was busy yesterday", id: "Saya sibuk kemarin", pronounce: "ai woz BI-zi YES-ter-dei", example: "I was busy yesterday.", exampleId: "Saya sibuk kemarin." },
      { en: "We were at office", id: "Kita di kantor (past)", pronounce: "wi wer et O-fis", example: "We were at office at 8.", exampleId: "Kita di kantor jam 8." }
    ],
    quiz: [
      { id: "4-1-q1", question: "Yesterday I ____ (go) home", options: ["go", "went (correct)", "going", "goed"], answer: 1, explanation: "V2: go→went." },
      { id: "4-1-q2", question: "I ____ busy yesterday", options: ["am", "was (correct)", "were", "is"], answer: 1, explanation: "Past: I was." },
      { id: "4-1-q3", question: "Did you ____ me", options: ["called", "call (correct)", "calling", "calls"], answer: 1, explanation: "Did + V1." },
      { id: "4-1-q4", question: "I ____ my family", options: ["visit", "visited (correct)", "visiting", "visits"], answer: 1, explanation: "Past V2." },
      { id: "4-1-q5", question: "First I woke, ____ I went", options: ["then (correct)", "than", "there", "the"], answer: 0, explanation: "First, then, finally." }
    ]
  },
  {
    id: "4-2",
    levelId: 4,
    order: 20,
    title: "Was/Were",
    titleEn: "Was & Were",
    objective: "I was busy vs They were",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Was/Were (Was & Were) — I was busy vs They were. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus 1 Baris",
          headingId: "Rumus 1 Baris",
          body: "Tulis rumus di sticky: S + V2 / S + will + V1.",
          examples: [
            { en: "I visited my family on weekend.", id: "Saya kunjungi keluarga akhir pekan." },
            { en: "I finished the report at 5.", id: "Saya selesaikan laporan jam 5." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Cerita Pendek",
          headingId: "Cerita Pendek",
          body: "Sambung 3 kalimat jadi cerita 30 detik.",
          examples: [
            { en: "She said thank you so much.", id: "Dia bilang terima kasih banyak." },
            { en: "I use Was & Were at work today.", id: "Saya pakai Was/Were di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Tanya Jawab",
          headingId: "Tanya Jawab",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Was & Were now.", id: "Mari latihan Was/Were sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "She said thank you", id: "Dia bilang terima kasih", pronounce: "shi sed THENG-kyu", example: "She said thank you so much.", exampleId: "Dia bilang terima kasih banyak." },
      { en: "I had lunch at 12", id: "Saya makan siang jam 12", pronounce: "ai hed lanch et twelv", example: "I had lunch at 12 with team.", exampleId: "Saya makan siang jam 12 dengan tim." },
      { en: "First I woke up, then I went", id: "Pertama bangun, lalu pergi", pronounce: "ferst ai wouk ap dhen ai went", example: "First I woke up, then I went to work.", exampleId: "Pertama bangun, lalu pergi kerja." },
      { en: "How was your weekend", id: "Gimana akhir pekanmu", pronounce: "hau woz yor wiik-END", example: "How was your weekend?", exampleId: "Gimana akhir pekanmu?" },
      { en: "Yesterday I went home", id: "Kemarin saya pulang", pronounce: "YES-ter-dei ai went houm", example: "Yesterday I went home late.", exampleId: "Kemarin saya pulang telat." },
      { en: "I was busy yesterday", id: "Saya sibuk kemarin", pronounce: "ai woz BI-zi YES-ter-dei", example: "I was busy yesterday.", exampleId: "Saya sibuk kemarin." },
      { en: "We were at office", id: "Kita di kantor (past)", pronounce: "wi wer et O-fis", example: "We were at office at 8.", exampleId: "Kita di kantor jam 8." },
      { en: "Did you call me", id: "Apakah kamu telepon saya", pronounce: "did yu kol mi", example: "Did you call me yesterday?", exampleId: "Apakah kamu telepon saya kemarin?" },
      { en: "I visited my family", id: "Saya kunjungi keluarga", pronounce: "ai VI-zi-tid mai FEM-li", example: "I visited my family on weekend.", exampleId: "Saya kunjungi keluarga akhir pekan." },
      { en: "I finished the report", id: "Saya selesaikan laporan", pronounce: "ai FI-nishd dhe ri-PORT", example: "I finished the report at 5.", exampleId: "Saya selesaikan laporan jam 5." }
    ],
    quiz: [
      { id: "4-2-q1", question: "Yesterday I ____ (go) home", options: ["go", "went (correct)", "going", "goed"], answer: 1, explanation: "V2: go→went." },
      { id: "4-2-q2", question: "I ____ busy yesterday", options: ["am", "was (correct)", "were", "is"], answer: 1, explanation: "Past: I was." },
      { id: "4-2-q3", question: "Did you ____ me", options: ["called", "call (correct)", "calling", "calls"], answer: 1, explanation: "Did + V1." },
      { id: "4-2-q4", question: "I ____ my family", options: ["visit", "visited (correct)", "visiting", "visits"], answer: 1, explanation: "Past V2." },
      { id: "4-2-q5", question: "First I woke, ____ I went", options: ["then (correct)", "than", "there", "the"], answer: 0, explanation: "First, then, finally." }
    ]
  },
  {
    id: "4-3",
    levelId: 4,
    order: 21,
    title: "Cerita Libur",
    titleEn: "Weekend Story",
    objective: "I visited, I ate, I saw",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Cerita Libur (Weekend Story) — I visited, I ate, I saw. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus 1 Baris",
          headingId: "Rumus 1 Baris",
          body: "Tulis rumus di sticky: S + V2 / S + will + V1.",
          examples: [
            { en: "She said thank you so much.", id: "Dia bilang terima kasih banyak." },
            { en: "I had lunch at 12 with team.", id: "Saya makan siang jam 12 dengan tim." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Cerita Pendek",
          headingId: "Cerita Pendek",
          body: "Sambung 3 kalimat jadi cerita 30 detik.",
          examples: [
            { en: "First I woke up, then I went to work.", id: "Pertama bangun, lalu pergi kerja." },
            { en: "I use Weekend Story at work today.", id: "Saya pakai Cerita Libur di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Tanya Jawab",
          headingId: "Tanya Jawab",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Weekend Story now.", id: "Mari latihan Cerita Libur sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "How was your weekend", id: "Gimana akhir pekanmu", pronounce: "hau woz yor wiik-END", example: "How was your weekend?", exampleId: "Gimana akhir pekanmu?" },
      { en: "Yesterday I went home", id: "Kemarin saya pulang", pronounce: "YES-ter-dei ai went houm", example: "Yesterday I went home late.", exampleId: "Kemarin saya pulang telat." },
      { en: "I was busy yesterday", id: "Saya sibuk kemarin", pronounce: "ai woz BI-zi YES-ter-dei", example: "I was busy yesterday.", exampleId: "Saya sibuk kemarin." },
      { en: "We were at office", id: "Kita di kantor (past)", pronounce: "wi wer et O-fis", example: "We were at office at 8.", exampleId: "Kita di kantor jam 8." },
      { en: "Did you call me", id: "Apakah kamu telepon saya", pronounce: "did yu kol mi", example: "Did you call me yesterday?", exampleId: "Apakah kamu telepon saya kemarin?" },
      { en: "I visited my family", id: "Saya kunjungi keluarga", pronounce: "ai VI-zi-tid mai FEM-li", example: "I visited my family on weekend.", exampleId: "Saya kunjungi keluarga akhir pekan." },
      { en: "I finished the report", id: "Saya selesaikan laporan", pronounce: "ai FI-nishd dhe ri-PORT", example: "I finished the report at 5.", exampleId: "Saya selesaikan laporan jam 5." },
      { en: "She said thank you", id: "Dia bilang terima kasih", pronounce: "shi sed THENG-kyu", example: "She said thank you so much.", exampleId: "Dia bilang terima kasih banyak." },
      { en: "I had lunch at 12", id: "Saya makan siang jam 12", pronounce: "ai hed lanch et twelv", example: "I had lunch at 12 with team.", exampleId: "Saya makan siang jam 12 dengan tim." },
      { en: "First I woke up, then I went", id: "Pertama bangun, lalu pergi", pronounce: "ferst ai wouk ap dhen ai went", example: "First I woke up, then I went to work.", exampleId: "Pertama bangun, lalu pergi kerja." }
    ],
    quiz: [
      { id: "4-3-q1", question: "Yesterday I ____ (go) home", options: ["go", "went (correct)", "going", "goed"], answer: 1, explanation: "V2: go→went." },
      { id: "4-3-q2", question: "I ____ busy yesterday", options: ["am", "was (correct)", "were", "is"], answer: 1, explanation: "Past: I was." },
      { id: "4-3-q3", question: "Did you ____ me", options: ["called", "call (correct)", "calling", "calls"], answer: 1, explanation: "Did + V1." },
      { id: "4-3-q4", question: "I ____ my family", options: ["visit", "visited (correct)", "visiting", "visits"], answer: 1, explanation: "Past V2." },
      { id: "4-3-q5", question: "First I woke, ____ I went", options: ["then (correct)", "than", "there", "the"], answer: 0, explanation: "First, then, finally." }
    ]
  },
  {
    id: "4-4",
    levelId: 4,
    order: 22,
    title: "Tanya Past",
    titleEn: "Past Questions",
    objective: "Did you...? Was it...?",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Tanya Past (Past Questions) — Did you...? Was it...?. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus 1 Baris",
          headingId: "Rumus 1 Baris",
          body: "Tulis rumus di sticky: S + V2 / S + will + V1.",
          examples: [
            { en: "First I woke up, then I went to work.", id: "Pertama bangun, lalu pergi kerja." },
            { en: "How was your weekend?", id: "Gimana akhir pekanmu?" }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Cerita Pendek",
          headingId: "Cerita Pendek",
          body: "Sambung 3 kalimat jadi cerita 30 detik.",
          examples: [
            { en: "Yesterday I went home late.", id: "Kemarin saya pulang telat." },
            { en: "I use Past Questions at work today.", id: "Saya pakai Tanya Past di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Tanya Jawab",
          headingId: "Tanya Jawab",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Past Questions now.", id: "Mari latihan Tanya Past sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "We were at office", id: "Kita di kantor (past)", pronounce: "wi wer et O-fis", example: "We were at office at 8.", exampleId: "Kita di kantor jam 8." },
      { en: "Did you call me", id: "Apakah kamu telepon saya", pronounce: "did yu kol mi", example: "Did you call me yesterday?", exampleId: "Apakah kamu telepon saya kemarin?" },
      { en: "I visited my family", id: "Saya kunjungi keluarga", pronounce: "ai VI-zi-tid mai FEM-li", example: "I visited my family on weekend.", exampleId: "Saya kunjungi keluarga akhir pekan." },
      { en: "I finished the report", id: "Saya selesaikan laporan", pronounce: "ai FI-nishd dhe ri-PORT", example: "I finished the report at 5.", exampleId: "Saya selesaikan laporan jam 5." },
      { en: "She said thank you", id: "Dia bilang terima kasih", pronounce: "shi sed THENG-kyu", example: "She said thank you so much.", exampleId: "Dia bilang terima kasih banyak." },
      { en: "I had lunch at 12", id: "Saya makan siang jam 12", pronounce: "ai hed lanch et twelv", example: "I had lunch at 12 with team.", exampleId: "Saya makan siang jam 12 dengan tim." },
      { en: "First I woke up, then I went", id: "Pertama bangun, lalu pergi", pronounce: "ferst ai wouk ap dhen ai went", example: "First I woke up, then I went to work.", exampleId: "Pertama bangun, lalu pergi kerja." },
      { en: "How was your weekend", id: "Gimana akhir pekanmu", pronounce: "hau woz yor wiik-END", example: "How was your weekend?", exampleId: "Gimana akhir pekanmu?" },
      { en: "Yesterday I went home", id: "Kemarin saya pulang", pronounce: "YES-ter-dei ai went houm", example: "Yesterday I went home late.", exampleId: "Kemarin saya pulang telat." },
      { en: "I was busy yesterday", id: "Saya sibuk kemarin", pronounce: "ai woz BI-zi YES-ter-dei", example: "I was busy yesterday.", exampleId: "Saya sibuk kemarin." }
    ],
    quiz: [
      { id: "4-4-q1", question: "Yesterday I ____ (go) home", options: ["go", "went (correct)", "going", "goed"], answer: 1, explanation: "V2: go→went." },
      { id: "4-4-q2", question: "I ____ busy yesterday", options: ["am", "was (correct)", "were", "is"], answer: 1, explanation: "Past: I was." },
      { id: "4-4-q3", question: "Did you ____ me", options: ["called", "call (correct)", "calling", "calls"], answer: 1, explanation: "Did + V1." },
      { id: "4-4-q4", question: "I ____ my family", options: ["visit", "visited (correct)", "visiting", "visits"], answer: 1, explanation: "Past V2." },
      { id: "4-4-q5", question: "First I woke, ____ I went", options: ["then (correct)", "than", "there", "the"], answer: 0, explanation: "First, then, finally." }
    ]
  },
  {
    id: "4-5",
    levelId: 4,
    order: 23,
    title: "Pengalaman Kerja",
    titleEn: "Work Experience",
    objective: "I worked as... for 2 years",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Pengalaman Kerja (Work Experience) — I worked as... for 2 years. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus 1 Baris",
          headingId: "Rumus 1 Baris",
          body: "Tulis rumus di sticky: S + V2 / S + will + V1.",
          examples: [
            { en: "Yesterday I went home late.", id: "Kemarin saya pulang telat." },
            { en: "I was busy yesterday.", id: "Saya sibuk kemarin." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Cerita Pendek",
          headingId: "Cerita Pendek",
          body: "Sambung 3 kalimat jadi cerita 30 detik.",
          examples: [
            { en: "We were at office at 8.", id: "Kita di kantor jam 8." },
            { en: "I use Work Experience at work today.", id: "Saya pakai Pengalaman Kerja di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Tanya Jawab",
          headingId: "Tanya Jawab",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Work Experience now.", id: "Mari latihan Pengalaman Kerja sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "I finished the report", id: "Saya selesaikan laporan", pronounce: "ai FI-nishd dhe ri-PORT", example: "I finished the report at 5.", exampleId: "Saya selesaikan laporan jam 5." },
      { en: "She said thank you", id: "Dia bilang terima kasih", pronounce: "shi sed THENG-kyu", example: "She said thank you so much.", exampleId: "Dia bilang terima kasih banyak." },
      { en: "I had lunch at 12", id: "Saya makan siang jam 12", pronounce: "ai hed lanch et twelv", example: "I had lunch at 12 with team.", exampleId: "Saya makan siang jam 12 dengan tim." },
      { en: "First I woke up, then I went", id: "Pertama bangun, lalu pergi", pronounce: "ferst ai wouk ap dhen ai went", example: "First I woke up, then I went to work.", exampleId: "Pertama bangun, lalu pergi kerja." },
      { en: "How was your weekend", id: "Gimana akhir pekanmu", pronounce: "hau woz yor wiik-END", example: "How was your weekend?", exampleId: "Gimana akhir pekanmu?" },
      { en: "Yesterday I went home", id: "Kemarin saya pulang", pronounce: "YES-ter-dei ai went houm", example: "Yesterday I went home late.", exampleId: "Kemarin saya pulang telat." },
      { en: "I was busy yesterday", id: "Saya sibuk kemarin", pronounce: "ai woz BI-zi YES-ter-dei", example: "I was busy yesterday.", exampleId: "Saya sibuk kemarin." },
      { en: "We were at office", id: "Kita di kantor (past)", pronounce: "wi wer et O-fis", example: "We were at office at 8.", exampleId: "Kita di kantor jam 8." },
      { en: "Did you call me", id: "Apakah kamu telepon saya", pronounce: "did yu kol mi", example: "Did you call me yesterday?", exampleId: "Apakah kamu telepon saya kemarin?" },
      { en: "I visited my family", id: "Saya kunjungi keluarga", pronounce: "ai VI-zi-tid mai FEM-li", example: "I visited my family on weekend.", exampleId: "Saya kunjungi keluarga akhir pekan." }
    ],
    quiz: [
      { id: "4-5-q1", question: "Yesterday I ____ (go) home", options: ["go", "went (correct)", "going", "goed"], answer: 1, explanation: "V2: go→went." },
      { id: "4-5-q2", question: "I ____ busy yesterday", options: ["am", "was (correct)", "were", "is"], answer: 1, explanation: "Past: I was." },
      { id: "4-5-q3", question: "Did you ____ me", options: ["called", "call (correct)", "calling", "calls"], answer: 1, explanation: "Did + V1." },
      { id: "4-5-q4", question: "I ____ my family", options: ["visit", "visited (correct)", "visiting", "visits"], answer: 1, explanation: "Past V2." },
      { id: "4-5-q5", question: "First I woke, ____ I went", options: ["then (correct)", "than", "there", "the"], answer: 0, explanation: "First, then, finally." }
    ]
  },
  {
    id: "4-6",
    levelId: 4,
    order: 24,
    title: "Cerita Berurutan",
    titleEn: "Sequence Past",
    objective: "First, then, after that, finally",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Cerita Berurutan (Sequence Past) — First, then, after that, finally. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus 1 Baris",
          headingId: "Rumus 1 Baris",
          body: "Tulis rumus di sticky: S + V2 / S + will + V1.",
          examples: [
            { en: "We were at office at 8.", id: "Kita di kantor jam 8." },
            { en: "Did you call me yesterday?", id: "Apakah kamu telepon saya kemarin?" }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Cerita Pendek",
          headingId: "Cerita Pendek",
          body: "Sambung 3 kalimat jadi cerita 30 detik.",
          examples: [
            { en: "I visited my family on weekend.", id: "Saya kunjungi keluarga akhir pekan." },
            { en: "I use Sequence Past at work today.", id: "Saya pakai Cerita Berurutan di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Tanya Jawab",
          headingId: "Tanya Jawab",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Sequence Past now.", id: "Mari latihan Cerita Berurutan sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "First I woke up, then I went", id: "Pertama bangun, lalu pergi", pronounce: "ferst ai wouk ap dhen ai went", example: "First I woke up, then I went to work.", exampleId: "Pertama bangun, lalu pergi kerja." },
      { en: "How was your weekend", id: "Gimana akhir pekanmu", pronounce: "hau woz yor wiik-END", example: "How was your weekend?", exampleId: "Gimana akhir pekanmu?" },
      { en: "Yesterday I went home", id: "Kemarin saya pulang", pronounce: "YES-ter-dei ai went houm", example: "Yesterday I went home late.", exampleId: "Kemarin saya pulang telat." },
      { en: "I was busy yesterday", id: "Saya sibuk kemarin", pronounce: "ai woz BI-zi YES-ter-dei", example: "I was busy yesterday.", exampleId: "Saya sibuk kemarin." },
      { en: "We were at office", id: "Kita di kantor (past)", pronounce: "wi wer et O-fis", example: "We were at office at 8.", exampleId: "Kita di kantor jam 8." },
      { en: "Did you call me", id: "Apakah kamu telepon saya", pronounce: "did yu kol mi", example: "Did you call me yesterday?", exampleId: "Apakah kamu telepon saya kemarin?" },
      { en: "I visited my family", id: "Saya kunjungi keluarga", pronounce: "ai VI-zi-tid mai FEM-li", example: "I visited my family on weekend.", exampleId: "Saya kunjungi keluarga akhir pekan." },
      { en: "I finished the report", id: "Saya selesaikan laporan", pronounce: "ai FI-nishd dhe ri-PORT", example: "I finished the report at 5.", exampleId: "Saya selesaikan laporan jam 5." },
      { en: "She said thank you", id: "Dia bilang terima kasih", pronounce: "shi sed THENG-kyu", example: "She said thank you so much.", exampleId: "Dia bilang terima kasih banyak." },
      { en: "I had lunch at 12", id: "Saya makan siang jam 12", pronounce: "ai hed lanch et twelv", example: "I had lunch at 12 with team.", exampleId: "Saya makan siang jam 12 dengan tim." }
    ],
    quiz: [
      { id: "4-6-q1", question: "Yesterday I ____ (go) home", options: ["go", "went (correct)", "going", "goed"], answer: 1, explanation: "V2: go→went." },
      { id: "4-6-q2", question: "I ____ busy yesterday", options: ["am", "was (correct)", "were", "is"], answer: 1, explanation: "Past: I was." },
      { id: "4-6-q3", question: "Did you ____ me", options: ["called", "call (correct)", "calling", "calls"], answer: 1, explanation: "Did + V1." },
      { id: "4-6-q4", question: "I ____ my family", options: ["visit", "visited (correct)", "visiting", "visits"], answer: 1, explanation: "Past V2." },
      { id: "4-6-q5", question: "First I woke, ____ I went", options: ["then (correct)", "than", "there", "the"], answer: 0, explanation: "First, then, finally." }
    ]
  },
  {
    id: "5-1",
    levelId: 5,
    order: 25,
    title: "Will: Rencana",
    titleEn: "Will Future",
    objective: "I will call you tomorrow",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Will: Rencana (Will Future) — I will call you tomorrow. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus 1 Baris",
          headingId: "Rumus 1 Baris",
          body: "Tulis rumus di sticky: S + V2 / S + will + V1.",
          examples: [
            { en: "I promise to come early.", id: "Saya janji datang awal." },
            { en: "It will be sunny tomorrow.", id: "Besok akan cerah." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Cerita Pendek",
          headingId: "Cerita Pendek",
          body: "Sambung 3 kalimat jadi cerita 30 detik.",
          examples: [
            { en: "Next week I will travel to Bali.", id: "Minggu depan saya travel ke Bali." },
            { en: "I use Will Future at work today.", id: "Saya pakai Will: Rencana di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Tanya Jawab",
          headingId: "Tanya Jawab",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Will Future now.", id: "Mari latihan Will: Rencana sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "It will be sunny", id: "Akan cerah", pronounce: "it wil bi SA-ni", example: "It will be sunny tomorrow.", exampleId: "Besok akan cerah." },
      { en: "Next week I will travel", id: "Minggu depan saya travel", pronounce: "nekst wiik ai wil TRE-vel", example: "Next week I will travel to Bali.", exampleId: "Minggu depan saya travel ke Bali." },
      { en: "Let's meet at 10", id: "Mari ketemu jam 10", pronounce: "lets miit et ten", example: "Let's meet at 10 in lobby.", exampleId: "Mari ketemu jam 10 di lobi." },
      { en: "Are you free tomorrow", id: "Apakah besok luang", pronounce: "ar yu frii tu-MO-rou", example: "Are you free tomorrow?", exampleId: "Apakah besok luang?" },
      { en: "I hope to pass", id: "Saya harap lulus", pronounce: "ai houp tu paas", example: "I hope to pass the test.", exampleId: "Saya harap lulus tes." },
      { en: "Maybe I will come late", id: "Mungkin saya telat", pronounce: "MEI-bi ai wil kam leit", example: "Maybe I will come late.", exampleId: "Mungkin saya telat." },
      { en: "Expect to finish soon", id: "Harap selesai segera", pronounce: "ik-SPEKT tu FI-nish sun", example: "I expect to finish soon.", exampleId: "Saya harap selesai segera." },
      { en: "I will call you tomorrow", id: "Saya akan telepon besok", pronounce: "ai wil kol yu tu-MO-rou", example: "I will call you tomorrow at 9.", exampleId: "Saya akan telepon besok jam 9." },
      { en: "I am going to meet client", id: "Saya akan temu klien", pronounce: "ai em GO-ing tu miit KLAI-en", example: "I am going to meet client at 10.", exampleId: "Saya akan temu klien jam 10." },
      { en: "I promise to come", id: "Saya janji datang", pronounce: "ai PRO-mis tu kam", example: "I promise to come early.", exampleId: "Saya janji datang awal." }
    ],
    quiz: [
      { id: "5-1-q1", question: "I ____ call you", options: ["will (correct)", "are will", "is will", "will to"], answer: 0, explanation: "S + will + V1" },
      { id: "5-1-q2", question: "I am ____ to go (going)", options: ["go", "going (correct)", "gone", "goes"], answer: 1, explanation: "am/is/are + going to" },
      { id: "5-1-q3", question: "I will ____ you (help)", options: ["help (correct)", "helping", "helps", "helped"], answer: 0, explanation: "will + V1" },
      { id: "5-1-q4", question: "Next week I will ____", options: ["travel (correct)", "traveling", "travels", "travelled"], answer: 0, explanation: "Future: will + V1" },
      { id: "5-1-q5", question: "Let's ____ at 10", options: ["meet (correct)", "meeting", "met", "meets"], answer: 0, explanation: "Let's + V1" }
    ]
  },
  {
    id: "5-2",
    levelId: 5,
    order: 26,
    title: "Going to",
    titleEn: "Going to Plans",
    objective: "I am going to meet...",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Going to (Going to Plans) — I am going to meet.... Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus 1 Baris",
          headingId: "Rumus 1 Baris",
          body: "Tulis rumus di sticky: S + V2 / S + will + V1.",
          examples: [
            { en: "Next week I will travel to Bali.", id: "Minggu depan saya travel ke Bali." },
            { en: "Let's meet at 10 in lobby.", id: "Mari ketemu jam 10 di lobi." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Cerita Pendek",
          headingId: "Cerita Pendek",
          body: "Sambung 3 kalimat jadi cerita 30 detik.",
          examples: [
            { en: "Are you free tomorrow?", id: "Apakah besok luang?" },
            { en: "I use Going to Plans at work today.", id: "Saya pakai Going to di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Tanya Jawab",
          headingId: "Tanya Jawab",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Going to Plans now.", id: "Mari latihan Going to sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Are you free tomorrow", id: "Apakah besok luang", pronounce: "ar yu frii tu-MO-rou", example: "Are you free tomorrow?", exampleId: "Apakah besok luang?" },
      { en: "I hope to pass", id: "Saya harap lulus", pronounce: "ai houp tu paas", example: "I hope to pass the test.", exampleId: "Saya harap lulus tes." },
      { en: "Maybe I will come late", id: "Mungkin saya telat", pronounce: "MEI-bi ai wil kam leit", example: "Maybe I will come late.", exampleId: "Mungkin saya telat." },
      { en: "Expect to finish soon", id: "Harap selesai segera", pronounce: "ik-SPEKT tu FI-nish sun", example: "I expect to finish soon.", exampleId: "Saya harap selesai segera." },
      { en: "I will call you tomorrow", id: "Saya akan telepon besok", pronounce: "ai wil kol yu tu-MO-rou", example: "I will call you tomorrow at 9.", exampleId: "Saya akan telepon besok jam 9." },
      { en: "I am going to meet client", id: "Saya akan temu klien", pronounce: "ai em GO-ing tu miit KLAI-en", example: "I am going to meet client at 10.", exampleId: "Saya akan temu klien jam 10." },
      { en: "I promise to come", id: "Saya janji datang", pronounce: "ai PRO-mis tu kam", example: "I promise to come early.", exampleId: "Saya janji datang awal." },
      { en: "It will be sunny", id: "Akan cerah", pronounce: "it wil bi SA-ni", example: "It will be sunny tomorrow.", exampleId: "Besok akan cerah." },
      { en: "Next week I will travel", id: "Minggu depan saya travel", pronounce: "nekst wiik ai wil TRE-vel", example: "Next week I will travel to Bali.", exampleId: "Minggu depan saya travel ke Bali." },
      { en: "Let's meet at 10", id: "Mari ketemu jam 10", pronounce: "lets miit et ten", example: "Let's meet at 10 in lobby.", exampleId: "Mari ketemu jam 10 di lobi." }
    ],
    quiz: [
      { id: "5-2-q1", question: "I ____ call you", options: ["will (correct)", "are will", "is will", "will to"], answer: 0, explanation: "S + will + V1" },
      { id: "5-2-q2", question: "I am ____ to go (going)", options: ["go", "going (correct)", "gone", "goes"], answer: 1, explanation: "am/is/are + going to" },
      { id: "5-2-q3", question: "I will ____ you (help)", options: ["help (correct)", "helping", "helps", "helped"], answer: 0, explanation: "will + V1" },
      { id: "5-2-q4", question: "Next week I will ____", options: ["travel (correct)", "traveling", "travels", "travelled"], answer: 0, explanation: "Future: will + V1" },
      { id: "5-2-q5", question: "Let's ____ at 10", options: ["meet (correct)", "meeting", "met", "meets"], answer: 0, explanation: "Let's + V1" }
    ]
  },
  {
    id: "5-3",
    levelId: 5,
    order: 27,
    title: "Janji & Tawaran",
    titleEn: "Promises & Offers",
    objective: "I will help, Shall I...?",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Janji & Tawaran (Promises & Offers) — I will help, Shall I...?. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus 1 Baris",
          headingId: "Rumus 1 Baris",
          body: "Tulis rumus di sticky: S + V2 / S + will + V1.",
          examples: [
            { en: "Are you free tomorrow?", id: "Apakah besok luang?" },
            { en: "I hope to pass the test.", id: "Saya harap lulus tes." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Cerita Pendek",
          headingId: "Cerita Pendek",
          body: "Sambung 3 kalimat jadi cerita 30 detik.",
          examples: [
            { en: "Maybe I will come late.", id: "Mungkin saya telat." },
            { en: "I use Promises & Offers at work today.", id: "Saya pakai Janji & Tawaran di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Tanya Jawab",
          headingId: "Tanya Jawab",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Promises & Offers now.", id: "Mari latihan Janji & Tawaran sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Expect to finish soon", id: "Harap selesai segera", pronounce: "ik-SPEKT tu FI-nish sun", example: "I expect to finish soon.", exampleId: "Saya harap selesai segera." },
      { en: "I will call you tomorrow", id: "Saya akan telepon besok", pronounce: "ai wil kol yu tu-MO-rou", example: "I will call you tomorrow at 9.", exampleId: "Saya akan telepon besok jam 9." },
      { en: "I am going to meet client", id: "Saya akan temu klien", pronounce: "ai em GO-ing tu miit KLAI-en", example: "I am going to meet client at 10.", exampleId: "Saya akan temu klien jam 10." },
      { en: "I promise to come", id: "Saya janji datang", pronounce: "ai PRO-mis tu kam", example: "I promise to come early.", exampleId: "Saya janji datang awal." },
      { en: "It will be sunny", id: "Akan cerah", pronounce: "it wil bi SA-ni", example: "It will be sunny tomorrow.", exampleId: "Besok akan cerah." },
      { en: "Next week I will travel", id: "Minggu depan saya travel", pronounce: "nekst wiik ai wil TRE-vel", example: "Next week I will travel to Bali.", exampleId: "Minggu depan saya travel ke Bali." },
      { en: "Let's meet at 10", id: "Mari ketemu jam 10", pronounce: "lets miit et ten", example: "Let's meet at 10 in lobby.", exampleId: "Mari ketemu jam 10 di lobi." },
      { en: "Are you free tomorrow", id: "Apakah besok luang", pronounce: "ar yu frii tu-MO-rou", example: "Are you free tomorrow?", exampleId: "Apakah besok luang?" },
      { en: "I hope to pass", id: "Saya harap lulus", pronounce: "ai houp tu paas", example: "I hope to pass the test.", exampleId: "Saya harap lulus tes." },
      { en: "Maybe I will come late", id: "Mungkin saya telat", pronounce: "MEI-bi ai wil kam leit", example: "Maybe I will come late.", exampleId: "Mungkin saya telat." }
    ],
    quiz: [
      { id: "5-3-q1", question: "I ____ call you", options: ["will (correct)", "are will", "is will", "will to"], answer: 0, explanation: "S + will + V1" },
      { id: "5-3-q2", question: "I am ____ to go (going)", options: ["go", "going (correct)", "gone", "goes"], answer: 1, explanation: "am/is/are + going to" },
      { id: "5-3-q3", question: "I will ____ you (help)", options: ["help (correct)", "helping", "helps", "helped"], answer: 0, explanation: "will + V1" },
      { id: "5-3-q4", question: "Next week I will ____", options: ["travel (correct)", "traveling", "travels", "travelled"], answer: 0, explanation: "Future: will + V1" },
      { id: "5-3-q5", question: "Let's ____ at 10", options: ["meet (correct)", "meeting", "met", "meets"], answer: 0, explanation: "Let's + V1" }
    ]
  },
  {
    id: "5-4",
    levelId: 5,
    order: 28,
    title: "Prediksi",
    titleEn: "Predictions",
    objective: "It will be sunny, I think...",
    duration: "14 menit",
    content: {
      intro: "Pelajaran Prediksi (Predictions) — It will be sunny, I think.... Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus 1 Baris",
          headingId: "Rumus 1 Baris",
          body: "Tulis rumus di sticky: S + V2 / S + will + V1.",
          examples: [
            { en: "Maybe I will come late.", id: "Mungkin saya telat." },
            { en: "I expect to finish soon.", id: "Saya harap selesai segera." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Cerita Pendek",
          headingId: "Cerita Pendek",
          body: "Sambung 3 kalimat jadi cerita 30 detik.",
          examples: [
            { en: "I will call you tomorrow at 9.", id: "Saya akan telepon besok jam 9." },
            { en: "I use Predictions at work today.", id: "Saya pakai Prediksi di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Tanya Jawab",
          headingId: "Tanya Jawab",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Predictions now.", id: "Mari latihan Prediksi sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "I promise to come", id: "Saya janji datang", pronounce: "ai PRO-mis tu kam", example: "I promise to come early.", exampleId: "Saya janji datang awal." },
      { en: "It will be sunny", id: "Akan cerah", pronounce: "it wil bi SA-ni", example: "It will be sunny tomorrow.", exampleId: "Besok akan cerah." },
      { en: "Next week I will travel", id: "Minggu depan saya travel", pronounce: "nekst wiik ai wil TRE-vel", example: "Next week I will travel to Bali.", exampleId: "Minggu depan saya travel ke Bali." },
      { en: "Let's meet at 10", id: "Mari ketemu jam 10", pronounce: "lets miit et ten", example: "Let's meet at 10 in lobby.", exampleId: "Mari ketemu jam 10 di lobi." },
      { en: "Are you free tomorrow", id: "Apakah besok luang", pronounce: "ar yu frii tu-MO-rou", example: "Are you free tomorrow?", exampleId: "Apakah besok luang?" },
      { en: "I hope to pass", id: "Saya harap lulus", pronounce: "ai houp tu paas", example: "I hope to pass the test.", exampleId: "Saya harap lulus tes." },
      { en: "Maybe I will come late", id: "Mungkin saya telat", pronounce: "MEI-bi ai wil kam leit", example: "Maybe I will come late.", exampleId: "Mungkin saya telat." },
      { en: "Expect to finish soon", id: "Harap selesai segera", pronounce: "ik-SPEKT tu FI-nish sun", example: "I expect to finish soon.", exampleId: "Saya harap selesai segera." },
      { en: "I will call you tomorrow", id: "Saya akan telepon besok", pronounce: "ai wil kol yu tu-MO-rou", example: "I will call you tomorrow at 9.", exampleId: "Saya akan telepon besok jam 9." },
      { en: "I am going to meet client", id: "Saya akan temu klien", pronounce: "ai em GO-ing tu miit KLAI-en", example: "I am going to meet client at 10.", exampleId: "Saya akan temu klien jam 10." }
    ],
    quiz: [
      { id: "5-4-q1", question: "I ____ call you", options: ["will (correct)", "are will", "is will", "will to"], answer: 0, explanation: "S + will + V1" },
      { id: "5-4-q2", question: "I am ____ to go (going)", options: ["go", "going (correct)", "gone", "goes"], answer: 1, explanation: "am/is/are + going to" },
      { id: "5-4-q3", question: "I will ____ you (help)", options: ["help (correct)", "helping", "helps", "helped"], answer: 0, explanation: "will + V1" },
      { id: "5-4-q4", question: "Next week I will ____", options: ["travel (correct)", "traveling", "travels", "travelled"], answer: 0, explanation: "Future: will + V1" },
      { id: "5-4-q5", question: "Let's ____ at 10", options: ["meet (correct)", "meeting", "met", "meets"], answer: 0, explanation: "Let's + V1" }
    ]
  },
  {
    id: "5-5",
    levelId: 5,
    order: 29,
    title: "Rencana Minggu Depan",
    titleEn: "Next Week Plan",
    objective: "Next week I will...",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Rencana Minggu Depan (Next Week Plan) — Next week I will.... Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus 1 Baris",
          headingId: "Rumus 1 Baris",
          body: "Tulis rumus di sticky: S + V2 / S + will + V1.",
          examples: [
            { en: "I will call you tomorrow at 9.", id: "Saya akan telepon besok jam 9." },
            { en: "I am going to meet client at 10.", id: "Saya akan temu klien jam 10." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Cerita Pendek",
          headingId: "Cerita Pendek",
          body: "Sambung 3 kalimat jadi cerita 30 detik.",
          examples: [
            { en: "I promise to come early.", id: "Saya janji datang awal." },
            { en: "I use Next Week Plan at work today.", id: "Saya pakai Rencana Minggu Depan di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Tanya Jawab",
          headingId: "Tanya Jawab",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Next Week Plan now.", id: "Mari latihan Rencana Minggu Depan sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Let's meet at 10", id: "Mari ketemu jam 10", pronounce: "lets miit et ten", example: "Let's meet at 10 in lobby.", exampleId: "Mari ketemu jam 10 di lobi." },
      { en: "Are you free tomorrow", id: "Apakah besok luang", pronounce: "ar yu frii tu-MO-rou", example: "Are you free tomorrow?", exampleId: "Apakah besok luang?" },
      { en: "I hope to pass", id: "Saya harap lulus", pronounce: "ai houp tu paas", example: "I hope to pass the test.", exampleId: "Saya harap lulus tes." },
      { en: "Maybe I will come late", id: "Mungkin saya telat", pronounce: "MEI-bi ai wil kam leit", example: "Maybe I will come late.", exampleId: "Mungkin saya telat." },
      { en: "Expect to finish soon", id: "Harap selesai segera", pronounce: "ik-SPEKT tu FI-nish sun", example: "I expect to finish soon.", exampleId: "Saya harap selesai segera." },
      { en: "I will call you tomorrow", id: "Saya akan telepon besok", pronounce: "ai wil kol yu tu-MO-rou", example: "I will call you tomorrow at 9.", exampleId: "Saya akan telepon besok jam 9." },
      { en: "I am going to meet client", id: "Saya akan temu klien", pronounce: "ai em GO-ing tu miit KLAI-en", example: "I am going to meet client at 10.", exampleId: "Saya akan temu klien jam 10." },
      { en: "I promise to come", id: "Saya janji datang", pronounce: "ai PRO-mis tu kam", example: "I promise to come early.", exampleId: "Saya janji datang awal." },
      { en: "It will be sunny", id: "Akan cerah", pronounce: "it wil bi SA-ni", example: "It will be sunny tomorrow.", exampleId: "Besok akan cerah." },
      { en: "Next week I will travel", id: "Minggu depan saya travel", pronounce: "nekst wiik ai wil TRE-vel", example: "Next week I will travel to Bali.", exampleId: "Minggu depan saya travel ke Bali." }
    ],
    quiz: [
      { id: "5-5-q1", question: "I ____ call you", options: ["will (correct)", "are will", "is will", "will to"], answer: 0, explanation: "S + will + V1" },
      { id: "5-5-q2", question: "I am ____ to go (going)", options: ["go", "going (correct)", "gone", "goes"], answer: 1, explanation: "am/is/are + going to" },
      { id: "5-5-q3", question: "I will ____ you (help)", options: ["help (correct)", "helping", "helps", "helped"], answer: 0, explanation: "will + V1" },
      { id: "5-5-q4", question: "Next week I will ____", options: ["travel (correct)", "traveling", "travels", "travelled"], answer: 0, explanation: "Future: will + V1" },
      { id: "5-5-q5", question: "Let's ____ at 10", options: ["meet (correct)", "meeting", "met", "meets"], answer: 0, explanation: "Let's + V1" }
    ]
  },
  {
    id: "5-6",
    levelId: 5,
    order: 30,
    title: "Booking & Janji",
    titleEn: "Booking & Appointments",
    objective: "Let's meet at 10, Are you free?",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Booking & Janji (Booking & Appointments) — Let's meet at 10, Are you free?. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus 1 Baris",
          headingId: "Rumus 1 Baris",
          body: "Tulis rumus di sticky: S + V2 / S + will + V1.",
          examples: [
            { en: "I promise to come early.", id: "Saya janji datang awal." },
            { en: "It will be sunny tomorrow.", id: "Besok akan cerah." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Cerita Pendek",
          headingId: "Cerita Pendek",
          body: "Sambung 3 kalimat jadi cerita 30 detik.",
          examples: [
            { en: "Next week I will travel to Bali.", id: "Minggu depan saya travel ke Bali." },
            { en: "I use Booking & Appointments at work today.", id: "Saya pakai Booking & Janji di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Tanya Jawab",
          headingId: "Tanya Jawab",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Booking & Appointments now.", id: "Mari latihan Booking & Janji sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Maybe I will come late", id: "Mungkin saya telat", pronounce: "MEI-bi ai wil kam leit", example: "Maybe I will come late.", exampleId: "Mungkin saya telat." },
      { en: "Expect to finish soon", id: "Harap selesai segera", pronounce: "ik-SPEKT tu FI-nish sun", example: "I expect to finish soon.", exampleId: "Saya harap selesai segera." },
      { en: "I will call you tomorrow", id: "Saya akan telepon besok", pronounce: "ai wil kol yu tu-MO-rou", example: "I will call you tomorrow at 9.", exampleId: "Saya akan telepon besok jam 9." },
      { en: "I am going to meet client", id: "Saya akan temu klien", pronounce: "ai em GO-ing tu miit KLAI-en", example: "I am going to meet client at 10.", exampleId: "Saya akan temu klien jam 10." },
      { en: "I promise to come", id: "Saya janji datang", pronounce: "ai PRO-mis tu kam", example: "I promise to come early.", exampleId: "Saya janji datang awal." },
      { en: "It will be sunny", id: "Akan cerah", pronounce: "it wil bi SA-ni", example: "It will be sunny tomorrow.", exampleId: "Besok akan cerah." },
      { en: "Next week I will travel", id: "Minggu depan saya travel", pronounce: "nekst wiik ai wil TRE-vel", example: "Next week I will travel to Bali.", exampleId: "Minggu depan saya travel ke Bali." },
      { en: "Let's meet at 10", id: "Mari ketemu jam 10", pronounce: "lets miit et ten", example: "Let's meet at 10 in lobby.", exampleId: "Mari ketemu jam 10 di lobi." },
      { en: "Are you free tomorrow", id: "Apakah besok luang", pronounce: "ar yu frii tu-MO-rou", example: "Are you free tomorrow?", exampleId: "Apakah besok luang?" },
      { en: "I hope to pass", id: "Saya harap lulus", pronounce: "ai houp tu paas", example: "I hope to pass the test.", exampleId: "Saya harap lulus tes." }
    ],
    quiz: [
      { id: "5-6-q1", question: "I ____ call you", options: ["will (correct)", "are will", "is will", "will to"], answer: 0, explanation: "S + will + V1" },
      { id: "5-6-q2", question: "I am ____ to go (going)", options: ["go", "going (correct)", "gone", "goes"], answer: 1, explanation: "am/is/are + going to" },
      { id: "5-6-q3", question: "I will ____ you (help)", options: ["help (correct)", "helping", "helps", "helped"], answer: 0, explanation: "will + V1" },
      { id: "5-6-q4", question: "Next week I will ____", options: ["travel (correct)", "traveling", "travels", "travelled"], answer: 0, explanation: "Future: will + V1" },
      { id: "5-6-q5", question: "Let's ____ at 10", options: ["meet (correct)", "meeting", "met", "meets"], answer: 0, explanation: "Let's + V1" }
    ]
  },
  {
    id: "6-1",
    levelId: 6,
    order: 31,
    title: "Email Formal 1",
    titleEn: "Formal Email 1",
    objective: "Subject & greeting + opening",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Email Formal 1 (Formal Email 1) — Subject & greeting + opening. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Template Kerja (Copas)",
          headingId: "Template Kerja (Copas)",
          body: "Copy template, ganti nama/tanggal. Bos bule suka formal.",
          examples: [
            { en: "I deal with clients daily.", id: "Saya urus klien tiap hari." },
            { en: "Please carry out this task.", id: "Tolong laksanakan tugas ini." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Collocation Wajib",
          headingId: "Collocation Wajib",
          body: "Hafal pasangan: make a decision (bukan do), deal with.",
          examples: [
            { en: "Kindly confirm by email.", id: "Mohon konfirmasi via email." },
            { en: "I use Formal Email 1 at work today.", id: "Saya pakai Email Formal 1 di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Roleplay",
          headingId: "Roleplay",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Formal Email 1 now.", id: "Mari latihan Email Formal 1 sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Carry out a task", id: "Laksanakan tugas", pronounce: "KE-ri aut e task", example: "Please carry out this task.", exampleId: "Tolong laksanakan tugas ini." },
      { en: "Kindly confirm", id: "Mohon konfirmasi", pronounce: "KAIN-dli kon-FERM", example: "Kindly confirm by email.", exampleId: "Mohon konfirmasi via email." },
      { en: "Best regards, Farha", id: "Salam hormat, Farha", pronounce: "best ri-GARDZ FAR-ha", example: "Best regards, Farha", exampleId: "Salam hormat, Farha" },
      { en: "Subject: Meeting at 9", id: "Subjek: Rapat jam 9", pronounce: "SAB-jekt MII-ting et nain", example: "Subject: Meeting at 9 AM", exampleId: "Subjek: Rapat jam 9 pagi" },
      { en: "This is urgent", id: "Ini mendesak", pronounce: "dis iz ER-jent", example: "This is urgent, please reply.", exampleId: "Ini mendesak, tolong balas." },
      { en: "I will forward the email", id: "Saya akan teruskan email", pronounce: "ai wil FOR-werd dhi II-meil", example: "I will forward the email to boss.", exampleId: "Saya akan teruskan email ke bos." },
      { en: "Deadline is Friday", id: "Batas Jumat", pronounce: "DED-lain iz FRAI-dei", example: "Deadline is Friday at 5 PM.", exampleId: "Batas Jumat jam 5 sore." },
      { en: "Please find attached", id: "Silakan lihat terlampir", pronounce: "pliiz faind e-TEchd", example: "Please find attached the report.", exampleId: "Silakan lihat laporan terlampir." },
      { en: "Make a decision", id: "Buat keputusan", pronounce: "meik e di-SI-zhen", example: "We need to make a decision.", exampleId: "Kita perlu buat keputusan." },
      { en: "Deal with clients", id: "Urus klien", pronounce: "diil with KLAI-ents", example: "I deal with clients daily.", exampleId: "Saya urus klien tiap hari." }
    ],
    quiz: [
      { id: "6-1-q1", question: "Please ____ attached", options: ["find (correct)", "found", "finding", "finds"], answer: 0, explanation: "Please find attached" },
      { id: "6-1-q2", question: "Could you ____ please", options: ["send (correct)", "sending", "sent", "sends"], answer: 0, explanation: "Could you please + V1" },
      { id: "6-1-q3", question: "Best ____, Farha", options: ["regard", "regards (correct)", "regarding", "regard's"], answer: 1, explanation: "Best regards," },
      { id: "6-1-q4", question: "Subject: Meeting ____ 9", options: ["in", "at (correct)", "on", "by"], answer: 1, explanation: "at 9 o'clock" },
      { id: "6-1-q5", question: "Deadline ____ Friday", options: ["is (correct)", "are", "am", "be"], answer: 0, explanation: "Deadline is ..." }
    ]
  },
  {
    id: "6-2",
    levelId: 6,
    order: 32,
    title: "Email Formal 2",
    titleEn: "Formal Email 2",
    objective: "Body & closing + signature",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Email Formal 2 (Formal Email 2) — Body & closing + signature. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Template Kerja (Copas)",
          headingId: "Template Kerja (Copas)",
          body: "Copy template, ganti nama/tanggal. Bos bule suka formal.",
          examples: [
            { en: "Kindly confirm by email.", id: "Mohon konfirmasi via email." },
            { en: "Best regards, Farha", id: "Salam hormat, Farha" }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Collocation Wajib",
          headingId: "Collocation Wajib",
          body: "Hafal pasangan: make a decision (bukan do), deal with.",
          examples: [
            { en: "Subject: Meeting at 9 AM", id: "Subjek: Rapat jam 9 pagi" },
            { en: "I use Formal Email 2 at work today.", id: "Saya pakai Email Formal 2 di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Roleplay",
          headingId: "Roleplay",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Formal Email 2 now.", id: "Mari latihan Email Formal 2 sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Subject: Meeting at 9", id: "Subjek: Rapat jam 9", pronounce: "SAB-jekt MII-ting et nain", example: "Subject: Meeting at 9 AM", exampleId: "Subjek: Rapat jam 9 pagi" },
      { en: "This is urgent", id: "Ini mendesak", pronounce: "dis iz ER-jent", example: "This is urgent, please reply.", exampleId: "Ini mendesak, tolong balas." },
      { en: "I will forward the email", id: "Saya akan teruskan email", pronounce: "ai wil FOR-werd dhi II-meil", example: "I will forward the email to boss.", exampleId: "Saya akan teruskan email ke bos." },
      { en: "Deadline is Friday", id: "Batas Jumat", pronounce: "DED-lain iz FRAI-dei", example: "Deadline is Friday at 5 PM.", exampleId: "Batas Jumat jam 5 sore." },
      { en: "Please find attached", id: "Silakan lihat terlampir", pronounce: "pliiz faind e-TEchd", example: "Please find attached the report.", exampleId: "Silakan lihat laporan terlampir." },
      { en: "Make a decision", id: "Buat keputusan", pronounce: "meik e di-SI-zhen", example: "We need to make a decision.", exampleId: "Kita perlu buat keputusan." },
      { en: "Deal with clients", id: "Urus klien", pronounce: "diil with KLAI-ents", example: "I deal with clients daily.", exampleId: "Saya urus klien tiap hari." },
      { en: "Carry out a task", id: "Laksanakan tugas", pronounce: "KE-ri aut e task", example: "Please carry out this task.", exampleId: "Tolong laksanakan tugas ini." },
      { en: "Kindly confirm", id: "Mohon konfirmasi", pronounce: "KAIN-dli kon-FERM", example: "Kindly confirm by email.", exampleId: "Mohon konfirmasi via email." },
      { en: "Best regards, Farha", id: "Salam hormat, Farha", pronounce: "best ri-GARDZ FAR-ha", example: "Best regards, Farha", exampleId: "Salam hormat, Farha" }
    ],
    quiz: [
      { id: "6-2-q1", question: "Please ____ attached", options: ["find (correct)", "found", "finding", "finds"], answer: 0, explanation: "Please find attached" },
      { id: "6-2-q2", question: "Could you ____ please", options: ["send (correct)", "sending", "sent", "sends"], answer: 0, explanation: "Could you please + V1" },
      { id: "6-2-q3", question: "Best ____, Farha", options: ["regard", "regards (correct)", "regarding", "regard's"], answer: 1, explanation: "Best regards," },
      { id: "6-2-q4", question: "Subject: Meeting ____ 9", options: ["in", "at (correct)", "on", "by"], answer: 1, explanation: "at 9 o'clock" },
      { id: "6-2-q5", question: "Deadline ____ Friday", options: ["is (correct)", "are", "am", "be"], answer: 0, explanation: "Deadline is ..." }
    ]
  },
  {
    id: "6-3",
    levelId: 6,
    order: 33,
    title: "Chat Kerja Slack",
    titleEn: "Work Chat",
    objective: "Please check, FYI, ASAP",
    duration: "14 menit",
    content: {
      intro: "Pelajaran Chat Kerja Slack (Work Chat) — Please check, FYI, ASAP. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Template Kerja (Copas)",
          headingId: "Template Kerja (Copas)",
          body: "Copy template, ganti nama/tanggal. Bos bule suka formal.",
          examples: [
            { en: "Subject: Meeting at 9 AM", id: "Subjek: Rapat jam 9 pagi" },
            { en: "This is urgent, please reply.", id: "Ini mendesak, tolong balas." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Collocation Wajib",
          headingId: "Collocation Wajib",
          body: "Hafal pasangan: make a decision (bukan do), deal with.",
          examples: [
            { en: "I will forward the email to boss.", id: "Saya akan teruskan email ke bos." },
            { en: "I use Work Chat at work today.", id: "Saya pakai Chat Kerja Slack di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Roleplay",
          headingId: "Roleplay",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Work Chat now.", id: "Mari latihan Chat Kerja Slack sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Deadline is Friday", id: "Batas Jumat", pronounce: "DED-lain iz FRAI-dei", example: "Deadline is Friday at 5 PM.", exampleId: "Batas Jumat jam 5 sore." },
      { en: "Please find attached", id: "Silakan lihat terlampir", pronounce: "pliiz faind e-TEchd", example: "Please find attached the report.", exampleId: "Silakan lihat laporan terlampir." },
      { en: "Make a decision", id: "Buat keputusan", pronounce: "meik e di-SI-zhen", example: "We need to make a decision.", exampleId: "Kita perlu buat keputusan." },
      { en: "Deal with clients", id: "Urus klien", pronounce: "diil with KLAI-ents", example: "I deal with clients daily.", exampleId: "Saya urus klien tiap hari." },
      { en: "Carry out a task", id: "Laksanakan tugas", pronounce: "KE-ri aut e task", example: "Please carry out this task.", exampleId: "Tolong laksanakan tugas ini." },
      { en: "Kindly confirm", id: "Mohon konfirmasi", pronounce: "KAIN-dli kon-FERM", example: "Kindly confirm by email.", exampleId: "Mohon konfirmasi via email." },
      { en: "Best regards, Farha", id: "Salam hormat, Farha", pronounce: "best ri-GARDZ FAR-ha", example: "Best regards, Farha", exampleId: "Salam hormat, Farha" },
      { en: "Subject: Meeting at 9", id: "Subjek: Rapat jam 9", pronounce: "SAB-jekt MII-ting et nain", example: "Subject: Meeting at 9 AM", exampleId: "Subjek: Rapat jam 9 pagi" },
      { en: "This is urgent", id: "Ini mendesak", pronounce: "dis iz ER-jent", example: "This is urgent, please reply.", exampleId: "Ini mendesak, tolong balas." },
      { en: "I will forward the email", id: "Saya akan teruskan email", pronounce: "ai wil FOR-werd dhi II-meil", example: "I will forward the email to boss.", exampleId: "Saya akan teruskan email ke bos." }
    ],
    quiz: [
      { id: "6-3-q1", question: "Please ____ attached", options: ["find (correct)", "found", "finding", "finds"], answer: 0, explanation: "Please find attached" },
      { id: "6-3-q2", question: "Could you ____ please", options: ["send (correct)", "sending", "sent", "sends"], answer: 0, explanation: "Could you please + V1" },
      { id: "6-3-q3", question: "Best ____, Farha", options: ["regard", "regards (correct)", "regarding", "regard's"], answer: 1, explanation: "Best regards," },
      { id: "6-3-q4", question: "Subject: Meeting ____ 9", options: ["in", "at (correct)", "on", "by"], answer: 1, explanation: "at 9 o'clock" },
      { id: "6-3-q5", question: "Deadline ____ Friday", options: ["is (correct)", "are", "am", "be"], answer: 0, explanation: "Deadline is ..." }
    ]
  },
  {
    id: "6-4",
    levelId: 6,
    order: 34,
    title: "Permintaan Sopan",
    titleEn: "Polite Requests",
    objective: "Could you please...? Would you...?",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Permintaan Sopan (Polite Requests) — Could you please...? Would you...?. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Template Kerja (Copas)",
          headingId: "Template Kerja (Copas)",
          body: "Copy template, ganti nama/tanggal. Bos bule suka formal.",
          examples: [
            { en: "I will forward the email to boss.", id: "Saya akan teruskan email ke bos." },
            { en: "Deadline is Friday at 5 PM.", id: "Batas Jumat jam 5 sore." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Collocation Wajib",
          headingId: "Collocation Wajib",
          body: "Hafal pasangan: make a decision (bukan do), deal with.",
          examples: [
            { en: "Please find attached the report.", id: "Silakan lihat laporan terlampir." },
            { en: "I use Polite Requests at work today.", id: "Saya pakai Permintaan Sopan di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Roleplay",
          headingId: "Roleplay",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Polite Requests now.", id: "Mari latihan Permintaan Sopan sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Deal with clients", id: "Urus klien", pronounce: "diil with KLAI-ents", example: "I deal with clients daily.", exampleId: "Saya urus klien tiap hari." },
      { en: "Carry out a task", id: "Laksanakan tugas", pronounce: "KE-ri aut e task", example: "Please carry out this task.", exampleId: "Tolong laksanakan tugas ini." },
      { en: "Kindly confirm", id: "Mohon konfirmasi", pronounce: "KAIN-dli kon-FERM", example: "Kindly confirm by email.", exampleId: "Mohon konfirmasi via email." },
      { en: "Best regards, Farha", id: "Salam hormat, Farha", pronounce: "best ri-GARDZ FAR-ha", example: "Best regards, Farha", exampleId: "Salam hormat, Farha" },
      { en: "Subject: Meeting at 9", id: "Subjek: Rapat jam 9", pronounce: "SAB-jekt MII-ting et nain", example: "Subject: Meeting at 9 AM", exampleId: "Subjek: Rapat jam 9 pagi" },
      { en: "This is urgent", id: "Ini mendesak", pronounce: "dis iz ER-jent", example: "This is urgent, please reply.", exampleId: "Ini mendesak, tolong balas." },
      { en: "I will forward the email", id: "Saya akan teruskan email", pronounce: "ai wil FOR-werd dhi II-meil", example: "I will forward the email to boss.", exampleId: "Saya akan teruskan email ke bos." },
      { en: "Deadline is Friday", id: "Batas Jumat", pronounce: "DED-lain iz FRAI-dei", example: "Deadline is Friday at 5 PM.", exampleId: "Batas Jumat jam 5 sore." },
      { en: "Please find attached", id: "Silakan lihat terlampir", pronounce: "pliiz faind e-TEchd", example: "Please find attached the report.", exampleId: "Silakan lihat laporan terlampir." },
      { en: "Make a decision", id: "Buat keputusan", pronounce: "meik e di-SI-zhen", example: "We need to make a decision.", exampleId: "Kita perlu buat keputusan." }
    ],
    quiz: [
      { id: "6-4-q1", question: "Please ____ attached", options: ["find (correct)", "found", "finding", "finds"], answer: 0, explanation: "Please find attached" },
      { id: "6-4-q2", question: "Could you ____ please", options: ["send (correct)", "sending", "sent", "sends"], answer: 0, explanation: "Could you please + V1" },
      { id: "6-4-q3", question: "Best ____, Farha", options: ["regard", "regards (correct)", "regarding", "regard's"], answer: 1, explanation: "Best regards," },
      { id: "6-4-q4", question: "Subject: Meeting ____ 9", options: ["in", "at (correct)", "on", "by"], answer: 1, explanation: "at 9 o'clock" },
      { id: "6-4-q5", question: "Deadline ____ Friday", options: ["is (correct)", "are", "am", "be"], answer: 0, explanation: "Deadline is ..." }
    ]
  },
  {
    id: "6-5",
    levelId: 6,
    order: 35,
    title: "Laporan Singkat",
    titleEn: "Short Report",
    objective: "Attached is report, Please find...",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Laporan Singkat (Short Report) — Attached is report, Please find.... Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Template Kerja (Copas)",
          headingId: "Template Kerja (Copas)",
          body: "Copy template, ganti nama/tanggal. Bos bule suka formal.",
          examples: [
            { en: "Please find attached the report.", id: "Silakan lihat laporan terlampir." },
            { en: "We need to make a decision.", id: "Kita perlu buat keputusan." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Collocation Wajib",
          headingId: "Collocation Wajib",
          body: "Hafal pasangan: make a decision (bukan do), deal with.",
          examples: [
            { en: "I deal with clients daily.", id: "Saya urus klien tiap hari." },
            { en: "I use Short Report at work today.", id: "Saya pakai Laporan Singkat di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Roleplay",
          headingId: "Roleplay",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Short Report now.", id: "Mari latihan Laporan Singkat sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Best regards, Farha", id: "Salam hormat, Farha", pronounce: "best ri-GARDZ FAR-ha", example: "Best regards, Farha", exampleId: "Salam hormat, Farha" },
      { en: "Subject: Meeting at 9", id: "Subjek: Rapat jam 9", pronounce: "SAB-jekt MII-ting et nain", example: "Subject: Meeting at 9 AM", exampleId: "Subjek: Rapat jam 9 pagi" },
      { en: "This is urgent", id: "Ini mendesak", pronounce: "dis iz ER-jent", example: "This is urgent, please reply.", exampleId: "Ini mendesak, tolong balas." },
      { en: "I will forward the email", id: "Saya akan teruskan email", pronounce: "ai wil FOR-werd dhi II-meil", example: "I will forward the email to boss.", exampleId: "Saya akan teruskan email ke bos." },
      { en: "Deadline is Friday", id: "Batas Jumat", pronounce: "DED-lain iz FRAI-dei", example: "Deadline is Friday at 5 PM.", exampleId: "Batas Jumat jam 5 sore." },
      { en: "Please find attached", id: "Silakan lihat terlampir", pronounce: "pliiz faind e-TEchd", example: "Please find attached the report.", exampleId: "Silakan lihat laporan terlampir." },
      { en: "Make a decision", id: "Buat keputusan", pronounce: "meik e di-SI-zhen", example: "We need to make a decision.", exampleId: "Kita perlu buat keputusan." },
      { en: "Deal with clients", id: "Urus klien", pronounce: "diil with KLAI-ents", example: "I deal with clients daily.", exampleId: "Saya urus klien tiap hari." },
      { en: "Carry out a task", id: "Laksanakan tugas", pronounce: "KE-ri aut e task", example: "Please carry out this task.", exampleId: "Tolong laksanakan tugas ini." },
      { en: "Kindly confirm", id: "Mohon konfirmasi", pronounce: "KAIN-dli kon-FERM", example: "Kindly confirm by email.", exampleId: "Mohon konfirmasi via email." }
    ],
    quiz: [
      { id: "6-5-q1", question: "Please ____ attached", options: ["find (correct)", "found", "finding", "finds"], answer: 0, explanation: "Please find attached" },
      { id: "6-5-q2", question: "Could you ____ please", options: ["send (correct)", "sending", "sent", "sends"], answer: 0, explanation: "Could you please + V1" },
      { id: "6-5-q3", question: "Best ____, Farha", options: ["regard", "regards (correct)", "regarding", "regard's"], answer: 1, explanation: "Best regards," },
      { id: "6-5-q4", question: "Subject: Meeting ____ 9", options: ["in", "at (correct)", "on", "by"], answer: 1, explanation: "at 9 o'clock" },
      { id: "6-5-q5", question: "Deadline ____ Friday", options: ["is (correct)", "are", "am", "be"], answer: 0, explanation: "Deadline is ..." }
    ]
  },
  {
    id: "6-6",
    levelId: 6,
    order: 36,
    title: "Komplain Profesional",
    titleEn: "Complaint Pro",
    objective: "I am writing to complain...",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Komplain Profesional (Complaint Pro) — I am writing to complain.... Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Template Kerja (Copas)",
          headingId: "Template Kerja (Copas)",
          body: "Copy template, ganti nama/tanggal. Bos bule suka formal.",
          examples: [
            { en: "I deal with clients daily.", id: "Saya urus klien tiap hari." },
            { en: "Please carry out this task.", id: "Tolong laksanakan tugas ini." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Collocation Wajib",
          headingId: "Collocation Wajib",
          body: "Hafal pasangan: make a decision (bukan do), deal with.",
          examples: [
            { en: "Kindly confirm by email.", id: "Mohon konfirmasi via email." },
            { en: "I use Complaint Pro at work today.", id: "Saya pakai Komplain Profesional di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Roleplay",
          headingId: "Roleplay",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Complaint Pro now.", id: "Mari latihan Komplain Profesional sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "I will forward the email", id: "Saya akan teruskan email", pronounce: "ai wil FOR-werd dhi II-meil", example: "I will forward the email to boss.", exampleId: "Saya akan teruskan email ke bos." },
      { en: "Deadline is Friday", id: "Batas Jumat", pronounce: "DED-lain iz FRAI-dei", example: "Deadline is Friday at 5 PM.", exampleId: "Batas Jumat jam 5 sore." },
      { en: "Please find attached", id: "Silakan lihat terlampir", pronounce: "pliiz faind e-TEchd", example: "Please find attached the report.", exampleId: "Silakan lihat laporan terlampir." },
      { en: "Make a decision", id: "Buat keputusan", pronounce: "meik e di-SI-zhen", example: "We need to make a decision.", exampleId: "Kita perlu buat keputusan." },
      { en: "Deal with clients", id: "Urus klien", pronounce: "diil with KLAI-ents", example: "I deal with clients daily.", exampleId: "Saya urus klien tiap hari." },
      { en: "Carry out a task", id: "Laksanakan tugas", pronounce: "KE-ri aut e task", example: "Please carry out this task.", exampleId: "Tolong laksanakan tugas ini." },
      { en: "Kindly confirm", id: "Mohon konfirmasi", pronounce: "KAIN-dli kon-FERM", example: "Kindly confirm by email.", exampleId: "Mohon konfirmasi via email." },
      { en: "Best regards, Farha", id: "Salam hormat, Farha", pronounce: "best ri-GARDZ FAR-ha", example: "Best regards, Farha", exampleId: "Salam hormat, Farha" },
      { en: "Subject: Meeting at 9", id: "Subjek: Rapat jam 9", pronounce: "SAB-jekt MII-ting et nain", example: "Subject: Meeting at 9 AM", exampleId: "Subjek: Rapat jam 9 pagi" },
      { en: "This is urgent", id: "Ini mendesak", pronounce: "dis iz ER-jent", example: "This is urgent, please reply.", exampleId: "Ini mendesak, tolong balas." }
    ],
    quiz: [
      { id: "6-6-q1", question: "Please ____ attached", options: ["find (correct)", "found", "finding", "finds"], answer: 0, explanation: "Please find attached" },
      { id: "6-6-q2", question: "Could you ____ please", options: ["send (correct)", "sending", "sent", "sends"], answer: 0, explanation: "Could you please + V1" },
      { id: "6-6-q3", question: "Best ____, Farha", options: ["regard", "regards (correct)", "regarding", "regard's"], answer: 1, explanation: "Best regards," },
      { id: "6-6-q4", question: "Subject: Meeting ____ 9", options: ["in", "at (correct)", "on", "by"], answer: 1, explanation: "at 9 o'clock" },
      { id: "6-6-q5", question: "Deadline ____ Friday", options: ["is (correct)", "are", "am", "be"], answer: 0, explanation: "Deadline is ..." }
    ]
  },
  {
    id: "7-1",
    levelId: 7,
    order: 37,
    title: "Meeting Opini",
    titleEn: "Meeting Opinions",
    objective: "In my opinion, I think, I suggest",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Meeting Opini (Meeting Opinions) — In my opinion, I think, I suggest. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Template Kerja (Copas)",
          headingId: "Template Kerja (Copas)",
          body: "Copy template, ganti nama/tanggal. Bos bule suka formal.",
          examples: [
            { en: "Could you clarify this point?", id: "Bisa jelaskan poin ini?" },
            { en: "Tell me about yourself in 1 minute.", id: "Ceritakan dirimu 1 menit." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Collocation Wajib",
          headingId: "Collocation Wajib",
          body: "Hafal pasangan: make a decision (bukan do), deal with.",
          examples: [
            { en: "My strength is teamwork and discipline.", id: "Kelebihan saya kerja tim & disiplin." },
            { en: "I use Meeting Opinions at work today.", id: "Saya pakai Meeting Opini di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Roleplay",
          headingId: "Roleplay",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Meeting Opinions now.", id: "Mari latihan Meeting Opini sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Tell me about yourself", id: "Ceritakan dirimu", pronounce: "tel mi e-BAUT yor-self", example: "Tell me about yourself in 1 minute.", exampleId: "Ceritakan dirimu 1 menit." },
      { en: "My strength is teamwork", id: "Kelebihan saya kerja tim", pronounce: "mai streng iz TIIM-werk", example: "My strength is teamwork and discipline.", exampleId: "Kelebihan saya kerja tim & disiplin." },
      { en: "I am improving my English", id: "Saya tingkatkan Inggris", pronounce: "ai em im-PRUU-ving mai ING-lish", example: "I am improving my English daily.", exampleId: "Saya tingkatkan Inggris tiap hari." },
      { en: "I have experience in", id: "Saya pengalaman di", pronounce: "ai hev ik-SPII-riens in", example: "I have experience in sales.", exampleId: "Saya pengalaman di sales." },
      { en: "How about we try", id: "Gimana kalau kita coba", pronounce: "hau e-BAUT wi trai", example: "How about we try next week?", exampleId: "Gimana kalau kita coba minggu depan?" },
      { en: "I agree with you", id: "Saya setuju", pronounce: "ai e-GRII with yu", example: "I agree with you on that.", exampleId: "Saya setuju soal itu." },
      { en: "What do you mean", id: "Maksudnya apa", pronounce: "wot du yu miin", example: "What do you mean by that?", exampleId: "Maksudnya apa itu?" },
      { en: "In my opinion, we should", id: "Menurut saya kita harus", pronounce: "in mai o-PIN-yon wi shud", example: "In my opinion, we should start now.", exampleId: "Menurut saya kita harus mulai sekarang." },
      { en: "Let me explain briefly", id: "Biar saya jelaskan singkat", pronounce: "let mi ik-SPLEIN BRIIF-li", example: "Let me explain briefly.", exampleId: "Biar saya jelaskan singkat." },
      { en: "Could you clarify please", id: "Bisa jelaskan tolong", pronounce: "kud yu KLE-ri-fai pliiz", example: "Could you clarify this point?", exampleId: "Bisa jelaskan poin ini?" }
    ],
    quiz: [
      { id: "7-1-q1", question: "____ my opinion, we should", options: ["In (correct)", "On", "At", "By"], answer: 0, explanation: "In my opinion" },
      { id: "7-1-q2", question: "____ me explain", options: ["Let (correct)", "Lets", "Letting", "Let me to"], answer: 0, explanation: "Let me explain" },
      { id: "7-1-q3", question: "Could you ____ (clarify)", options: ["clarify (correct)", "clarifying", "clarified", "clarifies"], answer: 0, explanation: "Could you clarify?" },
      { id: "7-1-q4", question: "Tell me ____ yourself", options: ["about (correct)", "of", "to", "with"], answer: 0, explanation: "about yourself" },
      { id: "7-1-q5", question: "My strength ____ teamwork", options: ["is (correct)", "are", "am", "be"], answer: 0, explanation: "My strength IS" }
    ]
  },
  {
    id: "7-2",
    levelId: 7,
    order: 38,
    title: "Presentasi 1 Menit",
    titleEn: "1-Min Presentation",
    objective: "Let me explain, First, Second, Finally",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Presentasi 1 Menit (1-Min Presentation) — Let me explain, First, Second, Finally. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Template Kerja (Copas)",
          headingId: "Template Kerja (Copas)",
          body: "Copy template, ganti nama/tanggal. Bos bule suka formal.",
          examples: [
            { en: "My strength is teamwork and discipline.", id: "Kelebihan saya kerja tim & disiplin." },
            { en: "I am improving my English daily.", id: "Saya tingkatkan Inggris tiap hari." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Collocation Wajib",
          headingId: "Collocation Wajib",
          body: "Hafal pasangan: make a decision (bukan do), deal with.",
          examples: [
            { en: "I have experience in sales.", id: "Saya pengalaman di sales." },
            { en: "I use 1-Min Presentation at work today.", id: "Saya pakai Presentasi 1 Menit di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Roleplay",
          headingId: "Roleplay",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice 1-Min Presentation now.", id: "Mari latihan Presentasi 1 Menit sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "I have experience in", id: "Saya pengalaman di", pronounce: "ai hev ik-SPII-riens in", example: "I have experience in sales.", exampleId: "Saya pengalaman di sales." },
      { en: "How about we try", id: "Gimana kalau kita coba", pronounce: "hau e-BAUT wi trai", example: "How about we try next week?", exampleId: "Gimana kalau kita coba minggu depan?" },
      { en: "I agree with you", id: "Saya setuju", pronounce: "ai e-GRII with yu", example: "I agree with you on that.", exampleId: "Saya setuju soal itu." },
      { en: "What do you mean", id: "Maksudnya apa", pronounce: "wot du yu miin", example: "What do you mean by that?", exampleId: "Maksudnya apa itu?" },
      { en: "In my opinion, we should", id: "Menurut saya kita harus", pronounce: "in mai o-PIN-yon wi shud", example: "In my opinion, we should start now.", exampleId: "Menurut saya kita harus mulai sekarang." },
      { en: "Let me explain briefly", id: "Biar saya jelaskan singkat", pronounce: "let mi ik-SPLEIN BRIIF-li", example: "Let me explain briefly.", exampleId: "Biar saya jelaskan singkat." },
      { en: "Could you clarify please", id: "Bisa jelaskan tolong", pronounce: "kud yu KLE-ri-fai pliiz", example: "Could you clarify this point?", exampleId: "Bisa jelaskan poin ini?" },
      { en: "Tell me about yourself", id: "Ceritakan dirimu", pronounce: "tel mi e-BAUT yor-self", example: "Tell me about yourself in 1 minute.", exampleId: "Ceritakan dirimu 1 menit." },
      { en: "My strength is teamwork", id: "Kelebihan saya kerja tim", pronounce: "mai streng iz TIIM-werk", example: "My strength is teamwork and discipline.", exampleId: "Kelebihan saya kerja tim & disiplin." },
      { en: "I am improving my English", id: "Saya tingkatkan Inggris", pronounce: "ai em im-PRUU-ving mai ING-lish", example: "I am improving my English daily.", exampleId: "Saya tingkatkan Inggris tiap hari." }
    ],
    quiz: [
      { id: "7-2-q1", question: "____ my opinion, we should", options: ["In (correct)", "On", "At", "By"], answer: 0, explanation: "In my opinion" },
      { id: "7-2-q2", question: "____ me explain", options: ["Let (correct)", "Lets", "Letting", "Let me to"], answer: 0, explanation: "Let me explain" },
      { id: "7-2-q3", question: "Could you ____ (clarify)", options: ["clarify (correct)", "clarifying", "clarified", "clarifies"], answer: 0, explanation: "Could you clarify?" },
      { id: "7-2-q4", question: "Tell me ____ yourself", options: ["about (correct)", "of", "to", "with"], answer: 0, explanation: "about yourself" },
      { id: "7-2-q5", question: "My strength ____ teamwork", options: ["is (correct)", "are", "am", "be"], answer: 0, explanation: "My strength IS" }
    ]
  },
  {
    id: "7-3",
    levelId: 7,
    order: 39,
    title: "Tanya Jawab Meeting",
    titleEn: "Meeting Q&A",
    objective: "Could you clarify? What do you mean?",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Tanya Jawab Meeting (Meeting Q&A) — Could you clarify? What do you mean?. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Template Kerja (Copas)",
          headingId: "Template Kerja (Copas)",
          body: "Copy template, ganti nama/tanggal. Bos bule suka formal.",
          examples: [
            { en: "I have experience in sales.", id: "Saya pengalaman di sales." },
            { en: "How about we try next week?", id: "Gimana kalau kita coba minggu depan?" }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Collocation Wajib",
          headingId: "Collocation Wajib",
          body: "Hafal pasangan: make a decision (bukan do), deal with.",
          examples: [
            { en: "I agree with you on that.", id: "Saya setuju soal itu." },
            { en: "I use Meeting Q&A at work today.", id: "Saya pakai Tanya Jawab Meeting di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Roleplay",
          headingId: "Roleplay",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Meeting Q&A now.", id: "Mari latihan Tanya Jawab Meeting sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "What do you mean", id: "Maksudnya apa", pronounce: "wot du yu miin", example: "What do you mean by that?", exampleId: "Maksudnya apa itu?" },
      { en: "In my opinion, we should", id: "Menurut saya kita harus", pronounce: "in mai o-PIN-yon wi shud", example: "In my opinion, we should start now.", exampleId: "Menurut saya kita harus mulai sekarang." },
      { en: "Let me explain briefly", id: "Biar saya jelaskan singkat", pronounce: "let mi ik-SPLEIN BRIIF-li", example: "Let me explain briefly.", exampleId: "Biar saya jelaskan singkat." },
      { en: "Could you clarify please", id: "Bisa jelaskan tolong", pronounce: "kud yu KLE-ri-fai pliiz", example: "Could you clarify this point?", exampleId: "Bisa jelaskan poin ini?" },
      { en: "Tell me about yourself", id: "Ceritakan dirimu", pronounce: "tel mi e-BAUT yor-self", example: "Tell me about yourself in 1 minute.", exampleId: "Ceritakan dirimu 1 menit." },
      { en: "My strength is teamwork", id: "Kelebihan saya kerja tim", pronounce: "mai streng iz TIIM-werk", example: "My strength is teamwork and discipline.", exampleId: "Kelebihan saya kerja tim & disiplin." },
      { en: "I am improving my English", id: "Saya tingkatkan Inggris", pronounce: "ai em im-PRUU-ving mai ING-lish", example: "I am improving my English daily.", exampleId: "Saya tingkatkan Inggris tiap hari." },
      { en: "I have experience in", id: "Saya pengalaman di", pronounce: "ai hev ik-SPII-riens in", example: "I have experience in sales.", exampleId: "Saya pengalaman di sales." },
      { en: "How about we try", id: "Gimana kalau kita coba", pronounce: "hau e-BAUT wi trai", example: "How about we try next week?", exampleId: "Gimana kalau kita coba minggu depan?" },
      { en: "I agree with you", id: "Saya setuju", pronounce: "ai e-GRII with yu", example: "I agree with you on that.", exampleId: "Saya setuju soal itu." }
    ],
    quiz: [
      { id: "7-3-q1", question: "____ my opinion, we should", options: ["In (correct)", "On", "At", "By"], answer: 0, explanation: "In my opinion" },
      { id: "7-3-q2", question: "____ me explain", options: ["Let (correct)", "Lets", "Letting", "Let me to"], answer: 0, explanation: "Let me explain" },
      { id: "7-3-q3", question: "Could you ____ (clarify)", options: ["clarify (correct)", "clarifying", "clarified", "clarifies"], answer: 0, explanation: "Could you clarify?" },
      { id: "7-3-q4", question: "Tell me ____ yourself", options: ["about (correct)", "of", "to", "with"], answer: 0, explanation: "about yourself" },
      { id: "7-3-q5", question: "My strength ____ teamwork", options: ["is (correct)", "are", "am", "be"], answer: 0, explanation: "My strength IS" }
    ]
  },
  {
    id: "7-4",
    levelId: 7,
    order: 40,
    title: "Interview: Tell me",
    titleEn: "Tell Me About Yourself",
    objective: "1 menit perkenalan + STAR",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Interview: Tell me (Tell Me About Yourself) — 1 menit perkenalan + STAR. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Template Kerja (Copas)",
          headingId: "Template Kerja (Copas)",
          body: "Copy template, ganti nama/tanggal. Bos bule suka formal.",
          examples: [
            { en: "I agree with you on that.", id: "Saya setuju soal itu." },
            { en: "What do you mean by that?", id: "Maksudnya apa itu?" }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Collocation Wajib",
          headingId: "Collocation Wajib",
          body: "Hafal pasangan: make a decision (bukan do), deal with.",
          examples: [
            { en: "In my opinion, we should start now.", id: "Menurut saya kita harus mulai sekarang." },
            { en: "I use Tell Me About Yourself at work today.", id: "Saya pakai Interview: Tell me di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Roleplay",
          headingId: "Roleplay",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Tell Me About Yourself now.", id: "Mari latihan Interview: Tell me sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Could you clarify please", id: "Bisa jelaskan tolong", pronounce: "kud yu KLE-ri-fai pliiz", example: "Could you clarify this point?", exampleId: "Bisa jelaskan poin ini?" },
      { en: "Tell me about yourself", id: "Ceritakan dirimu", pronounce: "tel mi e-BAUT yor-self", example: "Tell me about yourself in 1 minute.", exampleId: "Ceritakan dirimu 1 menit." },
      { en: "My strength is teamwork", id: "Kelebihan saya kerja tim", pronounce: "mai streng iz TIIM-werk", example: "My strength is teamwork and discipline.", exampleId: "Kelebihan saya kerja tim & disiplin." },
      { en: "I am improving my English", id: "Saya tingkatkan Inggris", pronounce: "ai em im-PRUU-ving mai ING-lish", example: "I am improving my English daily.", exampleId: "Saya tingkatkan Inggris tiap hari." },
      { en: "I have experience in", id: "Saya pengalaman di", pronounce: "ai hev ik-SPII-riens in", example: "I have experience in sales.", exampleId: "Saya pengalaman di sales." },
      { en: "How about we try", id: "Gimana kalau kita coba", pronounce: "hau e-BAUT wi trai", example: "How about we try next week?", exampleId: "Gimana kalau kita coba minggu depan?" },
      { en: "I agree with you", id: "Saya setuju", pronounce: "ai e-GRII with yu", example: "I agree with you on that.", exampleId: "Saya setuju soal itu." },
      { en: "What do you mean", id: "Maksudnya apa", pronounce: "wot du yu miin", example: "What do you mean by that?", exampleId: "Maksudnya apa itu?" },
      { en: "In my opinion, we should", id: "Menurut saya kita harus", pronounce: "in mai o-PIN-yon wi shud", example: "In my opinion, we should start now.", exampleId: "Menurut saya kita harus mulai sekarang." },
      { en: "Let me explain briefly", id: "Biar saya jelaskan singkat", pronounce: "let mi ik-SPLEIN BRIIF-li", example: "Let me explain briefly.", exampleId: "Biar saya jelaskan singkat." }
    ],
    quiz: [
      { id: "7-4-q1", question: "____ my opinion, we should", options: ["In (correct)", "On", "At", "By"], answer: 0, explanation: "In my opinion" },
      { id: "7-4-q2", question: "____ me explain", options: ["Let (correct)", "Lets", "Letting", "Let me to"], answer: 0, explanation: "Let me explain" },
      { id: "7-4-q3", question: "Could you ____ (clarify)", options: ["clarify (correct)", "clarifying", "clarified", "clarifies"], answer: 0, explanation: "Could you clarify?" },
      { id: "7-4-q4", question: "Tell me ____ yourself", options: ["about (correct)", "of", "to", "with"], answer: 0, explanation: "about yourself" },
      { id: "7-4-q5", question: "My strength ____ teamwork", options: ["is (correct)", "are", "am", "be"], answer: 0, explanation: "My strength IS" }
    ]
  },
  {
    id: "7-5",
    levelId: 7,
    order: 41,
    title: "Interview: Strength",
    titleEn: "Strength & Weakness",
    objective: "My strength is..., I am improving...",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Interview: Strength (Strength & Weakness) — My strength is..., I am improving.... Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Template Kerja (Copas)",
          headingId: "Template Kerja (Copas)",
          body: "Copy template, ganti nama/tanggal. Bos bule suka formal.",
          examples: [
            { en: "In my opinion, we should start now.", id: "Menurut saya kita harus mulai sekarang." },
            { en: "Let me explain briefly.", id: "Biar saya jelaskan singkat." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Collocation Wajib",
          headingId: "Collocation Wajib",
          body: "Hafal pasangan: make a decision (bukan do), deal with.",
          examples: [
            { en: "Could you clarify this point?", id: "Bisa jelaskan poin ini?" },
            { en: "I use Strength & Weakness at work today.", id: "Saya pakai Interview: Strength di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Roleplay",
          headingId: "Roleplay",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Strength & Weakness now.", id: "Mari latihan Interview: Strength sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "I am improving my English", id: "Saya tingkatkan Inggris", pronounce: "ai em im-PRUU-ving mai ING-lish", example: "I am improving my English daily.", exampleId: "Saya tingkatkan Inggris tiap hari." },
      { en: "I have experience in", id: "Saya pengalaman di", pronounce: "ai hev ik-SPII-riens in", example: "I have experience in sales.", exampleId: "Saya pengalaman di sales." },
      { en: "How about we try", id: "Gimana kalau kita coba", pronounce: "hau e-BAUT wi trai", example: "How about we try next week?", exampleId: "Gimana kalau kita coba minggu depan?" },
      { en: "I agree with you", id: "Saya setuju", pronounce: "ai e-GRII with yu", example: "I agree with you on that.", exampleId: "Saya setuju soal itu." },
      { en: "What do you mean", id: "Maksudnya apa", pronounce: "wot du yu miin", example: "What do you mean by that?", exampleId: "Maksudnya apa itu?" },
      { en: "In my opinion, we should", id: "Menurut saya kita harus", pronounce: "in mai o-PIN-yon wi shud", example: "In my opinion, we should start now.", exampleId: "Menurut saya kita harus mulai sekarang." },
      { en: "Let me explain briefly", id: "Biar saya jelaskan singkat", pronounce: "let mi ik-SPLEIN BRIIF-li", example: "Let me explain briefly.", exampleId: "Biar saya jelaskan singkat." },
      { en: "Could you clarify please", id: "Bisa jelaskan tolong", pronounce: "kud yu KLE-ri-fai pliiz", example: "Could you clarify this point?", exampleId: "Bisa jelaskan poin ini?" },
      { en: "Tell me about yourself", id: "Ceritakan dirimu", pronounce: "tel mi e-BAUT yor-self", example: "Tell me about yourself in 1 minute.", exampleId: "Ceritakan dirimu 1 menit." },
      { en: "My strength is teamwork", id: "Kelebihan saya kerja tim", pronounce: "mai streng iz TIIM-werk", example: "My strength is teamwork and discipline.", exampleId: "Kelebihan saya kerja tim & disiplin." }
    ],
    quiz: [
      { id: "7-5-q1", question: "____ my opinion, we should", options: ["In (correct)", "On", "At", "By"], answer: 0, explanation: "In my opinion" },
      { id: "7-5-q2", question: "____ me explain", options: ["Let (correct)", "Lets", "Letting", "Let me to"], answer: 0, explanation: "Let me explain" },
      { id: "7-5-q3", question: "Could you ____ (clarify)", options: ["clarify (correct)", "clarifying", "clarified", "clarifies"], answer: 0, explanation: "Could you clarify?" },
      { id: "7-5-q4", question: "Tell me ____ yourself", options: ["about (correct)", "of", "to", "with"], answer: 0, explanation: "about yourself" },
      { id: "7-5-q5", question: "My strength ____ teamwork", options: ["is (correct)", "are", "am", "be"], answer: 0, explanation: "My strength IS" }
    ]
  },
  {
    id: "7-6",
    levelId: 7,
    order: 42,
    title: "Negosiasi Simple",
    titleEn: "Simple Negotiation",
    objective: "How about..., What if we...?",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Negosiasi Simple (Simple Negotiation) — How about..., What if we...?. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Template Kerja (Copas)",
          headingId: "Template Kerja (Copas)",
          body: "Copy template, ganti nama/tanggal. Bos bule suka formal.",
          examples: [
            { en: "Could you clarify this point?", id: "Bisa jelaskan poin ini?" },
            { en: "Tell me about yourself in 1 minute.", id: "Ceritakan dirimu 1 menit." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Collocation Wajib",
          headingId: "Collocation Wajib",
          body: "Hafal pasangan: make a decision (bukan do), deal with.",
          examples: [
            { en: "My strength is teamwork and discipline.", id: "Kelebihan saya kerja tim & disiplin." },
            { en: "I use Simple Negotiation at work today.", id: "Saya pakai Negosiasi Simple di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Roleplay",
          headingId: "Roleplay",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Simple Negotiation now.", id: "Mari latihan Negosiasi Simple sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "I agree with you", id: "Saya setuju", pronounce: "ai e-GRII with yu", example: "I agree with you on that.", exampleId: "Saya setuju soal itu." },
      { en: "What do you mean", id: "Maksudnya apa", pronounce: "wot du yu miin", example: "What do you mean by that?", exampleId: "Maksudnya apa itu?" },
      { en: "In my opinion, we should", id: "Menurut saya kita harus", pronounce: "in mai o-PIN-yon wi shud", example: "In my opinion, we should start now.", exampleId: "Menurut saya kita harus mulai sekarang." },
      { en: "Let me explain briefly", id: "Biar saya jelaskan singkat", pronounce: "let mi ik-SPLEIN BRIIF-li", example: "Let me explain briefly.", exampleId: "Biar saya jelaskan singkat." },
      { en: "Could you clarify please", id: "Bisa jelaskan tolong", pronounce: "kud yu KLE-ri-fai pliiz", example: "Could you clarify this point?", exampleId: "Bisa jelaskan poin ini?" },
      { en: "Tell me about yourself", id: "Ceritakan dirimu", pronounce: "tel mi e-BAUT yor-self", example: "Tell me about yourself in 1 minute.", exampleId: "Ceritakan dirimu 1 menit." },
      { en: "My strength is teamwork", id: "Kelebihan saya kerja tim", pronounce: "mai streng iz TIIM-werk", example: "My strength is teamwork and discipline.", exampleId: "Kelebihan saya kerja tim & disiplin." },
      { en: "I am improving my English", id: "Saya tingkatkan Inggris", pronounce: "ai em im-PRUU-ving mai ING-lish", example: "I am improving my English daily.", exampleId: "Saya tingkatkan Inggris tiap hari." },
      { en: "I have experience in", id: "Saya pengalaman di", pronounce: "ai hev ik-SPII-riens in", example: "I have experience in sales.", exampleId: "Saya pengalaman di sales." },
      { en: "How about we try", id: "Gimana kalau kita coba", pronounce: "hau e-BAUT wi trai", example: "How about we try next week?", exampleId: "Gimana kalau kita coba minggu depan?" }
    ],
    quiz: [
      { id: "7-6-q1", question: "____ my opinion, we should", options: ["In (correct)", "On", "At", "By"], answer: 0, explanation: "In my opinion" },
      { id: "7-6-q2", question: "____ me explain", options: ["Let (correct)", "Lets", "Letting", "Let me to"], answer: 0, explanation: "Let me explain" },
      { id: "7-6-q3", question: "Could you ____ (clarify)", options: ["clarify (correct)", "clarifying", "clarified", "clarifies"], answer: 0, explanation: "Could you clarify?" },
      { id: "7-6-q4", question: "Tell me ____ yourself", options: ["about (correct)", "of", "to", "with"], answer: 0, explanation: "about yourself" },
      { id: "7-6-q5", question: "My strength ____ teamwork", options: ["is (correct)", "are", "am", "be"], answer: 0, explanation: "My strength IS" }
    ]
  },
  {
    id: "8-1",
    levelId: 8,
    order: 43,
    title: "TOEFL S-V Agreement",
    titleEn: "Subject-Verb",
    objective: "He goes, They go, Data is",
    duration: "18 menit",
    content: {
      intro: "Pelajaran TOEFL S-V Agreement (Subject-Verb) — He goes, They go, Data is. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus TOEFL + Jebakan",
          headingId: "Rumus TOEFL + Jebakan",
          body: "Jebakan: He go (salah) vs He goes. EI em: goz.",
          examples: [
            { en: "Therefore we need more time.", id: "Oleh karena itu butuh waktu." },
            { en: "He goes to office every day.", id: "Dia pergi ke kantor tiap hari." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Trik Cepat",
          headingId: "Trik Cepat",
          body: "Skim, keyword, same-sound trap.",
          examples: [
            { en: "Data is important for report.", id: "Data penting untuk laporan." },
            { en: "I use Subject-Verb at work today.", id: "Saya pakai TOEFL S-V Agreement di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Simulasi Timer",
          headingId: "Simulasi Timer",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Subject-Verb now.", id: "Mari latihan TOEFL S-V Agreement sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "He goes to office", id: "Dia pergi ke kantor", pronounce: "hi goz tu O-fis", example: "He goes to office every day.", exampleId: "Dia pergi ke kantor tiap hari." },
      { en: "Data is important", id: "Data penting", pronounce: "DEI-ta iz im-POR-tent", example: "Data is important for report.", exampleId: "Data penting untuk laporan." },
      { en: "The book that I read", id: "Buku yang saya baca", pronounce: "dhe buk dhet ai riid", example: "The book that I read is good.", exampleId: "Buku yang saya baca bagus." },
      { en: "Find the error: He go", id: "Cari salah: He go", pronounce: "faind dhi ER-or hi go", example: "Find error: He go → He goes", exampleId: "Cari salah: He go → He goes" },
      { en: "In the morning, on Monday", id: "Pagi hari, hari Senin", pronounce: "in dhe MOR-ning on MAN-dei", example: "In the morning on Monday.", exampleId: "Pagi hari di Senin." },
      { en: "A university, an hour", id: "Sebuah univ, sejam", pronounce: "e yu-ni-VER-si-ti en au-er", example: "A university, an hour", exampleId: "Sebuah universitas, sejam" },
      { en: "My friend and I go", id: "Saya dan teman pergi", pronounce: "mai frend end ai go", example: "My friend and I go together.", exampleId: "Saya dan teman pergi bersama." },
      { en: "Although it rains, I go", id: "Meskipun hujan saya pergi", pronounce: "ol-DHOU it reinz ai go", example: "Although it rains, I go to office.", exampleId: "Meskipun hujan saya ke kantor." },
      { en: "Because I was busy", id: "Karena saya sibuk", pronounce: "bi-KOZ ai woz BI-zi", example: "Because I was busy, I was late.", exampleId: "Karena sibuk, saya telat." },
      { en: "Therefore we need more time", id: "Oleh karena itu butuh waktu", pronounce: "DHER-for wi niid mor taim", example: "Therefore we need more time.", exampleId: "Oleh karena itu butuh waktu." }
    ],
    quiz: [
      { id: "8-1-q1", question: "He ____ (go) every day", options: ["go", "goes (correct)", "going", "gone"], answer: 1, explanation: "He goes + s" },
      { id: "8-1-q2", question: "____ it rains, I go", options: ["Although (correct)", "Because", "So", "But"], answer: 0, explanation: "Although = meskipun" },
      { id: "8-1-q3", question: "She has ____ (go)", options: ["went", "gone (correct)", "going", "go"], answer: 1, explanation: "has/have + V3" },
      { id: "8-1-q4", question: "We meet ____ Monday", options: ["in", "on (correct)", "at", "by"], answer: 1, explanation: "on Monday" },
      { id: "8-1-q5", question: "A ____ (hour)", options: ["a", "an (correct)", "the", "-"], answer: 1, explanation: "an hour (h silent)" }
    ]
  },
  {
    id: "8-2",
    levelId: 8,
    order: 44,
    title: "Clause & Conjunction",
    titleEn: "Clauses",
    objective: "Although, because, while, that",
    duration: "18 menit",
    content: {
      intro: "Pelajaran Clause & Conjunction (Clauses) — Although, because, while, that. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus TOEFL + Jebakan",
          headingId: "Rumus TOEFL + Jebakan",
          body: "Jebakan: He go (salah) vs He goes. EI em: goz.",
          examples: [
            { en: "Data is important for report.", id: "Data penting untuk laporan." },
            { en: "The book that I read is good.", id: "Buku yang saya baca bagus." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Trik Cepat",
          headingId: "Trik Cepat",
          body: "Skim, keyword, same-sound trap.",
          examples: [
            { en: "Find error: He go → He goes", id: "Cari salah: He go → He goes" },
            { en: "I use Clauses at work today.", id: "Saya pakai Clause & Conjunction di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Simulasi Timer",
          headingId: "Simulasi Timer",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Clauses now.", id: "Mari latihan Clause & Conjunction sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Find the error: He go", id: "Cari salah: He go", pronounce: "faind dhi ER-or hi go", example: "Find error: He go → He goes", exampleId: "Cari salah: He go → He goes" },
      { en: "In the morning, on Monday", id: "Pagi hari, hari Senin", pronounce: "in dhe MOR-ning on MAN-dei", example: "In the morning on Monday.", exampleId: "Pagi hari di Senin." },
      { en: "A university, an hour", id: "Sebuah univ, sejam", pronounce: "e yu-ni-VER-si-ti en au-er", example: "A university, an hour", exampleId: "Sebuah universitas, sejam" },
      { en: "My friend and I go", id: "Saya dan teman pergi", pronounce: "mai frend end ai go", example: "My friend and I go together.", exampleId: "Saya dan teman pergi bersama." },
      { en: "Although it rains, I go", id: "Meskipun hujan saya pergi", pronounce: "ol-DHOU it reinz ai go", example: "Although it rains, I go to office.", exampleId: "Meskipun hujan saya ke kantor." },
      { en: "Because I was busy", id: "Karena saya sibuk", pronounce: "bi-KOZ ai woz BI-zi", example: "Because I was busy, I was late.", exampleId: "Karena sibuk, saya telat." },
      { en: "Therefore we need more time", id: "Oleh karena itu butuh waktu", pronounce: "DHER-for wi niid mor taim", example: "Therefore we need more time.", exampleId: "Oleh karena itu butuh waktu." },
      { en: "He goes to office", id: "Dia pergi ke kantor", pronounce: "hi goz tu O-fis", example: "He goes to office every day.", exampleId: "Dia pergi ke kantor tiap hari." },
      { en: "Data is important", id: "Data penting", pronounce: "DEI-ta iz im-POR-tent", example: "Data is important for report.", exampleId: "Data penting untuk laporan." },
      { en: "The book that I read", id: "Buku yang saya baca", pronounce: "dhe buk dhet ai riid", example: "The book that I read is good.", exampleId: "Buku yang saya baca bagus." }
    ],
    quiz: [
      { id: "8-2-q1", question: "He ____ (go) every day", options: ["go", "goes (correct)", "going", "gone"], answer: 1, explanation: "He goes + s" },
      { id: "8-2-q2", question: "____ it rains, I go", options: ["Although (correct)", "Because", "So", "But"], answer: 0, explanation: "Although = meskipun" },
      { id: "8-2-q3", question: "She has ____ (go)", options: ["went", "gone (correct)", "going", "go"], answer: 1, explanation: "has/have + V3" },
      { id: "8-2-q4", question: "We meet ____ Monday", options: ["in", "on (correct)", "at", "by"], answer: 1, explanation: "on Monday" },
      { id: "8-2-q5", question: "A ____ (hour)", options: ["a", "an (correct)", "the", "-"], answer: 1, explanation: "an hour (h silent)" }
    ]
  },
  {
    id: "8-3",
    levelId: 8,
    order: 45,
    title: "Tenses TOEFL",
    titleEn: "Tenses Mix",
    objective: "Have gone vs went vs had gone",
    duration: "18 menit",
    content: {
      intro: "Pelajaran Tenses TOEFL (Tenses Mix) — Have gone vs went vs had gone. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus TOEFL + Jebakan",
          headingId: "Rumus TOEFL + Jebakan",
          body: "Jebakan: He go (salah) vs He goes. EI em: goz.",
          examples: [
            { en: "Find error: He go → He goes", id: "Cari salah: He go → He goes" },
            { en: "In the morning on Monday.", id: "Pagi hari di Senin." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Trik Cepat",
          headingId: "Trik Cepat",
          body: "Skim, keyword, same-sound trap.",
          examples: [
            { en: "A university, an hour", id: "Sebuah universitas, sejam" },
            { en: "I use Tenses Mix at work today.", id: "Saya pakai Tenses TOEFL di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Simulasi Timer",
          headingId: "Simulasi Timer",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Tenses Mix now.", id: "Mari latihan Tenses TOEFL sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "My friend and I go", id: "Saya dan teman pergi", pronounce: "mai frend end ai go", example: "My friend and I go together.", exampleId: "Saya dan teman pergi bersama." },
      { en: "Although it rains, I go", id: "Meskipun hujan saya pergi", pronounce: "ol-DHOU it reinz ai go", example: "Although it rains, I go to office.", exampleId: "Meskipun hujan saya ke kantor." },
      { en: "Because I was busy", id: "Karena saya sibuk", pronounce: "bi-KOZ ai woz BI-zi", example: "Because I was busy, I was late.", exampleId: "Karena sibuk, saya telat." },
      { en: "Therefore we need more time", id: "Oleh karena itu butuh waktu", pronounce: "DHER-for wi niid mor taim", example: "Therefore we need more time.", exampleId: "Oleh karena itu butuh waktu." },
      { en: "He goes to office", id: "Dia pergi ke kantor", pronounce: "hi goz tu O-fis", example: "He goes to office every day.", exampleId: "Dia pergi ke kantor tiap hari." },
      { en: "Data is important", id: "Data penting", pronounce: "DEI-ta iz im-POR-tent", example: "Data is important for report.", exampleId: "Data penting untuk laporan." },
      { en: "The book that I read", id: "Buku yang saya baca", pronounce: "dhe buk dhet ai riid", example: "The book that I read is good.", exampleId: "Buku yang saya baca bagus." },
      { en: "Find the error: He go", id: "Cari salah: He go", pronounce: "faind dhi ER-or hi go", example: "Find error: He go → He goes", exampleId: "Cari salah: He go → He goes" },
      { en: "In the morning, on Monday", id: "Pagi hari, hari Senin", pronounce: "in dhe MOR-ning on MAN-dei", example: "In the morning on Monday.", exampleId: "Pagi hari di Senin." },
      { en: "A university, an hour", id: "Sebuah univ, sejam", pronounce: "e yu-ni-VER-si-ti en au-er", example: "A university, an hour", exampleId: "Sebuah universitas, sejam" }
    ],
    quiz: [
      { id: "8-3-q1", question: "He ____ (go) every day", options: ["go", "goes (correct)", "going", "gone"], answer: 1, explanation: "He goes + s" },
      { id: "8-3-q2", question: "____ it rains, I go", options: ["Although (correct)", "Because", "So", "But"], answer: 0, explanation: "Although = meskipun" },
      { id: "8-3-q3", question: "She has ____ (go)", options: ["went", "gone (correct)", "going", "go"], answer: 1, explanation: "has/have + V3" },
      { id: "8-3-q4", question: "We meet ____ Monday", options: ["in", "on (correct)", "at", "by"], answer: 1, explanation: "on Monday" },
      { id: "8-3-q5", question: "A ____ (hour)", options: ["a", "an (correct)", "the", "-"], answer: 1, explanation: "an hour (h silent)" }
    ]
  },
  {
    id: "8-4",
    levelId: 8,
    order: 46,
    title: "Preposisi Jebakan",
    titleEn: "Prepositions",
    objective: "In vs On vs At + by, for",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Preposisi Jebakan (Prepositions) — In vs On vs At + by, for. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus TOEFL + Jebakan",
          headingId: "Rumus TOEFL + Jebakan",
          body: "Jebakan: He go (salah) vs He goes. EI em: goz.",
          examples: [
            { en: "A university, an hour", id: "Sebuah universitas, sejam" },
            { en: "My friend and I go together.", id: "Saya dan teman pergi bersama." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Trik Cepat",
          headingId: "Trik Cepat",
          body: "Skim, keyword, same-sound trap.",
          examples: [
            { en: "Although it rains, I go to office.", id: "Meskipun hujan saya ke kantor." },
            { en: "I use Prepositions at work today.", id: "Saya pakai Preposisi Jebakan di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Simulasi Timer",
          headingId: "Simulasi Timer",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Prepositions now.", id: "Mari latihan Preposisi Jebakan sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Therefore we need more time", id: "Oleh karena itu butuh waktu", pronounce: "DHER-for wi niid mor taim", example: "Therefore we need more time.", exampleId: "Oleh karena itu butuh waktu." },
      { en: "He goes to office", id: "Dia pergi ke kantor", pronounce: "hi goz tu O-fis", example: "He goes to office every day.", exampleId: "Dia pergi ke kantor tiap hari." },
      { en: "Data is important", id: "Data penting", pronounce: "DEI-ta iz im-POR-tent", example: "Data is important for report.", exampleId: "Data penting untuk laporan." },
      { en: "The book that I read", id: "Buku yang saya baca", pronounce: "dhe buk dhet ai riid", example: "The book that I read is good.", exampleId: "Buku yang saya baca bagus." },
      { en: "Find the error: He go", id: "Cari salah: He go", pronounce: "faind dhi ER-or hi go", example: "Find error: He go → He goes", exampleId: "Cari salah: He go → He goes" },
      { en: "In the morning, on Monday", id: "Pagi hari, hari Senin", pronounce: "in dhe MOR-ning on MAN-dei", example: "In the morning on Monday.", exampleId: "Pagi hari di Senin." },
      { en: "A university, an hour", id: "Sebuah univ, sejam", pronounce: "e yu-ni-VER-si-ti en au-er", example: "A university, an hour", exampleId: "Sebuah universitas, sejam" },
      { en: "My friend and I go", id: "Saya dan teman pergi", pronounce: "mai frend end ai go", example: "My friend and I go together.", exampleId: "Saya dan teman pergi bersama." },
      { en: "Although it rains, I go", id: "Meskipun hujan saya pergi", pronounce: "ol-DHOU it reinz ai go", example: "Although it rains, I go to office.", exampleId: "Meskipun hujan saya ke kantor." },
      { en: "Because I was busy", id: "Karena saya sibuk", pronounce: "bi-KOZ ai woz BI-zi", example: "Because I was busy, I was late.", exampleId: "Karena sibuk, saya telat." }
    ],
    quiz: [
      { id: "8-4-q1", question: "He ____ (go) every day", options: ["go", "goes (correct)", "going", "gone"], answer: 1, explanation: "He goes + s" },
      { id: "8-4-q2", question: "____ it rains, I go", options: ["Although (correct)", "Because", "So", "But"], answer: 0, explanation: "Although = meskipun" },
      { id: "8-4-q3", question: "She has ____ (go)", options: ["went", "gone (correct)", "going", "go"], answer: 1, explanation: "has/have + V3" },
      { id: "8-4-q4", question: "We meet ____ Monday", options: ["in", "on (correct)", "at", "by"], answer: 1, explanation: "on Monday" },
      { id: "8-4-q5", question: "A ____ (hour)", options: ["a", "an (correct)", "the", "-"], answer: 1, explanation: "an hour (h silent)" }
    ]
  },
  {
    id: "8-5",
    levelId: 8,
    order: 47,
    title: "Article a/an/the",
    titleEn: "Articles",
    objective: "A vs The, countable",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Article a/an/the (Articles) — A vs The, countable. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus TOEFL + Jebakan",
          headingId: "Rumus TOEFL + Jebakan",
          body: "Jebakan: He go (salah) vs He goes. EI em: goz.",
          examples: [
            { en: "Although it rains, I go to office.", id: "Meskipun hujan saya ke kantor." },
            { en: "Because I was busy, I was late.", id: "Karena sibuk, saya telat." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Trik Cepat",
          headingId: "Trik Cepat",
          body: "Skim, keyword, same-sound trap.",
          examples: [
            { en: "Therefore we need more time.", id: "Oleh karena itu butuh waktu." },
            { en: "I use Articles at work today.", id: "Saya pakai Article a/an/the di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Simulasi Timer",
          headingId: "Simulasi Timer",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Articles now.", id: "Mari latihan Article a/an/the sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "The book that I read", id: "Buku yang saya baca", pronounce: "dhe buk dhet ai riid", example: "The book that I read is good.", exampleId: "Buku yang saya baca bagus." },
      { en: "Find the error: He go", id: "Cari salah: He go", pronounce: "faind dhi ER-or hi go", example: "Find error: He go → He goes", exampleId: "Cari salah: He go → He goes" },
      { en: "In the morning, on Monday", id: "Pagi hari, hari Senin", pronounce: "in dhe MOR-ning on MAN-dei", example: "In the morning on Monday.", exampleId: "Pagi hari di Senin." },
      { en: "A university, an hour", id: "Sebuah univ, sejam", pronounce: "e yu-ni-VER-si-ti en au-er", example: "A university, an hour", exampleId: "Sebuah universitas, sejam" },
      { en: "My friend and I go", id: "Saya dan teman pergi", pronounce: "mai frend end ai go", example: "My friend and I go together.", exampleId: "Saya dan teman pergi bersama." },
      { en: "Although it rains, I go", id: "Meskipun hujan saya pergi", pronounce: "ol-DHOU it reinz ai go", example: "Although it rains, I go to office.", exampleId: "Meskipun hujan saya ke kantor." },
      { en: "Because I was busy", id: "Karena saya sibuk", pronounce: "bi-KOZ ai woz BI-zi", example: "Because I was busy, I was late.", exampleId: "Karena sibuk, saya telat." },
      { en: "Therefore we need more time", id: "Oleh karena itu butuh waktu", pronounce: "DHER-for wi niid mor taim", example: "Therefore we need more time.", exampleId: "Oleh karena itu butuh waktu." },
      { en: "He goes to office", id: "Dia pergi ke kantor", pronounce: "hi goz tu O-fis", example: "He goes to office every day.", exampleId: "Dia pergi ke kantor tiap hari." },
      { en: "Data is important", id: "Data penting", pronounce: "DEI-ta iz im-POR-tent", example: "Data is important for report.", exampleId: "Data penting untuk laporan." }
    ],
    quiz: [
      { id: "8-5-q1", question: "He ____ (go) every day", options: ["go", "goes (correct)", "going", "gone"], answer: 1, explanation: "He goes + s" },
      { id: "8-5-q2", question: "____ it rains, I go", options: ["Although (correct)", "Because", "So", "But"], answer: 0, explanation: "Although = meskipun" },
      { id: "8-5-q3", question: "She has ____ (go)", options: ["went", "gone (correct)", "going", "go"], answer: 1, explanation: "has/have + V3" },
      { id: "8-5-q4", question: "We meet ____ Monday", options: ["in", "on (correct)", "at", "by"], answer: 1, explanation: "on Monday" },
      { id: "8-5-q5", question: "A ____ (hour)", options: ["a", "an (correct)", "the", "-"], answer: 1, explanation: "an hour (h silent)" }
    ]
  },
  {
    id: "8-6",
    levelId: 8,
    order: 48,
    title: "Error Spotting",
    titleEn: "Error ID",
    objective: "Find the error + why",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Error Spotting (Error ID) — Find the error + why. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus TOEFL + Jebakan",
          headingId: "Rumus TOEFL + Jebakan",
          body: "Jebakan: He go (salah) vs He goes. EI em: goz.",
          examples: [
            { en: "Therefore we need more time.", id: "Oleh karena itu butuh waktu." },
            { en: "He goes to office every day.", id: "Dia pergi ke kantor tiap hari." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Trik Cepat",
          headingId: "Trik Cepat",
          body: "Skim, keyword, same-sound trap.",
          examples: [
            { en: "Data is important for report.", id: "Data penting untuk laporan." },
            { en: "I use Error ID at work today.", id: "Saya pakai Error Spotting di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Simulasi Timer",
          headingId: "Simulasi Timer",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Error ID now.", id: "Mari latihan Error Spotting sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "A university, an hour", id: "Sebuah univ, sejam", pronounce: "e yu-ni-VER-si-ti en au-er", example: "A university, an hour", exampleId: "Sebuah universitas, sejam" },
      { en: "My friend and I go", id: "Saya dan teman pergi", pronounce: "mai frend end ai go", example: "My friend and I go together.", exampleId: "Saya dan teman pergi bersama." },
      { en: "Although it rains, I go", id: "Meskipun hujan saya pergi", pronounce: "ol-DHOU it reinz ai go", example: "Although it rains, I go to office.", exampleId: "Meskipun hujan saya ke kantor." },
      { en: "Because I was busy", id: "Karena saya sibuk", pronounce: "bi-KOZ ai woz BI-zi", example: "Because I was busy, I was late.", exampleId: "Karena sibuk, saya telat." },
      { en: "Therefore we need more time", id: "Oleh karena itu butuh waktu", pronounce: "DHER-for wi niid mor taim", example: "Therefore we need more time.", exampleId: "Oleh karena itu butuh waktu." },
      { en: "He goes to office", id: "Dia pergi ke kantor", pronounce: "hi goz tu O-fis", example: "He goes to office every day.", exampleId: "Dia pergi ke kantor tiap hari." },
      { en: "Data is important", id: "Data penting", pronounce: "DEI-ta iz im-POR-tent", example: "Data is important for report.", exampleId: "Data penting untuk laporan." },
      { en: "The book that I read", id: "Buku yang saya baca", pronounce: "dhe buk dhet ai riid", example: "The book that I read is good.", exampleId: "Buku yang saya baca bagus." },
      { en: "Find the error: He go", id: "Cari salah: He go", pronounce: "faind dhi ER-or hi go", example: "Find error: He go → He goes", exampleId: "Cari salah: He go → He goes" },
      { en: "In the morning, on Monday", id: "Pagi hari, hari Senin", pronounce: "in dhe MOR-ning on MAN-dei", example: "In the morning on Monday.", exampleId: "Pagi hari di Senin." }
    ],
    quiz: [
      { id: "8-6-q1", question: "He ____ (go) every day", options: ["go", "goes (correct)", "going", "gone"], answer: 1, explanation: "He goes + s" },
      { id: "8-6-q2", question: "____ it rains, I go", options: ["Although (correct)", "Because", "So", "But"], answer: 0, explanation: "Although = meskipun" },
      { id: "8-6-q3", question: "She has ____ (go)", options: ["went", "gone (correct)", "going", "go"], answer: 1, explanation: "has/have + V3" },
      { id: "8-6-q4", question: "We meet ____ Monday", options: ["in", "on (correct)", "at", "by"], answer: 1, explanation: "on Monday" },
      { id: "8-6-q5", question: "A ____ (hour)", options: ["a", "an (correct)", "the", "-"], answer: 1, explanation: "an hour (h silent)" }
    ]
  },
  {
    id: "9-1",
    levelId: 9,
    order: 49,
    title: "Listening Keyword",
    titleEn: "Listening Keywords",
    objective: "Listen for who/what/where",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Listening Keyword (Listening Keywords) — Listen for who/what/where. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus TOEFL + Jebakan",
          headingId: "Rumus TOEFL + Jebakan",
          body: "Jebakan: He go (salah) vs He goes. EI em: goz.",
          examples: [
            { en: "Take notes: who, what, when.", id: "Catat: siapa, apa, kapan." },
            { en: "Sound: write vs right → trap!", id: "Bunyi: write vs right → jebakan!" }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Trik Cepat",
          headingId: "Trik Cepat",
          body: "Skim, keyword, same-sound trap.",
          examples: [
            { en: "Focus on verb, not extra info.", id: "Fokus kata kerja, bukan info tambahan." },
            { en: "I use Listening Keywords at work today.", id: "Saya pakai Listening Keyword di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Simulasi Timer",
          headingId: "Simulasi Timer",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Listening Keywords now.", id: "Mari latihan Listening Keyword sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Same sound trap", id: "Jebakan suara sama", pronounce: "seim saund trep", example: "Sound: write vs right → trap!", exampleId: "Bunyi: write vs right → jebakan!" },
      { en: "Focus on verb, not noun", id: "Fokus kata kerja", pronounce: "FO-kas on verb", example: "Focus on verb, not extra info.", exampleId: "Fokus kata kerja, bukan info tambahan." },
      { en: "Long talk main idea", id: "Ide utama talk panjang", pronounce: "long tok mein ai-DIA", example: "Long talk: main idea first sentence.", exampleId: "Talk panjang: ide di kalimat pertama." },
      { en: "Please repeat slowly", id: "Tolong ulangi pelan", pronounce: "pliiz ri-PIIT SLO-li", example: "Please repeat slowly.", exampleId: "Tolong ulangi pelan." },
      { en: "Do you understand", id: "Apakah paham", pronounce: "du yu an-der-STEND", example: "Do you understand?", exampleId: "Apakah paham?" },
      { en: "Question about price", id: "Pertanyaan harga", pronounce: "KWES-chen e-BAUT prais", example: "Question about price → listen number.", exampleId: "Soal harga → dengar angka." },
      { en: "Answer with keyword", id: "Jawab pakai keyword", pronounce: "AN-ser with KII-werd", example: "Answer with keyword, not full.", exampleId: "Jawab pakai kata kunci." },
      { en: "Listen for who and what", id: "Dengar siapa & apa", pronounce: "LI-sen for hu end wot", example: "Listen for who and what.", exampleId: "Dengar siapa & apa." },
      { en: "Short conversation trick", id: "Trik percakapan pendek", pronounce: "short kon-ver-SEI-shen trik", example: "Man: I am tired. Q: How is he?", exampleId: "Pria: Saya capek. Q: Gimana dia?" },
      { en: "Take notes quickly", id: "Catat cepat", pronounce: "teik nouts KUIK-li", example: "Take notes: who, what, when.", exampleId: "Catat: siapa, apa, kapan." }
    ],
    quiz: [
      { id: "9-1-q1", question: "Listen for ____", options: ["who/what (correct)", "why only", "how only", "when only"], answer: 0, explanation: "Listen who/what" },
      { id: "9-1-q2", question: "Trick: same ____", options: ["sound (correct)", "meaning", "color", "size"], answer: 0, explanation: "Same sound trap" },
      { id: "9-1-q3", question: "Take ____ quickly", options: ["notes (correct)", "note", "noting", "noted"], answer: 0, explanation: "Take notes" },
      { id: "9-1-q4", question: "Q: What is price? Listen ____", options: ["number (correct)", "name", "color", "verb"], answer: 0, explanation: "Price → number" },
      { id: "9-1-q5", question: "Long talk: ____ sentence", options: ["first (correct)", "last", "middle", "all"], answer: 0, explanation: "Main idea first sentence" }
    ]
  },
  {
    id: "9-2",
    levelId: 9,
    order: 50,
    title: "Short Conversation",
    titleEn: "Short Dialog",
    objective: "Man: ... Woman: ... Q: What?",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Short Conversation (Short Dialog) — Man: ... Woman: ... Q: What?. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus TOEFL + Jebakan",
          headingId: "Rumus TOEFL + Jebakan",
          body: "Jebakan: He go (salah) vs He goes. EI em: goz.",
          examples: [
            { en: "Focus on verb, not extra info.", id: "Fokus kata kerja, bukan info tambahan." },
            { en: "Long talk: main idea first sentence.", id: "Talk panjang: ide di kalimat pertama." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Trik Cepat",
          headingId: "Trik Cepat",
          body: "Skim, keyword, same-sound trap.",
          examples: [
            { en: "Please repeat slowly.", id: "Tolong ulangi pelan." },
            { en: "I use Short Dialog at work today.", id: "Saya pakai Short Conversation di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Simulasi Timer",
          headingId: "Simulasi Timer",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Short Dialog now.", id: "Mari latihan Short Conversation sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Please repeat slowly", id: "Tolong ulangi pelan", pronounce: "pliiz ri-PIIT SLO-li", example: "Please repeat slowly.", exampleId: "Tolong ulangi pelan." },
      { en: "Do you understand", id: "Apakah paham", pronounce: "du yu an-der-STEND", example: "Do you understand?", exampleId: "Apakah paham?" },
      { en: "Question about price", id: "Pertanyaan harga", pronounce: "KWES-chen e-BAUT prais", example: "Question about price → listen number.", exampleId: "Soal harga → dengar angka." },
      { en: "Answer with keyword", id: "Jawab pakai keyword", pronounce: "AN-ser with KII-werd", example: "Answer with keyword, not full.", exampleId: "Jawab pakai kata kunci." },
      { en: "Listen for who and what", id: "Dengar siapa & apa", pronounce: "LI-sen for hu end wot", example: "Listen for who and what.", exampleId: "Dengar siapa & apa." },
      { en: "Short conversation trick", id: "Trik percakapan pendek", pronounce: "short kon-ver-SEI-shen trik", example: "Man: I am tired. Q: How is he?", exampleId: "Pria: Saya capek. Q: Gimana dia?" },
      { en: "Take notes quickly", id: "Catat cepat", pronounce: "teik nouts KUIK-li", example: "Take notes: who, what, when.", exampleId: "Catat: siapa, apa, kapan." },
      { en: "Same sound trap", id: "Jebakan suara sama", pronounce: "seim saund trep", example: "Sound: write vs right → trap!", exampleId: "Bunyi: write vs right → jebakan!" },
      { en: "Focus on verb, not noun", id: "Fokus kata kerja", pronounce: "FO-kas on verb", example: "Focus on verb, not extra info.", exampleId: "Fokus kata kerja, bukan info tambahan." },
      { en: "Long talk main idea", id: "Ide utama talk panjang", pronounce: "long tok mein ai-DIA", example: "Long talk: main idea first sentence.", exampleId: "Talk panjang: ide di kalimat pertama." }
    ],
    quiz: [
      { id: "9-2-q1", question: "Listen for ____", options: ["who/what (correct)", "why only", "how only", "when only"], answer: 0, explanation: "Listen who/what" },
      { id: "9-2-q2", question: "Trick: same ____", options: ["sound (correct)", "meaning", "color", "size"], answer: 0, explanation: "Same sound trap" },
      { id: "9-2-q3", question: "Take ____ quickly", options: ["notes (correct)", "note", "noting", "noted"], answer: 0, explanation: "Take notes" },
      { id: "9-2-q4", question: "Q: What is price? Listen ____", options: ["number (correct)", "name", "color", "verb"], answer: 0, explanation: "Price → number" },
      { id: "9-2-q5", question: "Long talk: ____ sentence", options: ["first (correct)", "last", "middle", "all"], answer: 0, explanation: "Main idea first sentence" }
    ]
  },
  {
    id: "9-3",
    levelId: 9,
    order: 51,
    title: "Long Conversation",
    titleEn: "Long Talk",
    objective: "Note taking + main idea",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Long Conversation (Long Talk) — Note taking + main idea. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus TOEFL + Jebakan",
          headingId: "Rumus TOEFL + Jebakan",
          body: "Jebakan: He go (salah) vs He goes. EI em: goz.",
          examples: [
            { en: "Please repeat slowly.", id: "Tolong ulangi pelan." },
            { en: "Do you understand?", id: "Apakah paham?" }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Trik Cepat",
          headingId: "Trik Cepat",
          body: "Skim, keyword, same-sound trap.",
          examples: [
            { en: "Question about price → listen number.", id: "Soal harga → dengar angka." },
            { en: "I use Long Talk at work today.", id: "Saya pakai Long Conversation di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Simulasi Timer",
          headingId: "Simulasi Timer",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Long Talk now.", id: "Mari latihan Long Conversation sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Answer with keyword", id: "Jawab pakai keyword", pronounce: "AN-ser with KII-werd", example: "Answer with keyword, not full.", exampleId: "Jawab pakai kata kunci." },
      { en: "Listen for who and what", id: "Dengar siapa & apa", pronounce: "LI-sen for hu end wot", example: "Listen for who and what.", exampleId: "Dengar siapa & apa." },
      { en: "Short conversation trick", id: "Trik percakapan pendek", pronounce: "short kon-ver-SEI-shen trik", example: "Man: I am tired. Q: How is he?", exampleId: "Pria: Saya capek. Q: Gimana dia?" },
      { en: "Take notes quickly", id: "Catat cepat", pronounce: "teik nouts KUIK-li", example: "Take notes: who, what, when.", exampleId: "Catat: siapa, apa, kapan." },
      { en: "Same sound trap", id: "Jebakan suara sama", pronounce: "seim saund trep", example: "Sound: write vs right → trap!", exampleId: "Bunyi: write vs right → jebakan!" },
      { en: "Focus on verb, not noun", id: "Fokus kata kerja", pronounce: "FO-kas on verb", example: "Focus on verb, not extra info.", exampleId: "Fokus kata kerja, bukan info tambahan." },
      { en: "Long talk main idea", id: "Ide utama talk panjang", pronounce: "long tok mein ai-DIA", example: "Long talk: main idea first sentence.", exampleId: "Talk panjang: ide di kalimat pertama." },
      { en: "Please repeat slowly", id: "Tolong ulangi pelan", pronounce: "pliiz ri-PIIT SLO-li", example: "Please repeat slowly.", exampleId: "Tolong ulangi pelan." },
      { en: "Do you understand", id: "Apakah paham", pronounce: "du yu an-der-STEND", example: "Do you understand?", exampleId: "Apakah paham?" },
      { en: "Question about price", id: "Pertanyaan harga", pronounce: "KWES-chen e-BAUT prais", example: "Question about price → listen number.", exampleId: "Soal harga → dengar angka." }
    ],
    quiz: [
      { id: "9-3-q1", question: "Listen for ____", options: ["who/what (correct)", "why only", "how only", "when only"], answer: 0, explanation: "Listen who/what" },
      { id: "9-3-q2", question: "Trick: same ____", options: ["sound (correct)", "meaning", "color", "size"], answer: 0, explanation: "Same sound trap" },
      { id: "9-3-q3", question: "Take ____ quickly", options: ["notes (correct)", "note", "noting", "noted"], answer: 0, explanation: "Take notes" },
      { id: "9-3-q4", question: "Q: What is price? Listen ____", options: ["number (correct)", "name", "color", "verb"], answer: 0, explanation: "Price → number" },
      { id: "9-3-q5", question: "Long talk: ____ sentence", options: ["first (correct)", "last", "middle", "all"], answer: 0, explanation: "Main idea first sentence" }
    ]
  },
  {
    id: "9-4",
    levelId: 9,
    order: 52,
    title: "Trik Jawab",
    titleEn: "Answer Tricks",
    objective: "Same sound trap, extra info trap",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Trik Jawab (Answer Tricks) — Same sound trap, extra info trap. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus TOEFL + Jebakan",
          headingId: "Rumus TOEFL + Jebakan",
          body: "Jebakan: He go (salah) vs He goes. EI em: goz.",
          examples: [
            { en: "Question about price → listen number.", id: "Soal harga → dengar angka." },
            { en: "Answer with keyword, not full.", id: "Jawab pakai kata kunci." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Trik Cepat",
          headingId: "Trik Cepat",
          body: "Skim, keyword, same-sound trap.",
          examples: [
            { en: "Listen for who and what.", id: "Dengar siapa & apa." },
            { en: "I use Answer Tricks at work today.", id: "Saya pakai Trik Jawab di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Simulasi Timer",
          headingId: "Simulasi Timer",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Answer Tricks now.", id: "Mari latihan Trik Jawab sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Take notes quickly", id: "Catat cepat", pronounce: "teik nouts KUIK-li", example: "Take notes: who, what, when.", exampleId: "Catat: siapa, apa, kapan." },
      { en: "Same sound trap", id: "Jebakan suara sama", pronounce: "seim saund trep", example: "Sound: write vs right → trap!", exampleId: "Bunyi: write vs right → jebakan!" },
      { en: "Focus on verb, not noun", id: "Fokus kata kerja", pronounce: "FO-kas on verb", example: "Focus on verb, not extra info.", exampleId: "Fokus kata kerja, bukan info tambahan." },
      { en: "Long talk main idea", id: "Ide utama talk panjang", pronounce: "long tok mein ai-DIA", example: "Long talk: main idea first sentence.", exampleId: "Talk panjang: ide di kalimat pertama." },
      { en: "Please repeat slowly", id: "Tolong ulangi pelan", pronounce: "pliiz ri-PIIT SLO-li", example: "Please repeat slowly.", exampleId: "Tolong ulangi pelan." },
      { en: "Do you understand", id: "Apakah paham", pronounce: "du yu an-der-STEND", example: "Do you understand?", exampleId: "Apakah paham?" },
      { en: "Question about price", id: "Pertanyaan harga", pronounce: "KWES-chen e-BAUT prais", example: "Question about price → listen number.", exampleId: "Soal harga → dengar angka." },
      { en: "Answer with keyword", id: "Jawab pakai keyword", pronounce: "AN-ser with KII-werd", example: "Answer with keyword, not full.", exampleId: "Jawab pakai kata kunci." },
      { en: "Listen for who and what", id: "Dengar siapa & apa", pronounce: "LI-sen for hu end wot", example: "Listen for who and what.", exampleId: "Dengar siapa & apa." },
      { en: "Short conversation trick", id: "Trik percakapan pendek", pronounce: "short kon-ver-SEI-shen trik", example: "Man: I am tired. Q: How is he?", exampleId: "Pria: Saya capek. Q: Gimana dia?" }
    ],
    quiz: [
      { id: "9-4-q1", question: "Listen for ____", options: ["who/what (correct)", "why only", "how only", "when only"], answer: 0, explanation: "Listen who/what" },
      { id: "9-4-q2", question: "Trick: same ____", options: ["sound (correct)", "meaning", "color", "size"], answer: 0, explanation: "Same sound trap" },
      { id: "9-4-q3", question: "Take ____ quickly", options: ["notes (correct)", "note", "noting", "noted"], answer: 0, explanation: "Take notes" },
      { id: "9-4-q4", question: "Q: What is price? Listen ____", options: ["number (correct)", "name", "color", "verb"], answer: 0, explanation: "Price → number" },
      { id: "9-4-q5", question: "Long talk: ____ sentence", options: ["first (correct)", "last", "middle", "all"], answer: 0, explanation: "Main idea first sentence" }
    ]
  },
  {
    id: "9-5",
    levelId: 9,
    order: 53,
    title: "Note Taking",
    titleEn: "Notes",
    objective: "Abbreviate, symbol",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Note Taking (Notes) — Abbreviate, symbol. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus TOEFL + Jebakan",
          headingId: "Rumus TOEFL + Jebakan",
          body: "Jebakan: He go (salah) vs He goes. EI em: goz.",
          examples: [
            { en: "Listen for who and what.", id: "Dengar siapa & apa." },
            { en: "Man: I am tired. Q: How is he?", id: "Pria: Saya capek. Q: Gimana dia?" }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Trik Cepat",
          headingId: "Trik Cepat",
          body: "Skim, keyword, same-sound trap.",
          examples: [
            { en: "Take notes: who, what, when.", id: "Catat: siapa, apa, kapan." },
            { en: "I use Notes at work today.", id: "Saya pakai Note Taking di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Simulasi Timer",
          headingId: "Simulasi Timer",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Notes now.", id: "Mari latihan Note Taking sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Long talk main idea", id: "Ide utama talk panjang", pronounce: "long tok mein ai-DIA", example: "Long talk: main idea first sentence.", exampleId: "Talk panjang: ide di kalimat pertama." },
      { en: "Please repeat slowly", id: "Tolong ulangi pelan", pronounce: "pliiz ri-PIIT SLO-li", example: "Please repeat slowly.", exampleId: "Tolong ulangi pelan." },
      { en: "Do you understand", id: "Apakah paham", pronounce: "du yu an-der-STEND", example: "Do you understand?", exampleId: "Apakah paham?" },
      { en: "Question about price", id: "Pertanyaan harga", pronounce: "KWES-chen e-BAUT prais", example: "Question about price → listen number.", exampleId: "Soal harga → dengar angka." },
      { en: "Answer with keyword", id: "Jawab pakai keyword", pronounce: "AN-ser with KII-werd", example: "Answer with keyword, not full.", exampleId: "Jawab pakai kata kunci." },
      { en: "Listen for who and what", id: "Dengar siapa & apa", pronounce: "LI-sen for hu end wot", example: "Listen for who and what.", exampleId: "Dengar siapa & apa." },
      { en: "Short conversation trick", id: "Trik percakapan pendek", pronounce: "short kon-ver-SEI-shen trik", example: "Man: I am tired. Q: How is he?", exampleId: "Pria: Saya capek. Q: Gimana dia?" },
      { en: "Take notes quickly", id: "Catat cepat", pronounce: "teik nouts KUIK-li", example: "Take notes: who, what, when.", exampleId: "Catat: siapa, apa, kapan." },
      { en: "Same sound trap", id: "Jebakan suara sama", pronounce: "seim saund trep", example: "Sound: write vs right → trap!", exampleId: "Bunyi: write vs right → jebakan!" },
      { en: "Focus on verb, not noun", id: "Fokus kata kerja", pronounce: "FO-kas on verb", example: "Focus on verb, not extra info.", exampleId: "Fokus kata kerja, bukan info tambahan." }
    ],
    quiz: [
      { id: "9-5-q1", question: "Listen for ____", options: ["who/what (correct)", "why only", "how only", "when only"], answer: 0, explanation: "Listen who/what" },
      { id: "9-5-q2", question: "Trick: same ____", options: ["sound (correct)", "meaning", "color", "size"], answer: 0, explanation: "Same sound trap" },
      { id: "9-5-q3", question: "Take ____ quickly", options: ["notes (correct)", "note", "noting", "noted"], answer: 0, explanation: "Take notes" },
      { id: "9-5-q4", question: "Q: What is price? Listen ____", options: ["number (correct)", "name", "color", "verb"], answer: 0, explanation: "Price → number" },
      { id: "9-5-q5", question: "Long talk: ____ sentence", options: ["first (correct)", "last", "middle", "all"], answer: 0, explanation: "Main idea first sentence" }
    ]
  },
  {
    id: "9-6",
    levelId: 9,
    order: 54,
    title: "Simulasi Listening 1",
    titleEn: "Listening Sim 1",
    objective: "10 soal + audio TTS",
    duration: "18 menit",
    content: {
      intro: "Pelajaran Simulasi Listening 1 (Listening Sim 1) — 10 soal + audio TTS. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus TOEFL + Jebakan",
          headingId: "Rumus TOEFL + Jebakan",
          body: "Jebakan: He go (salah) vs He goes. EI em: goz.",
          examples: [
            { en: "Take notes: who, what, when.", id: "Catat: siapa, apa, kapan." },
            { en: "Sound: write vs right → trap!", id: "Bunyi: write vs right → jebakan!" }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Trik Cepat",
          headingId: "Trik Cepat",
          body: "Skim, keyword, same-sound trap.",
          examples: [
            { en: "Focus on verb, not extra info.", id: "Fokus kata kerja, bukan info tambahan." },
            { en: "I use Listening Sim 1 at work today.", id: "Saya pakai Simulasi Listening 1 di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Simulasi Timer",
          headingId: "Simulasi Timer",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Listening Sim 1 now.", id: "Mari latihan Simulasi Listening 1 sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Question about price", id: "Pertanyaan harga", pronounce: "KWES-chen e-BAUT prais", example: "Question about price → listen number.", exampleId: "Soal harga → dengar angka." },
      { en: "Answer with keyword", id: "Jawab pakai keyword", pronounce: "AN-ser with KII-werd", example: "Answer with keyword, not full.", exampleId: "Jawab pakai kata kunci." },
      { en: "Listen for who and what", id: "Dengar siapa & apa", pronounce: "LI-sen for hu end wot", example: "Listen for who and what.", exampleId: "Dengar siapa & apa." },
      { en: "Short conversation trick", id: "Trik percakapan pendek", pronounce: "short kon-ver-SEI-shen trik", example: "Man: I am tired. Q: How is he?", exampleId: "Pria: Saya capek. Q: Gimana dia?" },
      { en: "Take notes quickly", id: "Catat cepat", pronounce: "teik nouts KUIK-li", example: "Take notes: who, what, when.", exampleId: "Catat: siapa, apa, kapan." },
      { en: "Same sound trap", id: "Jebakan suara sama", pronounce: "seim saund trep", example: "Sound: write vs right → trap!", exampleId: "Bunyi: write vs right → jebakan!" },
      { en: "Focus on verb, not noun", id: "Fokus kata kerja", pronounce: "FO-kas on verb", example: "Focus on verb, not extra info.", exampleId: "Fokus kata kerja, bukan info tambahan." },
      { en: "Long talk main idea", id: "Ide utama talk panjang", pronounce: "long tok mein ai-DIA", example: "Long talk: main idea first sentence.", exampleId: "Talk panjang: ide di kalimat pertama." },
      { en: "Please repeat slowly", id: "Tolong ulangi pelan", pronounce: "pliiz ri-PIIT SLO-li", example: "Please repeat slowly.", exampleId: "Tolong ulangi pelan." },
      { en: "Do you understand", id: "Apakah paham", pronounce: "du yu an-der-STEND", example: "Do you understand?", exampleId: "Apakah paham?" }
    ],
    quiz: [
      { id: "9-6-q1", question: "Listen for ____", options: ["who/what (correct)", "why only", "how only", "when only"], answer: 0, explanation: "Listen who/what" },
      { id: "9-6-q2", question: "Trick: same ____", options: ["sound (correct)", "meaning", "color", "size"], answer: 0, explanation: "Same sound trap" },
      { id: "9-6-q3", question: "Take ____ quickly", options: ["notes (correct)", "note", "noting", "noted"], answer: 0, explanation: "Take notes" },
      { id: "9-6-q4", question: "Q: What is price? Listen ____", options: ["number (correct)", "name", "color", "verb"], answer: 0, explanation: "Price → number" },
      { id: "9-6-q5", question: "Long talk: ____ sentence", options: ["first (correct)", "last", "middle", "all"], answer: 0, explanation: "Main idea first sentence" }
    ]
  },
  {
    id: "10-1",
    levelId: 10,
    order: 55,
    title: "Skimming",
    titleEn: "Skimming",
    objective: "Baca cepat gagasan 30 detik",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Skimming (Skimming) — Baca cepat gagasan 30 detik. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus TOEFL + Jebakan",
          headingId: "Rumus TOEFL + Jebakan",
          body: "Jebakan: He go (salah) vs He goes. EI em: goz.",
          examples: [
            { en: "Guess 'urgent' from context.", id: "Tebak 'urgent' dari konteks." },
            { en: "It refers to the book.", id: "It merujuk ke buku." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Trik Cepat",
          headingId: "Trik Cepat",
          body: "Skim, keyword, same-sound trap.",
          examples: [
            { en: "Make inference: he was tired → he slept.", id: "Kesimpulan: dia capek → dia tidur." },
            { en: "I use Skimming at work today.", id: "Saya pakai Skimming di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Simulasi Timer",
          headingId: "Simulasi Timer",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Skimming now.", id: "Mari latihan Skimming sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "It refers to the book", id: "It merujuk buku", pronounce: "it ri-FERZ tu dhe buk", example: "It refers to the book.", exampleId: "It merujuk ke buku." },
      { en: "Make inference carefully", id: "Buat kesimpulan hati-hati", pronounce: "meik IN-fer-ens KER-ful-li", example: "Make inference: he was tired → he slept.", exampleId: "Kesimpulan: dia capek → dia tidur." },
      { en: "Main idea is in title", id: "Ide utama di judul", pronounce: "mein ai-DIA iz in TAI-tel", example: "Main idea is in title + first line.", exampleId: "Ide utama di judul + baris pertama." },
      { en: "Write summary 1 sentence", id: "Tulis ringkasan 1 kalimat", pronounce: "rait SAM-ri wan SEN-tens", example: "Write summary in 1 sentence.", exampleId: "Tulis ringkasan 1 kalimat." },
      { en: "Passage about work culture", id: "Bacaan budaya kerja", pronounce: "PES-ij e-BAUT werk KAL-cher", example: "Passage about work culture in Japan.", exampleId: "Bacaan budaya kerja di Jepang." },
      { en: "Simulate TOEFL 30 min", id: "Simulasi TOEFL 30 menit", pronounce: "SIM-yu-leit TO-fel", example: "Simulate TOEFL 30 min timer.", exampleId: "Simulasi TOEFL 30 menit timer." },
      { en: "Check time left 5 min", id: "Cek sisa 5 menit", pronounce: "chek taim left faiv min", example: "Check time left 5 min!", exampleId: "Cek sisa 5 menit!" },
      { en: "Skim the first sentence", id: "Pindai kalimat pertama", pronounce: "skim dhe ferst SEN-tens", example: "Skim the first sentence for idea.", exampleId: "Pindai kalimat pertama untuk ide." },
      { en: "Scan for numbers quickly", id: "Pindai angka cepat", pronounce: "sken for NAM-bers KUIK-li", example: "Scan for numbers like 2024.", exampleId: "Pindai angka kayak 2024." },
      { en: "Guess vocab from context", id: "Tebak kosakata dari konteks", pronounce: "ges vo-KEB from KON-tekst", example: "Guess 'urgent' from context.", exampleId: "Tebak 'urgent' dari konteks." }
    ],
    quiz: [
      { id: "10-1-q1", question: "Skim: read ____ sentence", options: ["first (correct)", "last", "middle", "all"], answer: 0, explanation: "Skim first sentence" },
      { id: "10-1-q2", question: "Scan for ____", options: ["numbers (correct)", "ideas", "all", "none"], answer: 0, explanation: "Scan numbers/names" },
      { id: "10-1-q3", question: "It refers to ____", options: ["previous noun (correct)", "next verb", "all", "none"], answer: 0, explanation: "It refers to previous noun" },
      { id: "10-1-q4", question: "Inference: make ____", options: ["conclusion (correct)", "copy", "skip", "guess random"], answer: 0, explanation: "Make inference" },
      { id: "10-1-q5", question: "Time check: ____ left", options: ["5 min (correct)", "1 hour", "none", "all"], answer: 0, explanation: "Check time left" }
    ]
  },
  {
    id: "10-2",
    levelId: 10,
    order: 56,
    title: "Scanning",
    titleEn: "Scanning",
    objective: "Cari detail angka/nama",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Scanning (Scanning) — Cari detail angka/nama. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus TOEFL + Jebakan",
          headingId: "Rumus TOEFL + Jebakan",
          body: "Jebakan: He go (salah) vs He goes. EI em: goz.",
          examples: [
            { en: "Make inference: he was tired → he slept.", id: "Kesimpulan: dia capek → dia tidur." },
            { en: "Main idea is in title + first line.", id: "Ide utama di judul + baris pertama." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Trik Cepat",
          headingId: "Trik Cepat",
          body: "Skim, keyword, same-sound trap.",
          examples: [
            { en: "Write summary in 1 sentence.", id: "Tulis ringkasan 1 kalimat." },
            { en: "I use Scanning at work today.", id: "Saya pakai Scanning di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Simulasi Timer",
          headingId: "Simulasi Timer",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Scanning now.", id: "Mari latihan Scanning sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Write summary 1 sentence", id: "Tulis ringkasan 1 kalimat", pronounce: "rait SAM-ri wan SEN-tens", example: "Write summary in 1 sentence.", exampleId: "Tulis ringkasan 1 kalimat." },
      { en: "Passage about work culture", id: "Bacaan budaya kerja", pronounce: "PES-ij e-BAUT werk KAL-cher", example: "Passage about work culture in Japan.", exampleId: "Bacaan budaya kerja di Jepang." },
      { en: "Simulate TOEFL 30 min", id: "Simulasi TOEFL 30 menit", pronounce: "SIM-yu-leit TO-fel", example: "Simulate TOEFL 30 min timer.", exampleId: "Simulasi TOEFL 30 menit timer." },
      { en: "Check time left 5 min", id: "Cek sisa 5 menit", pronounce: "chek taim left faiv min", example: "Check time left 5 min!", exampleId: "Cek sisa 5 menit!" },
      { en: "Skim the first sentence", id: "Pindai kalimat pertama", pronounce: "skim dhe ferst SEN-tens", example: "Skim the first sentence for idea.", exampleId: "Pindai kalimat pertama untuk ide." },
      { en: "Scan for numbers quickly", id: "Pindai angka cepat", pronounce: "sken for NAM-bers KUIK-li", example: "Scan for numbers like 2024.", exampleId: "Pindai angka kayak 2024." },
      { en: "Guess vocab from context", id: "Tebak kosakata dari konteks", pronounce: "ges vo-KEB from KON-tekst", example: "Guess 'urgent' from context.", exampleId: "Tebak 'urgent' dari konteks." },
      { en: "It refers to the book", id: "It merujuk buku", pronounce: "it ri-FERZ tu dhe buk", example: "It refers to the book.", exampleId: "It merujuk ke buku." },
      { en: "Make inference carefully", id: "Buat kesimpulan hati-hati", pronounce: "meik IN-fer-ens KER-ful-li", example: "Make inference: he was tired → he slept.", exampleId: "Kesimpulan: dia capek → dia tidur." },
      { en: "Main idea is in title", id: "Ide utama di judul", pronounce: "mein ai-DIA iz in TAI-tel", example: "Main idea is in title + first line.", exampleId: "Ide utama di judul + baris pertama." }
    ],
    quiz: [
      { id: "10-2-q1", question: "Skim: read ____ sentence", options: ["first (correct)", "last", "middle", "all"], answer: 0, explanation: "Skim first sentence" },
      { id: "10-2-q2", question: "Scan for ____", options: ["numbers (correct)", "ideas", "all", "none"], answer: 0, explanation: "Scan numbers/names" },
      { id: "10-2-q3", question: "It refers to ____", options: ["previous noun (correct)", "next verb", "all", "none"], answer: 0, explanation: "It refers to previous noun" },
      { id: "10-2-q4", question: "Inference: make ____", options: ["conclusion (correct)", "copy", "skip", "guess random"], answer: 0, explanation: "Make inference" },
      { id: "10-2-q5", question: "Time check: ____ left", options: ["5 min (correct)", "1 hour", "none", "all"], answer: 0, explanation: "Check time left" }
    ]
  },
  {
    id: "10-3",
    levelId: 10,
    order: 57,
    title: "Vocab in Context",
    titleEn: "Vocab Context",
    objective: "Guess meaning dari konteks",
    duration: "15 menit",
    content: {
      intro: "Pelajaran Vocab in Context (Vocab Context) — Guess meaning dari konteks. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus TOEFL + Jebakan",
          headingId: "Rumus TOEFL + Jebakan",
          body: "Jebakan: He go (salah) vs He goes. EI em: goz.",
          examples: [
            { en: "Write summary in 1 sentence.", id: "Tulis ringkasan 1 kalimat." },
            { en: "Passage about work culture in Japan.", id: "Bacaan budaya kerja di Jepang." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Trik Cepat",
          headingId: "Trik Cepat",
          body: "Skim, keyword, same-sound trap.",
          examples: [
            { en: "Simulate TOEFL 30 min timer.", id: "Simulasi TOEFL 30 menit timer." },
            { en: "I use Vocab Context at work today.", id: "Saya pakai Vocab in Context di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Simulasi Timer",
          headingId: "Simulasi Timer",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Vocab Context now.", id: "Mari latihan Vocab in Context sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Check time left 5 min", id: "Cek sisa 5 menit", pronounce: "chek taim left faiv min", example: "Check time left 5 min!", exampleId: "Cek sisa 5 menit!" },
      { en: "Skim the first sentence", id: "Pindai kalimat pertama", pronounce: "skim dhe ferst SEN-tens", example: "Skim the first sentence for idea.", exampleId: "Pindai kalimat pertama untuk ide." },
      { en: "Scan for numbers quickly", id: "Pindai angka cepat", pronounce: "sken for NAM-bers KUIK-li", example: "Scan for numbers like 2024.", exampleId: "Pindai angka kayak 2024." },
      { en: "Guess vocab from context", id: "Tebak kosakata dari konteks", pronounce: "ges vo-KEB from KON-tekst", example: "Guess 'urgent' from context.", exampleId: "Tebak 'urgent' dari konteks." },
      { en: "It refers to the book", id: "It merujuk buku", pronounce: "it ri-FERZ tu dhe buk", example: "It refers to the book.", exampleId: "It merujuk ke buku." },
      { en: "Make inference carefully", id: "Buat kesimpulan hati-hati", pronounce: "meik IN-fer-ens KER-ful-li", example: "Make inference: he was tired → he slept.", exampleId: "Kesimpulan: dia capek → dia tidur." },
      { en: "Main idea is in title", id: "Ide utama di judul", pronounce: "mein ai-DIA iz in TAI-tel", example: "Main idea is in title + first line.", exampleId: "Ide utama di judul + baris pertama." },
      { en: "Write summary 1 sentence", id: "Tulis ringkasan 1 kalimat", pronounce: "rait SAM-ri wan SEN-tens", example: "Write summary in 1 sentence.", exampleId: "Tulis ringkasan 1 kalimat." },
      { en: "Passage about work culture", id: "Bacaan budaya kerja", pronounce: "PES-ij e-BAUT werk KAL-cher", example: "Passage about work culture in Japan.", exampleId: "Bacaan budaya kerja di Jepang." },
      { en: "Simulate TOEFL 30 min", id: "Simulasi TOEFL 30 menit", pronounce: "SIM-yu-leit TO-fel", example: "Simulate TOEFL 30 min timer.", exampleId: "Simulasi TOEFL 30 menit timer." }
    ],
    quiz: [
      { id: "10-3-q1", question: "Skim: read ____ sentence", options: ["first (correct)", "last", "middle", "all"], answer: 0, explanation: "Skim first sentence" },
      { id: "10-3-q2", question: "Scan for ____", options: ["numbers (correct)", "ideas", "all", "none"], answer: 0, explanation: "Scan numbers/names" },
      { id: "10-3-q3", question: "It refers to ____", options: ["previous noun (correct)", "next verb", "all", "none"], answer: 0, explanation: "It refers to previous noun" },
      { id: "10-3-q4", question: "Inference: make ____", options: ["conclusion (correct)", "copy", "skip", "guess random"], answer: 0, explanation: "Make inference" },
      { id: "10-3-q5", question: "Time check: ____ left", options: ["5 min (correct)", "1 hour", "none", "all"], answer: 0, explanation: "Check time left" }
    ]
  },
  {
    id: "10-4",
    levelId: 10,
    order: 58,
    title: "Reference & Inference",
    titleEn: "Inference",
    objective: "It/They refers to...",
    duration: "16 menit",
    content: {
      intro: "Pelajaran Reference & Inference (Inference) — It/They refers to.... Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus TOEFL + Jebakan",
          headingId: "Rumus TOEFL + Jebakan",
          body: "Jebakan: He go (salah) vs He goes. EI em: goz.",
          examples: [
            { en: "Simulate TOEFL 30 min timer.", id: "Simulasi TOEFL 30 menit timer." },
            { en: "Check time left 5 min!", id: "Cek sisa 5 menit!" }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Trik Cepat",
          headingId: "Trik Cepat",
          body: "Skim, keyword, same-sound trap.",
          examples: [
            { en: "Skim the first sentence for idea.", id: "Pindai kalimat pertama untuk ide." },
            { en: "I use Inference at work today.", id: "Saya pakai Reference & Inference di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Simulasi Timer",
          headingId: "Simulasi Timer",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Inference now.", id: "Mari latihan Reference & Inference sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Guess vocab from context", id: "Tebak kosakata dari konteks", pronounce: "ges vo-KEB from KON-tekst", example: "Guess 'urgent' from context.", exampleId: "Tebak 'urgent' dari konteks." },
      { en: "It refers to the book", id: "It merujuk buku", pronounce: "it ri-FERZ tu dhe buk", example: "It refers to the book.", exampleId: "It merujuk ke buku." },
      { en: "Make inference carefully", id: "Buat kesimpulan hati-hati", pronounce: "meik IN-fer-ens KER-ful-li", example: "Make inference: he was tired → he slept.", exampleId: "Kesimpulan: dia capek → dia tidur." },
      { en: "Main idea is in title", id: "Ide utama di judul", pronounce: "mein ai-DIA iz in TAI-tel", example: "Main idea is in title + first line.", exampleId: "Ide utama di judul + baris pertama." },
      { en: "Write summary 1 sentence", id: "Tulis ringkasan 1 kalimat", pronounce: "rait SAM-ri wan SEN-tens", example: "Write summary in 1 sentence.", exampleId: "Tulis ringkasan 1 kalimat." },
      { en: "Passage about work culture", id: "Bacaan budaya kerja", pronounce: "PES-ij e-BAUT werk KAL-cher", example: "Passage about work culture in Japan.", exampleId: "Bacaan budaya kerja di Jepang." },
      { en: "Simulate TOEFL 30 min", id: "Simulasi TOEFL 30 menit", pronounce: "SIM-yu-leit TO-fel", example: "Simulate TOEFL 30 min timer.", exampleId: "Simulasi TOEFL 30 menit timer." },
      { en: "Check time left 5 min", id: "Cek sisa 5 menit", pronounce: "chek taim left faiv min", example: "Check time left 5 min!", exampleId: "Cek sisa 5 menit!" },
      { en: "Skim the first sentence", id: "Pindai kalimat pertama", pronounce: "skim dhe ferst SEN-tens", example: "Skim the first sentence for idea.", exampleId: "Pindai kalimat pertama untuk ide." },
      { en: "Scan for numbers quickly", id: "Pindai angka cepat", pronounce: "sken for NAM-bers KUIK-li", example: "Scan for numbers like 2024.", exampleId: "Pindai angka kayak 2024." }
    ],
    quiz: [
      { id: "10-4-q1", question: "Skim: read ____ sentence", options: ["first (correct)", "last", "middle", "all"], answer: 0, explanation: "Skim first sentence" },
      { id: "10-4-q2", question: "Scan for ____", options: ["numbers (correct)", "ideas", "all", "none"], answer: 0, explanation: "Scan numbers/names" },
      { id: "10-4-q3", question: "It refers to ____", options: ["previous noun (correct)", "next verb", "all", "none"], answer: 0, explanation: "It refers to previous noun" },
      { id: "10-4-q4", question: "Inference: make ____", options: ["conclusion (correct)", "copy", "skip", "guess random"], answer: 0, explanation: "Make inference" },
      { id: "10-4-q5", question: "Time check: ____ left", options: ["5 min (correct)", "1 hour", "none", "all"], answer: 0, explanation: "Check time left" }
    ]
  },
  {
    id: "10-5",
    levelId: 10,
    order: 59,
    title: "Simulasi Reading 1",
    titleEn: "Reading Sim 1",
    objective: "5 passages + 10 soal",
    duration: "18 menit",
    content: {
      intro: "Pelajaran Simulasi Reading 1 (Reading Sim 1) — 5 passages + 10 soal. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus TOEFL + Jebakan",
          headingId: "Rumus TOEFL + Jebakan",
          body: "Jebakan: He go (salah) vs He goes. EI em: goz.",
          examples: [
            { en: "Skim the first sentence for idea.", id: "Pindai kalimat pertama untuk ide." },
            { en: "Scan for numbers like 2024.", id: "Pindai angka kayak 2024." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Trik Cepat",
          headingId: "Trik Cepat",
          body: "Skim, keyword, same-sound trap.",
          examples: [
            { en: "Guess 'urgent' from context.", id: "Tebak 'urgent' dari konteks." },
            { en: "I use Reading Sim 1 at work today.", id: "Saya pakai Simulasi Reading 1 di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Simulasi Timer",
          headingId: "Simulasi Timer",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Reading Sim 1 now.", id: "Mari latihan Simulasi Reading 1 sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Main idea is in title", id: "Ide utama di judul", pronounce: "mein ai-DIA iz in TAI-tel", example: "Main idea is in title + first line.", exampleId: "Ide utama di judul + baris pertama." },
      { en: "Write summary 1 sentence", id: "Tulis ringkasan 1 kalimat", pronounce: "rait SAM-ri wan SEN-tens", example: "Write summary in 1 sentence.", exampleId: "Tulis ringkasan 1 kalimat." },
      { en: "Passage about work culture", id: "Bacaan budaya kerja", pronounce: "PES-ij e-BAUT werk KAL-cher", example: "Passage about work culture in Japan.", exampleId: "Bacaan budaya kerja di Jepang." },
      { en: "Simulate TOEFL 30 min", id: "Simulasi TOEFL 30 menit", pronounce: "SIM-yu-leit TO-fel", example: "Simulate TOEFL 30 min timer.", exampleId: "Simulasi TOEFL 30 menit timer." },
      { en: "Check time left 5 min", id: "Cek sisa 5 menit", pronounce: "chek taim left faiv min", example: "Check time left 5 min!", exampleId: "Cek sisa 5 menit!" },
      { en: "Skim the first sentence", id: "Pindai kalimat pertama", pronounce: "skim dhe ferst SEN-tens", example: "Skim the first sentence for idea.", exampleId: "Pindai kalimat pertama untuk ide." },
      { en: "Scan for numbers quickly", id: "Pindai angka cepat", pronounce: "sken for NAM-bers KUIK-li", example: "Scan for numbers like 2024.", exampleId: "Pindai angka kayak 2024." },
      { en: "Guess vocab from context", id: "Tebak kosakata dari konteks", pronounce: "ges vo-KEB from KON-tekst", example: "Guess 'urgent' from context.", exampleId: "Tebak 'urgent' dari konteks." },
      { en: "It refers to the book", id: "It merujuk buku", pronounce: "it ri-FERZ tu dhe buk", example: "It refers to the book.", exampleId: "It merujuk ke buku." },
      { en: "Make inference carefully", id: "Buat kesimpulan hati-hati", pronounce: "meik IN-fer-ens KER-ful-li", example: "Make inference: he was tired → he slept.", exampleId: "Kesimpulan: dia capek → dia tidur." }
    ],
    quiz: [
      { id: "10-5-q1", question: "Skim: read ____ sentence", options: ["first (correct)", "last", "middle", "all"], answer: 0, explanation: "Skim first sentence" },
      { id: "10-5-q2", question: "Scan for ____", options: ["numbers (correct)", "ideas", "all", "none"], answer: 0, explanation: "Scan numbers/names" },
      { id: "10-5-q3", question: "It refers to ____", options: ["previous noun (correct)", "next verb", "all", "none"], answer: 0, explanation: "It refers to previous noun" },
      { id: "10-5-q4", question: "Inference: make ____", options: ["conclusion (correct)", "copy", "skip", "guess random"], answer: 0, explanation: "Make inference" },
      { id: "10-5-q5", question: "Time check: ____ left", options: ["5 min (correct)", "1 hour", "none", "all"], answer: 0, explanation: "Check time left" }
    ]
  },
  {
    id: "10-6",
    levelId: 10,
    order: 60,
    title: "Simulasi Full TOEFL",
    titleEn: "Full TOEFL Sim",
    objective: "Full 3 parts 30 soal",
    duration: "25 menit",
    content: {
      intro: "Pelajaran Simulasi Full TOEFL (Full TOEFL Sim) — Full 3 parts 30 soal. Guru: fokus 15 menit, EI em pelan, contoh real kerja.",
      sections: [
      {
          heading: "1. Rumus TOEFL + Jebakan",
          headingId: "Rumus TOEFL + Jebakan",
          body: "Jebakan: He go (salah) vs He goes. EI em: goz.",
          examples: [
            { en: "Guess 'urgent' from context.", id: "Tebak 'urgent' dari konteks." },
            { en: "It refers to the book.", id: "It merujuk ke buku." }
          ],
          tip: "Tip guru: ucapkan EI em pelan, rekam, dengerin balik."
        },
        {
          heading: "2. Trik Cepat",
          headingId: "Trik Cepat",
          body: "Skim, keyword, same-sound trap.",
          examples: [
            { en: "Make inference: he was tired → he slept.", id: "Kesimpulan: dia capek → dia tidur." },
            { en: "I use Full TOEFL Sim at work today.", id: "Saya pakai Simulasi Full TOEFL di kerja hari ini." }
          ],
          tip: "Pakai 1 kalimat besok pagi di kantor."
        },
        {
          heading: "3. Simulasi Timer",
          headingId: "Simulasi Timer",
          body: "Latih 2 menit.",
          examples: [
            { en: "Let's practice Full TOEFL Sim now.", id: "Mari latihan Simulasi Full TOEFL sekarang." }
          ],
          tip: "Buka Speaking 3D → rekam → cek waveform."
        }
      ]
    },
    vocab: [
      { en: "Simulate TOEFL 30 min", id: "Simulasi TOEFL 30 menit", pronounce: "SIM-yu-leit TO-fel", example: "Simulate TOEFL 30 min timer.", exampleId: "Simulasi TOEFL 30 menit timer." },
      { en: "Check time left 5 min", id: "Cek sisa 5 menit", pronounce: "chek taim left faiv min", example: "Check time left 5 min!", exampleId: "Cek sisa 5 menit!" },
      { en: "Skim the first sentence", id: "Pindai kalimat pertama", pronounce: "skim dhe ferst SEN-tens", example: "Skim the first sentence for idea.", exampleId: "Pindai kalimat pertama untuk ide." },
      { en: "Scan for numbers quickly", id: "Pindai angka cepat", pronounce: "sken for NAM-bers KUIK-li", example: "Scan for numbers like 2024.", exampleId: "Pindai angka kayak 2024." },
      { en: "Guess vocab from context", id: "Tebak kosakata dari konteks", pronounce: "ges vo-KEB from KON-tekst", example: "Guess 'urgent' from context.", exampleId: "Tebak 'urgent' dari konteks." },
      { en: "It refers to the book", id: "It merujuk buku", pronounce: "it ri-FERZ tu dhe buk", example: "It refers to the book.", exampleId: "It merujuk ke buku." },
      { en: "Make inference carefully", id: "Buat kesimpulan hati-hati", pronounce: "meik IN-fer-ens KER-ful-li", example: "Make inference: he was tired → he slept.", exampleId: "Kesimpulan: dia capek → dia tidur." },
      { en: "Main idea is in title", id: "Ide utama di judul", pronounce: "mein ai-DIA iz in TAI-tel", example: "Main idea is in title + first line.", exampleId: "Ide utama di judul + baris pertama." },
      { en: "Write summary 1 sentence", id: "Tulis ringkasan 1 kalimat", pronounce: "rait SAM-ri wan SEN-tens", example: "Write summary in 1 sentence.", exampleId: "Tulis ringkasan 1 kalimat." },
      { en: "Passage about work culture", id: "Bacaan budaya kerja", pronounce: "PES-ij e-BAUT werk KAL-cher", example: "Passage about work culture in Japan.", exampleId: "Bacaan budaya kerja di Jepang." }
    ],
    quiz: [
      { id: "10-6-q1", question: "Skim: read ____ sentence", options: ["first (correct)", "last", "middle", "all"], answer: 0, explanation: "Skim first sentence" },
      { id: "10-6-q2", question: "Scan for ____", options: ["numbers (correct)", "ideas", "all", "none"], answer: 0, explanation: "Scan numbers/names" },
      { id: "10-6-q3", question: "It refers to ____", options: ["previous noun (correct)", "next verb", "all", "none"], answer: 0, explanation: "It refers to previous noun" },
      { id: "10-6-q4", question: "Inference: make ____", options: ["conclusion (correct)", "copy", "skip", "guess random"], answer: 0, explanation: "Make inference" },
      { id: "10-6-q5", question: "Time check: ____ left", options: ["5 min (correct)", "1 hour", "none", "all"], answer: 0, explanation: "Check time left" }
    ]
  },
];

export function getLessonById(id: string) { return lessons.find((l) => l.id === id); }
export function getLessonsByLevel(levelId: number) { return lessons.filter((l) => l.levelId === levelId).sort((a,b)=>a.order-b.order); }