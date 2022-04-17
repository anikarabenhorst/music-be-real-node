import userModel from "./user-schema.js";

const findAllUsers = () => userModel.find();
const createUser = (user) => userModel.create(user);
const deleteUser = (uid) => userModel.deleteOne({_id: uid});
const updateUser = (uid, user) => userModel.updateUser({_id: uid}, {$set: user});

export default {findAllUsers, createUser, deleteUser, updateUser};
