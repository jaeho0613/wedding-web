import { useState } from 'react'
import {
  InfoIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  BellIcon,
  UserIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from '@/components/ui/progress'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Spinner } from '@/components/ui/spinner'

// 섹션 래퍼 컴포넌트
function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className='mb-14'>
      <div className='mb-6'>
        <h2 className='text-xl font-semibold text-foreground'>{title}</h2>
        {description && <p className='mt-1 text-sm text-muted-foreground'>{description}</p>}
      </div>
      <Separator className='mb-6' />
      {children}
    </section>
  )
}

export function ShowcasePage() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [checked, setChecked] = useState(false)
  const [switchOn, setSwitchOn] = useState(false)
  const [progress] = useState(65)

  return (
    <TooltipProvider>
      <main className='mx-auto max-w-7xl px-6 py-12'>
        <div className='mb-12'>
          <h1 className='text-3xl font-bold text-foreground'>컴포넌트 쇼케이스</h1>
          <p className='mt-2 text-muted-foreground'>
            shadcn/ui (base-nova) 컴포넌트 라이브러리 전체 미리보기
          </p>
        </div>

        {/* 1. 타이포그래피 */}
        <Section title='타이포그래피' description='제목, 본문, 보조 텍스트 스타일'>
          <div className='space-y-3'>
            <h1 className='text-4xl font-bold text-foreground'>Heading 1</h1>
            <h2 className='text-3xl font-bold text-foreground'>Heading 2</h2>
            <h3 className='text-2xl font-semibold text-foreground'>Heading 3</h3>
            <h4 className='text-xl font-semibold text-foreground'>Heading 4</h4>
            <p className='text-base text-foreground'>
              본문 텍스트 — 일반적인 내용을 표시할 때 사용합니다. React 19와 TypeScript로 타입
              안전한 코드를 작성하세요.
            </p>
            <p className='text-sm text-muted-foreground'>
              보조 텍스트 — 부가 설명이나 힌트를 표시할 때 사용합니다.
            </p>
            <p className='text-xs text-muted-foreground'>
              캡션 텍스트 — 이미지 설명이나 메타정보 표시에 사용합니다.
            </p>
          </div>
        </Section>

        {/* 2. 버튼 */}
        <Section title='버튼' description='variant와 size 조합'>
          <div className='space-y-6'>
            <div>
              <p className='mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground'>
                Variants
              </p>
              <div className='flex flex-wrap gap-3'>
                <Button variant='default'>Default</Button>
                <Button variant='secondary'>Secondary</Button>
                <Button variant='outline'>Outline</Button>
                <Button variant='ghost'>Ghost</Button>
                <Button variant='destructive'>Destructive</Button>
                <Button variant='link'>Link</Button>
              </div>
            </div>
            <div>
              <p className='mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground'>
                Sizes
              </p>
              <div className='flex flex-wrap items-center gap-3'>
                <Button size='xs'>Extra Small</Button>
                <Button size='sm'>Small</Button>
                <Button size='default'>Default</Button>
                <Button size='lg'>Large</Button>
                <Button size='icon' variant='outline'>
                  <BellIcon />
                </Button>
                <Button size='icon-sm' variant='outline'>
                  <BellIcon />
                </Button>
                <Button size='icon-lg' variant='outline'>
                  <BellIcon />
                </Button>
              </div>
            </div>
            <div>
              <p className='mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground'>
                States
              </p>
              <div className='flex flex-wrap gap-3'>
                <Button disabled>비활성화</Button>
                <Button variant='outline' disabled>
                  비활성화 (Outline)
                </Button>
                <Button>
                  <Spinner />
                  로딩 중...
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* 3. 폼 요소 */}
        <Section title='폼 요소' description='입력 필드, 체크박스, 스위치, 셀렉트'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            <div className='space-y-5'>
              <div className='space-y-2'>
                <Label htmlFor='name'>이름</Label>
                <Input id='name' placeholder='이름을 입력하세요' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>이메일</Label>
                <Input id='email' type='email' placeholder='email@example.com' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='message'>메시지</Label>
                <Textarea id='message' placeholder='내용을 입력하세요...' rows={4} />
              </div>
            </div>

            <div className='space-y-6'>
              <div className='space-y-2'>
                <Label>프레임워크 선택</Label>
                <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='프레임워크를 선택하세요' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='react'>React</SelectItem>
                    <SelectItem value='vue'>Vue</SelectItem>
                    <SelectItem value='svelte'>Svelte</SelectItem>
                    <SelectItem value='angular'>Angular</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className='space-y-4'>
                <Label>옵션 선택</Label>
                <div className='flex items-center gap-3'>
                  <Checkbox
                    id='terms'
                    checked={checked}
                    onCheckedChange={(v) => setChecked(v as boolean)}
                  />
                  <Label htmlFor='terms' className='cursor-pointer'>
                    이용약관에 동의합니다
                  </Label>
                </div>
                <div className='flex items-center gap-3'>
                  <Checkbox id='newsletter' />
                  <Label htmlFor='newsletter' className='cursor-pointer'>
                    뉴스레터 구독
                  </Label>
                </div>
              </div>

              <div className='space-y-4'>
                <Label>토글 스위치</Label>
                <div className='flex items-center gap-3'>
                  <Switch checked={switchOn} onCheckedChange={setSwitchOn} id='notifications' />
                  <Label htmlFor='notifications' className='cursor-pointer'>
                    알림 {switchOn ? '활성화' : '비활성화'}
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 4. 카드 */}
        <Section title='카드' description='콘텐츠 컨테이너 컴포넌트'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            <Card>
              <CardHeader>
                <CardTitle>기본 카드</CardTitle>
                <CardDescription>카드 설명 텍스트입니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground'>
                  카드 본문 내용입니다. 다양한 콘텐츠를 담을 수 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>헤더 + 푸터</CardTitle>
                <CardDescription>액션이 있는 카드</CardDescription>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground'>
                  푸터에 액션 버튼을 배치할 수 있습니다.
                </p>
              </CardContent>
              <CardFooter className='gap-2'>
                <Button size='sm'>확인</Button>
                <Button size='sm' variant='outline'>
                  취소
                </Button>
              </CardFooter>
            </Card>

            <Card className='border-primary/50 bg-primary/5'>
              <CardHeader>
                <div className='flex items-center gap-2'>
                  <CheckCircleIcon className='size-5 text-primary' />
                  <CardTitle className='text-primary'>강조 카드</CardTitle>
                </div>
                <CardDescription>테두리 색상으로 강조 표현</CardDescription>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground'>
                  primary 색상으로 특별한 카드를 만듭니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* 5. 배지 */}
        <Section title='배지' description='상태, 카테고리, 레이블 표시'>
          <div className='flex flex-wrap gap-3'>
            <Badge>Default</Badge>
            <Badge variant='secondary'>Secondary</Badge>
            <Badge variant='outline'>Outline</Badge>
            <Badge variant='destructive'>Destructive</Badge>
          </div>
        </Section>

        {/* 6. 알림 */}
        <Section title='알림 (Alert)' description='상태 메시지 표시 컴포넌트'>
          <div className='space-y-4'>
            <Alert>
              <InfoIcon className='size-4' />
              <AlertTitle>정보</AlertTitle>
              <AlertDescription>
                이것은 일반 안내 메시지입니다. 사용자에게 정보를 전달합니다.
              </AlertDescription>
            </Alert>
            <Alert variant='destructive'>
              <XCircleIcon className='size-4' />
              <AlertTitle>오류 발생</AlertTitle>
              <AlertDescription>
                작업을 처리하는 중 오류가 발생했습니다. 다시 시도해주세요.
              </AlertDescription>
            </Alert>
          </div>
        </Section>

        {/* 7. 탭 */}
        <Section title='탭 (Tabs)' description='콘텐츠를 탭으로 나눠 표시'>
          <div className='space-y-6'>
            <Tabs defaultValue='preview'>
              <TabsList>
                <TabsTrigger value='preview'>미리보기</TabsTrigger>
                <TabsTrigger value='code'>코드</TabsTrigger>
                <TabsTrigger value='docs'>문서</TabsTrigger>
              </TabsList>
              <TabsContent value='preview' className='mt-4'>
                <Card>
                  <CardContent className='pt-6'>
                    <p className='text-sm text-muted-foreground'>
                      미리보기 탭 내용입니다. 컴포넌트의 실제 렌더링 결과를 보여줍니다.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value='code' className='mt-4'>
                <Card>
                  <CardContent className='pt-6'>
                    <pre className='text-sm bg-muted p-4 rounded-md overflow-x-auto'>
                      <code>{`import { Tabs } from '@/components/ui/tabs'`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value='docs' className='mt-4'>
                <Card>
                  <CardContent className='pt-6'>
                    <p className='text-sm text-muted-foreground'>
                      문서 탭 내용입니다. 컴포넌트 사용법과 props를 설명합니다.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Tabs defaultValue='account'>
              <TabsList variant='line'>
                <TabsTrigger value='account'>계정</TabsTrigger>
                <TabsTrigger value='security'>보안</TabsTrigger>
                <TabsTrigger value='notifications'>알림</TabsTrigger>
              </TabsList>
              <TabsContent value='account' className='mt-4'>
                <p className='text-sm text-muted-foreground'>계정 설정 내용 (line variant)</p>
              </TabsContent>
              <TabsContent value='security' className='mt-4'>
                <p className='text-sm text-muted-foreground'>보안 설정 내용</p>
              </TabsContent>
              <TabsContent value='notifications' className='mt-4'>
                <p className='text-sm text-muted-foreground'>알림 설정 내용</p>
              </TabsContent>
            </Tabs>
          </div>
        </Section>

        {/* 8. 다이얼로그 */}
        <Section title='다이얼로그 (Dialog)' description='모달 오버레이 컴포넌트'>
          <div className='flex gap-3'>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger render={<Button />}>다이얼로그 열기</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>정말 삭제하시겠습니까?</DialogTitle>
                  <DialogDescription>
                    이 작업은 되돌릴 수 없습니다. 데이터가 영구적으로 삭제됩니다.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant='outline' onClick={() => setDialogOpen(false)}>
                    취소
                  </Button>
                  <Button variant='destructive' onClick={() => setDialogOpen(false)}>
                    삭제
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </Section>

        {/* 9. 진행 바 */}
        <Section title='진행 바 (Progress)' description='작업 진행 상태 표시'>
          <div className='space-y-6'>
            <Progress value={progress} max={100} className='w-full'>
              <ProgressLabel>진행률</ProgressLabel>
              <div className='flex justify-between mb-2'>
                <span className='text-sm text-muted-foreground'>업로드 중...</span>
                <ProgressValue className='text-sm font-medium' />
              </div>
              <ProgressTrack className='h-2 rounded-full bg-muted'>
                <ProgressIndicator className='h-full rounded-full bg-primary transition-all' />
              </ProgressTrack>
            </Progress>
            <Progress value={30} max={100} className='w-full'>
              <ProgressTrack className='h-2 rounded-full bg-muted'>
                <ProgressIndicator className='h-full rounded-full bg-blue-500 transition-all' />
              </ProgressTrack>
            </Progress>
            <Progress value={80} max={100} className='w-full'>
              <ProgressTrack className='h-2 rounded-full bg-muted'>
                <ProgressIndicator className='h-full rounded-full bg-green-500 transition-all' />
              </ProgressTrack>
            </Progress>
          </div>
        </Section>

        {/* 10. 아바타 */}
        <Section title='아바타 (Avatar)' description='사용자 프로필 이미지'>
          <div className='flex flex-wrap items-end gap-4'>
            <Avatar className='size-8'>
              <AvatarImage src='https://github.com/shadcn.png' alt='shadcn' />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar className='size-10'>
              <AvatarImage src='https://github.com/shadcn.png' alt='shadcn' />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar className='size-12'>
              <AvatarFallback>
                <UserIcon className='size-5' />
              </AvatarFallback>
            </Avatar>
            <Avatar className='size-16'>
              <AvatarFallback className='text-lg'>AB</AvatarFallback>
            </Avatar>
          </div>
        </Section>

        {/* 11. 툴팁 */}
        <Section title='툴팁 (Tooltip)' description='호버 시 추가 정보 표시'>
          <div className='flex flex-wrap gap-4'>
            <Tooltip>
              <TooltipTrigger render={<Button variant='outline' />}>
                <InfoIcon />
                상단 툴팁
              </TooltipTrigger>
              <TooltipContent side='top'>
                <p>이것은 상단에 표시되는 툴팁입니다</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger render={<Button variant='outline' />}>
                <AlertTriangleIcon />
                우측 툴팁
              </TooltipTrigger>
              <TooltipContent side='right'>
                <p>이것은 우측에 표시되는 툴팁입니다</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger render={<Button variant='outline' />}>
                <CheckCircleIcon />
                하단 툴팁
              </TooltipTrigger>
              <TooltipContent side='bottom'>
                <p>이것은 하단에 표시되는 툴팁입니다</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </Section>

        {/* 12. 스피너 */}
        <Section title='스피너 (Spinner)' description='로딩 상태 표시'>
          <div className='flex flex-wrap items-center gap-6'>
            <div className='flex items-center gap-2'>
              <Spinner className='size-4' />
              <span className='text-sm text-muted-foreground'>Small</span>
            </div>
            <div className='flex items-center gap-2'>
              <Spinner className='size-6' />
              <span className='text-sm text-muted-foreground'>Medium</span>
            </div>
            <div className='flex items-center gap-2'>
              <Spinner className='size-8' />
              <span className='text-sm text-muted-foreground'>Large</span>
            </div>
            <div className='flex items-center gap-2'>
              <Spinner className='size-6 text-primary' />
              <span className='text-sm text-muted-foreground'>Primary</span>
            </div>
            <div className='flex items-center gap-2'>
              <Spinner className='size-6 text-destructive' />
              <span className='text-sm text-muted-foreground'>Destructive</span>
            </div>
          </div>
        </Section>
      </main>
    </TooltipProvider>
  )
}
