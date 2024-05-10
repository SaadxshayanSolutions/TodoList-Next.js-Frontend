import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { userAgent } from "next/server";
import { optionGenerator } from "../../../_actions/auth";
import { generateResponse } from "@/app/_util/utilityFunctions";
import { IUserInfo } from "@/app/interfaces/user";
import async from "../../../page";
import { redirect } from "next/navigation";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email:",
          type: "text",
          placeholder: "your-email",
        },
        password: {
          label: "password:",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize(credentials): Promise<any> {
        try {
          const data = {
            mail: credentials?.email,
            password: credentials?.password,
          };

          const URL: string = "http://localhost:5000";

          const options = await optionGenerator("POST", data);

          const res = await fetch(`${URL}/users/login`, options);

          const user: IUserInfo = await res.json();

          if (user.success) {
            return user.data;
          }

          return null;
        } catch (error: any) {
          return generateResponse(false, error.message);
        }
      },
    }),
  ],
  callbacks: {
    // async signIn() {
    //   redirect("/");
    // },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, user, token }) {
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};
