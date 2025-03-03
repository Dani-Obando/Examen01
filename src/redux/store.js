import { configureStore } from "@reduxjs/toolkit";
import placesReducer, { loadFavorites } from "./placesSlice";

export const store = configureStore({
  reducer: { places: placesReducer },
});

store.dispatch(loadFavorites());
