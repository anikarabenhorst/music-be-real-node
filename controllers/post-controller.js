import postsDao from "../dao/posts-dao.js";

const postController = (app) => {
  app.post('/api/posts', createPost);
  app.get('/api/posts', findAllPosts);
  app.get('/api/posts/:pid', findPostByID)
  app.put('/api/posts/:pid', updatePost);
  app.delete('/api/posts/:pid', deletePost);
  app.get('/api/postsLastFive', findLastFivePosts);
}


const createPost = async (req, res) => {
  const newPost = req.body;
  const insertedPost = await postsDao.createPost(newPost);
  res.json(insertedPost);
}

const findAllPosts = async (req, res) => {
  const posts = await postsDao.findAllPosts();
  res.json(posts);
}

const findPostByID = async (req, res) => {
  const posts = await postsDao.findAllPosts();
  const foundPost = posts.find(element => element._id == req.params.pid);
  res.json(foundPost);
}

const updatePost = async (req, res) => {
  const postIDToUpdate = req.params.pid;
  const updatedPost = req.body;
  const status = await postsDao.updatePost(postIDToUpdate, updatedPost);

  const posts = await postsDao.findAllPosts();
  const foundPost = posts.find(element => element._id == req.params.pid);


  res.send(foundPost);
}


const deletePost = async (req, res) => {
  const postIDToDelete = req.params.pid;
  const status = await postsDao.deletePost(postIDToDelete);
  res.send(status);
};


const findLastFivePosts = async (req, res) => {
  const posts = await postsDao.findAllPosts();
  if (posts.length > 5) {
    res.send(posts.slice(0, 5));
  } else {
    res.send(posts);
  }
}



export default postController;