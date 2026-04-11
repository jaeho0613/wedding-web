import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { HomePage } from '@/pages/HomePage'
import { ShowcasePage } from '@/pages/ShowcasePage'
import { WeddingPage } from '@/pages/WeddingPage'
import { useTheme } from '@/hooks/use-theme'

type Page = 'home' | 'showcase' | 'wedding'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const { theme, toggleTheme } = useTheme()

  return (
    <div className='min-h-screen bg-background text-foreground'>
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {currentPage === 'home' && (
        <HomePage onNavigateToShowcase={() => setCurrentPage('showcase')} />
      )}
      {currentPage === 'showcase' && <ShowcasePage />}
      {currentPage === 'wedding' && <WeddingPage />}
    </div>
  )
}

export default App
