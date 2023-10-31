"use client"

import { motion } from "framer-motion"
import { mediumFont } from "../../(routes)/page"

type AnimatedTextProps = {
  text: string
  className: string
}

const defaultAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export const AnimatedText = ({ text, className }: AnimatedTextProps) => {
  return (
    <h1 className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        transition={{
          staggerChildren: 0.1,
          delayChildren: 1,
          repeat: Infinity,
        }}
        initial="hidden"
        animate="visible"
        aria-hidden
      >
        {text.split("").map((char, charIndex) => (
          <motion.span
            variants={defaultAnimation}
            key={charIndex}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
      <span
        className={`mt-[0.5rem] block text-center text-xs text-[#6f6f6f] ${mediumFont.className}`}
      >
      web / software developer
      </span>
    </h1>
  )
}
