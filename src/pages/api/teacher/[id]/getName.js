import { sql_query } from "../../../../../lib/db";

const handler = async (req, res) => {
    const { id } = req.query

    try {
        const results = await sql_query(`
        SELECT first_name,last_name
        FROM teacher_member
        WHERE teacher_member.teacher_id = ${id}
        `);


        const name = results[0].last_name + " " + results[0].first_name

        const json = { "teacher_name": name}

        return res.json(json)
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}


export default handler;