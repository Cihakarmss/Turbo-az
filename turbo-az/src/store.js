import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./features/favorites/favoritesSlice";

const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
  },
});
export default store;
