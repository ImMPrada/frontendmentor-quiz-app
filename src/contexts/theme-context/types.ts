export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}
