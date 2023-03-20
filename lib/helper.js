const BASE_URL = "http://localhost:3000";

export const getIngredients = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/ingredients`);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    return error;
  }
};

export const getIngredient = async (ingredientId) => {
  const response = await fetch(`${BASE_URL}/api/ingredients/${ingredientId}`);
  const json = await response.json();

  if (json) return json;
  return {};
};
