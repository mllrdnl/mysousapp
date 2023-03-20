import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredients: [],
  recipes: [],
};

const reducerSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    reset: (state) => initialState,
    addIngredient: (state, action) => {
      state.ingredients.push(action.payload);
    },
    addRecipe: (state, action) => {
      state.recipes.push(action.payload);
    },
  },
});

export const { addIngredient, addRecipe, reset } = reducerSlice.actions;
export default reducerSlice.reducer;
