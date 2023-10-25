import About from "../components/about/About"
import Projects from "../components/projects/Projects"
import Headers from "../components/header/header"

export default function Home() {
  return (
    <div id="pageWrapper" className="pb-30 m-auto w-fit max-w-6xl gap-16 p-2">
      <Headers />
      <div className="flex flex-col items-center justify-center">
        <About />
        <Projects />
      H</div>
    </div>
  )
}
