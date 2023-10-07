'use client';

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react';

type AnimatedTextProps = {
    text: string | string[];
    el?: keyof JSX.IntrinsicElements;
    className?: string;
    once?: boolean;
    repeatDelay?: number;
}

const defaultAnimations = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.1,
        },
    },
};


export const AnimatedText = ({
    text,
    el: Wrapper = 'p',
    className,
    once, 
    repeatDelay,
}: AnimatedTextProps) => {
    const controls = useAnimation();
    const textArray = Array.isArray(text) ? text : [text];
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once });

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const show = () => {
            controls.start('visible');
            if (repeatDelay) {
                timeout = setTimeout(async () => {
                await controls.start('hidden');
                controls.start('visible');
                }, repeatDelay);
            }
        };

        if (isInView) {
            show();
        } else {
            controls.start('hidden');
        }
        return () => clearTimeout(timeout);
    }, [isInView]);







    return (
        <Wrapper className={className}>
            <span className='sr-only'>{text}</span>
            <motion.span 
            ref={ref}
            initial='hidden' 
            animate={isInView ? 'visible': 'hidden'} 
            variants={{
                visible: { transition: { staggerChildren: 0.1 }},
                hidden: {},
            }}
            aria-hidden
            >
                {textArray.map((line, i) => (
                    <span className='block' key={i}>
                        {line.split("").map((word, idx) => (
                            <span className='inline-block' key={idx}>
                                {word.split("").map((char, index) => (
                                    <motion.span 
                                    className='inline-block' 
                                    key={index}
                                    variants={defaultAnimations}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                <span className='inline-block'>&nbsp;</span>
                            </span>
                        ))}
                    </span>
                ))}
            </motion.span>
        </Wrapper>
    )
}