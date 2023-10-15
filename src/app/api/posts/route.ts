import { NextResponse } from "next/server"
import prisma from "@/server/db"
import type { Post } from "@prisma/client"
import { PostInput } from "@/server/schema/post.schema"


export async function main() {
  try {
    await prisma.$connect();

  } catch (error) {
    return Error('Database connection unsuccessful')
  }
}


export const GET = async () => {
  try {
    await main()
       const getPosts = await prisma.post.findMany({
      include: {
        Category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json({message: 'Success', getPosts}, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
  
export const POST = async (req: Request, res: NextResponse) => {
  try {
    await main()
    const body = await req.json()
    const input = body as PostInput
    const createPost = await prisma.post.create({
       data: { 
        ...input, 
        author_id: 'Justin Tulloch',
       },
    })
    return NextResponse.json({message: 'Success', createPost}, { status: 201 })
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}