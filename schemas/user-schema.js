import mongoose from 'mongoose';

const schema = mongoose.Schema({
  username: String,
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

export default schema;