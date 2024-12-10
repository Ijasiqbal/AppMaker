import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // For the heart icon

export default function AddToCartTab() {
  return (
    <View style={styles.container}>
      {/* Heart Icon */}
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome name="heart-o" size={20} color="#2D6A4F" />
      </TouchableOpacity>

      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, // For Android shadow
    margin: 10,
    position: "absolute",
    bottom: 0,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#2D6A4F",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: "#2D6A4F",
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
