const db = require("./db");
require("dotenv").config();
const jwt=require("./utils/passport/jwt")
db();
const passport = require("passport");

const express = require("express");
var bodyParser = require("body-parser");

const AuthRoutes = require("./Routes/auth.routes");
const UserRoutes = require("./Routes/user.routes");
const NotesRoutes = require("./Routes/notes.routes");
var jsonParser = bodyParser.json();

const app = express();
const PORT = process.env.BACKEND_PORT;

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });
app.use(passport.initialize());
app.use(jsonParser, (request, response, next) => {
  next();
});
app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/user", UserRoutes);
app.use("/api/v1/notes", NotesRoutes);

app.listen(PORT, () => {
  console.log("running on", PORT);
});
