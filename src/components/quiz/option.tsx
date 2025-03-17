import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { OptionProps } from "./types";
import Icon from "../icon";

const selectedImg = (isSelected: boolean, isCorrect?: boolean) => {
  if (isCorrect !== undefined && isSelected && !isCorrect) return 'bg-red text-white-light'
  if (isCorrect !== undefined && isSelected && isCorrect) return 'bg-green text-white-light'
  if (isSelected) return 'bg-purple text-white-light'

  return 'bg-white-light text-navy-dark'
}

const border = (isDark: boolean, isSelected: boolean, isTheAnswer: boolean, isCorrect?: boolean) => {
  const background = isDark ? 'bg-navy' : 'bg-white'
  let border = isSelected ? 'border-solid border-2 border-purple' : ''
  if (isCorrect !== undefined && isSelected) {
    if (isTheAnswer && isCorrect) border = 'border-solid border-2 border-green'
    if (!isTheAnswer && !isCorrect) border = 'border-solid border-2 border-red'
  }

  return `${background} ${border}`
}

export default function Option({
  literal,
  content,
  onClick,
  isSelected,
  isTheAnswer,
  isCorrect,
  disabled
}: OptionProps) {
  const { isDark } = useContext(ThemeContext);

  return (
    <button className={`
      flex
      items-center
      justify-between
      w-full
      gap-2
      p-3 md:p-5
      rounded-lg
      group
      ${border(isDark, isSelected, isTheAnswer, isCorrect)}
      ${disabled ? 'hover:none' : ''}
    `}
      disabled={disabled}
      onClick={() => onClick(content)}
    >
      <div className="flex items-center justify-start gap-2">
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
          ${selectedImg(isSelected, isCorrect)}
          ${disabled ? '' : 'group-hover:text-purple group-hover:bg-purple-light'}
        `}>
          {literal}
        </div>

        <h3 className={`
          font-sans
          font-light
          md:text-weight-medium
          text-heading-s
          text-left
          ${isDark ? 'text-white-light' : 'text-navy-dark'}
        `}>
          {content}
        </h3>
      </div>

      {isCorrect !== undefined && isSelected && !isCorrect && (
        <Icon
          name={'incorrect'}
          className="w-6 h-6"
        />
      )}

      {isCorrect !== undefined && isTheAnswer && (
        <Icon
          name={'correct'}
          className="w-6 h-6"
        />
      )}
    </button>
  );
}
