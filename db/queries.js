const { deleteGame } = require("../controllers/rootController");
const pool = require("./pool");

async function getAllGames() {
  const { rows } = await pool.query("SELECT * FROM games");
  return rows;
}

async function getAllCatagories() {
  const { rows } = await pool.query(`select name from catagory`)
  return rows;
}

async function insertGameData(name, yearOfRelease, price) {
  try {
    await pool.query(

      `insert into games(name,release_year,price) values($1,$2,$3)`
      , [name, yearOfRelease, price]
    )
    console.log('data inserted successfully')
  } catch (error) {
    console.log(`error inserting data: ${error}`)
  
}
}
async function removeGame(game_id){
  try{
    console.log(`game id for deleteion in database is : ${game_id}`)
  await pool.query(`delete from games where game_id = $1`,[game_id])
  console.log('game deleted from db')
  }catch(error){
    console.log(`error: ${error}`)
  }
}



module.exports = {
  getAllGames,
  getAllCatagories,
  insertGameData,
  removeGame
  //   insertUsername
};
