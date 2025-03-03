import React from "react";
import { TouchableOpacity, Text, Linking } from "react-native";
import styles from "../styles/PlaceDetailStyles";

const WebsiteButton = ({ website, label = "Visit Website" }) => {
  return (
    <TouchableOpacity
      style={styles.websiteButton}
      onPress={() => website !== "Not available" && Linking.openURL(website)}
    >
      <Text style={styles.websiteButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default WebsiteButton;
