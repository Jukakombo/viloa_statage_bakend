import mongoose from "mongoose";
const courseSchema = mongoose.Schema(
  {
    foodName: String,
    description: String,
    image: String,
    price: String,
  },
  { timestamps: true }
);
const courses =
  mongoose.models.Courses || mongoose.model("Courses", courseSchema);
export default courses;
