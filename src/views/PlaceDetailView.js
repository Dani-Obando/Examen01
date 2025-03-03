import React from "react";
import { View } from "react-native";
import styles from "../styles/PlaceDetailStyles";
import PlaceDetail from "../components/PlaceDetail";
import FavoriteButton from "../components/FavoriteButton";

const PlaceDetailView = ({ route }) => {
  const { place } = route.params;

  return (
    <View style={styles.container}>
      <PlaceDetail placeId={place.id} />
      <FavoriteButton place={place} />
    </View>
  );
};

export default PlaceDetailView;
