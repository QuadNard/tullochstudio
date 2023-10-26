import About from "../components/about/About"
import Projects from "../components/projects/Projects"
import Headers from "../components/header/header"
import Footer from "../components/footer/Footer"
import Contact from "../components/contact/Contact"
import PreLoader from "../components/loader/Preloader"
import { Suspense } from "react"

export default function Home() {
  return (
    <>
      <PreLoader />
      <div id="pageWrapper" className="pb-30 m-auto w-fit max-w-6xl gap-16 p-2">
        <Headers />
        <div className="flex flex-col items-center justify-center">
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Projects />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </>
  )
}
