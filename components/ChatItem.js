import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ChatItem({ item }) {
  const bgImage = require("ridem8app/assets/images/loneBike1.jpeg");
  return (
    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: wp(4), marginBottom: hp(4), paddingBottom: hp(2), borderBottomWidth: 1, borderBottomColor: "#D1D5DB" }}>
      <Image
        source={bgImage}
        style={{ height: hp(6), width: hp(6), borderRadius: hp(3) }}
      />
      <View style={{ flex: 1, marginLeft: wp(2) }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{ fontSize: hp(1.8), fontWeight: "600", color: "#374151" }}
          >
            Person1
          </Text>
          <Text
            style={{ fontSize: hp(1.6), color: "#6B7280" }}
          >
            Time
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
