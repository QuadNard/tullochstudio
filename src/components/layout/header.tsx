import LocalFonts from 'next/font/local';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

const TitleFont = LocalFonts({ src: '../../fonts/subFont/new-york-small-bold.woff2'})
const SubTitleFont = LocalFonts({ src: '../../fonts/subFont/new-york-small-regular.woff2'})

function Links() {
    return (
        <div className='list-none gap-4 md:flex hidden'>
            <Link href=''>
                <Github className='h-6 w-6' />
            </Link>
            <Link href='' className=''>
                <Linkedin className='h-6 w-6' />
            </Link>  
        </div>
    )
}


const Header =  () => {
    return (
        <div className='flex md:justify-between md:mb-[4rem] md:p-16 pb-16 pt-16 items-center md:space-x-64'>
                <Links />
            <h1 className={`text-5xl leading-tight antialiased ${TitleFont.className}`}>
                TullochStudio
                <span className={`text-sm text-[#6f6f6f] text-center mt-[0.5rem] block ${SubTitleFont.className}`}>by Justin Tulloch</span>
            </h1>
            <div className='md:flex hidden'>
                <button className='text-black items-center inline-flex bg-white border-2 
                    border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none 
                    hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform 
                    transition w-full px-8 py-2 text-sm'>
                        Button 
                </button>
            </div>
        </div>
    )
}

export default Header