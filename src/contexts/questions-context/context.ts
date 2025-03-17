import { createContext } from 'react';
import { QuestionsContextType } from './types';

export const QuestionsContext = createContext<QuestionsContextType>({
  quizzes: [],
  currentQuiz: null,
  handleQuizSelection: () => {},
  currentQuestion: null,
  setCurrentQuestion: () => {},
  currentAnswer: '',
  setCurrentAnswer: () => {},
  isCorrect: false,
  setIsCorrect: () => {},
  isLoading: false,
  progress: 0,
  currentQuestionIndex: 0,
  totalQuestions: 0,
  score: 0,
  handleAnswerSelection: () => {},
  answerSubmitted: false,
  handleAnswerSubmission: () => {},
  handleQuestionSelection: () => {},
  canShowScore: false,
  errors: [],
  hasMoreQuestions: false,
});

export default QuestionsContext;