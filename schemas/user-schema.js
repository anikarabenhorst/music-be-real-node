import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  userType: String,
  firstName: String,
  lastName: String,
  verified: Boolean,
  avatarImage: String,
  stats: {
    followers: Array,
    following: Array,
  }
}, {collection: 'users'});

export default userSchema;