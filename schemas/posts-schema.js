import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  userId: {type: String, required: true},
  liked: {type: Array, default: []},
  disliked: {type: Array, default: []},
  caption: {type: String, default: ""},
  date: {type: Date, default: Date.now()},
  comments: [{
    handle: String,
    avatarImage: String,
    comment: String,
  }],
  song_title: {type: String, required: true},
  track_id: {type: Number, required: true},
  artist_name: {type: String, required: true},
  album_cover: {type: String, required: true},
  album_name: {type: String, required: true}

} , {collection: 'posts'});

export default postSchema;
