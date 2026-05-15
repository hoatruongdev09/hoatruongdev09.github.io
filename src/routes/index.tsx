import Footer from '#/components/footer.component'
import Intro from '#/components/intro.component'
import MainContent from '#/components/main-content.component'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })


function Home() {
  return (
    <>
      <div className="p-8 flex flex-col gap-0 md:flex-row md:gap-4">
        <div className="relative">
          <Intro />
        </div>
        <MainContent />
      </div>
    </>
  )
}
