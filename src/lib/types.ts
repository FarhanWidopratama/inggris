export type Level = {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  icon: string;
  color: string;
};

export type Vocab = {
  en: string;
  id: string;
  pronounce: string;
  example: string;
  exampleId: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  questionId?: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type Lesson = {
  id: string;
  levelId: number;
  order: number;
  title: string;
  titleEn: string;
  objective: string;
  duration: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      headingId: string;
      body: string;
      examples: { en: string; id: string }[];
      tip?: string;
    }[];
  };
  vocab: Vocab[];
  quiz: QuizQuestion[];
  locked?: boolean;
};

export type UserProgress = {
  completedLessons: string[];
  scores: Record<string, number>;
  streak: number;
  lastStudyDate: string | null;
};
