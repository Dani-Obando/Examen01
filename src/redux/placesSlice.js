import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Acción para cargar favoritos desde AsyncStorage
export const loadFavorites = createAsyncThunk(
  "places/loadFavorites",
  async () => {
    const storedFavorites = await AsyncStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  }
);

const placesSlice = createSlice({
  name: "places",
  initialState: { list: [], favorites: [] },
  reducers: {
    setPlaces: (state, action) => {
      state.list = action.payload;
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
      AsyncStorage.setItem("favorites", JSON.stringify(state.favorites)); // Guardar en caché
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (place) => place.id !== action.payload
      );
      AsyncStorage.setItem("favorites", JSON.stringify(state.favorites)); // Actualizar caché
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadFavorites.fulfilled, (state, action) => {
      state.favorites = action.payload;
    });
  },
});

export const { setPlaces, addFavorite, removeFavorite } = placesSlice.actions;
export default placesSlice.reducer;
