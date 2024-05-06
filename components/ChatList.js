import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ChatItem from './ChatItem'

export default function ChatList({users}) {
    return (
      <View className= "flex-1">
        <FlatList
        data={users}
        contentContainerStyle= {{flex: 1, paddingVertical: 25}}
        keyExtractor={item=> Math.random()}
        showsVerticalScrollIndicator= {false}
        renderItem={({item, index})=> <ChatItem item= {item} index= {index} />}/> 
      </View>
    )
}

