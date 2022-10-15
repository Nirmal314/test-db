import mongoose from "mongoose";

const schemesSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    scheme_info: { type: String, required: true },
    name: { type: String, required: true },
    min_education: { type: String, required: true },
    caste_data: [{ type: String, required: true }],
    max_income_class: { type: String, required: true },
    marital_status: { type: String, required: true },
    gender: [{ type: String, required: true }],
    link: { type: String, required: true },
  },
  { timestamps: true }
);
export default mongoose.models.Schemes ||
  mongoose.model("Schemes", schemesSchema);