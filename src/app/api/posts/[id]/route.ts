
import { NextResponse } from "next/server"
import prisma from "@/server/db"
import type { Post } from "@prisma/client"
import { PostInput } from "@/server/schema/post.schema"
import { main } from '../route'


export const GET = async (req: Request, res: NextResponse) => {
  try {
    const category_id = req.url.split('/posts/')[1];
    await main()
    const getCategoryPosts = await prisma.post.findFirst({
      where: {
        category_id: category_id
      },
      include: {
        Category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      
    })
    if(!getCategoryPosts) 
      return NextResponse.json({message: 'no posts found'}, { status: 404 });
    return NextResponse.json({message: 'Success', getCategoryPosts}, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}