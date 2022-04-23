import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  userType: {type: String, default: "regular"},
  firstName: String,
  lastName: String,
  verified: {type: Boolean, default: false },
  avatarImage: {type: String, default: ""},
  stats: {
    followers: Array,
    following: Array,
  }
}, {collection: 'users'});

export default userSchema;