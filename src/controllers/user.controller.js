const jwt = require('jsonwebtoken');
const { User } = require('../models');
const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    return res.status(409).json({ message: 'User already registered' });
  }
  const newUser = await User.create({ displayName, email, password, image });

  const token = jwt.sign({ payload: newUser }, process.env.JWT_SECRET);

  return res.status(201).json({ token });
};

const getUser = async (_req, res) => {
  const users = await userService.getUser();

  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const userExists = await User.findOne({ where: { id } });

  const user = await userService.getUserById(id);
  
  if (!userExists) {
    return res.status(404).json({
      message: 'User does not exist' });
  }
  return res.status(200).json(user);
};

module.exports = {
  createUser, 
  getUser,
  getUserById,
};