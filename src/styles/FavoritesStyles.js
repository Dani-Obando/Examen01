import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ececec",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 15,
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
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#34495e",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  placeName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2980b9",
    marginBottom: 5,
  },
  placeAddress: {
    fontSize: 16,
    color: "#7f8c8d",
  },
});
