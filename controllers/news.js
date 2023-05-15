import mongoose from "mongoose";
import News from "../models/news.js";

export const getNews = async (req, res) => {
  const allNews = await News.find();
  try {
    res.status(200).json(allNews);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createNews = async (req, res) => {
  const news = req.body;
  const newNews = new News(news);
  try {
    await newNews.save();
    res.status(201).json(newNews);
  } catch (error) {
    res.status(209).json({ message: error.message });
  }
};

export const updateNews = async (req, res) => {
  const { id } = req.params;
  const { foodName, image, description, price } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const newsTobeUpdated = { foodName, image, description, price, _id: id };

  await News.findByIdAndUpdate(id, newsTobeUpdated, { new: true });

  res.json(newsTobeUpdated);
};

export const deleteNews = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Menu with id: ${id}`);

  await News.findByIdAndRemove(id);

  res.json({ message: "Menu deleted successfully." });
};
