const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

// getting DB config
const db = require("./config/keys").mongoURI;

// Connecting to mongoDB
mongoose
  .connect(db)
  .then(() => console.log("Connected to MogoDB..."))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on ${PORT}`));
