const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const ImageKit = require("imagekit");
const path = require("path");
const PORT = process.env.PORT || 5000;

__dirname = path.resolve();

dotenv.config({ path: path.resolve(__dirname, ".env") });

mongoose.connect(process.env.REACT_APP_DATABASE_ACCESS, () => {
  console.log("DB CONNECTED");
});



const imagekit = new ImageKit({
  urlEndpoint: "https://ik.imagekit.io/rydw9khhk",
  publicKey: "public_Bl2csh0JUzkZxMKVxVrooPN9iOU=",
  privateKey: "private_ZHzc5SNIO/5NkhNEW0F6Onnk/+o=",
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "../build")));

app.get("/api/auth", (req, res) => {
  var result = imagekit.getAuthenticationParameters();
  res.json(result);
  console.log(result)
});

app.post("/api/article", (req, res) => {
  console.log("works");
});

app.listen(PORT, () => {
  console.log("Live...");
});
