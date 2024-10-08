import React, { Component } from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ChatItem from "./ChatItem";
import { useRouter } from "expo-router";
import Navbar from "./Navbar";

export default function ChatList({ users, currentUser }) {
  const router = useRouter();
  return (
    <View className="flex-1">
      <FlatList
        data={users}
        contentContainerStyle={{ flex: 1, paddingVertical: 25 }}
        keyExtractor={(item) => Math.random()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ChatItem
            noBorder={index + 1 == users.length}
            router={router}
            currentUser= {currentUser}
            item={item}
            index={index}
          />
        )}
      />
      <Navbar/>
    </View>
  );
}