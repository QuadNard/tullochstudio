import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";




export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const data = await prisma.category.findMany();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: "error occured on fetch" });
    }
}