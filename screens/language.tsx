import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";

import {
  useLanguage,
} from "../context/LanguageContext";

export default function LanguageScreen() {

  const {
    setLanguage,
  } = useLanguage();

  const languages = [
    "English",
    "Kannada",
    "Hindi",
  ];

  const selectLanguage = (
    lang: any
  ) => {

    setLanguage(lang);

    // Go back automatically
    router.push("/user");
  };

  return (

    <View style={styles.container}>

      <Text style={styles.header}>
        🌐 Select Language
      </Text>

      {languages.map((lang, index) => (

        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() =>
            selectLanguage(lang)
          }
        >

          <Text style={styles.cardText}>
            {lang}
          </Text>

        </TouchableOpacity>

      ))}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 30,
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 4,
  },

  cardText: {
    fontSize: 18,
  },

});