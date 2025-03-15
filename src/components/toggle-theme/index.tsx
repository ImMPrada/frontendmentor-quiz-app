import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import Icon from '../icon';

export default function ToggleTheme() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme}
      className={`flex items-center gap-1`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <Icon name={!isDark ? "sun-dark" : "sun-light"} />
      <div className="w-12 h-6 bg-purple rounded-full p-1">
        <div 
          className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
            isDark ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </div>
      <Icon name={isDark ? "moon-light" : "moon-dark"} />
    </button>
  );
} 