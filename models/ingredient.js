import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema(
  {
    name: String,
    name_scientific: String,
    description: String,
    food_group: String,
    food_subgroup: String,
  },
  { timestamps: true }
);

export default mongoose.models.ingredient ||
  mongoose.model("ingredient", ingredientSchema);
