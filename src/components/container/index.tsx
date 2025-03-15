import Header from '../header'
import { ThemeContext } from '../../contexts/theme-context'
import { useContext } from 'react';

export default function Container() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen
      min-w-screen
      flex
      flex-col
      justify-start
      items-center
      px-6 md:px-16 lg:px-35
      py-4 md:py-10 lg:py-21
      ${isDark ? 'bg-navy-dark' : 'bg-white-light'}
    `}>
      <Header />
    </div>
  )
}
