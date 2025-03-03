import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ecf0f1",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
    color: "#2c3e50",
    letterSpacing: 1.5,
  },
  detail: {
    fontSize: 18,
    marginBottom: 12,
    color: "#34495e",
    lineHeight: 22,
  },
  favoriteButton: {
    backgroundColor: "#f39c12",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 25,
    shadowColor: "#f39c12",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
  },
  favoriteButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  websiteButton: {
    backgroundColor: "#3498db",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#3498db",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
  },
  websiteButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 25,
    marginBottom: 15,
    color: "#2c3e50",
  },
});
