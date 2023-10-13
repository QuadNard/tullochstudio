import { NextResponse } from 'next/server';
import prisma from '@/server/db'
import type { Post  } from '@prisma/client'
import { PostInput } from '@/server/schema/post.schema'



export const POST = async (request: Request) => {
    try {
        const body = await request.json();
        const post: PostInput = body.post
        const posts = await prisma.post.create({
            data: {
                ...post,
                author_id: "cln6elrco0000um923vawxm3k",
            },
    })
      return NextResponse.json(posts, {status: 200})
    } catch (error) {
       return NextResponse.json({ message: 'could create post ' }, {status: 500})
    }
}


export const GET = async () => {
    try {
        const getPosts = await prisma.post.findMany({
          include: {
            Category: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        });
        return NextResponse.json(getPosts, {status: 200})
    } catch (error) {
        return NextResponse.json({ message: 'could not get posts' }, {status: 500})
    }
}