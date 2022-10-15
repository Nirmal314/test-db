import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    income: { type: String, required: true },
    age: { type: Number, required: true },
    marital: { type: String, required: true },
    cast: { type: String, required: true },
    education: { type: String, required: true },
  },
  { timestamps: true }
);
export default mongoose.models.User || mongoose.model("User", userSchema);