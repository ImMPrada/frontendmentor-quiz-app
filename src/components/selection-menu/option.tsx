import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { OptionProps } from "./types";
import Icon from "../icon";
import { IconName } from "../icon/types";
export default function Option({ title, iconName, onClick }: OptionProps) {
  const { isDark } = useContext(ThemeContext);
  const src: IconName = iconName.substring(iconName.lastIndexOf('/icon-') + 6, iconName.lastIndexOf('.svg')) as IconName;

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
      hover:border-solid
      hover:border-2
      hover:border-purple
      ${isDark ? 'bg-navy' : 'bg-white'}
    `}
      onClick={() => onClick(title)}
    >
      <Icon name={src} />

      <h3 className={`
        font-sans
        font-light
        md:text-weight-medium
        text-heading-s md:text-heading-m
        ${isDark ? 'text-white-light' : 'text-navy-dark'}
      `}>{title}</h3>
    </button>
  );
}
