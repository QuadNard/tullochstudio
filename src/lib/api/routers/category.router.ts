import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
} from "../trpc";
import { CategorySchema } from '@/lib/schema/category.schema';
import  slugify  from 'slugify';




export const categoryRouter = createTRPCRouter({
  all: publicProcedure
   .query(async({ ctx }) => {
    const allCategory = await ctx.prisma.category.findMany({
        include :{
            posts: {
                select: {
                    id: true,
                },
            },
        },
    })
    return allCategory;
   }),
   create: publicProcedure
    .input(CategorySchema)
   .mutation(async({ ctx, input }) => {
    const category = await ctx.prisma.category.create({
        data: {
            name: input.name,
            slug: slugify(input.name).toLowerCase(),
            color: input.color,
          },
        });
        return category;
    })
})




