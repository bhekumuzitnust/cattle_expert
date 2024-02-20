import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Results = () => {
  // Sample treatment options for Anthrax
  const treatmentOptions = [
    "Medicine A",
    "Medicine B",
    "Medicine C",
    // Add more treatment options here if needed
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Results</Text>
        <Text style={styles.label}>Disease Detected: Anthrax</Text>

        <View style={styles.treatmentContainer}>
          <Text style={styles.label}>Possible Treatment Options:</Text>
          {treatmentOptions.map((option, index) => (
            <Text key={index} style={styles.option}>
              - {option}
            </Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2E8B57", // Dark green accent color
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333333", // Dark text color
  },
  treatmentContainer: {
    backgroundColor: "#F0F8FF", // Light blue background color
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  option: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
    color: "#2E8B57", // Dark green accent color
  },
});

export default Results;
