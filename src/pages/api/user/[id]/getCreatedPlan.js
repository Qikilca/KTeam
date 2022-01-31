import prisma from "../../../lib/prisma"


const handler = async (req, res) => {

    try {
        //PrismaClientを使ってidからareaを取得
        const plans = await prisma.class_plan.findMany({
            orderBy: [
                {
                    created_at: "desc",
                },
            ],
            take: 5
        })

        return res.json(plans);

    } catch (e) {
        res.status(500).json({ message: e.message });
    }

}

export default handler;