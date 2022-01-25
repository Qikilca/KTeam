import { sql_query } from "../../../../../lib/db";

const handler = async (req, res) => {
    const { id } = req.query

    try {
        const results = await sql_query(`
        SELECT *
        FROM teacher_member
        WHERE teacher_member.teacher_id = ${id}
        `);
        return res.json(results);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}


export default handler;