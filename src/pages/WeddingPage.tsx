export function WeddingPage() {
  return (
    <main className='min-h-screen'>
      {/* 1. 청첩장 메인 섹션 */}
      <section id='hero' className='flex min-h-screen items-center justify-center'>
        <p className='text-muted-foreground'>Hero Section</p>
      </section>

      {/* 2. 소개글 섹션 */}
      <section id='intro' className='py-16'>
        <p className='text-muted-foreground'>Intro Section</p>
      </section>

      {/* 3. 신랑·신부 연락처 섹션 */}
      <section id='contact' className='py-16'>
        <p className='text-muted-foreground'>Contact Section</p>
      </section>

      {/* 4. 웨딩 사진 갤러리 섹션 */}
      <section id='gallery' className='py-16'>
        <p className='text-muted-foreground'>Gallery Section</p>
      </section>

      {/* 5. 뷔폐 정보 섹션 */}
      <section id='buffet' className='py-16'>
        <p className='text-muted-foreground'>Buffet Section</p>
      </section>
    </main>
  )
}
