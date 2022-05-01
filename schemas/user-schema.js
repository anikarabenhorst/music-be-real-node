import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: {type: String, required: true},
  password:  {type: String, required: true},
  userType: {type: String, default: "regular", enum: ["admin", "regular"]},
  firstName: {type: String, default: ""},
  lastName: {type: String, default: ""},
  email: {type: String, required: true},
  verified: {type: Boolean, default: false },
  avatarImage: {type: String, default: ""},
  followers: {type: Array, default: []},
  following: {type: Array, default: []},
}, {collection: 'users'});

export default userSchema;