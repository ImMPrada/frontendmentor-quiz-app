import { useEffect, useState } from "react";
import { Quiz, Question, QuestionsContextType } from "./types";
import QuestionsContext from "./context";

import questionsData from '../../data/data.json';

export default function QuestionsProvider({ children }: { children: React.ReactNode }) {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [currentAnswer, setCurrentAnswer] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  useEffect(() => {
    setQuizzes(questionsData.quizzes);
  }, []);

  const contextVal: QuestionsContextType = {
    quizzes,
    currentQuiz,
    setCurrentQuiz,
    currentQuestion,
    setCurrentQuestion,
    currentAnswer,
    setCurrentAnswer,
    isCorrect,
    setIsCorrect,
  };

  return (
    <QuestionsContext.Provider value={contextVal}>
      {children}
    </QuestionsContext.Provider>
  );
};
