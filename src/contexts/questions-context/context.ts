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
});

export default QuestionsContext;