import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import styles from "../styles/PlaceDetailStyles";
import { getPlaceDetails } from "../services/api";
import WebsiteButton from "./WebsiteButton";

const PlaceDetail = ({ placeId }) => {
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getPlaceDetails(placeId);
      setPlace(data);
      setLoading(false);
    };
    fetchDetails();
  }, [placeId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#007AFF" />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{place.name}</Text>
      <Text style={styles.detail}>📍 Dirección: {place.address}</Text>
      <Text style={styles.detail}>📞 Teléfono: {place.phone_number}</Text>
      <Text style={styles.detail}>
        📞 Teléfono Internacional: {place.international_phone_number}
      </Text>
      <WebsiteButton website={place.website} label="🌍 Visitar Sitio Web" />
      {place.sources.length > 0 && (
        <View>
          <Text style={styles.subTitle}>🔗 Fuentes:</Text>
          {place.sources.map((source, index) => (
            <WebsiteButton
              key={index}
              website={source.url}
              label={source.source}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default PlaceDetail;
