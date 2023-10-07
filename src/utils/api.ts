import { createTRPCReact } from "@trpc/react-query";
import {type AppRouter } from "@/lib/api/root";
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';


export const api = createTRPCReact<AppRouter>()

export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helper for outputs.
 *
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>;