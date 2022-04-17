import users from "./sample_data/users.js";

const userController = (app) => {
  app.post('/api/users', createUser);
  app.get('/api/users', findAllUsers);
  app.get('/api/users/:uid', findUserByID);
  app.get('/', (req, res) =>  res.send('Hello world! '));
}


const createUser = async (req, res) => {
  let newUser = req.body;
  newUser = {

  };

  res.send('User has been added');
};

const findAllUsers = async (req, res) => {
  res.send(users);
}

const findUserByID = async (req, res) => {
  const userID = req.params.uid;
  const foundUser = users.find(element => element._id == userID);
  res.send(foundUser);
}
export default userController;