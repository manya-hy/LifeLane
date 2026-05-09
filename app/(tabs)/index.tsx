import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import { router } from "expo-router";

export default function HomeScreen() {

  return (

    <View style={styles.container}>

      <StatusBar
        barStyle="light-content"
      />

      {/* LOGO */}

      <Text style={styles.logo}>
        🚑
      </Text>

      {/* TITLE */}

      <Text style={styles.title}>
        Life Lane
      </Text>

      <Text style={styles.subtitle}>
        Smart Ambulance Tracking System
      </Text>

      {/* USER */}

      <TouchableOpacity
        style={styles.userButton}
        onPress={() =>
          router.push("/user")
        }
      >

        <Text style={styles.buttonText}>
          Continue as User
        </Text>

      </TouchableOpacity>

      {/* DRIVER REGISTRATION */}

      <TouchableOpacity
        style={styles.registerButton}
        onPress={() =>
          router.push("/driver-register")
        }
      >

        <Text style={styles.buttonText}>
          Driver Registration
        </Text>

      </TouchableOpacity>

      {/* LANGUAGE */}

      <TouchableOpacity
        style={styles.languageButton}
        onPress={() =>
          router.push("/language")
        }
      >

        <Text style={styles.languageText}>
          🌐 Select Language
        </Text>

      </TouchableOpacity>

      {/* FLOATING DRIVER ICON */}

      <TouchableOpacity
        style={styles.driverIcon}
        onPress={() =>
          router.push("/driver-profile")
        }
      >

        <Text style={styles.driverEmoji}>
          👨‍⚕️
        </Text>

      </TouchableOpacity>

      {/* FOOTER */}

      <Text style={styles.footer}>
        Saving Lives Faster 🚑
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  logo: {
    fontSize: 90,
    marginBottom: 20,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },

  subtitle: {
    color: "#B0B0B0",
    fontSize: 18,
    marginBottom: 50,
    marginTop: 10,
    textAlign: "center",
  },

  userButton: {
    backgroundColor: "#D32F2F",
    width: "90%",
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 20,
  },

  registerButton: {
    backgroundColor: "#43A047",
    width: "90%",
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 20,
  },

  languageButton: {
    borderWidth: 1,
    borderColor: "#444",
    width: "90%",
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 40,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  languageText: {
    color: "white",
    fontSize: 16,
  },

  /* FLOATING ICON */

  driverIcon: {
    position: "absolute",
    bottom: 40,
    right: 25,

    width: 70,
    height: 70,

    borderRadius: 35,

    backgroundColor: "#1E88E5",

    justifyContent: "center",
    alignItems: "center",

    elevation: 10,
  },

  driverEmoji: {
    fontSize: 34,
  },

  footer: {
    color: "#777",
    fontSize: 14,
    marginTop: 20,
  },

});