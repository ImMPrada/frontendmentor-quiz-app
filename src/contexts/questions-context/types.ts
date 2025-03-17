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
  handleQuizSelection: (title: string) => void;
  currentQuestion: Question | null;
  setCurrentQuestion: (question: Question) => void;
  currentAnswer: string;
  setCurrentAnswer: (answer: string) => void;
  isCorrect: boolean | undefined;
  setIsCorrect: (isCorrect: boolean) => void;
  isLoading: boolean;
  progress: number;
  currentQuestionIndex: number;
  totalQuestions: number;
  score: number;
  handleAnswerSelection: (answer: string) => void;
  answerSubmitted: boolean;
  handleAnswerSubmission: () => void;
  handleQuestionSelection: () => void;
  canShowScore: boolean;
  errors: string[];
  hasMoreQuestions: boolean;
}
