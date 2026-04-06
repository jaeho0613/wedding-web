# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

- PRD 문서: @docs/PRD.md
- 개발 로드맵: @docs/ROADMAP.md

## 명령어

```bash
# 개발 서버 시작
npm run dev

# 프로덕션 빌드 (TypeScript 타입 체크 포함, dist/ 디렉토리 생성)
npm run build

# 빌드 결과물 미리보기
npm run preview

# shadcn 컴포넌트 추가
npx shadcn add <component-name>
```

## 아키텍처 개요

라우터 없이 `App.tsx`의 `useState`로 페이지를 전환하는 단일 페이지 앱이다. `currentPage` 상태값('home' | 'showcase')에 따라 `HomePage` 또는 `ShowcasePage`를 조건부 렌더링한다.

### 디렉토리 구조

- `src/pages/` — 전체 페이지 단위 컴포넌트 (HomePage, ShowcasePage)
- `src/components/layout/` — 레이아웃 컴포넌트 (Header)
- `src/components/ui/` — shadcn 기반 재사용 UI 컴포넌트
- `src/hooks/` — 커스텀 훅 (`use-theme.ts`: 다크모드 토글 및 localStorage 저장)
- `src/lib/utils.ts` — `cn()` 유틸 함수 (clsx + tailwind-merge)

### 경로 별칭

`@/`는 `src/`를 가리킨다. (vite.config.ts에서 설정)

### 스타일링

Tailwind CSS v4를 사용하며, `@tailwindcss/vite` 플러그인 방식이다. `tailwind.config.ts`는 사용하지 않는다. 모든 디자인 토큰(색상, radius 등)은 `src/index.css`의 CSS 변수로 정의되어 있다. 다크모드는 `document.documentElement`에 `.dark` 클래스를 추가/제거하는 방식으로 동작한다.

### UI 컴포넌트

shadcn/ui 기반 컴포넌트들이 `src/components/ui/`에 위치한다. 아이콘은 `lucide-react`와 `@tabler/icons-react`를 함께 사용한다. 폰트는 Geist Variable(본문)과 Raleway Variable(헤딩)이다.

## TypeScript 설정

TypeScript strict 모드가 활성화되어 있어 다음 규칙이 적용된다:
- `noUnusedLocals`, `noUnusedParameters` — 사용하지 않는 변수/매개변수 금지
- `noFallthroughCasesInSwitch` — switch문의 fallthrough 방지
- 이 규칙들을 위반하면 빌드가 실패한다.

## 새로운 페이지 추가

1. `src/pages/`에 새 파일 작성 (예: `src/pages/NewPage.tsx`)
2. `src/App.tsx`에서:
   - `Page` 타입에 새 페이지명 추가 (예: `type Page = 'home' | 'showcase' | 'newpage'`)
   - Header에서 해당 페이지로 네비게이션할 버튼 추가
   - 조건부 렌더링 추가

## 상태 관리

현재 props drilling 패턴으로 상태를 관리한다. `App.tsx`에서 `useState`로 상태를 관리하고 필요한 props를 하위 컴포넌트에 전달한다. Context API나 외부 상태 관리 라이브러리를 추가할 때는 이 패턴을 검토하고 필요에 맞게 리팩토링한다.
