import userDao from "../dao/user-dao.js";

const userController = (app) => {
  app.post('/api/users', createUser);
  app.get('/api/users', findAllUsers);
  app.get('/api/users/:uid', findUserByID);
  app.put('/api/users/:uid', updateUser);
  app.delete('/api/users/:uid', deleteUser);
}


const createUser = async (req, res) => {
  let newUser = req.body;
  const insertedUser = await userDao.createUser(newUser);
  res.json(insertedUser);
};

const findAllUsers = async (req, res) => {
  const users = await userDao.findAllUsers();
  res.json(users);
}

const findUserByID = async (req, res) => {
  const userID = req.params.uid;
  const allUsers = await userDao.findAllUsers();
  const foundUser = allUsers.find(element => element._id == userID);
  res.send(foundUser);
}

const updateUser = async (req, res) => {
  const idTOUpdate = req.params.uid;
  const updatedUser = req.body;
  const status = await userDao.updateUser(idTOUpdate, updatedUser);
  res.send(status);
}

const deleteUser = async (req, res) => {
  const userIDToDelete = req.params.uid;
  const status = await userDao.deleteUser(userIDToDelete);
  res.send(status);
};

export default userController;