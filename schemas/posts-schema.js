import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  userId: String,
  postedBy: {
    username: String
  },
  liked: { type: Boolean, defaultValue: false },
  disliked: { type: Boolean, defaultValue: false },
  timePosted: String,
  caption: String,
  trackId: String,
  stats: {
    comments: { type: Number, defaultValue: 0 },
    likes: { type: Number, defaultValue: 0 },
    dislikes: { type: Number, defaultValue: 0 }
  },
  comments: [{
    handle: String,
    avatarImage: String,
    comment: String,
  }]
} , {collection: 'posts'});

export default postSchema;