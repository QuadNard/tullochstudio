"use client";

import React from 'react';
import FadeUp from './ui/FadeUp';
import { gsap } from 'gsap';

const sections = [
    {
        title: 'Introduction',
        color: '#DCF018'
    },
       {
        title: 'Los Angeles',
        color: '#18F0E8'
    },
       {
        title: 'Sanfrancisco',
        color: '#8C0CF0'
    },
       {
        title: 'Los Angeles',
        color: '#F01830'
    },
       {
        title: 'Los Angeles',
        color: '#F0BA18'
    },
]


export default function Docs() {
      const manageMouseEnter = (e: any, index: any) => {
    gsap.to(e.target, {top: "-2vw", backgroundColor: sections[index].color, duration: 0.3})
  }

  const manageMouseLeave = (e:any, index: any) => {
    gsap.to(e.target, {top: "0", backgroundColor: "white", duration: 0.3, delay: 0.1})
  }


    return(
        <section id='Docs' className='flex w-full h-screen p-10 justify-center'>
       <div className='flex flex-col'>
         <FadeUp> 
                 <h1 className="text-5xl flex flex-col items-center pt-14">DOCS</h1>

          </FadeUp>
        
           <div className='mt-10 grid md:grid-cols-2 gap-20 place-items-center'>
             {/* Left Side */}
            <div className='flex flex-col gap-6 xl:gap-10 '>

                <h1 className='text-2xl sm:text-4xl mb-5 text-slate-950 font-poppins font-extrabold flex flex-wrap'>
                    hello
                </h1>
                <p className='text-lg mb-7 text-black'> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book.</p>
            </div>
            {/* Right Side */}
            <div className='w-full relative flex space-x-3 justify-center items-center'>
                  <div className='container'>
        <div className='projectContainer'>
            {
              sections.map( (section, index) => {
                return <div onMouseEnter={(e) => {manageMouseEnter(e, index)}} onMouseLeave={(e) => {manageMouseLeave(e, index)}} key={index}>
                  <p>{section.title}</p>
                </div>
              })
            }
        </div>
    </div>
            </div>
           </div>
       </div>
        </section>
    )
}