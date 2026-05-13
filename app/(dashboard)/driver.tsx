import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import {
  ref,
  onValue,
  update,
} from "firebase/database";

import { db } from "../../firebaseConfig";

import {
  useEffect,
  useState,
} from "react";

export default function DriverScreen() {

  const [requests, setRequests] =
    useState<any[]>([]);

  // LOAD REQUESTS

  useEffect(() => {

    const requestsRef =
      ref(db, "emergencyRequests");

    onValue(requestsRef, (snapshot) => {

      const data = snapshot.val();

      if (data) {

        const requestsArray =
          Object.entries(data).map(
            ([id, value]: any) => ({
              id,
              ...value,
            })
          );

        setRequests(requestsArray.reverse());

      } else {

        setRequests([]);
      }
    });

  }, []);

  // ACCEPT REQUEST

  const acceptRequest = async (
    requestId: string
  ) => {

    try {

      await update(
        ref(
          db,
          `emergencyRequests/${requestId}`
        ),
        {
          status: "accepted",

          acceptedBy:
            "Manya Driver",
        }
      );

      alert(
        "🚑 Request Accepted"
      );

    } catch (error) {

      alert(
        "Error accepting request"
      );
    }
  };

  // COMPLETE REQUEST

  const completeRequest = async (
    requestId: string
  ) => {

    try {

      await update(
        ref(
          db,
          `emergencyRequests/${requestId}`
        ),
        {
          completed: true,

          status: "completed",
        }
      );

      alert(
        "✅ Trip Completed"
      );

    } catch (error) {

      alert(
        "Error completing trip"
      );
    }
  };

  return (

    <ScrollView
      style={styles.container}
    >

      <Text style={styles.header}>
        🚑 Driver Dashboard
      </Text>

      {requests.map((item) => (

        <View
          key={item.id}
          style={styles.card}
        >

          <Text style={styles.title}>
            Emergency Request
          </Text>

          <Text style={styles.text}>
            👤 {item.patientName}
          </Text>

          <Text style={styles.text}>
            📞 {item.phoneNumber}
          </Text>

          <Text style={styles.text}>
            🚨 {item.emergencyType}
          </Text>

          <Text style={styles.text}>
            📍 {item.location}
          </Text>

          <Text style={styles.status}>
            Status: {item.status}
          </Text>

          {/* PENDING */}

          {item.status === "pending" && (

            <TouchableOpacity
              style={styles.acceptButton}
              onPress={() =>
                acceptRequest(item.id)
              }
            >

              <Text style={styles.buttonText}>
                Accept Request
              </Text>

            </TouchableOpacity>
          )}

          {/* ACCEPTED */}

          {item.status === "accepted" && (

            <>

              <View style={styles.acceptedBox}>

                <Text style={styles.acceptedText}>
                  ✅ Already Accepted
                </Text>

                <Text style={styles.acceptedDriver}>
                  Driver: {item.acceptedBy}
                </Text>

              </View>

              <TouchableOpacity
                style={styles.completeButton}
                onPress={() =>
                  completeRequest(item.id)
                }
              >

                <Text style={styles.buttonText}>
                  Complete Trip
                </Text>

              </TouchableOpacity>

            </>
          )}

          {/* COMPLETED */}

          {item.status === "completed" && (

            <View style={styles.completedBox}>

              <Text style={styles.completedText}>
                ✅ Trip Completed
              </Text>

            </View>
          )}

        </View>
      ))}

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
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 30,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#1E1E1E",
    padding: 20,
    borderRadius: 18,
    marginBottom: 20,
  },

  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  text: {
    color: "#DDD",
    fontSize: 16,
    marginBottom: 10,
  },

  status: {
    color: "#FFD54F",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 15,
  },

  acceptButton: {
    backgroundColor: "#D32F2F",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  completeButton: {
    backgroundColor: "#43A047",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  acceptedBox: {
    backgroundColor: "#2E7D32",
    padding: 15,
    borderRadius: 12,
  },

  acceptedText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  acceptedDriver: {
    color: "white",
    marginTop: 8,
    fontSize: 15,
  },

  completedBox: {
    backgroundColor: "#1565C0",
    padding: 15,
    borderRadius: 12,
  },

  completedText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

});