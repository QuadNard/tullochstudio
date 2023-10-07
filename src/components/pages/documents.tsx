'use client';

import LocalFonts from 'next/font/local';
import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs'
import { gsap } from 'gsap';



const titleFont = LocalFonts({ src: '../../fonts/subFont/new-york-small-bold.woff2'})
const subFont = LocalFonts({ src: '../../fonts/subFont/new-york-small-regular.woff2'})



const DocsPage = () => {

/*  
const manageMouseEnter = (e: any, index: any) => {
    gsap.to(e.target, {top: "-2vw", backgroundColor:  ,duration: 0.3})
  }

  const manageMouseLeave = (e:any, index: any) => {
    gsap.to(e.target, {top: "0", backgroundColor: "transparent", duration: 0.3, delay: 0.2})
  }
*/



    return (
        <div className='pageWrapper'>
                <div className='boxSection'>
              <div className='text-left md:text-right p-6'>
                        <p className='text-sm pb-3 text-[#6f6f6f]'>
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                        }).format(Date.now())}
                    </p>
                    <span className='text-5xl text-[#171717] leading-tight'>
                        The Power of Keys <motion.span 
                            animate={{
                            color: ["#7b1fa2", "#673ab7", "#f48fb1", "#a4dbe8"]
                            }}
                            transition={{ duration: 8, repeat: Infinity }}
                        className=''>in Framer Motion</motion.span>
                    </span>
                    <p className='pt-8'> 
                        The mystical attribute in SVG paths is actually a series of small commands. 
                        In this guide, we'll take a look at each path 
                        command and how we can use them to draw icons. 
                        </p>
                        <button className=' text-[#6f6f6f] pt-8'>
                            <div className='flex item-center gap-4 hover:text-blue-300'>
                                <h1>Login</h1>
                            <BsArrowUpRight />
                            </div>
                        </button>
                    </div>
                </div>
                <div className='boxSectionTwo'>
                  <motion.div className='flex flex-col items-center justify-center'>
          
                  </motion.div>
                </div>
        </div>
    )
} 

export default DocsPage;

/* 

                    {categories.map((category, index) => (
                      <ul className='flex w-full justify-between items-center 
                      cursor-pointer border-t-2 border-black p-8 transition-all duration-300 
                      hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] 
                      active:translate-y-[0px] ' 
                  
                  onMouseEnter={(e) => {manageMouseEnter(e, index)}} onMouseLeave={(e) => {manageMouseLeave(e, index)}} key={index}
                      >
                        <li className='flex space-x-24'>
                          <p className='md:text-2xl'>
                            {category.name}
                          </p>
                          <span className='text-xs'>Design & Development</span>
                        </li>
                      </ul>
                    ))}
                      


*/