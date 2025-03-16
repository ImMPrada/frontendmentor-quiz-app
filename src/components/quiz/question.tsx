import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import ProgressBar from "./progress-bar";
import { QuestionProps } from "./types";

export default function Question({ question, number, total, progress }: QuestionProps) {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className="flex
      flex-col
      items-start
      justify-start
      lg:justify-between
      w-full
      self-start
      gap-10
    ">
      <div className="flex
        flex-col
        items-start
        justify-start
        w-full
        gap-10
      ">
        <p className={`
          font-sans
          font-light
          text-body-s
          ${isDark ? 'text-white-light' : 'text-navy-dark'}
        `}>
          Question {number} of {total}
        </p>

        <h2 className={`
          font-sans
          font-light
          text-weight-medium lg:text-weight-bold
          text-heading-m
          ${isDark ? 'text-white-light' : 'text-navy-dark'}
        `}>
          {question}
        </h2>
      </div>

      <ProgressBar progress={progress} />
    </div>
  );
}