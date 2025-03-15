import { createContext } from 'react';
import { QuestionsContextType } from './types';

export const QuestionsContext = createContext<QuestionsContextType>({
  quizzes: [],
  currentQuiz: null,
  setCurrentQuiz: () => {},
  currentQuestion: null,
  setCurrentQuestion: () => {},
  currentAnswer: '',
  setCurrentAnswer: () => {},
  isCorrect: false,
  setIsCorrect: () => {},
});

export default QuestionsContext;