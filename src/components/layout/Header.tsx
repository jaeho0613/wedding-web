import { SunIcon, MoonIcon, LayoutGridIcon, HeartIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Page = 'home' | 'showcase' | 'wedding'

interface HeaderProps {
  currentPage: Page
  onNavigate: (page: Page) => void
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export function Header({ currentPage, onNavigate, theme, onToggleTheme }: HeaderProps) {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm'>
      <div className='mx-auto flex h-14 max-w-7xl items-center justify-between px-6'>
        {/* 로고 */}
        <button
          onClick={() => onNavigate('home')}
          className='flex items-center gap-2 font-semibold text-foreground hover:opacity-80 transition-opacity'
        >
          <div className='flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-bold'>
            V
          </div>
          <span className='text-sm'>Vite React Startkit</span>
        </button>

        {/* 내비게이션 */}
        <nav className='flex items-center gap-1'>
          <Button
            variant={currentPage === 'home' ? 'secondary' : 'ghost'}
            size='sm'
            onClick={() => onNavigate('home')}
          >
            홈
          </Button>
          <Button
            variant={currentPage === 'showcase' ? 'secondary' : 'ghost'}
            size='sm'
            onClick={() => onNavigate('showcase')}
          >
            <LayoutGridIcon />
            컴포넌트 쇼케이스
          </Button>
          <Button
            variant={currentPage === 'wedding' ? 'secondary' : 'ghost'}
            size='sm'
            onClick={() => onNavigate('wedding')}
          >
            <HeartIcon />
            웨딩 청첩장
          </Button>
        </nav>

        {/* 다크모드 토글 */}
        <Button variant='ghost' size='icon' onClick={onToggleTheme} aria-label='테마 전환'>
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </div>
    </header>
  )
}
