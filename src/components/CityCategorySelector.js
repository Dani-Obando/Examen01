import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import styles from "../styles/HomeStyles";

const CityCategorySelector = ({
  selectedCity,
  setSelectedCity,
  selectedCategory,
  setSelectedCategory,
  CITIES,
  CATEGORIES,
}) => {
  const [modalVisible, setModalVisible] = useState(null); // 'city' o 'category'

  const handleSelect = (item, type) => {
    if (type === "city") setSelectedCity(item);
    else setSelectedCategory(item);
    setModalVisible(null); // Cerrar modal
  };

  return (
    <View style={styles.dropdownContainer}>
      {/* Selector de Ciudad */}
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible("city")}
      >
        <Text style={styles.dropdownText}>📍 {selectedCity}</Text>
      </TouchableOpacity>

      {/* Selector de Categoría */}
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible("category")}
      >
        <Text style={styles.dropdownText}>📌 {selectedCategory}</Text>
      </TouchableOpacity>

      {/* Modal para selección */}
      <Modal visible={!!modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={modalVisible === "city" ? CITIES : CATEGORIES}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => handleSelect(item, modalVisible)}
                >
                  <Text style={styles.modalText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(null)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CityCategorySelector;
