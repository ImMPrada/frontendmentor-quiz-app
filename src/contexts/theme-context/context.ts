import { createContext } from "react";
import { ThemeContextType } from "./types";

export const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
});

export default ThemeContext;
