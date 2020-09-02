const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

const apiRoute = require("./routes/api");
const categoryRoute = require("./routes/categories");

app.use("/api", apiRoute);
app.use("/categories", categoryRoute);

app.get("/", (req, res) => {
  res.send("this is home");
});

//connect to db
mongoose.connect(
  "mongodb://localhost:27017/portal",
  { useNewUrlParser: true, useUnifiedTopology: true,  useCreateIndex: true },
  () => {
    console.log("connected to db");
  }
);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
