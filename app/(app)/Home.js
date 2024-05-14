import React, { Component, useEffect, useState } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useAuth } from '../../context/authContext';
import { StatusBar } from 'expo-status-bar';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import ChatList from '../../components/ChatList';
import { doc, getDocs, query, where } from 'firebase/firestore';
import { usersRef } from '../../firebaseConfig';

export default function Home() {
    const { user, logout } = useAuth();
    const [users, setUsers]= useState([])
    useEffect(()=> {
        if(user?.uid)
            getUsers();
    }, [])
    const getUsers= async()=> {
        // Fetching all users
        const q= query(usersRef, where('userId', '!=', user?.uid)); 
        
        const querySnapshot = await getDocs(q);
        let data= [];
        querySnapshot.forEach(doc=> {
            data.push({...doc.data()});
        });
        console.log('got users: ', data);
        setUsers(data);
    }
    return (
      <View className= "flex-1 bg-gray-400">
        <StatusBar style='light' />
        {
            users.length>0 ?(
                <ChatList currentUser= {user} users= {users}/>
            ):(
                <View className= "flex items-center" style= {{top: hp(30)}}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
      </View>
    )
}