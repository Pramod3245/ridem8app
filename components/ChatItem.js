import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import { blurhash, formatDate, getRoomId } from "../utils/common";
import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function ChatItem({ item, noBorder, router, currentUser }) {

  const [lastMessage, setLastMessage]= useState(undefined);
  useEffect(()=> {
    let roomId= getRoomId(currentUser?.userId, item?.userId);
    const docRef= doc(db, "rooms", roomId);
    const messagesRef= collection (docRef, "messages")
    const q= query(messagesRef, orderBy('createdAt', 'desc'));

    let unsub= onSnapshot(q, (snapshot)=> {
        let allMessages= snapshot.docs.map(doc=> {
            return doc.data();
        });
        setLastMessage(allMessages[0]? allMessages[0]: null);
    })
    return unsub;
  }, []);


  const renderTime= ()=> {
    if(lastMessage){
      let date= lastMessage?.createdAt;
      return formatDate(new Date(date?.seconds*1000)) ;
    }
    return null;
  }

  const renderLastMessage= ()=> {
    if(typeof lastMessage== 'undefined') return 'Loading...';
    if(lastMessage){
      if(currentUser?.userId== lastMessage?.userId) return "You: "+lastMessage?.text;
      return lastMessage?.text;
    }else{
      return "Say Hi 👋";
    }
  }


  const openChatRoom = () => {
    router.push({ pathname: "/ChatRoom", params: item });
  };
  return (
    <TouchableOpacity
      onPress={openChatRoom}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: wp(4),
        marginBottom: hp(4),
        paddingBottom: hp(2),
        borderBottomWidth: 1,
        borderBottomColor: "#D1D5DB",
      }}
    >
      {/* <Image
        source={{uri: item?.profileUrl}}
        style={{ height: hp(6), width: hp(6), borderRadius: hp(3) }}
      /> */}
      <Image
        style={{ height: hp(6), width: hp(6), borderRadius: hp(3) }}
        source={item?.profileUrl}
        placeholder={blurhash}
        transition={500}
      />
      <View style={{ flex: 1, marginLeft: wp(2) }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{ fontSize: hp(1.8), fontWeight: "700", color: "#36454F" }}
          >
            {item?.username}
          </Text>
          <Text style={{ fontSize: hp(1.6), color: "#36454F" }}>
            {renderTime()}
          </Text>
        </View>
        <Text
          style={{ fontSize: hp(1.6) }}
          className="font-medium text-neutral-600"
        >
          {renderLastMessage()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
