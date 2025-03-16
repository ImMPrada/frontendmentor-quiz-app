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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);


  // Side effects zone:
  useEffect(() => {
    setQuizzes(questionsData.quizzes);
  }, []);

  useEffect(() => {
    if (!currentQuiz) return;

    setTotalQuestions(currentQuiz.questions.length);
    handleQuestionSelection();
  }, [currentQuiz]);

  useEffect(() => {
    if (totalQuestions === 0) return;

    setProgress(((currentQuestionIndex) * 100/ totalQuestions));
  }, [currentQuestionIndex, totalQuestions]);

  // Handlers:
  const handleQuizSelection = (title: string) => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const quiz = quizzes.find((quiz) => quiz.title === title);
      if (quiz) {
        setCurrentQuiz(quiz);
        setCurrentQuestion(quiz.questions[0]);
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  };

  const handleQuestionSelection = () => {
    if (!currentQuiz) return;

    const timer = setTimeout(() => {
      setCurrentQuestion(currentQuiz.questions[currentQuestionIndex]);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }, 300);

    return () => clearTimeout(timer);
  };

  const handleAnswerSelection = (answer: string) => {
    setCurrentAnswer(answer);
  };

  const contextVal: QuestionsContextType = {
    quizzes,
    currentQuiz,
    handleQuizSelection,
    progress,
    currentQuestionIndex,
    totalQuestions,
    currentQuestion,
    handleAnswerSelection,
    currentAnswer,

    setCurrentQuestion,
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
