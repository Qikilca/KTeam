import { Sequelize } from "sequelize/dist"

export default (req, res) => {
    //コネクションの作成
    const connection = new Sequelize(
        "test",
        "kteam",
        ""
    )

  
}