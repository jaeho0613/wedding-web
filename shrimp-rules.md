# Development Guidelines

## Project Overview

- React 19 + TypeScript + Vite SPA (라우터 없음)
- Tailwind CSS v4 (`@tailwindcss/vite` 플러그인, `tailwind.config.ts` 없음)
- shadcn/ui 컴포넌트, lucide-react + @tabler/icons-react 아이콘
- Notion API를 CMS로 활용하는 모바일 최적화 웨딩 청첩장

---

## Project Architecture

```
src/
├── App.tsx                        # 페이지 상태(useState) 및 라우팅 허브
├── main.tsx
├── index.css                      # CSS 변수(디자인 토큰), Tailwind import
├── pages/                         # 전체 페이지 컴포넌트
│   ├── HomePage.tsx
│   ├── ShowcasePage.tsx
│   └── WeddingPage.tsx            # (추가 예정)
├── components/
│   ├── layout/
│   │   └── Header.tsx             # 내비게이션, 다크모드 토글
│   ├── sections/                  # 웨딩 페이지 섹션 컴포넌트 (추가 예정)
│   │   ├── HeroSection.tsx
│   │   ├── IntroSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── GallerySection.tsx
│   │   └── BuffetSection.tsx
│   └── ui/                        # shadcn 기반 공통 UI
├── hooks/
│   ├── use-theme.ts               # 다크모드 토글 + localStorage
│   └── useWeddingData.ts          # Notion 데이터 fetching (추가 예정)
├── lib/
│   ├── utils.ts                   # cn() 유틸 (clsx + tailwind-merge)
│   └── notion.ts                  # Notion API 함수 (추가 예정)
└── types/
    └── wedding.ts                 # 웨딩 관련 TypeScript 타입 (추가 예정)
```

---

## Page Routing Rules

### 새 페이지 추가 시 반드시 3곳 동시 수정

1. **`src/App.tsx`** — `Page` 타입에 새 페이지명 추가, 조건부 렌더링 추가
2. **`src/App.tsx`** — `<Header>`에 `onNavigate` 호출 버튼 또는 로직 추가
3. **`src/components/layout/Header.tsx`** — `Page` 타입 동기화, 내비게이션 버튼 추가

```tsx
// App.tsx 예시
type Page = 'home' | 'showcase' | 'wedding'  // ← 추가

{currentPage === 'wedding' && <WeddingPage />}  // ← 추가
```

```tsx
// Header.tsx 예시 — Page 타입도 동일하게 유지
type Page = 'home' | 'showcase' | 'wedding'  // ← App.tsx와 항상 동일해야 함
```

> **경고**: App.tsx와 Header.tsx의 `Page` 타입은 항상 동일해야 한다. 한쪽만 수정하면 TypeScript 오류 발생.

---

## Styling Rules

- **CSS 변수 수정**: `src/index.css`에서만 (`--background`, `--primary` 등)
- **`tailwind.config.ts` 없음** — 생성 금지
- **다크모드**: `document.documentElement`에 `.dark` 클래스 추가/제거 방식. CSS에서 `.dark` 클래스로 오버라이드
- **반응형**: 모바일 우선 (375px → 768px → 1280px)
- **경로 별칭**: `@/` = `src/` (예: `import { cn } from '@/lib/utils'`)

---

## TypeScript Rules

- **strict 모드 활성화**: 위반 시 `npm run build` 실패
- `noUnusedLocals` — 사용하지 않는 변수 선언 금지
- `noUnusedParameters` — 사용하지 않는 함수 매개변수 금지
- `noFallthroughCasesInSwitch` — switch 문 fallthrough 금지
- 모든 props는 interface로 명시적 타입 정의

---

## Notion API Rules

- **클라이언트에서 직접 Notion API 호출 금지** — API 키가 번들에 노출됨
- Notion API 호출은 반드시 Vercel Edge Functions(서버사이드)에서만 수행
- 환경변수는 반드시 `VITE_` 접두사 사용 (Vite 클라이언트 노출 변수)
  - `VITE_NOTION_API_KEY`
  - `VITE_NOTION_WEDDING_PAGE_ID`
  - `VITE_NOTION_BUFFET_DB_ID`
- `.env` 파일은 `.gitignore`에 포함 — 커밋 금지
- `.env.example`에는 키 값 없이 변수명만 기재

```ts
// src/lib/notion.ts 구조
export async function fetchWeddingInfo(): Promise<WeddingInfo> { ... }
export async function fetchBuffetMenu(): Promise<BuffetItem[]> { ... }
// API 오류 시 빈 데이터 fallback 반환 (throw 금지)
```

---

## Hooks Rules

- `src/hooks/useWeddingData.ts` — `loading`, `error`, `data` 세 가지 상태 반드시 포함
- `fetchWeddingInfo`와 `fetchBuffetMenu`는 병렬 호출 (`Promise.all`)
- `use-theme.ts` — 다크모드 상태를 `localStorage('theme')`에 저장

---

## shadcn Component Rules

- 새 컴포넌트 추가: `npx shadcn add <component-name>`
- 수동으로 `src/components/ui/`에 파일 작성 금지
- 기존 shadcn 컴포넌트 수정 시 해당 파일 직접 편집

---

## Key File Interaction Map

| 작업 | 수정해야 할 파일 |
|------|----------------|
| 새 페이지 추가 | `src/App.tsx`, `src/components/layout/Header.tsx`, `src/pages/NewPage.tsx` |
| 새 디자인 토큰(색상 등) 추가 | `src/index.css` |
| 새 Notion API 함수 추가 | `src/lib/notion.ts`, `src/types/wedding.ts`, `src/hooks/useWeddingData.ts` |
| 새 shadcn 컴포넌트 추가 | `npx shadcn add` 실행 후 `src/components/ui/` 자동 생성 |
| 환경변수 추가 | `.env`, `.env.example` (값 없이) |

---

## Prohibited Actions

- `tailwind.config.ts` 생성 금지
- 클라이언트 코드에서 `process.env.NOTION_*` 직접 참조 금지 (반드시 `VITE_` 접두사)
- `.env` 파일 git 커밋 금지
- Notion API 키를 컴포넌트나 훅에서 직접 사용 금지
- `src/components/ui/` 파일 수동 생성 금지 (shadcn CLI 사용)
- App.tsx와 Header.tsx의 `Page` 타입 불일치 상태 방치 금지
- TypeScript strict 오류 무시하고 `@ts-ignore` 남용 금지
- 사용하지 않는 변수/import 방치 금지
