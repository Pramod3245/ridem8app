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
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Loading from "../components/Loading";
import CustomKeyboardView from "../components/CustomKeyboardView";
import { useAuth } from "../context/authContext";


export default function Signin() {
  const router = useRouter();

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Sign-In", "Please fill all the fields");
      return;
    }
    // Login Process
    setLoading(true);
    const response = await login(emailRef.current, passwordRef.current);
    setLoading(false);

    if (!response.success) {
      Alert.alert("Sign-in", response.msg);
    }
  };

  const bgImage = require("ridem8app/assets/images/loneBike1.jpeg");

  return (
    <ImageBackground source={bgImage} style={{ width: "100%", height: "100%" }}>
      <CustomKeyboardView>
        <StatusBar style="dark" />
        <View
          style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }}
          className="flex-1 gap-12"
        >
          <View className="items-center"></View>
          <View className="gap-10">
            <Text
              className="text-white pt-25 font-bold tracking-wide text-center pt-10"
              style={{ fontSize: hp(4) }}
            >
              Welcome Back!
            </Text>
            <View className="gap-4">
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
                <Text
                  style={hp(10)}
                  className="font-semibold text-center text-slate-200 pb-7 pt-5"
                >
                  Forgot Password
                </Text>
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
                      onPress={handleLogin}
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
              <Text style={hp(5)} className="font-semibold text-white">
                Dont Have an Account?
              </Text>
              <Pressable
                onPress={() => {
                  router.push("signUp");
                }}
              >
                <Text style={hp(5)} className="font-bold text-[#7289DA]">
                  Sign-Up
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </CustomKeyboardView>
    </ImageBackground>
  );
}
