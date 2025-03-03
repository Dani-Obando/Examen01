import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeView from "../views/HomeView";
import PlaceDetailView from "../views/PlaceDetailView";
import FavoritesView from "../views/FavoritesView";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack para la pantalla Home
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeView} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetailView} />
    </Stack.Navigator>
  );
}

// Stack para Favoritos
function FavoritesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Favorites" component={FavoritesView} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetailView} />
    </Stack.Navigator>
  );
}

// Navegación principal con Tabs e Íconos
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "HomeTab") {
              iconName = "home-outline";
            } else if (route.name === "FavoritesTab") {
              iconName = "heart-outline";
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: "Inicio" }} />
        <Tab.Screen name="FavoritesTab" component={FavoritesStack} options={{ title: "Favoritos" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
