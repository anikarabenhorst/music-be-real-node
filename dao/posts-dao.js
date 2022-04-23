import postModel from "../models/posts-model.js";

const findAllPosts = () => postModel.find();
const createPost = (user) => postModel.create(user);
const deletePost = (uid) => postModel.deleteOne({_id: uid});
const updatePost = (uid, user) => postModel.updateUser({_id: uid}, {$set: user});

export default {findAllPosts, createPost, deletePost, updatePost};