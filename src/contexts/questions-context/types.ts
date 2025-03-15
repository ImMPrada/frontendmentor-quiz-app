export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export interface Quiz {
  title: string;
  icon: string;
  questions: Question[];
}

export interface QuestionsContextType {
  quizzes: Quiz[];
  currentQuiz: Quiz | null;
  setCurrentQuiz: (quiz: Quiz) => void;
  currentQuestion: Question | null;
  setCurrentQuestion: (question: Question) => void;
  currentAnswer: string;
  setCurrentAnswer: (answer: string) => void;
  isCorrect: boolean;
  setIsCorrect: (isCorrect: boolean) => void;
}
