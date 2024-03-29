import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export default NextAuth({

    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],

    /**
    callbacks: {
        async session({ session, user, token }) {
            //セッションに任意の内容を入れる場所

            return session;
        },
    },
     */

    secret:"select",

});