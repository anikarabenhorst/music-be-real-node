import mongoose from "mongoose";
import postSchema from "../schemas/posts-schema.js";
const postModel = mongoose.model('PostModel', postSchema);

export default postModel;
