require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const JpPostalRoutes = require("./routes/JpPostalRoutes.js");
const BinRoutes = require("./routes/BinRoutes.js");


const app = express();
const port = process.env.PORT || 3000;
const url = process.env.MONGODB_URI;

mongoose.connect(
    url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: true,
    w: "majority",
  });


const db =mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to database"));

app.use(cors());
app.use(express.json());
app.use(JpPostalRoutes);
app.use(BinRoutes);


app.listen(port, () => {
    console.log(`app listening on port ${port}`);
  });
  

