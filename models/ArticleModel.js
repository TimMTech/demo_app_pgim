const mongoose = require("mongoose");

const ArticleModel = new mongoose.Schema({
  key: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Article", ArticleModel);
