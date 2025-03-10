import React from "react";
import { TouchableOpacity, Text, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/placesSlice";
import styles from "../styles/PlaceDetailStyles";
import Icon from "react-native-vector-icons/Ionicons";

const FavoriteButton = ({ place }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.places.favorites);
  const isFavorite = favorites.some((fav) => fav.id === place.id);

  const handlePress = () => {
    if (isFavorite) {
      dispatch(removeFavorite(place.id));
      Alert.alert("Removed", "Place removed from favorites.");
    } else {
      dispatch(addFavorite(place));
      Alert.alert("Success!", "Place added to favorites.");
    }
  };

  return (
    <TouchableOpacity
      style={[styles.favoriteButton, isFavorite ? styles.removeButton : styles.addButton]}
      onPress={handlePress}
    >
      <Icon name={isFavorite ? "trash-outline" : "star-outline"} size={20} color="#fff" />
      <Text style={styles.favoriteButtonText}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </Text>
    </TouchableOpacity>
  );
};

export default FavoriteButton;
