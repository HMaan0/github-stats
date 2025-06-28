import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import prisma from "@/lib/db";
import { createClient } from "redis";
const client = createClient({
  socket: {
    host: process.env.REDIS_HOST || "localhost",
    port: Number(process.env.REDIS_PORT) || 6379,
  },
});
export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.ID_GITHUB || "",
      clientSecret: process.env.SECRET_GITHUB || "",
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.username = token.username as string;
      }
      return session;
    },
    async jwt({ token, account, profile }) {
      if (account?.provider === "github") {
        const username = (profile as { login: string }).login;
        token.username = username;

        try {
          const existingUser = await prisma.users.findFirst({
            where: { name: username },
          });
          if (!existingUser) {
            if (!client.isOpen) {
              await client.connect();
            }
            await client.lPush("newUser", `${username}`);
          }
        } catch (error) {
          console.error(error);
        }
      }
      return token;
    },
  },
};
