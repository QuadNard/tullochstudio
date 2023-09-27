
import React from 'react'
import { PiAlignBottomBold } from 'react-icons/pi'
import { links } from '@/utils/constants';
import { Container } from './ui/Container'
import Link from 'next/link';


export default function Footer(): JSX.Element {
    return(
     <div className='border-t border-slate-200 dark:border-slate-800 py-6'>
        <Container>
          <footer>
            <Container>
        <div className='flex mb-8'>
            <PiAlignBottomBold />
        <p className="text-sm text-zinc-800 dark:text-zinc-100">
        <a target="_blank" className="text-zinc-800 dark:text-zinc-100 hover:text-teal-500 dark:hover:text-teal-500 font-semibold" href="https://emojipedia.org/">Music</a> 
        <span className="text-zinc-600 dark:text-zinc-400">by</span> 
        <span className="font-semibold">Justin Kinard Tulloch</span> ⏸️{' '}
        </p>
        </div>
              <div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
                 <div className='flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200'>
                  {links.map((navigation) => (
                    <Link href={navigation.href} key={navigation.name}>
                      <h1 className='text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'>
                        {navigation.name}
                      </h1>
                    </Link>
                  ))}
                 </div>
                 <p className="text-sm text-zinc-400 dark:text-zinc-500">
                © {new Date().getFullYear()} all rights reserved.
              </p>
              </div>
            </Container>
          </footer>
        </Container>
     </div>
    )
}