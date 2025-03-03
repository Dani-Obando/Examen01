import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../styles/HomeStyles";

const PlaceItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.placeItem}
      onPress={() => navigation.navigate("PlaceDetail", { place: item })}
    >
      <Text style={styles.placeName}>{item.name}</Text>
      <Text style={styles.placeAddress}>{item.address}</Text>
    </TouchableOpacity>
  );
};

export default PlaceItem;
