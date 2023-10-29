import About from "../components/about/About"
import Projects from "../components/projects/Projects"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Contact from "../components/contact/Contact"
import PreLoader from "../components/loader/Preloader"
import { Suspense } from "react"
import LocalFonts from "next/font/local"

const h1Font = LocalFonts({
  src: '../../public/fonts/subFonts/new-york-small-regular.woff2'
})

export const boldFont = LocalFonts({
  src: '../../public/fonts/subFonts/new-york-small-bold.woff2'
});

export const mediumFont = LocalFonts({
  src: '../../public/fonts/subFonts/new-york-small-medium.woff2'
})

const italicFont = LocalFonts({
  src: '../../public/fonts/subFonts/new-york-small-medium-italic.woff2'
})

export default function Home() {
  return (
    <>
      <PreLoader />
      <div id="pageWrapper" className="pb-30 m-auto w-fit max-w-6xl gap-16 p-2">
        <Header mediumFont={mediumFont} boldFont={boldFont} h1Font={h1Font} />
        <div className="flex flex-col items-center justify-center">
          <Suspense fallback={<div>Loading...</div>}>
            <About h1Font={h1Font} mediumFont={mediumFont}  />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Projects h1Font={h1Font} mediumFont={mediumFont} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Contact h1Font={h1Font} mediumFont={mediumFont} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Footer h1Font={h1Font} mediumFont={mediumFont} />
          </Suspense>
        </div>
      </div>
    </>
  )
}
