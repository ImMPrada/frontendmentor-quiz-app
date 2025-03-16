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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setQuizzes(questionsData.quizzes);
  }, []);

  const handleQuizSelection = (title: string) => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const quiz = quizzes.find((quiz) => quiz.title === title);
      if (quiz) {
        setCurrentQuiz(quiz);
        setCurrentQuestion(quiz.questions[0]);
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  };

  const contextVal: QuestionsContextType = {
    quizzes,
    currentQuiz,
    handleQuizSelection,
    currentQuestion,
    setCurrentQuestion,
    currentAnswer,
    setCurrentAnswer,
    isCorrect,
    setIsCorrect,
    isLoading,
  };

  return (
    <QuestionsContext.Provider value={contextVal}>
      {children}
    </QuestionsContext.Provider>
  );
};
