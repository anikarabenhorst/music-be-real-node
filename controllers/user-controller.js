import userDao from "../dao/user-dao.js";

const userController = (app) => {
  app.post('/api/users', createUser);
  app.get('/api/users', findAllUsers);
  app.get('/api/users/:uid', findUserByID);
  app.put('/api/users/:uid', updateUser);
  app.delete('/api/users/:uid', deleteUser);
  app.post('/api/userslogin', loginUser);
}

const createUser = async (req, res) => {
  console.count("User Created");
  let newUser = req.body;
  const insertedUser = await userDao.createUser(newUser);
  res.json(insertedUser);
};

const findAllUsers = async (req, res) => {
  console.count("User Found");
  const users = await userDao.findAllUsers();
  res.json(users);
}

const findUserByID = async (req, res) => {
  const userID = req.params.uid;
  const allUsers = await userDao.findAllUsers();
  console.log(userID)
  const foundUser = allUsers.find(element => element._id == userID);
  if (foundUser) {
    res.send(foundUser);
  } else {
    res.sendStatus(404);
  }
  
}

const updateUser = async (req, res) => {
  console.count("Update User");
  const idTOUpdate = req.params.uid;
  const updatedUser = req.body;
  const status = await userDao.updateUser(idTOUpdate, updatedUser);

  const allUsers = await userDao.findAllUsers();
  const foundUser = allUsers.find(element => element._id == idTOUpdate);
  
  res.send(foundUser);
}

const deleteUser = async (req, res) => {
  console.count("Deleted User");
  const userIDToDelete = req.params.uid;
  const status = await userDao.deleteUser(userIDToDelete);
  res.send(status);
};

const loginUser = async (req, res) => {
  const users = await userDao.findAllUsers();
  const {username, password} = req.body;
  const foundUser = users.filter(u => {
    return u.password === password && u.username === username;
  });
  if (foundUser.length > 0) {
    res.send(foundUser[0]);
  } else {
    res.sendStatus(500);
  }
};

export default userController;