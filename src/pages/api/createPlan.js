import { prisma } from "../../../lib/prisma";

async function main(){

}

export default async function handler(req, res) {


    await prisma.class_plan.create({
        data: {
            crops_id: 1,
            crops_name: "米",
            teach_user_id: "ckyxe4dpc00455olf5pfsjpuc",
            teach_user_name: "Qikilca",
            public_preference: 1,
            area_id: 1,
            area_name: "会津",
            title: "PlanTitle",
            fee: 1200,
        }
    })


}