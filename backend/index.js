import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import search from "./routes/search.js";
import getAlbum from "./routes/getAlbums.js";
import getAlbumById from "./routes/getAlbumById.js";
import getPlaylist from "./routes/getPlaylist.js";
import getPlaylistById from "./routes/getPlaylistById.js";
import getArtists from "./routes/getArtists.js";
import getArtistsById from "./routes/getArtistById.js";
import cron from "node-cron";
import axios from "axios";
import admin from "firebase-admin"
import{fetchDataAndStore} from "./routes/scheduler.js"

const app = express();
const PORT = 3030;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the music search API");
});

//search songs
app.use("/search", search);

//get albums
app.use("/search/albums", getAlbum);

//get album by id
app.use("/search/album", getAlbumById);

//get playlists
app.use("/search/playlists", getPlaylist);

//get playlist by id
app.use("/search/playlist", getPlaylistById);

//get artists
app.use("/search/artists", getArtists);

//get artist by id
app.use("/search/artist", getArtistsById);

app.get('/putData', async (req, res) => {
  try {
    await fetchDataAndStore();
    res.status(200).json({ message: "Data is sent successfully" });
  } catch (error) {
    console.error('Error in fetching data', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
