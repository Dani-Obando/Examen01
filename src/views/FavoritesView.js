import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import styles from "../styles/FavoritesStyles";

const FavoritesView = ({ navigation }) => {
  const favorites = useSelector((state) => state.places.favorites);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Favorite Places</Text>
      {favorites.length === 0 ? (
        <Text style={styles.emptyMessage}>You don't have any favorites yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.placeItem}
              onPress={() =>
                navigation.navigate("PlaceDetail", { place: item })
              }
            >
              <Text style={styles.placeName}>{item.name}</Text>
              <Text style={styles.placeAddress}>{item.address}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default FavoritesView;
