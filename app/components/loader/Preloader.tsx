"use client"

import { motion, useAnimation } from "framer-motion"
import React, { useEffect } from "react"

const PreLoader: React.FC = () => {
  const controls = useAnimation()

  useEffect(() => {
    const animatePreloader = async () => {
      // Animate the image first
      await controls.start({
        opacity: 1,
        scale: 1,
        transition: { type: "spring", damping: 8, stiffness: 100 },
      })
      await controls.start({
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.3 },
      })

      // After the image animation, slide down the preloader
      await controls.start({
        y: "100%",
        opacity: 0,
        transition: { duration: 3, ease: "easeInOut" },
      })
    }
    animatePreloader()
  }, [controls])

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={controls}
      exit={{ y: 0, opacity: 1 }}
      className='fixed bottom-0 left-0 right-0 top-0 z-[9999] flex items-center justify-center bg-[url("/imgs/pc-4.webp")]'
    >
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        animate={controls}
        src="/imgs/keyboard.webp"
        className="w-[400px]"
        alt="loading"
      ></motion.img>
    </motion.div>
  )
}

export default PreLoader
