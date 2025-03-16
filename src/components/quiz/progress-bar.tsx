import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { ProgressBarProps } from "./types";

export default function ProgressBar({ progress }: ProgressBarProps) {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`flex
      items-center
      justify-start
      w-full
      h-4
      p-1
      rounded-full
      ${isDark ? 'bg-navy' : 'bg-white'}
    `}>
      <div className={`flex
        h-full
        rounded-full
        bg-purple
      `}
      style={{ width: `${progress}%` }}
      />
    </div>
  );
}
