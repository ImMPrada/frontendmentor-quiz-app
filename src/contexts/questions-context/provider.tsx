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

  const [progress, setProgress] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
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
      setHasMoreQuestions(false);
    }

    setProgress(((currentQuestionIndex) * 100/ totalQuestions));
  }, [currentQuestionIndex, totalQuestions]);

  useEffect(() => {
    if (!isCorrect) return;

    setScore(score + 1);
  }, [isCorrect]);

  useEffect(() => {
    if (hasMoreQuestions) return;
    
    const timer = setTimeout(() => {
      setShowScore(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [hasMoreQuestions]);

  // Handlers:
  const handleQuizSelection = (title: string) => {
    const quiz = quizzes.find((quiz) => quiz.title === title);
    if (!quiz) return;

    setCurrentQuiz(quiz);
    setCurrentQuestion(quiz.questions[0]);
  };

  const handleQuestionSelection = () => {
    if (!currentQuiz) return;

    setCurrentQuestion(currentQuiz.questions[currentQuestionIndex]);
    setIsCorrect(undefined);
    setAnswerSubmitted(false);
    setCurrentAnswer(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
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

  const restartAll = () => {
    setCurrentQuiz(null);
    setCurrentQuestion(null);
    setCurrentAnswer(null);
    setIsCorrect(undefined);
    setAnswerSubmitted(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setErrors([]);
    setHasMoreQuestions(true);
  };

  const contextVal: QuestionsContextType = {
    quizzes,
    currentQuiz,
    handleQuizSelection,
    currentQuestion,
    setCurrentQuestion,
    currentAnswer: currentAnswer ?? '',
    setCurrentAnswer,
    isCorrect,
    setIsCorrect,
    isLoading: false,
    progress,
    currentQuestionIndex,
    totalQuestions,
    score,
    handleAnswerSelection,
    answerSubmitted,
    handleAnswerSubmission,
    handleQuestionSelection,
    showScore,
    errors,
    hasMoreQuestions,
    restartAll
  };

  return (
    <QuestionsContext.Provider value={contextVal}>
      {children}
    </QuestionsContext.Provider>
  );
};
