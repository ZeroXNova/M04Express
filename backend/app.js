//required imports
const express = require("express");
var cors = require('cors');

//activate server
const app = express();
app.use(cors());
const router = express.Router();



//make api using routes
//routes handle browser requests but look like URLs. Functions are used to dynamically handle routes

//creating song
router.get("/songs", function(req,res) {
    const songs = [{
        title: "2005",
        artist: "South Arcade",
        popularity: 7,
        genre: ["alt","pop/punk"]
    },
    {
        title: "How 2 Get Away With Murder",
        artist: "South Arcade",
        popularity: 8,
        genre: ["alt","pop/punk"]
    }]
        


    res.json(songs);
});

//all request that use an api start with /api, url would be localhost:3000/api/songs
app.use("/api", router);
app.listen(3000);