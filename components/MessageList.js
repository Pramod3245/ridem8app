import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import MessageItem from './MessageItem'

export default function MessageList({messages, ScrollViewRef, currentUser}) {
    return (
      <ScrollView ref= {ScrollViewRef} showsVerticalScrollIndicator= {false} ContentContainerStyle= {{paddingTop: 10}}>
        {
            messages.map((message, index)=> {
                return (<MessageItem message= {message} key={index} currentUser= {currentUser} />)
            })
        }
      </ScrollView>
    )
}
