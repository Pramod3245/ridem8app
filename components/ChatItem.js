import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ChatItem({ item }) {
  const bgImage = require("ridem8app/assets/images/loneBike1.jpeg");
  return (
    <TouchableOpacity className="flex-row justify-between mx-4 gap-3 items-center mb-4 pb-2 border-b border-b-neutral-200">
      <Image
        source={bgImage}
        style={{ height: hp(6), width: hp(6) }}
        className="rounded-full"
      />
      <View className="flex-1 gap-1 ">
        <View className="flex-row justify-between">
          <Text
            style={{ fontSize: hp(1.8) }}
            className="font-semibold text-neutral-800"
          >
            Person1
          </Text>
          <Text
            style={{ fontSize: hp(1.6) }}
            className="font-medium text-neutral-500"
          >
            Time
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
