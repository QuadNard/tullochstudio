'use client'

// learned from https://samuelkraft.com/blog/segmented-control-framer-motion
import * as React from 'react'
import { LoadingSpinner } from '../lib/loader';
import { TitleBar } from './title-bar';
import Button from '../lib/button';
import { FaBeer } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { LayoutGroup, motion } from "framer-motion"
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import { PostDetail } from '../pages/post';







interface ListContainerProps {
    onRef: (ref: any) => void;
    children: React.ReactNode;
}

interface WritingTitlebarProps {
    children?: React.ReactNode;
    scrollContainerRef: any
    data?: Array<any>;
   trailingAccessory?: Function 
}

interface PostListItemProps {
    post: any;
    active: boolean;
}

interface ListItemProps {
    title: string;
    active: boolean;
    href: string;
    as: string;
    description?: string | React.ReactElement; 
    byline?: string | React.ReactElement; 
    leadingAccessory?: string|  React.ReactElement;
    onClick?: (e: any) => void;
}


function ListContainer({onRef, children, ...rest}: ListContainerProps) {
    const scrollContainerRef = React.useRef(null);

    React.useEffect(() => {
        onRef(scrollContainerRef)
    }, [scrollContainerRef])

    return (
    <div 
      ref={scrollContainerRef}
      className="relative h-full max-h-screen min-h-screen w-full flex-none overflow-y-auto border-r border-gray-150 bg-white dark:border-gray-800 dark:bg-gray-900 lg:w-80 lg:bg-gray-50 lg:dark:bg-gray-900 xl:w-96"
    {...rest}
    >
        {children}
    </div>
    )
}

function WritingTitlebar({scrollContainerRef, children, data}: WritingTitlebarProps) {

    
    function trailingAccessory() {
        return (
            <div className='flex space-x-2'>
                <Button icon={<FaBeer width={12} height={12} color={'#000'} />}  label='hello' className='default' size='default' raduis='sm' variant='primary'  />
            </div>
        )
    };

    function getChildren() {
        const [activeTabIndex, setActiveTabIndex] = React.useState(0);
    
    function onChange(index: number) {
            setActiveTabIndex(data?.[index].id);
    }
        

        return (
            <div className='pt-2 pb-1'>
                <LayoutGroup>
                {data?.map((posts: any, index: number) => {
                        if(posts.id === '' || posts.id === undefined) {
                            return (
                                <p key={posts.id} className='flex flex-1 items-center justify-center'>
                                    Not Found 
                                </p>
                            )
                        } 
                        return (
                    <ol 
                    key={index}
                    className={`flex list-none rounded-md bg-black bg-opacity-5 p-1 dark:bg-white dark:bg-opacity-5`}>
                    <motion.li
                    className='relative flex-1 leading-none'
                    >
                        <button
                        onClick={() => onChange(index)}
                        type='button'
                        className={`relative w-full cursor-pointer bg-transparent px-4 py-1.5 text-xs font-semibold leading-none ${
                activeTabIndex 
                    ? `text-black text-opacity-100 dark:text-white`
                    : `text-black text-opacity-60 hover:text-opacity-100 dark:text-white`
                }`}
                        >
                            {activeTabIndex && (
                                <motion.div 
                                    layoutId='SegmentedControlActive'
                                    className='z-1 absolute top-0 bottom-0 left-0 right-0 rounded bg-white shadow-sm content-none dark:bg-gray-700'
                                />
                            )}
                            <span className='z-2 relative p-1'>{posts.title}</span>
                        </button>
                    </motion.li>
                </ol>
                )})}
                </LayoutGroup>
            </div>
        )
    }
    return (
        <TitleBar trailingAccessory={trailingAccessory()}
            title="Writing"
            scrollContainerRef={scrollContainerRef}>
               {getChildren()}
        </TitleBar>
    )
}


function ListItem({ 
title,
description,
byline,
href,
as,
active,
leadingAccessory,
onClick,
}: ListItemProps ) {
    
        return (
            <div  
            onClick={onClick && onClick}
            className={`flex space-x-3 border-b border-gray-100 py-3 px-3.5 text-sm dark:border-gray-900 lg:rounded-lg lg:border-none lg:py-2  ${
                     active
          ? 'bg-black dark:bg-gray-700'
          : 'sm:hover:bg-gray-200 sm:dark:hover:bg-gray-800'
            }`}
           >
            <div className='flex flex-col justify-center space-y-1'>
                <div
                className={`font-medium line-clamp-3 ${
            active ? 'text-white' : 'text-gray-1000 dark:text-gray-100'
          }`}
                >
                    {title}
                </div>
                {description && (
                    <div
                    className={`line-clamp-2 ${
              active
                ? 'text-white text-opacity-80'
                : 'text-gray-1000 text-opacity-60 dark:text-white'
            }`}
                    > 
                        {description}
                    </div>
                )}
                {byline && (
                    <div
                    className={`line-clamp-1 ${
                    active
                ? 'text-white text-opacity-60'
                : 'text-gray-1000 text-opacity-40 dark:text-white dark:text-opacity-60'
            }`}
                    >
                        {byline}
                    </div>
                )}
            </div> 
        </div>
        )
}


const PostListItem = React.memo<PostListItemProps>(({post, active}) => {
    
    const published = formatDate(post.createdAt)
    
    return (
          <ListItem 
           key={post.id}
            title={post.title}
            active={active}
            href={'/writing/[id]'}
            as={`/writing/${post.id}`}           
            description={post.short_description}
            byline={published}        
          />
        );
    })





export default function WritingNav() {
     
    const params = useParams();
    const router = useRouter();

    const {data: post} = useQuery({
        queryKey: ['getPosts'],
        queryFn: async () => {
            const { data } = await axios.get('/api/posts');
            return data;
        }
    })

    const filtered = post?.filter((posts: any) => posts.category_id === params.id)

    let [scrollContainerRef, setScrollContainerRef] = React.useState(null);
    
    return (
        <div className='w-full flex'> 
        <ListContainer onRef={setScrollContainerRef}>
                <div className='lg:space-y-1 lg:p-3'>
                    {filtered?.map((posts: any, idx: number) => {
                        const active = posts.id;
                        if(posts.id === '' || posts.id === undefined) {
                            return (
                                <p key={idx} className='flex flex-1 items-center justify-center'>
                                    Not Found 
                                </p>
                            )
                        } else {
                            return (
                                <PostListItem key={idx} post={posts} active={active} />
                            )
                        }
                    }
                    )}
                </div>
        </ListContainer>
                <div className='bg-dots hidden lg:flex min-h-screen w-full'>
                            <PostDetail slug={filtered}  />
                </div>
        </div>
    )
}

/* 
  <Link  href={href} as={as} passHref>
  </Link>
*/