"use client";

import React, { useEffect, useRef, useState } from 'react';
import FadeUp from './ui/FadeUp';
import classNames from 'classnames';
import {CiShare1} from 'react-icons/ci';
import Image from 'next/image';
import { ActiveBar } from './ui/Banner';
import { Button } from './ui/Button';

interface Project {
    id: string;
    img: string;
    title: string;
    name: string;
}

const projects: Project[] = [
    {
      id: '1',
      img: '/imgs/profile.webp',
      title: 'Project 3',
      name: 'Davis',
    },
      {
      id: '2',
      img: '/imgs/profile.webp',
      title: 'Project 1',
      name: 'Davis',
    },
      {
      id: '3',
      img: '/imgs/profile.webp',
      title: 'Project 3',
      name: 'Davis',
    },
       {
      id: '4',
      img: '/imgs/profile.webp',
      title: 'Project 3',
      name: 'Davis',
    },
]


export default function Gallery() {
  const [activeItem, setActive] = useState(0)
  const wrapperRef = useRef<HTMLUListElement>(null)
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    wrapperRef.current.style.setProperty(
      "--transition",
      "600ms cubic-bezier(0.22, 0.61, 0.36, 1)"
    );

    setTimeout(() => {
      wrapperRef.current?.style.removeProperty("--transition");
    }, 900);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  }, [activeItem]);

    return(
        <section id='Projects' className='flex w-full max-h-full p-10 justify-center'>
              <div className='flex flex-col'>
                  <FadeUp>
                    <h1 className='text-5xl flex flex-col items-center pt-14'>PROJECTS</h1>
                  </FadeUp>
                  <div>
                    <div className='mt-10 grid gap-4 text-left md:mt-20 md:grid-cols-6 md:gap-6'>
              <div className='relative z-0 grid gap-6 p-6 md:gap-8 md:p-8 bg-white/5 backdrop-blur rounded-3xl md:rounded-4xl md:col-span-3'>
               <header>
                    <h4 className='flex items-center gap-2 font-display text-xl font-semibold md:text-2xl'>
                      Global low latency
                    </h4>
                    <p className='mt-2 opacity-1  md:mt-3'>
                      Data is replicated to 8+ regions all over the world for the best latency for your users. Add/remove regions without downtime.
                    </p>
               </header>
              </div>
              <div className='relative z-0 grid gap-6 p-6 md:gap-8 md:p-8 bg-white/5 backdrop-blur rounded-3xl md:rounded-4xl md:col-span-3'>
                <header>
                  <h4 className='flex items-center gap-2 font-display text-xl font-semibold md:text-2xl'>
                    Global 
                  </h4>
                  <p className='mt-2 opacity-1 md:mt-3'>
                    Data is replicated to 8+ regions all over the world for the best latency for your users. Add/remove regions without downtime.
                  </p>
                </header>
                <div className='flex gap-1 md:gap-4'>
                  <div className='flex grow flex-col justify-center rounded-xl bg-black/20 px-4 py-2 md:h-20'>
                        <span className='text-sm opacity-40'>Requests</span>
                        <span className='text-xl text-amber-200 md:text-2xl'>12,004</span>  
                  </div>
                  <div className='flex grow flex-col justify-center rounded-xl bg-black/20 px-4 py-2 md:h-20'>
                        <span className='text-sm opacity-40'>Requests</span>
                        <span className='text-xl text-amber-200 md:text-2xl'>12,004</span>  
                  </div>
                  <div className='flex grow flex-col justify-center rounded-xl bg-black/20 px-4 py-2 md:h-20'>
                        <span className='text-sm opacity-40'>Requests</span>
                        <span className='text-xl text-amber-200 md:text-2xl'>12,004</span>  
                  </div>
                </div>
              </div>
              {/* Carousel effect */}
              <div className='relative z-0 grid gap-6 p-6 md:gap-8 md:p-8 bg-white/5 backdrop-blur rounded-3xl md:rounded-4xl md:col-span-4'>
                <div className='md:w-[900px] w-[300px] md:max-w-full '>
                    <ul ref={wrapperRef} className='flex group flex-col gap-3 md:flex-row md:h-[500px] md:gap-[1.5%]'>
                      {projects.map((project, index) => (
                        <li  
                        onClick={() => setActive(index)}
                        aria-current={activeItem === index}
                        className={classNames("relative md:w-[8%] md:first:w-[1%] md:last:w-[1%]  transition-[width]   [&[aria-current='true']]:w-[48%] rounded-2xl ",
                        "md:transition-[width] [transition:var(--transition,200ms_ease-in)]",
                        "before:hidden md:before:block before:absolute  before:top-0 before:bottom-0 before:left-[10px] before:right-[10px]",  
                        "md:hover:w-[12%]  md:[&:not(:hover),&:not(first),&:not(:last)]:group-hover:w-[7%]",
                        "last:pointer-events-none md:[&_img]:last:opacity-0 cursor-pointer"
                        )}
                        key={project.id}>
                        <div className='relative w-[300px] h-24 md:h-full md:w-full overflow-hidden md:rounded-2xl bg-transparent border md:border-none md:bg-[#c9c6c7]'>
                            <img src={project.img} alt='proj' className='rounded-2xl right-0 max-w-none absolute w-24 h-auto md:h-[500px] md:w-[590px] left-1/2 top-1/2 md:-translate-x-1/2 -translate-y-1/2 object-cover' />
                            <div
                    className={classNames(
                    "inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 before:bg-texture  after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-texture md:absolute md:transition-opacity",
                    activeItem === index ? "md:opacity-25" : "md:opacity-0"
                      )}
                      />
                      <div
                        className={classNames(
                          "md:absolute left-8 top-8 transition-[transform,opacity] p-4 md:p-0",
                          activeItem === index 
                          ? "md:translate-x-0 md:opacity-100" 
                          : "md:translate-x-4 md:opacity-0" 
                        )}
                      >
                        <p className='md:text-lg text-sm uppercase text-primary'>
                          {project.title}
                        </p>
                          <p className='text-lg md:text-4xl font-bold '>{project.name}</p>
                            <div className='md:flex  flex-col gap-4 md:mt-8'>
                                <p className='p-2 hidden md:flex text-sm md:text-md'>The Hobbits reach the The Prancing Pony inn at Bree, where Frodo uses a false name.</p>
                              <div className='md:space-x-4 md:space-y-32'>
                              <Button>
                                  <h1 className='hidden md:flex'>View Project</h1>
                                  <CiShare1 className='w-6 h-6 md:hidden' />
                              </Button> 
                              <Button>
                                  <h1 className='hidden md:flex'>View Code</h1>
                              </Button>  
                              </div>
                              <div className=' hidden md:flex flex-row gap-3 mt-3'>
                                <div>hello</div>
                                  <div>hello</div>
                              </div>
                            </div>
                      </div>
                        </div>
                        </li>
                      ))}
                    </ul>
                </div>
              </div>
              <div className='relative z-0 grid gap-6 p-6 md:gap-8 md:p-8 bg-white/5 backdrop-blur rounded-3xl md:rounded-4xl overflow-hidden md:col-span-2'>
                <figure className='flex flex-col mt-8 pt-8  rounded-md'>
                         <Image src='/imgs/me-profile.png' width={100} height={100} alt="profile-image" priority className=' bg-white/30 backdrop-blur-md border mx-auto  rounded-full w-36 h-36' />
                          <div className='flex flex-col items-center  mt-4'>
                <h1 className='text-sm font-medium text-black text-medium flex-row gap-1 flex'>
                    Justin Tulloch
                    <div className='blob'></div>
                   <ActiveBar />
                 </h1>
                <h1 className='text-md pt-8'>
                  <p>  Specialized in</p>
                 Software Engineer
                </h1> 
                </div>  
                </figure>
              </div>
          </div>
                  </div>
              </div>
                  
        </section>
    )
}