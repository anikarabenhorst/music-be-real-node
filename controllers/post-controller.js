import posts from "./sample_data/posts.js";

const postController = (app) => {
  app.post('/api/posts', makePost);
  app.get('/api/posts', findAllPosts);
  app.get('/api/posts/:pid', findPostByID)
  app.put('/api/posts/:pid', updatePost);
  app.delete('/api/posts/:pid', deletePost);
  app.get('/api/postsLastFive', findLastFivePosts);
}


const makePost = (req, res) => {
  const post = req.body;
  posts.push(post);
  res.sendStatus(200);
}

const findAllPosts = (req, res) => {
  res.send(posts);
}

const findPostByID = (req, res) => {
  const postID = req.params.pid;
  const foundPost = posts.find(element => element._id == postID);
  res.send(foundPost);
}

const updatePost = (req, res) => {
  const postToUpdate = req.params.pid;
  const updatedPost = req.body;
  const postIndexToUpdate = posts.findIndex((element) => element._id == postToUpdate);
  posts[postIndexToUpdate] = updatedPost;
  res.send(`Post ${postToUpdate} Updated`);d
}


const deletePost = (req, res) => {
  const postIDToDelete = req.params.pid;
  const indexToDelete = posts.findIndex((element) => element._id == postIDToDelete);
  posts.splice(indexToDelete, 1);
  res.send(`Post ${postIDToDelete} has been deleted`);
};


const findLastFivePosts = (req, res) => {
  console.log(posts.length);
  if (posts.length > 5) {
    res.send(posts.slice(0, 5));
  } else {
    res.send(posts);
  }
}



export default postController;