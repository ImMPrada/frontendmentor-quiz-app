import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { OptionProps } from "./types";

const selectedImg = (isDark: boolean, isSelected: boolean) => {
  if (isSelected) return 'bg-purple text-white-light'
  if (isDark) return 'bg-white-light text-navy-dark'

  return 'bg-navy-dark text-white-light'
}

const selectedBorder = (isDark: boolean, isSelected: boolean) => {
  const background = isDark ? 'bg-navy' : 'bg-white'
  const border = isSelected ? 'border border-2 border-purple' : ''

  return `${background} ${border}`
}

export default function Option({literal, content, onClick, isSelected }: OptionProps) {
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
      ${selectedBorder(isDark, isSelected)}
    `}
      onClick={() => onClick(content)}
    >
      <div className={`
        flex
        items-center
        justify-center
        p-4
        w-10 h-10
        rounded-lg
        text-weight-bold
        text-heading-s
        font-sans
        ${selectedImg(isDark, isSelected)}
      `}>
        {literal}
      </div>

      <h3 className={`
        font-sans
        font-light
        md:text-weight-medium
        text-heading-s
        ${isDark ? 'text-white-light' : 'text-navy-dark'}
      `}>
        {content}
      </h3>
    </button>
  );
}
