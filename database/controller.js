import ingredient from "../models/ingredient.js";

// get: http://localhost:3000/api/ingredients
export async function getIngredients(req, res) {
  try {
    const ingredients = await ingredient.find({});

    if (!ingredients) return res.status(404).json({ error: "Data not found" });
    res.status(200).json({ ingredients });
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
}

// get: http://localhost:3000/api/ingredients/1
export async function getIngredient(req, res) {
  try {
    const { ingredientId } = req.query;

    if (ingredientId) {
      const thisIngredient = await ingredient.findById(ingredientId);
      res.status(200).json(thisIngredient);
    }
    res.status(404).json({ error: "Ingredient not selected..." });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the ingredient" });
  }
}
