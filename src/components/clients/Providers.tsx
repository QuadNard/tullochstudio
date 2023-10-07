"use client";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { withTRPC } from "@trpc/next";
import { AppRouter } from '@/lib/api/root';
import superjson from 'superjson';
import { httpBatchLink, loggerLink } from '@trpc/client';

export default function ProvidersWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
        <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
}

