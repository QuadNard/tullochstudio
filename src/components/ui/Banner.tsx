"use client";

import React, {useState, useEffect, useRef} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import random from '@/utils/random';
import Link from "next/link";
import MagnetFramer from './magnetEffect';


export const ActiveBar: React.FC = () => {
    const possibleStatus: string[] = ["active", "inactive", "away", "busy"];
    const [status, setStatus] = useState<string>('active')
    
    useEffect(() => {
        // Update the status on the client only
  setStatus(possibleStatus[random(0, possibleStatus.length - 1)]);
    })

    // Define a mapping of text colors based on status
  const textColorClasses: Record<string, string> = {
    active: 'text-green-500',
    inactive: 'text-gray-500',
    away: 'text-blue-500',
    busy: 'text-red-500',
  };

  // Determine the text color class based on the current status
const textColorClass = textColorClasses[status] || 'text-gray-500';
    return(
        <div className=' flex flex-row'>
         <div className={`m-1 status-${status}`}>
        {/* Add your custom content or functionality for each status here */}
        {status === "active" && 
        <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        }
        {status === "inactive" && 
        <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-500"></span>
        </span>
    }
        {status === "away" && 
        <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
        </span>
        }
        {status === "busy" && 
        <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        }
       </div>
        <p className={`text-sm ${textColorClass}`}>
        {status}
      </p>
    </div>
    )
 }


const HeaderHero = () => {
   

   
    return(
        <>
        <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1, }}
            className='text-black text-sm sm:text-lg lg:text-xl mb-3 font-semibold'
        >
            Frontend Developer | Backend Developer 
        </motion.h3>
        <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: {type: 'spring', damping: 5, stiffness: 100, restDelta: 0.001,},}}
            className='text-3xl mt-4 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r dark:from-white from-[#383127] to-[#90867D] dark:to-neutral-700 text-center '
        >
            Full Stack Developer
        </motion.h1>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1, }}
            className='flex flex-wrap space-x-4 justify-center'
        >
          
        </motion.div>
         
        </>
    )
}

const IntroLink = ({ to, image, text}: { to: string, image: string , text: string}) => {
    return(
        <div className='sm:pb-32 sm:pt-2 lg:pt-0'>
            <Link href={to}>
                <MagnetFramer>
                <div className='rounded-full w-32 flex justify-center items-center py-12 mx-1 my-1 lg:my-0 lg:mx-14'>
                     <Image src={image} width={50} height={50} className='w-24' alt={text} />
                </div>
                </MagnetFramer>
            </Link>
        </div>
    )
}





const BannerIntro = () => {
  

    return(
        <div className='flex flex-col justify-center items-center mt-24'>
            <HeaderHero />
             <div className='flex flex-col sm:flex-row flex-wrap pb-14 pt-14 sm:pt-0 sm:pb-0'>
                <div className='flex flex-row'>
                    <motion.div initial={{ y: -1000 }} animate={{ y: 0 }} transition={{   duration: 1,    delay: 1.2, type: "spring",}}>
                    <IntroLink 
                        to={'https://www.apple.com/'}
                        image={'/discord-v2.svg'}
                        text={'Discord'}
                        />
                    </motion.div>
                    <motion.div initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.8, type: "spring",}} className="md:hidden sm:pt-16">
                        <IntroLink 
                        to={'https://www.apple.com/'}
                        image={'/linkedin-v2.svg'}
                        text={'Github'}
                        />
                    </motion.div>
                </div>
                <div className='sm:pt-16 flex flex-row'>
                    <motion.div initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.8, type: "spring",}} className="hidden md:flex">
                    <IntroLink 
                        to={'https://www.apple.com/'}
                        image={'/linkedin-v2.svg'}
                        text={'Linkedin'}
                        />
                    </motion.div>
                    <motion.div initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.5, type: "spring",}}>
                        <IntroLink 
                        to={'https://www.apple.com/'}
                        image={'/github-v2.svg'}
                        text={'Github'}
                        />
                    </motion.div>
                    <motion.div initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1, type: "spring",}} className="sm:-mt-14">
                        <IntroLink 
                        to={'https://www.apple.com/'}
                        image={'/twitter-v2.svg'}
                        text={'Twitter'}
                        />
                    </motion.div>
                </div>
                
            </div>
            <motion.div initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1, type: "spring",}}>
                <div className='arrow-scroll'>
                    <div className='arrow'></div>
                    <div className='arrow'></div>
                    <div className='arrow'></div>
                </div>
            </motion.div>
        </div>
    )
}

export default BannerIntro;