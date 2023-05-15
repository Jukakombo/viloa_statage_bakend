import mongoose from "mongoose";
const contactSchema = mongoose.Schema(
  {
    price: Number,
    order: String,
    name: String,
    address: String,
    phone: String,
    email: String,
    image: String,
  },
  { timestamps: true }
);
const Contacts =
  mongoose.models.Contacts || mongoose.model("Contacts", contactSchema);
export default Contacts;
