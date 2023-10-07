"use client";

import { AppRouter } from '@/lib/api/root';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink, loggerLink } from '@trpc/client';
import { withTRPC } from '@trpc/next';
import { FC, ReactNode, useState } from 'react'
import superjson from 'superjson';


interface ProvidersProps {
    children: ReactNode;
}



const ClientProvider: FC<ProvidersProps> = ({ children }) => {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

 export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url =
      process.env.NODE_ENV === "production"
        ? `${process.env.JSON_URL}/api/trpc`
        : `http://localhost:3000/api/trpc`;

    const links = [
      loggerLink(),
      httpBatchLink({
        maxURLLength: 5000,
        url,
      }),
    ];
    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 60,
          },
        },
      },
      links,
      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req.headers,
            "x-ssr": "1",
          };
        }

        return {};
      },
      transformer: superjson,
    };
  },
  ssr: false,
}) (ClientProvider);

