"use client";


import React, { useState, useEffect } from 'react';
import { motion, useCycle, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Link {
  name: string;
  to: string;
  id: number;
}


const links: Link[] = [
  { name: "HOME", to: "#Home", id: 1,},
  { name: "PROJECTS", to: "#Projects", id: 2,},
  { name: "DOCS", to: "#Docs", id: 3, },
  { name: "CONTACT", to: "#Contact", id: 4,},
];




export default function Header() {
    const [toggle, setToggle] = useState(false);
    const [open, cycleOpen] = useCycle(false, true);
    const [scrolled, setScrolled] = useState(false);




    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200){
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }; 

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    let navbarClasses = ['app__navbar'];
    if (scrolled) {
        navbarClasses.push('scrolled');
    }

    return(
        <nav
        className={navbarClasses.join(' ')}>
        <div className=''>
            <Image src='/imgs/out1.gif' alt='logo' width={50} height={50} />
        </div>
               {/* The Navbar on large screens */}
      <div className="hidden pr-6 lg:inline-flex ">
        {links.map(({ name, to, id }) => (
          <a
            key={id}
            href={to}
            className="px-6 py-3 text-xl text-gray-800 transition duration-100 ease-in-out transform hover:text-blue-400 hover:scale-105"
          >
            {name}
          </a>
        ))}
      </div>
        </nav>
    )
}