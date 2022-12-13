import mongoose from "mongoose";

interface ArticleSchema {
  key: string;
  value: string;
}

const ArticleTemplate = new mongoose.Schema<ArticleSchema>({
  key: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.Article || mongoose.model("Article", ArticleTemplate);
