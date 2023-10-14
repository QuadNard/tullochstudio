import { NextResponse } from "next/server"
import prisma from "@/server/db"
import type { Post } from "@prisma/client"
import { PostInput } from "@/server/schema/post.schema"

export const GET = async () => {
  try {
    const getPosts = await prisma.post.findMany({
      include: {
        Category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    })
    return NextResponse.json(getPosts, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: "could not get posts" },
      { status: 500 }
    )
  }
}
