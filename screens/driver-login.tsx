import { useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";

import {
  ref,
  get,
} from "firebase/database";

import { db } from "../firebaseConfig";

export default function DriverLogin() {

  const [phone, setPhone] =
    useState("");

  const [license, setLicense] =
    useState("");

  // LOGIN DRIVER

  const handleLogin = async () => {

    if (!phone || !license) {

      alert("Please fill all fields");
      return;
    }

    try {

      // GET DRIVERS FROM FIREBASE

      const snapshot =
        await get(ref(db, "drivers"));

      const data = snapshot.val();

      if (!data) {

        alert(
          "❌ No registered drivers found"
        );

        return;
      }

      // CHECK DRIVER

      let found = false;

      Object.values(data).forEach(
        (driver: any) => {

          if (
            driver.phone === phone &&
            driver.license === license
          ) {

            found = true;
          }
        }
      );

      if (found) {

        alert("✅ Login Successful");

        router.push("/driver");

      } else {

        alert(
          "❌ Please register first"
        );
      }

    } catch (error) {

      alert("Login failed");

    }
  };

  return (

    <View style={styles.container}>

      <Text style={styles.header}>
        🚑 Driver Login
      </Text>

      {/* PHONE */}

      <TextInput
        placeholder="Phone Number"
        style={styles.input}
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      {/* LICENSE */}

      <TextInput
        placeholder="License Number"
        style={styles.input}
        value={license}
        onChangeText={setLicense}
      />

      {/* LOGIN BUTTON */}

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >

        <Text style={styles.buttonText}>
          Login
        </Text>

      </TouchableOpacity>

      {/* REGISTER */}

      <TouchableOpacity
        onPress={() =>
          router.push("/driver-register")
        }
      >

        <Text style={styles.register}>
          New Driver? Register Here
        </Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    padding: 20,
  },

  header: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
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

  register: {
    color: "#90CAF9",
    textAlign: "center",
    marginTop: 25,
    fontSize: 16,
  },

});