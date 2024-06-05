const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 2005;

const { getGames, getGameById } = require("./controllers/games.controller")

app.use(cors());
app.get("/", getGames);
app.get("/:id", getGameById);

app.listen(puerto, ()=> {
    console.log(`Servidor Juegos OK. Puerto: ${puerto}`);
});