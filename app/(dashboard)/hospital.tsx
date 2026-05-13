import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import {
  useLanguage,
} from "../../context/LanguageContext";

export default function HospitalScreen() {

  const { t } =
    useLanguage();

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        🏥 {t.hospitalDashboard}
      </Text>

      <View style={styles.card}>

        <Text style={styles.cardText}>
          🚑 4 Ambulances Active
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.cardText}>
          🚨 2 Emergency Requests
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0B1020",
    padding: 20,
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 30,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#1D3557",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },

  cardText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

});