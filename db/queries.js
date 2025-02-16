const pool = require('./pool')


const db = {
    getAllUsernames: async () => {
        const { rows } = await pool.query(`select * from users`)
        return rows;
    },
    addUser: async (user_name, email, confirm_password) => {
        await pool.query(`insert into users(name,email,password) values($1,$2,$3)`, [user_name, email, confirm_password])
        console.log(`stuff added to db from the queries file...`)
    }
}



module.exports = db;