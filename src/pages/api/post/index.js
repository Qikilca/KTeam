import { getSession } from "next-auth/react";
import prisma from "../../../../lib/prisma";

export default async function handler(req, res) {

    //reqからとんできたデータを受け取る
    const {
        title,
        crops,
        area,
        place,
        dates,
        capacity,
        fee,
        description,
        isPublic
    } = req.body;

    //型変換
    const isPublic_num = Number(Boolean(isPublic))
    const capacity_num = Number(capacity);

    //セッション確認
    const session = await getSession({ req });

    //データベースへの登録
    const result = await prisma.class_plan.create({
        data: {
            crops_name: crops,
            title: title,
            description: description,
            fee: fee,
            start_date: dates[0],
            end_date: dates[1],
            teach_user_name: session?.user.name,
            public_preference: isPublic_num,
            venue: place,
            area_name: area,
            capacity: capacity_num,
            author: session?.user.email,
        },
    });

    res.json(result);

}