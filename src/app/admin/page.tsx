"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { boolean } from 'zod';
import Image from 'next/image';
import { useState } from 'react';



export default  function Dashboard() {
     const { data: session, status } = useSession();
     const router = useRouter();
     const [showLaughing, setShowLaughing] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setShowLaughing(true);
        }, 1000)
    })



     if(session === null || session?.user.is_admin === false){
        router.push("/");
    }
        return (
            <div className='grid place-items-center h-screen bg-zinc-900'>
              <motion.div className='px-4'>
                <motion.h1 className='text-3xl text-zinc-400 text-center mb-2 uppercase font-black'
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                >
                    Welcome to admin panel
                </motion.h1>
                {showLaughing && (
                    <motion.div
                        initial={{ scale: 0}}
                        animate={{ scale: 1}}
                        transition={{ type: "tween", duration: 1}}
                    >
                        <Image src='/imgs/laughing.gif' width={200} height={200} layout='responsive' alt='laughing'  objectFit="contain"/>4
                        <form className='flex flex-col gap-5'>
                            <div className='grid grid-cols lg:grid-cols-2 gap-5'>
                                <div className='flex flex-col'>
                                    <label htmlFor="title" className="text-white">
                                        Title
                                    </label>
                                    <input
                                    id="title"
                                    type='text'
                                    placeholder='Title'
                                    className='placeholder-transparent bg-[bisque] dark:bg-zinc-800 text-zinc-800 dark:text-white'
                                    />
                                    <p className="text-sm text-red-500"></p>
                                </div>
                            </div>
                        </form>
                    </motion.div>
                    
                )}
              </motion.div>
            </div>
        )

}
