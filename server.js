import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userController from './controllers/user-controller.js';
import postController from './controllers/post-controller.js';
import spotifyController from './controllers/spotify-controller.js';
const API_LINK = 'mongodb+srv://berealspotify:Password@cluster0.ahl75.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(API_LINK);

const app = express();
app.use(cors());
app.use(express.json());
const port = 8000;

userController(app);
postController(app);
spotifyController(app);

app.listen(port, () => { console.log( `now lisetning on port ${port}`)});