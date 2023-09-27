"use client";

import clsx from 'clsx';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>


export const Button = ({ className, ...rest }:Props) => {
   return (
      <button 
         className={clsx(
            'bg-indigo-500 text-white',
            'md:py-2  md:px-8 px-4 leading-6',
            'rounded-full',
            'font-semibold tracking-wide',
            'cursor-pointer',
            'inline-flex items-center justify-center',
            'relative shadow',
            'transition',
            'hover:bg-indigo-600 hover:shadow-md',
            'ring-inidigo-500/70 ring-offset-2',
            'focus-visible:ring-2 focus:scale-[0.98]',
            className
         )}
         {...rest}
       />
       
   )
}

1