import { useContext } from "react";
import { QuestionsContext } from "../../contexts/questions-context";
import ToggleTheme from "../toggle-theme";
import QuizTitle from "../quiz-title";

export default function Header() {
  const { currentQuiz, showScore } = useContext(QuestionsContext);

  return (
    <header className={`flex w-full ${currentQuiz && !showScore ? 'justify-between' : 'justify-end'}`}>
      {currentQuiz && !showScore && <QuizTitle card={true} />}
      <ToggleTheme />
    </header>
  );
}