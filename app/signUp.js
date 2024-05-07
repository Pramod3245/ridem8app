import React, { Component, useRef, useState } from "react";
import {
  Alert,
  ImageBackground,
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
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Loading from "../components/Loading";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import CustomKeyboardView from "../components/CustomKeyboardView";
import { useAuth } from "../context/authContext";

export default function Signup() {
  const router = useRouter();

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const usernameRef = useRef("");
  const profileRef = useRef("");
  const [loading, setLoading] = useState(false);
  const {register} = useAuth();

  const handleRegister = async () => {
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !usernameRef.current ||
      !profileRef.current
    ) {
      Alert.alert("Sign-Up", "Please fill all the fields");
      return;
    }
    // Login Process
    setLoading(true);
    let response=  await register(emailRef.current, passwordRef.current, usernameRef.current, profileRef.current)
    setLoading(false)

    // console.log('got result', response);
    if(!response.success){
      Alert.alert('Sign-Up', response.msg);
    }
  };

  const bgImage = require("ridem8app/assets/images/loneBike1.jpeg");

  return (
    <ImageBackground source={bgImage} style={{ width: "100%", height: "100%" }}>
    <CustomKeyboardView>
      <View className="flex-1 pt-8">
        <StatusBar style="dark" />
        <View
          style={{ paddingTop: hp(7), paddingHorizontal: wp(5) }}
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
              className="font-bold tracking-wide text-center text-white"
            >
              Create a new Account
            </Text>
            <View className="gap-4">
              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4  px-4 bg-neutral-100 items-center rounded-xl"
              >
                <AntDesign name="user" size={hp(2.7)} color="black" />
                <TextInput
                  onChangeText={(value) => (usernameRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="User Name"
                  placeholderTextColor={"gray"}
                />
              </View>
              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4  px-4 bg-neutral-100 items-center rounded-xl"
              >
                <Feather name="mail" size={hp(2.7)} color="black" />
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
                <View
                  style={{ height: hp(7) }}
                  className="flex-row gap-4  px-4 bg-neutral-100 items-center rounded-xl"
                >
                  <FontAwesome name="image" size={hp(2.7)} color="black" />
                  <TextInput
                    onChangeText={(value) => (profileRef.current = value)}
                    style={{ fontSize: hp(2) }}
                    className="flex-1 font-semibold text-neutral-700"
                    placeholder="Profile URL"
                    placeholderTextColor={"gray"}
                  />
                </View>
              </View>
              <View>
                {loading ? (
                  <View className="flex-row justify-center">
                    <Loading size={hp(10)} />
                  </View>
                ) : (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={handleRegister}
                      style={{
                        height: hp(6.5),
                        width: wp(50),
                        backgroundColor: "#7289DA",
                        borderRadius: 8,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: hp(2.7),
                          color: "black",
                          fontWeight: "bold",
                          textTransform: "uppercase",
                        }}
                      >
                        Sign In
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
            <View className="flex-row justify-center">
              <Text style={hp(1.8)} className="font-semibold text-white">
                Already have an Account?
              </Text>
              <Pressable
                onPress={() => {
                  router.push("signin");
                }}
              >
                <Text style={hp(2.8)} className="font-semibold text-[#7289DA]">
                  Sign Up
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
    </ImageBackground>
  );
}
