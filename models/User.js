const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thought");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
});

const User = model("user", userSchema);

module.exports = User;
