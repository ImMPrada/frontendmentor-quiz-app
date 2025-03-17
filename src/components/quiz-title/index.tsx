import { useContext } from "react";
import { QuestionsContext } from "../../contexts/questions-context";
import invariant from "tiny-invariant";
import Icon from "../icon";
import { IconName } from "../icon/types";
import { ThemeContext } from "../../contexts/theme-context";

const getIconName = (icon: string) => {
  return icon.split('/icon-').pop()?.split('.').shift() as IconName;
};

export default function QuizTitle() {
  const { currentQuiz } = useContext(QuestionsContext);
  
  const { isDark } = useContext(ThemeContext);
  invariant(currentQuiz, 'Current quiz is required');

  const iconName = getIconName(currentQuiz.icon);

  return (
    <div className={`flex gap-1 items-center justify-start`}>
      <Icon name={iconName} />

      <h2
        className={`font-sans font-bold text-body-m ${isDark ? 'text-white-light' : 'text-navy-dark'}`}
      >
        {currentQuiz.title}
      </h2>
    </div>
  );
}