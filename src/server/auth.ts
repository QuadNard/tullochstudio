import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { type GetServerSidePropsContext } from "next"
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth"
import DiscordProvider from "next-auth/providers/discord"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import prisma from "./db"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: number
    } & DefaultSession["user"]
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
}

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"]
  res: GetServerSidePropsContext["res"]
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions)
}
