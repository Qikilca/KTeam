import { useState } from "react"


export const planData = () => {
    const [title, setTitle] = useState("");
    const [teachUserName, setTeachUserName] = useState("");

    const create = async () => {
        await fetch(
            "/api/createPlan",
            {
                method: "POST",
                body: `
                title${title}
                teach_user_name${teachUserName}
                `,
            }
        )

        return {
            setTitle, setTeachUserName, create,
        }
    }
}