import { sql_query } from "../../../lib/db";


const handler = async (_, res) => {
    try {
        const results = await sql_query(`
        SELECT * FROM user
        `);

        return res.json(results);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }

};

export default handler;
/*
export default async (name) => {
    const result = await db.query(`
    SELECT * FROM user;
    `)
    return result
}
*/