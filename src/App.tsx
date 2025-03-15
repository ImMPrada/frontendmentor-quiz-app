import Container from './components/container'
import { QuestionsProvider } from './contexts/questions-context'
import { ThemeProvider } from './contexts/theme-context'

function App() {
  return (
    <ThemeProvider>
      <QuestionsProvider>
        <Container />
      </QuestionsProvider>
    </ThemeProvider>
  )
}

export default App
