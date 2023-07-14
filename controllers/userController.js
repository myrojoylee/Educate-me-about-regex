const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

const totalUsers = async () => {
  const numberOfUsers = await User.aggregate().count("userCount");
  return numberOfUsers;
};
