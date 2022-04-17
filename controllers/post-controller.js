import posts from "./sample_data/posts.js";

const postController = (app) => {
  app.post('/api/posts', makePost);
  app.get('/api/posts', findAllPosts);
  app.get('/api/posts/:pid', findPostByID)
}


const makePost = (req, res) => {
  res.send('Post is being made!');
}

const findAllPosts = (req, res) => {
  res.send(posts);
}

const findPostByID = (req, res) => {
  const postID = req.params.pid;
  const foundPost = posts.find(element => element._id == postID);
  res.send(foundPost);
}

export default postController;