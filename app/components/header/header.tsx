import LocalFonts from "next/font/local"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

const TitleFont = LocalFonts({
  src: "../../../public/fonts/subFonts/new-york-small-bold.woff2",
})

const SubTitleFont = LocalFonts({
  src: "../../../public/fonts/subFonts/new-york-small-medium.woff2",
})

function Links() {
  return (
    <div className="hidden list-none gap-4 md:flex">
      <Link
        href="/"
        data-type="button"
        className="ia group flex  w-fit items-center gap-4"
        aria-label="Button to about page"
      >
        <button
          type="button"
          className="flex  h-8 w-8 items-center justify-center before:absolute before:h-8 before:w-8 before:rounded-full before:border before:border-crftd-gray before:transition-all before:duration-300 before:ease-out group-hover:before:h-12 group-hover:before:w-12 group-hover:before:border-0 group-hover:before:bg-[#75d5b9]"
        >
          <Github className="absolute h-5 w-5" />
        </button>
      </Link>
      <Link
        href="/"
        data-type="button"
        className="ia group flex w-fit items-center gap-4"
        aria-label="Button to about page"
      >
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center before:absolute before:h-8 before:w-8 before:rounded-full before:border before:border-crftd-gray before:transition-all before:duration-300 before:ease-out group-hover:before:h-12 group-hover:before:w-12 group-hover:before:border-0 group-hover:before:bg-[#75d5b9]"
        >
          <Linkedin className="absolute h-5 w-5" />
        </button>
      </Link>
    </div>
  )
}

const Header = () => {
  return (
    <div className="flex items-center pb-16 pt-16 md:mb-[4rem] md:justify-between md:space-x-64 md:p-16">
      <Links />
      <h1
        className={`text-5xl leading-tight antialiased ${TitleFont.className}`}
      >
        TullochStudio
        <span
          className={`mt-[0.5rem] block text-center text-sm text-[#6f6f6f] ${SubTitleFont.className}`}
        >
          by Justin Tulloch
        </span>
      </h1>
      <div className="hidden md:flex">
        <button
          type="button"
          className="inline-flex w-full transform items-center justify-center 
                    rounded-full border-2 border-black bg-transparent px-8 py-2 
                     text-center text-sm text-black shadow-[5px_5px_black] transition 
                    duration-200 ease-in-out hover:bg-[#75d5b9] hover:shadow-none focus:outline-none"
        >
          Button
        </button>
      </div>
    </div>
  )
}

export default Header
