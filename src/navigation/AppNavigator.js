import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeView from "../views/HomeView";
import PlaceDetailView from "../views/PlaceDetailView";
import FavoritesView from "../views/FavoritesView"
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack para la pantalla Home con detalles de lugares
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeView} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetailView} />
    </Stack.Navigator>
  );
}

// Componente principal con las Tabs
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#fff",
            height: 60,
            paddingBottom: 5,
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Explorar") {
              iconName = "search-outline";
            } else if (route.name === "Favoritos") {
              iconName = "heart-outline";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Explorar" component={HomeStack} />
        <Tab.Screen name="Favoritos" component={FavoritesView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
