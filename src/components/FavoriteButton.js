import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/placesSlice";
import styles from "../styles/PlaceDetailStyles";

const FavoriteButton = ({ place }) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={styles.favoriteButton}
      onPress={() => dispatch(addFavorite(place))}
    >
      <Text style={styles.favoriteButtonText}>⭐ Agregar a Favoritos</Text>
    </TouchableOpacity>
  );
};

export default FavoriteButton;
