import {
  ZapIcon,
  CodeIcon,
  PaletteIcon,
  ComponentIcon,
  LayoutGridIcon,
  ArrowRightIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const techStack = [
  {
    icon: ZapIcon,
    name: 'Vite + React 19',
    description: '초고속 HMR과 최신 React 동시성 기능을 지원하는 빌드 환경',
    badge: 'v19',
    color: 'text-yellow-500',
  },
  {
    icon: CodeIcon,
    name: 'TypeScript',
    description: '정적 타입 검사로 안전하고 유지보수하기 쉬운 코드 작성',
    badge: 'v5',
    color: 'text-blue-500',
  },
  {
    icon: PaletteIcon,
    name: 'Tailwind CSS v4',
    description: 'CSS 변수 기반 테마 시스템과 다크모드를 지원하는 유틸리티 CSS',
    badge: 'v4',
    color: 'text-cyan-500',
  },
  {
    icon: ComponentIcon,
    name: 'shadcn/ui',
    description: 'base-nova 스타일의 접근성 높은 헤드리스 UI 컴포넌트 라이브러리',
    badge: 'base-nova',
    color: 'text-purple-500',
  },
  {
    icon: LayoutGridIcon,
    name: 'lucide-react',
    description: '일관된 디자인의 아름다운 SVG 아이콘 라이브러리',
    badge: 'icons',
    color: 'text-green-500',
  },
]

const quickStartCode = `# 1. 저장소 클론
git clone <your-repo-url>

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev`

interface HomePageProps {
  onNavigateToShowcase: () => void
}

export function HomePage({ onNavigateToShowcase }: HomePageProps) {
  return (
    <main className='mx-auto max-w-7xl px-6 py-16'>
      {/* 히어로 섹션 */}
      <section className='mb-20 text-center'>
        <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground'>
          <ZapIcon className='size-3.5 text-yellow-500' />
          빠르게 시작하는 모던 웹 개발 환경
        </div>

        <h1 className='mb-6 text-5xl font-bold tracking-tight text-foreground'>
          Vite React{' '}
          <span className='bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent'>
            스타터킷
          </span>
        </h1>

        <div className='flex items-center justify-center gap-4'>
          <Button size='lg' onClick={onNavigateToShowcase}>
            <LayoutGridIcon />
            컴포넌트 쇼케이스 보기
            <ArrowRightIcon />
          </Button>
          <Button size='lg' variant='outline'>
            <CodeIcon />
            GitHub
          </Button>
        </div>
      </section>

      {/* 기술스택 카드 */}
      <section className='mb-20'>
        <div className='mb-10 text-center'>
          <h2 className='mb-2 text-2xl font-bold text-foreground'>기술 스택</h2>
          <p className='text-muted-foreground'>생산성을 극대화하는 최신 기술 조합</p>
        </div>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {techStack.map((tech) => (
            <Card key={tech.name} className='transition-shadow hover:shadow-md'>
              <CardHeader className='pb-3'>
                <div className='flex items-center justify-between'>
                  <tech.icon className={`size-8 ${tech.color}`} />
                  <Badge variant='secondary'>{tech.badge}</Badge>
                </div>
                <CardTitle className='text-base'>{tech.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{tech.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className='mb-20' />

      {/* 시작하기 */}
      <section className='mb-20'>
        <div className='mb-8 text-center'>
          <h2 className='mb-2 text-2xl font-bold text-foreground'>시작하기</h2>
          <p className='text-muted-foreground'>3단계로 바로 개발을 시작할 수 있습니다</p>
        </div>

        <div className='mx-auto max-w-2xl'>
          <Card>
            <CardHeader>
              <CardTitle className='text-sm font-medium text-muted-foreground'>터미널</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className='overflow-x-auto rounded-md bg-muted p-4 text-sm text-foreground'>
                <code>{quickStartCode}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className='rounded-2xl bg-muted p-12 text-center'>
        <h2 className='mb-4 text-3xl font-bold text-foreground'>shadcn/ui 컴포넌트 둘러보기</h2>
        <p className='mb-8 text-muted-foreground'>
          버튼, 폼, 다이얼로그, 탭 등 다양한 UI 컴포넌트를 직접 확인하고 테스트해보세요.
        </p>
        <Button size='lg' onClick={onNavigateToShowcase}>
          쇼케이스 페이지로 이동
          <ArrowRightIcon />
        </Button>
      </section>
    </main>
  )
}
