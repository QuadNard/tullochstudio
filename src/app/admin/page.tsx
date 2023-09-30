"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { useState } from 'react';
import { FormPost } from '@/components/clients/Form';



export default  function Dashboard() {
     const { data: session, status } = useSession();
     const router = useRouter();
     const [showLaughing, setShowLaughing] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setShowLaughing(true);
        }, 1000)
    })



     if(session === null || session?.user.role === 'ADMIN'){
        router.push("/");
    }
        return (
            <div className='grid place-items-center h-screen'>
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
                      <FormPost />
                    </motion.div>
                    
                )}
              </motion.div>
            </div>
        )

}
