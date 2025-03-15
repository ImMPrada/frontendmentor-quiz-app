import { useState } from "react";
import ThemeContext from "./context";
import { ThemeProviderProps, ThemeContextType } from "./types";

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>('light');

  const contextVal: ThemeContextType = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextVal}>{children}</ThemeContext.Provider>
  );
}