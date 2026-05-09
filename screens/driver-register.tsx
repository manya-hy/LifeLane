import { useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import { router } from "expo-router";

import {
  ref,
  push,
} from "firebase/database";

import { db } from "../firebaseConfig";

import * as ImagePicker from "expo-image-picker";

export default function DriverRegister() {

  const [name, setName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [otp, setOtp] =
    useState("");

  const [generatedOtp, setGeneratedOtp] =
    useState("");

  const [verified, setVerified] =
    useState(false);

  const [license, setLicense] =
    useState("");

  const [hospital, setHospital] =
    useState("");

  const [vehicle, setVehicle] =
    useState("");

  // IMAGE STATES

  const [driverPhoto, setDriverPhoto] =
    useState("");

  const [licensePhoto, setLicensePhoto] =
    useState("");

  const [hospitalProof, setHospitalProof] =
    useState("");

  // PICK IMAGE

  const pickImage = async (
    type: string
  ) => {

    const result =
      await ImagePicker.launchImageLibraryAsync({

        mediaTypes:
          ImagePicker.MediaTypeOptions.Images,

        quality: 1,
      });

    if (!result.canceled) {

      const uri =
        result.assets[0].uri;

      if (type === "driver") {

        setDriverPhoto(uri);

      } else if (type === "license") {

        setLicensePhoto(uri);

      } else {

        setHospitalProof(uri);
      }
    }
  };

  // SEND OTP

  const sendOtp = () => {

    if (phone.length !== 10) {

      alert(
        "Enter valid mobile number"
      );

      return;
    }

    // DEMO OTP

    const randomOtp =
      Math.floor(
        1000 + Math.random() * 9000
      ).toString();

    setGeneratedOtp(randomOtp);

    alert(
      `📲 Demo OTP: ${randomOtp}`
    );
  };

  // VERIFY OTP

  const verifyOtp = () => {

    if (otp === generatedOtp) {

      setVerified(true);

      alert(
        "✅ Mobile Number Verified"
      );

    } else {

      alert("❌ Invalid OTP");
    }
  };

  // REGISTER DRIVER

  const registerDriver = async () => {

    if (!verified) {

      alert(
        "Please verify mobile number"
      );

      return;
    }

    if (
      !name ||
      !phone ||
      !license ||
      !hospital ||
      !vehicle
    ) {

      alert("Please fill all fields");
      return;
    }

    if (
      !driverPhoto ||
      !licensePhoto ||
      !hospitalProof
    ) {

      alert(
        "Please upload all images"
      );

      return;
    }

    try {

      await push(
        ref(db, "drivers"),
        {
          name,
          phone,
          license,
          hospital,
          vehicle,

          driverPhoto,
          licensePhoto,
          hospitalProof,
        }
      );

      alert(
        "✅ Driver Registered Successfully"
      );

      router.push("/driver-login");

    } catch (error) {

      alert("Registration failed");

    }
  };

  return (

    <ScrollView
      style={styles.container}
    >

      <Text style={styles.header}>
        🚑 Driver Registration
      </Text>

      {/* NAME */}

      <TextInput
        placeholder="Driver Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      {/* PHONE */}

      <TextInput
        placeholder="Mobile Number"
        style={styles.input}
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      {/* SEND OTP */}

      <TouchableOpacity
        style={styles.otpButton}
        onPress={sendOtp}
      >

        <Text style={styles.buttonText}>
          Send OTP
        </Text>

      </TouchableOpacity>

      {/* OTP */}

      <TextInput
        placeholder="Enter OTP"
        style={styles.input}
        keyboardType="number-pad"
        value={otp}
        onChangeText={setOtp}
      />

      {/* VERIFY OTP */}

      <TouchableOpacity
        style={styles.verifyButton}
        onPress={verifyOtp}
      >

        <Text style={styles.buttonText}>
          Verify OTP
        </Text>

      </TouchableOpacity>

      {/* LICENSE */}

      <TextInput
        placeholder="Driving License Number"
        style={styles.input}
        value={license}
        onChangeText={setLicense}
      />

      {/* HOSPITAL */}

      <TextInput
        placeholder="Hospital Name"
        style={styles.input}
        value={hospital}
        onChangeText={setHospital}
      />

      {/* VEHICLE */}

      <TextInput
        placeholder="Ambulance Vehicle Number"
        style={styles.input}
        value={vehicle}
        onChangeText={setVehicle}
      />

      {/* DRIVER PHOTO */}

      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() =>
          pickImage("driver")
        }
      >

        <Text style={styles.buttonText}>
          Upload Driver Photo
        </Text>

      </TouchableOpacity>

      {driverPhoto ? (

        <Image
          source={{ uri: driverPhoto }}
          style={styles.image}
        />

      ) : null}

      {/* LICENSE PHOTO */}

      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() =>
          pickImage("license")
        }
      >

        <Text style={styles.buttonText}>
          Upload License Photo
        </Text>

      </TouchableOpacity>

      {licensePhoto ? (

        <Image
          source={{ uri: licensePhoto }}
          style={styles.image}
        />

      ) : null}

      {/* HOSPITAL PROOF */}

      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() =>
          pickImage("hospital")
        }
      >

        <Text style={styles.buttonText}>
          Upload Hospital Proof
        </Text>

      </TouchableOpacity>

      {hospitalProof ? (

        <Image
          source={{ uri: hospitalProof }}
          style={styles.image}
        />

      ) : null}

      {/* REGISTER */}

      <TouchableOpacity
        style={styles.registerButton}
        onPress={registerDriver}
      >

        <Text style={styles.buttonText}>
          Register Driver
        </Text>

      </TouchableOpacity>

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
    marginBottom: 40,
    textAlign: "center",
  },

  input: {
    backgroundColor: "#1E1E1E",
    color: "white",
    padding: 18,
    borderRadius: 15,
    marginBottom: 20,
    fontSize: 16,
  },

  otpButton: {
    backgroundColor: "#1976D2",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },

  verifyButton: {
    backgroundColor: "#43A047",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },

  uploadButton: {
    backgroundColor: "#424242",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },

  registerButton: {
    backgroundColor: "#D32F2F",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  image: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 20,
  },

});