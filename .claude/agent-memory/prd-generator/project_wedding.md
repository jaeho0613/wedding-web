---
name: 웨딩 청첩장 프로젝트 현황
description: 모바일 웨딩 청첩장 웹 서비스 프로젝트의 기술 스택과 핵심 결정사항
type: project
---

PRD 초안 작성 완료 (2026-04-04). 파일 위치: `docs/PRD.md`

**확정된 기술 선택:**
- Frontend: React 19 + TypeScript + Tailwind CSS v4 + Shadcn/ui (기존 코드베이스)
- CMS: Notion API (`@notionhq/client`)
- 하객 사진 저장소: Supabase Storage 무료 티어
- API 키 보호: Vercel Edge Functions 경유
- 배포: Vercel

**MVP 범위:**
1. Notion에서 결혼식 정보 fetching 및 표시
2. 하객 사진 업로드 (Supabase Storage, 즉시 표시)
3. 결혼식장 뷔폐 메뉴 표시
4. 반응형 디자인 (모바일 우선)

**미결정 사항:**
- 웨딩 갤러리 사진 저장 위치 (Notion URL vs. Supabase vs. 하드코딩)
- Notion 뷔폐 메뉴 형식 (별도 DB vs. 페이지 본문 Markdown)
- 하객 사진 관리자 삭제 기능 (Phase 2)

**Why:** 결혼식 정보를 비개발자(신랑/신부)가 직접 수정 가능하게 하고, 하객 사진 공유 공간 제공.
**How to apply:** Notion API 관련 작업 시 API 키를 절대 클라이언트에 노출하지 않도록 Edge Function 경유를 항상 유지.
