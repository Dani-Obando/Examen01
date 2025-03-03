import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/HomeStyles";

const CityCategorySelector = ({
  selectedCity,
  setSelectedCity,
  selectedCategory,
  setSelectedCategory,
  CITIES,
  CATEGORIES,
}) => {
  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() =>
          setSelectedCity(
            CITIES[(CITIES.indexOf(selectedCity) + 1) % CITIES.length]
          )
        }
      >
        <Text style={styles.dropdownText}>📍 {selectedCity}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.dropdown}
        onPress={() =>
          setSelectedCategory(
            CATEGORIES[
              (CATEGORIES.indexOf(selectedCategory) + 1) % CATEGORIES.length
            ]
          )
        }
      >
        <Text style={styles.dropdownText}>📌 {selectedCategory}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CityCategorySelector;
