import users from "./sample_data/users.js";

const userController = (app) => {
  app.post('/api/users', createUser);
  app.get('/api/users', findAllUsers);
  app.get('/api/users/:uid', findUserByID);
  app.put('/api/users/:uid', updateUser);
  app.delete('/api/users/:uid', deleteUser);
}


const createUser = async (req, res) => {
  let newUser = req.body;
  users.push(newUser);
  res.sendStatus(200);
};

const findAllUsers = async (req, res) => {
  res.send(users);
}

const findUserByID = async (req, res) => {
  const userID = req.params.uid;
  const foundUser = users.find(element => element._id == userID);
  res.send(foundUser);
}

const updateUser = async (req, res) => {
  const idTOUpdate = req.params.uid;
  const updatedUser = req.body;
  const indexToUpdate = users.findIndex((element) => {element._id == idTOUpdate});
  users[indexToUpdate] = updatedUser;
  res.send(`User ${idTOUpdate} has been updated`);
}

const deleteUser = (req, res) => {
  const userIDToDelete = req.params.uid;
  const indexToDelete = users.findIndex((element) => element._id == userIDToDelete);
  users.splice(indexToDelete, 1);
  res.send(`User ${userIDToDelete} has been deleted`);
};

export default userController;