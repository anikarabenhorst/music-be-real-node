import songs from "./sample_data/songs.js";

const spotifyController = (app) => {
  app.post('/api/songs', createSong);
  app.get('/api/songs', getAllSongs);
}

const getAllSongs = async (req, res) => {
  res.send(songs);
}


const createSong = async (req, res) => {
  const newSong = req.body;
  songs.push(newSong);
  res.sendStatus(200);
}

export default spotifyController;
