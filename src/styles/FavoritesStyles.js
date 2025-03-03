import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f7", // Más claro y suave para mantener la consistencia
    padding: 20,
  },
  title: {
    fontSize: 28, // Título prominente para la sección
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 20,
    textAlign: "center",
    letterSpacing: 1,
  },
  emptyMessage: {
    fontSize: 18,
    color: "#7f8c8d",
    textAlign: "center",
    marginTop: 25,
    fontStyle: "italic",
  },
  placeItem: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#2c3e50",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    transform: [{ scale: 1 }],
    transition: "transform 0.3s ease-in-out",
  },
  placeName: {
    fontSize: 22, // Un poco más grande para resaltar el nombre
    fontWeight: "bold",
    color: "#2980b9",
    marginBottom: 8,
  },
  placeAddress: {
    fontSize: 16,
    color: "#7f8c8d",
    marginBottom: 5,
  },
  favoritesButton: {
    backgroundColor: "#f39c12",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#f39c12",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
    transform: [{ scale: 1 }],
    transition: "transform 0.3s ease-in-out",
  },
  favoritesButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});
