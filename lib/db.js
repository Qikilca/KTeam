import mysql from "mysql";

{/*
//env.localの環境変数を読み込んでDBへ接続させる
export const db = mysql({
    config:{
        host:process.env.MYSQL_HOST,
        database:process.env.MYSQL_DATABASE,
        user:process.env.MYSQL_USERNAME,
        password:process.env.MYSQL_PASSWORD,

    }
})

//SQLのクエリ設定
export async function sql_query(query_stringt,values = []){
    try{
        const results = await db.query(query_stringt, values)
        await db.end()
        return results
        
    }catch(e){
        throw Error(e.massage)

    }
}

    
*/}
