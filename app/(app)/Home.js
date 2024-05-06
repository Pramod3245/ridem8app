import React, { Component, useEffect, useState } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useAuth } from '../../context/authContext';
import { StatusBar } from 'expo-status-bar';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import ChatList from '../../components/ChatList';

export default function Home() {
    const { user, logout } = useAuth();
    const [users, setUsers]= useState([1,2,3])
    useEffect(()=> {
        if(user?.uid)
            getUsers();
    }, [])
    const getUsers= async()=> {

    }
    return (
      <View className= "flex-1 bg-white">
        <StatusBar style='light' />
        {
            users.length>0 ?(
                <ChatList users= {users}/>
            ):(
                <View className= "flex items-center" style= {{top: hp(30)}}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
      </View>
    )
}

