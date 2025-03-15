import { useContext } from "react";
import { QuestionsContext } from "../../contexts/questions-context";
import ToggleTheme from "../toggle-theme";
export default function Header() {
  const { currentQuiz } = useContext(QuestionsContext);
  const quizCard = null;

  return (
    <header className={`flex w-full ${quizCard ? 'justify-between' : 'justify-end'}`}>
      <ToggleTheme />
    </header>
  );
}