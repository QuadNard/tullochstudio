'use client'

import { allPosts, isType } from 'contentlayer/generated'
import Link from 'next/link';
import { useParams } from 'next/navigation'
import { formatDate } from "@/lib/utils"



const PostList = () => {
    const perimeter = useParams();
 
   
    const filtered = allPosts?.filter((post: any) => post.category === perimeter.slug)

    return (
       <section>
         <h1 className="font-bold text-2xl mb-8 tracking-tighter">Writings</h1>
         {filtered?.map((post: any, idx) => (
       <div className='lg:space-y-1 lg:p-3' key={idx}>
            <Link href={`/writing/${post.title}`} className='flex space-x-3 border-b border-gray-100 py-3 px-3.5 text-sm dark:border-gray-900 lg:rounded-lg lg:border-none lg:py-2 sm:hover:bg-gray-200 sm:dark:hover:bg-gray-800'>
                <div className='flex flex-col justify-center space-y-1'>
                    <div className='font-medium line-clamp-3'>
                       {post.title}
                    </div>
                    <div className='line-clamp-2'>
                        {post.description}
                    </div>
                    <div className='line-clamp-1'>
                            {formatDate(post.date)}
                    </div>
                </div>
            </Link>
       </div>
       ))}
       </section>
    )
}

export default PostList