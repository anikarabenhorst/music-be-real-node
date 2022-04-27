import postModel from "../models/posts-model.js";

const findAllPosts = () => postModel.find();
const createPost = (post) => postModel.create(post);
const deletePost = (pid) => postModel.deleteOne({_id: pid});
const updatePost = (pid, post) => postModel.updateOne({_id: pid}, {$set: post});

export default {findAllPosts, createPost, deletePost, updatePost};