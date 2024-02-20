import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
// import { symptoms } from "../lib/symptomData";
import { SafeAreaView } from "react-native-safe-area-context";
import RNPickerSelect from "react-native-picker-select";

const HomeScreen = ({ navigation }) => {
  const [symptoms, setSymptoms] = useState([]);
  const [symptomInput, setSymptomInput] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [treatmentOptions, setTreatmentOptions] = useState([]);

  // Sample data for symptoms and treatments
  const symptomOptions = [
    "Abnormal milk secretion",
    "Abortion in pregnant cattle",
    "Anemia",
    "Blisters on tongue and lips",
    "Bloody discharge",
    "Coughing",
    "Dark urine",
    "Decreased milk production",
    "Difficulty breathing",
    "Fever",
    "Foul-smelling discharge",
    "Lameness",
    "Loss of appetite",
    "Nasal discharge",
    "Nodules on skin",
    "Painful udder",
    "Pale mucous membranes",
    "Rapid breathing",
    "Reduced milk production",
    "Salivation",
    "Swelling",
    "Swelling in affected area",
    "Swollen lymph nodes",
    "Swollen testicles in bulls",
    "Swollen udder",
    "Uncoordinated movements",
    "Weakness",
    "Weight loss",
  ];

  // Function to handle changes in symptom input
  const handleSymptomChange = (text) => {
    setSymptomInput(text);
    // Simple autocomplete logic
    const filteredOptions = symptomOptions.filter((option) =>
      option.toLowerCase().includes(text.toLowerCase())
    );
    setTreatmentOptions(filteredOptions);
  };

  // Function to handle selection of a symptom
  const handleSymptomSelect = (selectedSymptom) => {
    if (!symptoms.includes(selectedSymptom)) {
      setSymptoms([...symptoms, selectedSymptom]);
      setSymptomInput("");
    }
  };

  const handleAgeChange = (text) => {
    // Regex to remove non-numeric characters
    const numericValue = text.replace(/[^0-9]/g, "");
    setAge(numericValue);
  };
  console.log("Symptoms array" + symptoms + "The breed Selected: " + breed);

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.greenText}>Cattle Expert System</Text>
        </View>
        <View style={styles.inputContainer}>
          <ScrollView horizontal>
            {symptoms.map((symptom, index) => (
              <TouchableOpacity
                key={index}
                style={styles.selectedSymptom}
                onPress={() =>
                  setSymptoms(symptoms.filter((item) => item !== symptom))
                }
              >
                <Text style={styles.selectedSymptomText}>{symptom}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Start Typing Symptoms and Select Below"
            value={symptomInput}
            onChangeText={handleSymptomChange}
          />
        </View>
        <Text style={{ fontWeight: 900 }}>Selecy Your Cow Breed</Text>
        <View style={{ marginVertical: 5 }}>
          <RNPickerSelect
            onValueChange={(value) => setBreed(value)}
            items={[
              { label: "Tuli", value: "tuli" },
              { label: "Brahman", value: "brahman" },
              { label: "Sanga", value: "sanga" },
              { label: "Nguni", value: "nguni" },
              { label: "Simmental", value: "simmental" },
              { label: "Hereford", value: "hereford" },
            ]}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Age"
            value={age}
            keyboardType="numeric"
            onChangeText={handleAgeChange}
          />
        </View>
        <ScrollView style={styles.treatmentOptionsContainer}>
          {treatmentOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.treatmentOption}
              onPress={() => handleSymptomSelect(option)}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Results")}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
    marginBottom: 15,
  },
  greenText: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
  },

  mainContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  selectedSymptom: {
    backgroundColor: "#DDDDDD",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5,
  },
  selectedSymptomText: {
    fontWeight: "bold",
  },
  picker: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderRadius: "10%",
    backgroundColor: "#DDDDDD",
    marginVertical: 5,
    marginRight: 10,
    marginBottom: 25,
  },
  treatmentOptionsContainer: {
    maxHeight: 100,
    marginTop: 10,
  },
  treatmentOption: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: "green",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default HomeScreen;
