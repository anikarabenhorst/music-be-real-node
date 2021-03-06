import userModel from "../models/user-model.js";

const findAllUsers = () => userModel.find();
const createUser = (user) => userModel.create(user);
const deleteUser = (uid) => userModel.deleteOne({_id: uid});
const updateUser = (uid, user) => userModel.updateOne({_id: uid}, {$set: user});

export default {findAllUsers, createUser, deleteUser, updateUser};
