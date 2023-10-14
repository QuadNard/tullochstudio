'use client';

import LocalFonts from 'next/font/local';
import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs'
import { gsap } from 'gsap';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';

interface CategoryProps {
    name: string;
    slug: string;
    id: string;
}



const titleFont = LocalFonts({ src: '../../fonts/subFont/new-york-small-bold.woff2'})
const subFont = LocalFonts({ src: '../../fonts/subFont/new-york-small-regular.woff2'})



const DocsPage = () => {

 
const manageMouseEnter = (e: any, index: any) => {
    gsap.to(e.target, {top: "-2vw", backgroundColor: category?.[index].color  ,duration: 0.3})
  }

  const manageMouseLeave = (e:any) => {
    gsap.to(e.target, {top: "0", backgroundColor: "transparent", duration: 0.3, delay: 0.2})
  }



 const { data: category } = useQuery({
        queryKey: ['categories'],
        queryFn:  async () => {
            const res = await axios.get('/api/categories');
            return res.data;
        }
    });
    



    return (
        <div className='pageWrapper'>
                <div className='boxSection'>
              <div className='text-left md:text-right p-6'>
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
                                <h1>Login</h1>
                            <BsArrowUpRight />
                            </div>
                        </button>
                    </div>
                </div>
                <div className='boxSectionTwo'>
                 <h1 className='p-1 text-2xl font-bold'>👜 CATEGORIES</h1>
                  <motion.div className='flex flex-col items-center justify-center'>
                    {category?.map((categories: CategoryProps, idx: number ) => (
                      <Link href={`/writings/${categories.id}`} key={idx}>
                        <ul className='flex w-full justify-between items-center 
                      cursor-pointer border-t-2 border-black p-8 transition-all duration-300 
                      hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] 
                      active:translate-y-[0px]' 
                      onMouseEnter={(e) => {manageMouseEnter(e, idx)}} onMouseLeave={(e) => {manageMouseLeave(e)}} 
                      key={idx}>
                        <li className='flex space-x-24'>
                          
                          <p className='md:text-2xl'>
                              {categories.name}
                          </p>
                          
                          <span className='text-xs'>Design & Development</span>
                        </li>
                      </ul>
                      </Link>
                    ))}
                  </motion.div>
                </div>
        </div>
    )
} 

export default DocsPage;

