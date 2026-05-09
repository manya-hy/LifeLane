import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useState } from "react";

import {
  ref,
  push,
} from "firebase/database";

import { db } from "../firebaseConfig";

export default function UserScreen() {

  const [name, setName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [emergency, setEmergency] =
    useState("");

  const [location, setLocation] =
    useState("");

  const sendRequest = async () => {

    if (
      !name ||
      !phone ||
      !emergency ||
      !location
    ) {

      alert("Please fill all fields");
      return;
    }

    if (phone.length !== 10) {

      alert(
        "Please enter correct mobile number"
      );

      return;
    }

    try {

      await push(
        ref(db, "emergencyRequests"),
        {
          patientName: name,

          phoneNumber: phone,

          emergencyType: emergency,

          location: location,

          status: "pending",

          acceptedBy: "",

          completed: false,

          createdAt: Date.now(),
        }
      );

      alert(
        "🚑 Emergency Request Sent"
      );

      setName("");
      setPhone("");
      setEmergency("");
      setLocation("");

    } catch (error) {

      alert("Error sending request");
    }
  };

  return (

    <ScrollView
      style={styles.container}
    >

      <Text style={styles.header}>
        🚑 Emergency Help
      </Text>

      <TextInput
        placeholder="Patient Name"
        placeholderTextColor="#999"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Mobile Number"
        placeholderTextColor="#999"
        style={styles.input}
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        placeholder="Emergency Type"
        placeholderTextColor="#999"
        style={styles.input}
        value={emergency}
        onChangeText={setEmergency}
      />

      <TextInput
        placeholder="Current Location"
        placeholderTextColor="#999"
        style={styles.input}
        value={location}
        onChangeText={setLocation}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={sendRequest}
      >

        <Text style={styles.buttonText}>
          Send Emergency Request
        </Text>

      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },

  header: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 40,
    textAlign: "center",
  },

  input: {
    backgroundColor: "#1E1E1E",
    color: "white",
    padding: 18,
    borderRadius: 15,
    marginBottom: 20,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#D32F2F",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

});