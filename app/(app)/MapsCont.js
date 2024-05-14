import React, { useEffect, useState, useRef } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Platform, PermissionsAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';

export default function MapsCont() {
  const navigation = useNavigation();
  const [currentLocation, setCurrentLocation] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // Request permission to access the device's location
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "Location Permission",
              message: "This app requires access to your location.",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK",
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // Permission granted, get current location
            getCurrentLocation();
          } else {
            console.log("Location permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      } else if (Platform.OS === 'ios') {
        try {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status === 'granted') {
            // Permission granted, get current location
            getCurrentLocation();
          } else {
            console.log("Location permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };

    requestLocationPermission();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Location permission denied');
        return;
      }
      
      const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
      const { latitude, longitude } = location.coords;
      setCurrentLocation({ latitude, longitude });
    } catch (error) {
      console.error('Failed to get current location', error);
    }
  };

  const goBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  useEffect(() => {
    if (currentLocation && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
        latitudeDelta: 0.001, // Adjust zoom radius here
        longitudeDelta: 0.001, // Adjust zoom radius here
      });
    }
  }, [currentLocation]);

  // Zoom to current location when component mounts
  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Back button */}
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={goBack}>
          <View style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: currentLocation ? currentLocation.latitude : 37.78825,
            longitude: currentLocation ? currentLocation.longitude : -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true} // Show user's current location
        >
          {/* Marker for user's current location */}
          {currentLocation && (
            <Marker
              coordinate={{ latitude: currentLocation.latitude, longitude: currentLocation.longitude }}
              title="You are here"
              description="This is your current location"
            />
          )}
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  backButtonContainer: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1,
  },
  backButton: {
    backgroundColor: "red",
    borderRadius: 50,
    padding: 10,
  },
});
