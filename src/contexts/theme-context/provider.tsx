import { useState } from "react";
import ThemeContext from "./context";
import { ThemeProviderProps, ThemeContextType } from "./types";

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const contextVal: ThemeContextType = {
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextVal}>{children}</ThemeContext.Provider>
  );
}