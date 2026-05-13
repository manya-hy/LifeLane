import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import MapView, {
  Marker,
} from "react-native-maps";

import {
  useLanguage,
} from "../../context/LanguageContext";

export default function MapScreen() {

  const { t } =
    useLanguage();

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        🗺️ {t.liveMap}
      </Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 12.9716,
          longitude: 77.5946,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >

        <Marker
          coordinate={{
            latitude: 12.9716,
            longitude: 77.5946,
          }}
          title="Ambulance"
          description="Live Ambulance"
        />

      </MapView>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0B1020",
  },

  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 15,
  },

  map: {
    flex: 1,
  },

});