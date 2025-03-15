export interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}
