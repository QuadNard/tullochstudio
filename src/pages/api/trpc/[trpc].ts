import { appRouter } from '@/lib/api/root';
import { createNextApiHandler } from '@trpc/server/adapters/next';
import { createTRPCContext } from '@/lib/api/trpc';


export default createNextApiHandler({
    router: appRouter,
    createContext: createTRPCContext,
})