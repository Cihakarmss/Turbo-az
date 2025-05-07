import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const existingItem = state.favorites.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.favorites.push(action.payload);
      }
      
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});
export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
export const selectFavorites = (state) => state.favorites.favorites;
