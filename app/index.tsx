import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { router } from "expo-router";

import {
  useLanguage,
} from "../context/LanguageContext";

export default function HomeScreen() {

  const { t } =
    useLanguage();

  return (

    <ScrollView
      contentContainerStyle={
        styles.container
      }
    >

      <Text style={styles.logo}>
        🚑
      </Text>

      <Text style={styles.title}>
        {t.appName}
      </Text>

      <Text style={styles.subtitle}>
        {t.subtitle}
      </Text>

      {/* SOS */}

      <TouchableOpacity
        style={styles.sosButton}
      >

        <Text style={styles.buttonText}>
          🚨 {t.sos}
        </Text>

      </TouchableOpacity>

      {/* DRIVER LOGIN */}

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push(
            "/(auth)/driver-login"
          )
        }
      >

        <Text style={styles.buttonText}>
          🚑 {t.driverLogin}
        </Text>

      </TouchableOpacity>

      {/* DRIVER REGISTER */}

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push(
            "/(auth)/driver-register"
          )
        }
      >

        <Text style={styles.buttonText}>
          📝 {t.driverRegister}
        </Text>

      </TouchableOpacity>

      {/* HOSPITAL */}

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push(
            "/(dashboard)/hospital"
          )
        }
      >

        <Text style={styles.buttonText}>
          🏥 {t.hospitalDashboard}
        </Text>

      </TouchableOpacity>

      {/* MAP */}

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push(
            "/(dashboard)/map"
          )
        }
      >

        <Text style={styles.buttonText}>
          🗺️ {t.liveMap}
        </Text>

      </TouchableOpacity>

      {/* LANGUAGE */}

      <TouchableOpacity
        style={styles.languageButton}
        onPress={() =>
          router.push(
            "/(dashboard)/language"
          )
        }
      >

        <Text style={styles.buttonText}>
          🌍 {t.language}
        </Text>

      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: "#0B1020",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  logo: {
    fontSize: 80,
    marginBottom: 10,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },

  subtitle: {
    color: "#B8C1CC",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 40,
    fontSize: 16,
  },

  sosButton: {
    backgroundColor: "#FF0000",
    width: "92%",
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 25,
  },

  button: {
    backgroundColor: "#1D3557",
    width: "92%",
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 18,
  },

  languageButton: {
    backgroundColor: "#2A9D8F",
    width: "92%",
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 20,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

});