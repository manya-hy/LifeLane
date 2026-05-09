import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import {
  useEffect,
  useState,
} from "react";

import {
  ref,
  onValue,
  update,
} from "firebase/database";

import { db } from "../firebaseConfig";

import { router } from "expo-router";

export default function UpdateProfile() {

  const [driverKey, setDriverKey] =
    useState("");

  const [name, setName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [license, setLicense] =
    useState("");

  const [hospital, setHospital] =
    useState("");

  const [vehicle, setVehicle] =
    useState("");

  // LOAD DRIVER

  useEffect(() => {

    const driversRef =
      ref(db, "drivers");

    onValue(driversRef, (snapshot) => {

      const data = snapshot.val();

      if (data) {

        const firstKey =
          Object.keys(data)[0];

        const firstDriver =
          data[firstKey];

        setDriverKey(firstKey);

        setName(firstDriver.name);
        setPhone(firstDriver.phone);
        setLicense(firstDriver.license);
        setHospital(firstDriver.hospital);
        setVehicle(firstDriver.vehicle);
      }
    });

  }, []);

  // UPDATE PROFILE

  const updateProfile = async () => {

    try {

      await update(
        ref(db, `drivers/${driverKey}`),
        {
          name,
          phone,
          license,
          hospital,
          vehicle,
        }
      );

      alert(
        "✅ Profile Updated"
      );

      router.back();

    } catch (error) {

      alert("Update failed");

    }
  };

  return (

    <ScrollView
      style={styles.container}
    >

      <Text style={styles.header}>
        ✏️ Update Profile
      </Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />

      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Phone"
      />

      <TextInput
        style={styles.input}
        value={license}
        onChangeText={setLicense}
        placeholder="License"
      />

      <TextInput
        style={styles.input}
        value={hospital}
        onChangeText={setHospital}
        placeholder="Hospital"
      />

      <TextInput
        style={styles.input}
        value={vehicle}
        onChangeText={setVehicle}
        placeholder="Vehicle"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={updateProfile}
      >

        <Text style={styles.buttonText}>
          Save Changes
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
    fontSize: 30,
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
    backgroundColor: "#1E88E5",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

});