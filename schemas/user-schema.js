import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: {type: String, required: true},
  password:  {type: String, required: true},
  userType: {type: String, default: "regular"},
  firstName: {type: String, default: ""},
  lastName: {type: String, default: ""},
  verified: {type: Boolean, default: false },
  avatarImage: {type: String, default: ""},
  stats: {
    followers: {type: Array, default: []},
    following: {type: Array, default: []},
  }
}, {collection: 'users'});

export default userSchema;