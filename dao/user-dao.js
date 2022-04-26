import userModel from "../models/user-model.js";

const findAllUsers = () => userModel.find();
const createUser = (user) => userModel.create(user);
const deleteUser = (uid) => userModel.deleteOne({_id: uid});


const updateUser = async (uid, updates) => {
  let prevUser = await userModel.findOne({_id: uid}).exec();
  prevUser.stats = updates.stats
  prevUser.save();
};

export default {findAllUsers, createUser, deleteUser, updateUser};
