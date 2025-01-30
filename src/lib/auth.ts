import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
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
        token.username = (profile as { login: string }).login;
      }
      return token;
    },
  },
};
