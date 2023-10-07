
import { createTRPCRouter } from "./trpc";
import { categoryRouter } from "./routers/category.router";
import { exampleRouter } from "./routers/example";


/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    category: categoryRouter,
    example: exampleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;