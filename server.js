import express from 'express';
import cors from 'cors';
import userController from './controllers/user-controller.js';
import postController from './controllers/post-controller.js';

const app = express();
app.use(cors());
app.use(express.json());
const port = 8000;

userController(app);
postController(app);

app.listen(port, () => { console.log( `now lisetning on port ${port}`)});