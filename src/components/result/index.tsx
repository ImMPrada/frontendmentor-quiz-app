import { useContext } from "react";
import { QuestionsContext } from "../../contexts/questions-context";
import { ThemeContext } from "../../contexts/theme-context";
import QuizTitle from "../quiz-title";
import RestartButton from "./restart-button";

export default function Result() {
  const { score, totalQuestions } = useContext(QuestionsContext);
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
        <h2 className={`
          font-sans
          font-light
          text-heading-m md:text-heading-l
          ${isDark ? 'text-white-light' : 'text-navy-dark'}
        `}>
          Quiz completed <span className="font-medium">You scored...</span>
        </h2>
      </div>

      <div className="flex
        flex-col
        items-start
        justify-start
        w-full
        gap-4 md:gap-10
      ">
        <div className={`flex
          flex-col
          items-center
          justify-center
          w-full
          p-8 md:p-12
          gap-4 md:gap-10
          rounded-xl
          ${isDark ? 'bg-navy-dark' : 'bg-white'}
        `}>
          <QuizTitle />
          
          <div className="flex flex-col items-center gap-4 md:gap-10">
            <span className={`text-[88px]
              font-medium
              leading-none
              ${isDark ? 'text-white' : 'text-navy-dark'}
            `}>
              {score}
            </span>
            <span className={`text-body-s ${isDark ? 'text-white-light' : 'text-navy-dark'}`}>
              out of {totalQuestions}
            </span>
          </div>

        </div>

        <RestartButton />
      </div>
    </>
  );
}