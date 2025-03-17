import { ButtonProps } from "./types";

export default function Button({label, onClick}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-purple
      font-sans
      text-white
      font-bold
      text-heading-s
      py-5 md:py-8
      w-full
      rounded-lg md:rounded-2xl
      hover:bg-purple-light
      hover:text-purple
      transition-colors
    ">
      {label}
    </button>
  );
}
