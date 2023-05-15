import mongoose from "mongoose";
const newsSchema = mongoose.Schema(
  {
    foodName: String,
    description: String,
    image: String,
    price: String,
  },
  { timestamps: true }
);
const News = mongoose.models.News || mongoose.model("News", newsSchema);
export default News;
