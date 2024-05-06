import React, { Component, useEffect, useReducer } from 'react'
import { Text, View } from 'react-native'
import {Slot, useRouter, useSegments} from "expo-router"
import "../global.css"
import { AuthContextProvider, useAuth } from '../context/authContext'

const MainLayout= ()=> {
  const {isAuthenticated}= useAuth();
  const segements = useSegments();
  const router= useRouter();

  useEffect(()=> {
    // Check if authencitated or not
    if(typeof isAuthenticated== 'undefined') return ;
    const inApp= segements[0]== '(app)';
    if(isAuthenticated && !inApp){
      // redirect to home
      router.replace('Home');
    }else if(isAuthenticated== false){
      // redirect to signin
      router.replace('signin');
    }
  }, [isAuthenticated])

  return <Slot/>
}

export default function RootLayout() {
    return (
      <AuthContextProvider>
        <MainLayout/> 
      </AuthContextProvider>
    )
}

