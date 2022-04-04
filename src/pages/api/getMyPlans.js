import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

export default async function handler(req, res) {

    const session = await getSession({ req });

    console.log(session);

    if (session) {

        const result = await prisma.class_plan.findMany({
            where: {
                author: {
                    equals: session?.user.email,
                },
            },
            orderBy: [
                {
                    update_at: "desc",
                },
            ],

        })

        return res.status(200).json(result);
    }

    return res.status(500).json({});
    
}
