const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();
const cors = require("cors");
global.__basedir = __dirname;
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const foodRouter = require("./routes/food");
const fileRouter = require("./routes/file");

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/food", foodRouter);
app.use("/api/v1/file", fileRouter);

app.get("/", (req, res) => {
  res.send("What'sInIt?™️");
});

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.DBd, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Started on port ${PORT}`);
    });
  });
