import { useContext } from "react";
import { QuestionsContext } from "../../contexts/questions-context";
import { ThemeContext } from "../../contexts/theme-context";
import Option from "./option";

export default function SelectionMenu() {
  const { quizzes, handleQuizSelection, isLoading } = useContext(QuestionsContext);
  const { isDark } = useContext(ThemeContext);

  if (isLoading) {
    return (
      <h2 className="text-heading-m font-medium text-purple">Loading...</h2>
    );
  }

  if (quizzes.length === 0) {
    return (
      <h2 className="text-heading-m font-medium text-purple">No quizzes found</h2>
    );
  }

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
        <h2 className={`
          font-sans
          font-light
          text-heading-m md:text-heading-l
          ${isDark ? 'text-white-light' : 'text-navy-dark'}
        `}>
          Welcome to the <span className="font-medium">Frontend Quiz!</span>
        </h2>

        <p className={`
          font-sans
          font-light
          text-body-m md:text-body-l
          ${isDark ? 'text-white-light' : 'text-navy-dark'}
        `}>
          Pick a subject to get started!
        </p>
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
