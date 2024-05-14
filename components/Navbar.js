import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from "expo-router";

export default function Navbar() {
  const router = useRouter();
  const navigation = useNavigation();

  const goToHome = () => {
    router.push('MarketPlace'); // Navigate to the 'Home' screen
  };

  const goToMaps = () => {
    router.push('MapsCont'); // Navigate to the 'Maps' screen
  };

  const goToProfile = () => {
    router.push('Profile') // Navigate to the 'Profile' screen
  };

  return (
    <View style={{
      position: 'fixed', // or 'absolute' if you want it relative to its nearest positioned ancestor
      bottom: 0,
      width: '100%',
      height: 80, // Adjust the height as needed
      backgroundColor: '#4B5563',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: 'white',
    }}>
      <TouchableOpacity onPress={goToHome}>
        <FontAwesome name="home" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToMaps}>
        <FontAwesome name="map" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToProfile}>
        <FontAwesome name="user" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
