const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const cwd = process.cwd();

const PORT = process.env.PORT || 4404;
const app = express();

const activity = cwd.includes("Lets-get-social")
  ? cwd.split("Lets-get-social")[1]
  : cwd;

app.use(express.urlencouded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});
