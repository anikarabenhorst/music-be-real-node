import mongoose from "mongoose";
import userSchema from './schemas/user-schema.js';

const userModel = mongoose.model('UserModel', userSchema);


export default userModel;