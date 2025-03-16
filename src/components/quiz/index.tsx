import { useContext } from "react";
import { QuestionsContext } from "../../contexts/questions-context";
import { ThemeContext } from "../../contexts/theme-context";

export default function Quiz() {
  const { currentQuiz } = useContext(QuestionsContext);
  const { isDark } = useContext(ThemeContext);

  return (
    <>
      <div className="flex
        flex-col
        items-start
        justify-start
        w-full
        self-start
        gap-4
      ">
        <p className={`
          font-sans
          font-light
          text-body-m md:text-body-l
          ${isDark ? 'text-white-light' : 'text-navy-dark'}
        `}>
          Pick a subject to get started!
        </p>

        <h2 className={`
          font-sans
          font-light
          text-heading-m md:text-heading-l
          ${isDark ? 'text-white-light' : 'text-navy-dark'}
        `}>
          {currentQuiz?.questions}
        </h2>
      </div>

      <div className="flex
        flex-col
        items-start
        justify-start
        w-full
        gap-3 md:gap-6
      ">
        {quizzes.map((quiz) => (
          <Option
            key={quiz.title}
            title={quiz.title}
            iconName={quiz.icon}
            onClick={handleQuizSelection}
          />
        ))}
      </div>
    </>
  );
}