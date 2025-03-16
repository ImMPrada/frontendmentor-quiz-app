import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { OptionProps } from "./types";

export default function Option({literal, content, onClick }: OptionProps) {
  const { isDark } = useContext(ThemeContext);

  return (
    <button className={`
      flex
      items-center
      justify-start
      w-full
      gap-4
      p-3 md:p-5
      rounded-lg
      hover:cursor-pointer
      ${isDark ? 'bg-navy' : 'bg-white'}
    `}
      onClick={() => onClick(content)}
    >
      <div className="w-4 h-4">
        {literal}
      </div>

      <h3 className={`
        font-sans
        font-light
        md:text-weight-medium
        text-heading-s md:text-heading-m
        ${isDark ? 'text-white-light' : 'text-navy-dark'}
      `}>{content}</h3>
    </button>
  );
}
