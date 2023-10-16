import Button from '@/components/lib/button';
import { Mdx } from '@/components/lib/mdx';
import { formatDate } from '@/lib/utils';
import { allPosts } from 'contentlayer/generated';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { FaBeer } from 'react-icons/fa';
import Balancer from 'react-wrap-balancer';



function Writing({params}: {params: any}) {
    const post = allPosts.find((post) => post.title === params.id);
     
     

    return (
      <div className='antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto'>
         <div className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
        <h1 className="font-bold text-2xl tracking-tighter max-w-[650px]">
               <Balancer>{post?.title}</Balancer>
         </h1>
               <div className='flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]'>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {post?.date ? formatDate(post.date) : ''}
              </p>
              <Suspense>
                    <Button
                      icon={<FaBeer width={12} height={12} color={"#000"} />}
                      label="hello"
                      className="default"
                      size="default"
                      raduis="sm"
                      variant="primary"
                    />
            </Suspense>
               </div>
            <Mdx code={post?.body.code ?? ''} />
           </div>
        </div>
    )
}

export default Writing