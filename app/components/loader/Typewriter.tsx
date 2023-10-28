import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { clearInterval, setInterval } from 'timers';


interface TypewriterTextProps {
    text: string;
}


const typewriterVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
}

const cursorVariants: Variants = {
  blink: {
    opacity: 0,
    transition: { repeat: Infinity, duration: 0.2 },
  },
};



const TypewriterText: React.FC<TypewriterTextProps> = ({ text }) => {
    const [currentText, setCurrentText] = useState<string>(""); // Initialize with an empty string
    const [showCursor, setShowCursor] = useState<boolean>(true);
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setCurrentText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust the typing speed here

    return () => clearInterval(interval);
  }, [text]);
  
  useEffect(() => {
    // Create a blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

    return(
       <div>
      <motion.span
        variants={typewriterVariants}
        initial="initial"
        animate="animate"
        className='text-white text-lg'
      >
        {currentText}
      </motion.span>
      {showCursor && (
        <motion.span
          variants={cursorVariants}
          animate="blink"
          className='text-white text-lg'
          style={{ display: "inline-block", width: "0.5em", marginLeft: "0.2em" }}
        >
          |
        </motion.span>
      )}
    </div>
    )
}

export default TypewriterText;