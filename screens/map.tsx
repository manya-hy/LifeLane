import { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import MapView, { Marker } from "react-native-maps";

import * as Location from "expo-location";

export default function MapScreen() {

  const [location, setLocation] = useState<any>(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {

    let { status } =
      await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      alert("Permission denied");
      return;
    }

    let currentLocation =
      await Location.getCurrentPositionAsync({});

    setLocation(currentLocation.coords);
  };

  return (
    <View style={styles.container}>

      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation={true}
        >

          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="You are here"
          />

        </MapView>
      ) : (
        <Text style={styles.loading}>
          Loading Map...
        </Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    flex: 1,
  },

  loading: {
    flex: 1,
    textAlign: "center",
    marginTop: 100,
    fontSize: 20,
  },
});