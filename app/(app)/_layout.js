import { Stack } from 'expo-router'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HomeHeader from '../../components/HomeHeader'



export default function _layout() {
    return (
      <Stack>
        <Stack.Screen
        name= "Home"
        options={{
          header: ()=> <HomeHeader/>,
          headerShown: true
        }}
        />
      </Stack>
    )
}