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

app.get("/api/auth", (req, res) => {
  var result = imagekit.getAuthenticationParameters();
  res.json(result);
});

app.get("/api/article", async (req, res) => {
  const articles = await ArticleModel.find();
  if (articles) {
    return res.status(200).json(articles);
  } else {
    return res.status(500);
  }
});

app.post(`/api/article/0/:sourceLang`, async (req, res) => {
  const article = await ArticleModel.findOneAndUpdate(
    { key: req.body.key },
    {
      key: req.body.key,
      value: req.body.value,
    },
    { new: true }
  );
  if (!article) {
    const newArticle = new ArticleModel({
      key: req.body.key,
      value: req.body.value,
    });
    newArticle
      .save()
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(500).json(error));
  } else {
    article
      .save()
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(500).json(error));
  }
});

app.post(`/api/article/1/:transLang`, async (req, res) => {
  const article = await ArticleModel.findOne(
    { key: req.body.key },
    {
      key: req.body.key,
      value: req.body.value,
    },
    { new: true }
  );
  article
    .save()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json(error));
});

app.use(express.static(path.join(__dirname, "../build")));

app.listen(PORT, () => {
  console.log("Live...");
});
