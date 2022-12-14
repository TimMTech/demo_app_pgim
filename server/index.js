const connectDb = require("../database/connectDb");
const ArticleModel = require("../models/ArticleModel");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const ImageKit = require("imagekit");
const path = require("path");
const PORT = process.env.PORT || 5000;

dotenv.config({ path: path.resolve(__dirname, "../.env") });
connectDb();

const imagekit = new ImageKit({
  urlEndpoint: "https://ik.imagekit.io/rydw9khhk",
  publicKey: "public_Bl2csh0JUzkZxMKVxVrooPN9iOU=",
  privateKey: "private_ZHzc5SNIO/5NkhNEW0F6Onnk/+o=",
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
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
});

app.post("/api/article", async (req, res) => {
  const article = new ArticleModel({
    key: req.body.key,
    value: req.body.value,
  });
  article
    .save()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json(error));
});

app.listen(PORT, () => {
  console.log("Live...");
});
