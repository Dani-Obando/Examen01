import React from "react";
import { TouchableOpacity, Text, Linking } from "react-native";
import styles from "../styles/PlaceDetailStyles";

const WebsiteButton = ({ website, label = "Visitar Sitio Web" }) => {
  return (
    <TouchableOpacity
      style={styles.websiteButton}
      onPress={() => website !== "No disponible" && Linking.openURL(website)}
    >
      <Text style={styles.websiteButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default WebsiteButton;
