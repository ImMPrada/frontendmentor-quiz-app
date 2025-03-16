import Header from '../header'
import { ThemeContext } from '../../contexts/theme-context'
import { useContext } from 'react';
import SelectionMenu from '../selection-menu';
import { QuestionsContext } from '../../contexts/questions-context';

export default function Container() {
  const { isDark } = useContext(ThemeContext);
  const { currentQuiz } = useContext(QuestionsContext);

  return (
    <div className={`min-h-screen
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

      <main className="flex
        flex-col
        lg:flex-row
        items-center
        justify-start
        lg:justify-between
        w-full
        h-full
        gap-10 md:gap-16 lg:gap-38
        py-8 md:py-13 lg:py-22
        lg:max-w-[1160px]
      ">
        {!currentQuiz && <SelectionMenu />}
        {currentQuiz && <Quiz />}
        {/* <Result /> */}
      </main>
    </div>
  )
}
