import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import {
  useLanguage,
} from "../../context/LanguageContext";

export default function DriverLogin() {

  const { t } =
    useLanguage();

  const handleLogin = () => {

    Alert.alert(
      t.success,
      t.loginSuccess
    );

  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        🚑 {t.driverLogin}
      </Text>

      <TextInput
        placeholder={t.email}
        placeholderTextColor="#999"
        style={styles.input}
      />

      <TextInput
        placeholder={t.password}
        placeholderTextColor="#999"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >

        <Text style={styles.buttonText}>
          {t.driverLogin}
        </Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0B1020",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },

  input: {
    backgroundColor: "#1D3557",
    color: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#E63946",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

});