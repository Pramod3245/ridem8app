import React, { Component, useRef } from "react";
import {
  Alert,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Signin() {
  const router = useRouter();

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = () => {
    if(!emailRef.current || !passwordRef.current){
      Alert.alert('Sign-In', "Please fill all the fields");
      return;
    }
    // Login Process
  };

  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View
        style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }}
        className="flex-1 gap-12"
      >
        {/* The Sign In image */}
        <View className="items-center">
          {/* <Image/> */}
          {/* <Image style={{height: hp:(25)}} resizeMode= 'contain' source={require('bla')/>} */}
        </View>
        <View className="gap-10">
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold tracking-wide text-center text-neutral-800"
          >
            Sign-In
          </Text>
          <View className="gap-4">
            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4  px-4 bg-neutral-100 items-center rounded-xl"
            >
              <Ionicons name="mail" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={(value) => (emailRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Email Address"
                placeholderTextColor={"gray"}
              />
            </View>
            <View className="gap-4">
              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4  px-4 bg-neutral-100 items-center rounded-xl"
              >
                <Feather name="lock" size={hp(2.7)} color="black" />
                <TextInput
                  onChangeText={(value) => (passwordRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="Password"
                  secureTextEntry
                  placeholderTextColor={"gray"}
                />
              </View>
              <Text
                style={hp(1.8)}
                className="font-semibold text-center text-neutral-500"
              >
                Forgot Password
              </Text>
            </View>
            <TouchableOpacity
              onPress={handleLogin}
              style={{ height: hp(6.5) }}
              className="bg-indigo-500 rounded-xl justify-center items-center"
            >
              <Text
                style={{ fontSize: hp(2.7) }}
                className="text-black font-bold tracking-wide"
              >
                Sign-In
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center">
            <Text style={hp(1.8)} className="font-semibold text-neutral-500">
              Dont Have an Account?
            </Text>
            <Pressable
              onPress={() => {
                router.push("signUp");
              }}
            >
              <Text style={hp(1.8)} className="font-semibold text-indigo-500">
                Sign-Up
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
