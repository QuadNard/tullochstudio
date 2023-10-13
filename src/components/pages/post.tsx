'use client';


import React from 'react';
import { Detail } from '../layout/detail-props';
import { formatDate } from '@/lib/utils';
import { MarkdownRender } from '../layout/markdown-render';



interface PostDetailProps {
    slug: any;
}


export function PostDetail({slug}: PostDetailProps){
    const scrollContainerRef = React.useRef(null)
    const titleRef = React.useRef(null)
    

   

    return(
       <Detail.Container data-cy="post-detail" ref={scrollContainerRef}>
        {slug?.map((post: any) => {
            const Published = formatDate(post?.createdAt);

            return (
           <>
            <Detail.ContentContainer>
                <Detail.Header>
                    <Detail.Title ref={titleRef}>{post?.title}</Detail.Title>
                    <span 
                    title={post?.createdAt}
                    className="text-tertiary inline-block leading-snug"
                    >
                        {Published}
                    </span>
                </Detail.Header>

                    <MarkdownRender post={post?.content} />
                <div className="py-6" />
            </Detail.ContentContainer>   
            {/* bottom padding to give space between post content and comments */}  
        </>      
            )
    })}
       </Detail.Container>
    )
}