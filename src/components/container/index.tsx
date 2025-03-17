import Header from '../header'
import { ThemeContext } from '../../contexts/theme-context'
import { useContext } from 'react';
import SelectionMenu from '../selection-menu';
import { QuestionsContext } from '../../contexts/questions-context';
import Quiz from '../quiz';
import Result from '../result';

export default function Container() {
  const { isDark } = useContext(ThemeContext);
  const { currentQuiz, showScore } = useContext(QuestionsContext);

  return (
    <main className={`min-h-screen
      min-w-screen
      flex
      flex-col
      justify-start
      items-center
      gap-0
      px-6 md:px-16 lg:px-35
      py-4 md:py-10 lg:py-21
      ${isDark ? 'bg-navy-dark' : 'bg-white-light'}
    `}>
      <Header />

      <div className="flex
        flex-col
        lg:flex-row
        items-start
        justify-start
        lg:justify-between
        w-full
        h-full
        gap-10 md:gap-16 lg:gap-38
        py-8 md:py-13 lg:py-22
        lg:max-w-[1160px]
      ">
        {!currentQuiz && <SelectionMenu />}
        {currentQuiz && !showScore && <Quiz />}
        {showScore && <Result />}
      </div>
    </main>
  )
}
