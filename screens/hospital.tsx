import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const hospitals = [
  {
    id: "1",
    name: "Apollo Hospital",
    eta: "5 mins",
  },
  {
    id: "2",
    name: "Manipal Hospital",
    eta: "8 mins",
  },
  {
    id: "3",
    name: "Government Hospital",
    eta: "10 mins",
  },
  {
    id: "4",
    name: "Emergency Trauma Center",
    eta: "6 mins",
  },
];

export default function HospitalsScreen() {

  return (
    <View style={styles.container}>

      <Text style={styles.header}>
        🏥 Nearby Hospitals
      </Text>

      <FlatList
        data={hospitals}
        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (

          <TouchableOpacity style={styles.card}>

            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text style={styles.eta}>
              ETA: {item.eta}
            </Text>

          </TouchableOpacity>

        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 4,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },

  eta: {
    fontSize: 16,
    color: "gray",
  },

});