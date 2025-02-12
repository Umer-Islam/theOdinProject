const db = require('../db/queries')
const rootcontroller = {
    getGames: async (req, res) => {
        try {
            const games = await db.getAllGames();
            console.log("all games: ", games);
            const catagories = await db.getAllCatagories()
            console.log("all catagories: " + catagories);
            res.render('index', { games, catagories }) // Render the 'games' view and pass the games data
        } catch (error) {
            console.error("Error fetching games: ", error);
            res.status(500).send("Error fetching games")
        }
    },
    deleteGame: async (req, res) => {
        try {


            const { game_id } = req.body;
            console.log('this is the game if for game deleteion:' + game_id)
          await db.removeGame(game_id)
            console.log(`game with id: ${game_id} was deleted`)
            
            res.status(200).redirect('/')
        }
        catch (error) {

            console.log(`error: ${error}`)
            res.status(500).json({ error: "falied to delete game" })

        }

    }
};

module.exports = rootcontroller;
