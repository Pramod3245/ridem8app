import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function MessageItem({ message, currentUser }) {
  if (currentUser?.userId == message?.userId) {
    return (
      <View className="flex-row justify-end mb-3 mr-3">
        <View className= "ml-3 mb-3 " style={{ width: wp(80) }}>
          <View className="flex self-end p-3 rounded-2xl bg-green-200 border border-green-300">
            <Text style={{fontSize: hp(1.9)}} >
                {message?.text}
            </Text>
          </View>
        </View>
      </View>
    );
  }else{
    return(
        <View className= "ml-3 mb-3 " style= {{width: wp(80)}}>
            <View className= "flex self-start p-3 px-4 rounded-2xl bg-indigo-300 border border-indigo-200">
                <Text style={{fontSize: hp(1.9)}}>
                    {message?.text}
                </Text>
            </View>
        </View>
    )
  }
}