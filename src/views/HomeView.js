import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setPlaces } from "../redux/placesSlice";
import { getPlaces } from "../services/api";
import styles from "../styles/HomeStyles";
import CityCategorySelector from "../components/CityCategorySelector";
import PlaceItem from "../components/PlaceItem";
import LoadingIndicator from "../components/LoadingIndicator";

const CITIES = ["Amsterdam", "Barcelona", "Berlin", "Dubai", "London", "Paris", "Rome", "Tuscany"];
const CATEGORIES = ["accommodation", "attraction", "poi", "restaurant"];

const HomeView = ({ navigation }) => {
  const [selectedCity, setSelectedCity] = useState("Barcelona");
  const [selectedCategory, setSelectedCategory] = useState("attraction");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.list);

  useEffect(() => {
    fetchPlaces(selectedCity, selectedCategory);
  }, [selectedCity, selectedCategory]);

  const fetchPlaces = async (city, category) => {
    setLoading(true);
    const data = await getPlaces(city, category);
    dispatch(setPlaces(data));
    setLoading(false);
  };


  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search tourist places</Text>

      <CityCategorySelector
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        CITIES={CITIES}
        CATEGORIES={CATEGORIES}
      />

      {/* Campo de búsqueda */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search place by name..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {loading ? (
        <LoadingIndicator />
      ) : (
        <FlatList
          data={filteredPlaces}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PlaceItem item={item} navigation={navigation} />
          )}
        />
      )}
    </View>
  );
};

export default HomeView;
