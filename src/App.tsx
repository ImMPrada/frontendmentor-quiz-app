import ToggleTheme from './components/toggle-theme'
import { QuestionsProvider } from './contexts/questions-context'
import { ThemeProvider } from './contexts/theme-context'

function App() {
  return (
    <ThemeProvider>
      <QuestionsProvider>
        <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-white-light p-8">
          <ToggleTheme />
        </div>
      </QuestionsProvider>
    </ThemeProvider>

  )
}

export default App
