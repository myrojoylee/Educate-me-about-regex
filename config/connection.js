const { connect, connection } = require("mongoose");

// finish the rest of this
const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/letsgetsocialDB";

connect(connectionString);

module.exports = connection;