import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { router } from "expo-router";

import {
  useLanguage,
} from "../../context/LanguageContext";

export default function LanguageScreen() {

  const {
    setLanguage,
    t,
  } = useLanguage();

  const changeLanguage = (
    lang:
      | "English"
      | "Kannada"
      | "Hindi"
  ) => {

    setLanguage(lang);

    router.replace("/");
  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        🌍 {t.selectLanguage}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          changeLanguage(
            "English"
          )
        }
      >

        <Text style={styles.text}>
          English
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          changeLanguage(
            "Kannada"
          )
        }
      >

        <Text style={styles.text}>
          ಕನ್ನಡ
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          changeLanguage(
            "Hindi"
          )
        }
      >

        <Text style={styles.text}>
          हिन्दी
        </Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0B1020",
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#1D3557",
    padding: 18,
    width: "80%",
    borderRadius: 15,
    marginBottom: 20,
    alignItems: "center",
  },

  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

});