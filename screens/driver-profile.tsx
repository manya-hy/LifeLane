import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import {
  ref,
  onValue,
} from "firebase/database";

import { db } from "../firebaseConfig";

import {
  useEffect,
  useState,
} from "react";

import { router } from "expo-router";

export default function DriverProfile() {

  const [driver, setDriver] =
    useState<any>(null);

  // LOAD DRIVER DATA

  useEffect(() => {

    const driversRef =
      ref(db, "drivers");

    onValue(driversRef, (snapshot) => {

      const data = snapshot.val();

      if (data) {

        // GET FIRST DRIVER

        const firstDriver =
          Object.values(data)[0];

        setDriver(firstDriver);
      }
    });

  }, []);

  // LOADING

  if (!driver) {

    return (

      <View style={styles.loadingContainer}>

        <Text style={styles.loading}>
          Loading Driver Profile...
        </Text>

      </View>
    );
  }

  return (

    <ScrollView
      style={styles.container}
    >

      {/* PROFILE */}

      <View style={styles.profileSection}>

        <Image
          source={{
            uri: driver.driverPhoto,
          }}
          style={styles.profileImage}
        />

        <Text style={styles.name}>
          {driver.name}
        </Text>

        <Text style={styles.hospital}>
          {driver.hospital}
        </Text>

      </View>

      {/* CURRENT */}

      <TouchableOpacity
        style={styles.card}
      >

        <Text style={styles.cardTitle}>
          🚑 Current Request
        </Text>

        <Text style={styles.cardText}>
          Live GPS tracking enabled
        </Text>

      </TouchableOpacity>

      {/* PENDING */}

      <TouchableOpacity
        style={styles.card}
      >

        <Text style={styles.cardTitle}>
          ⏳ Pending Requests
        </Text>

        <Text style={styles.cardText}>
          Emergency requests available
        </Text>

      </TouchableOpacity>

      {/* COMPLETED */}

      <TouchableOpacity
        style={styles.card}
      >

        <Text style={styles.cardTitle}>
          ✅ Completed Requests
        </Text>

        <Text style={styles.cardText}>
          Driver trip history
        </Text>

      </TouchableOpacity>

      {/* DETAILS */}

      <View style={styles.detailsBox}>

        <Text style={styles.details}>
          📞 {driver.phone}
        </Text>

        <Text style={styles.details}>
          🚑 {driver.vehicle}
        </Text>

        <Text style={styles.details}>
          🪪 {driver.license}
        </Text>

      </View>

      {/* UPDATE PROFILE */}

      <TouchableOpacity
        style={styles.updateButton}
        onPress={() =>
          router.push("/update-profile")
        }
      >

        <Text style={styles.updateText}>
          Update Profile
        </Text>

      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },

  loading: {
    color: "white",
    fontSize: 20,
  },

  profileSection: {
    alignItems: "center",
    marginTop: 70,
    marginBottom: 40,
  },

  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 20,
  },

  name: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },

  hospital: {
    color: "#B0B0B0",
    fontSize: 16,
    marginTop: 5,
  },

  card: {
    backgroundColor: "#1E1E1E",
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 18,
    marginBottom: 20,
  },

  cardTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  cardText: {
    color: "#B0B0B0",
    fontSize: 15,
  },

  detailsBox: {
    backgroundColor: "#1E1E1E",
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 18,
    marginBottom: 20,
  },

  details: {
    color: "white",
    fontSize: 16,
    marginBottom: 12,
  },

  updateButton: {
    backgroundColor: "#1E88E5",
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 40,
  },

  updateText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

});