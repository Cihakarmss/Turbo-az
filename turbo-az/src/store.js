import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./features/favorites/favoritesSlice";

const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
  },
});
// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

export default store;
