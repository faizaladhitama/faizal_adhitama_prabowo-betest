const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const faker = require('faker');
const User = require('../../src/models/user.model');

const password = 'abc123456';
const salt = bcrypt.genSaltSync(8);
const hashedPassword = bcrypt.hashSync(password, salt);

const userOne = {
  _id: mongoose.Types.ObjectId(),
  userName: faker.name.findName(),
  accountNumber: faker.datatype.uuid(),
  identityNumber: faker.datatype.uuid(),
  emailAddress: faker.internet.email().toLowerCase(),
  password,
  role: 'user',
  isEmailVerified: false,
};

const userTwo = {
  _id: mongoose.Types.ObjectId(),
  userName: faker.name.findName(),
  accountNumber: faker.datatype.uuid(),
  identityNumber: faker.datatype.uuid(),
  emailAddress: faker.internet.email().toLowerCase(),
  password,
  role: 'user',
  isEmailVerified: false,
};

const admin = {
  _id: mongoose.Types.ObjectId(),
  userName: faker.name.findName(),
  accountNumber: faker.datatype.uuid(),
  identityNumber: faker.datatype.uuid(),
  emailAddress: faker.internet.email().toLowerCase(),
  password,
  role: 'admin',
  isEmailVerified: false,
};

const insertUsers = async (users) => {
  await User.insertMany(users.map((user) => ({ ...user, password: hashedPassword })));
};

module.exports = {
  userOne,
  userTwo,
  admin,
  insertUsers,
};
