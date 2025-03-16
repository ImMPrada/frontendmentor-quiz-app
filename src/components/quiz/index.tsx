import { useContext } from "react";
import { QuestionsContext } from "../../contexts/questions-context";
import { ThemeContext } from "../../contexts/theme-context";
import invariant from "tiny-invariant";
import Option from "./option";
export default function Quiz() {
  const { currentQuestion } = useContext(QuestionsContext);
  const { isDark } = useContext(ThemeContext);
  const literals = ['A', 'B', 'C', 'D', 'E', 'F'];
  invariant(currentQuestion, 'Current quiz is not found');

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
          {currentQuestion.question}
        </h2>
      </div>

      <div className="flex
        flex-col
        items-start
        justify-start
        w-full
        gap-3 md:gap-6
      ">
        {currentQuestion.options.map((option, index) => (
          <Option
            key={option}
            literal={literals[index]}
            content={option}
            onClick={() => {}}
          />
        ))}
      </div>
    </>
  );
}