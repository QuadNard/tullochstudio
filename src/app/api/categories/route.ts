import prisma from "@/server/db"
import { NextResponse } from "next/server"
import { main } from '../posts/route'

export async function GET() {
  try {
    await main();
    const categories = await prisma.category.findMany({
      include: {
        posts: {
          select: {
            id: true,
          },
        },
      },
    })
    return NextResponse.json(categories, { status: 200 })
   } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
