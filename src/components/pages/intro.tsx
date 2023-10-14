'use client';

import LocalFonts from 'next/font/local';
import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs'
import { IntroBoxAnimation } from '../lib/box-animation';
import { useSession } from "next-auth/react"

const TimeFont = LocalFonts({ src: '../../fonts/subFont/new-york-small-regular.woff2'})





const IntroPage = () => {
   
        
   

    return (
        <div className='pageWrapper'>
                <div className='boxSection'>
                    <div className={` text-left md:text-right p-6 ${TimeFont.className}`}>
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
                                <h1>
                            Read more
                            </h1> 
                            <BsArrowUpRight />
                            </div>
                        </button>
                    </div>
                </div>
                <div className='boxSectionTwo'>
                <div className='py-[6.4rem '>
                    <IntroBoxAnimation />
                </div>
                </div>
        </div>
    )
} 

export default IntroPage;


