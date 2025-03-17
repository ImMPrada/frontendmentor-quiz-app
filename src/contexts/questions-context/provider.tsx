import { useEffect, useState } from "react";
import { Quiz, Question, QuestionsContextType } from "./types";
import QuestionsContext from "./context";

import questionsData from '../../data/data.json';

export default function QuestionsProvider({ children }: { children: React.ReactNode }) {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [currentAnswer, setCurrentAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);
  const [answerSubmitted, setAnswerSubmitted] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [canShowScore, setCanShowScore] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [hasMoreQuestions, setHasMoreQuestions] = useState<boolean>(true);


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

    if (currentQuestionIndex === totalQuestions) {
      setCanShowScore(true);
      setHasMoreQuestions(false);
    }

    setProgress(((currentQuestionIndex) * 100/ totalQuestions));
  }, [currentQuestionIndex, totalQuestions]);

  useEffect(() => {
    if (!isCorrect) return;

    setScore(score + 1);
  }, [isCorrect]);

  const setQuizToInitialState = () => {
    setCurrentQuestion(null);
    setCurrentAnswer(null);
    setIsCorrect(undefined);
    setAnswerSubmitted(false); 
  }

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
      setIsCorrect(undefined);
      setAnswerSubmitted(false);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }, 300);

    return () => clearTimeout(timer);
  };

  const handleAnswerSelection = (answer: string) => {
    setCurrentAnswer(answer);
  };

  const handleAnswerSubmission = () => {
    if (!currentQuestion) return;
    if (!currentAnswer) {
      setErrors(['Please select an answer']);
      return;
    }

    setErrors([]);
    setIsCorrect(currentQuestion.answer === currentAnswer);
    setAnswerSubmitted(true);
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
    isCorrect,
    answerSubmitted,
    isLoading,
    handleAnswerSubmission,
    handleQuestionSelection,
    canShowScore,
    score,
    errors,
    hasMoreQuestions,
  };

  return (
    <QuestionsContext.Provider value={contextVal}>
      {children}
    </QuestionsContext.Provider>
  );
};
