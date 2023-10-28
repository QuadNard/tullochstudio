"use client"

import { animate, motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import React, { useEffect } from "react"
import TypewriterText from './Typewriter';


const PreLoader: React.FC = () => {
 const controls = useAnimation();
 


  useEffect(() => {
    const animateImage = async () => {
      await controls.start({ opacity: 1, scale: 1, transition: { type: 'spring', damping: 8, stiffness: 100 } });
      await controls.start({ opacity: 0, scale: 0.5, transition: { duration: 0.2 } });
    };
    animateImage();
  }, [controls]);

  


  return (
   <motion.div
   initial={{ y: 0, opacity: 1 }}
   animate={{ y: '100%', opacity: 0 }}
   exit={{ y: 0, opacity: 1 }}
   transition={{ duration: 8, ease: 'easeInOut'}} 
   className='fixed top-0 left-0 right-0 bottom-0 bg-[url("/imgs/pc-4.webp")] flex justify-center items-center z-[9999]'
   >
    <div className='flex flex-col items-center'>
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        animate={controls}
        src='/imgs/keyboard.webp'
        className='w-[400px]'
        alt='loading'
      >
      </motion.img>
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      >
        <TypewriterText text='Developer / Designer ' />
      </motion.div>
    </div>
   </motion.div>
  )
}

export default PreLoader

