import prisma from '@/server/db'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const categories = await prisma.category.findMany({
            include: {
                posts: {
                    select: {
                        id: true,
                    }
                }
            }
    })
    return NextResponse.json(categories, {status: 200})
    } catch (error) {
       return NextResponse.json({ message: 'could not get categories' }, {status: 500})
    }
}