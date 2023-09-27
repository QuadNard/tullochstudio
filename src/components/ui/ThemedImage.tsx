"use client";


import Image from 'next/image';
import { useTheme } from 'next-themes';


export default function ThemedImage() {
    const { resolvedTheme } = useTheme();
     let href: string = '/imgs/out1.gif'; 
     let wid:  number = 50;
     let hei:  number = 50;
    
    switch (resolvedTheme) {
        case 'light':
            href = '/imgs/out1.gif'
            wid = 50;
            hei = 50;
            break;
        case 'dark':
            href = '/imgs/ball.gif'
            wid = 40;
            hei = 40;
            break;
    }


   return (
    <Image  loading="lazy" src={href} alt="logo" width={wid} height={hei} className="rounded-full" />
   )
}
