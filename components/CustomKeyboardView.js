import React, { Component } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native'

export default function CustomKeyboardView({children}) {
    const ios= Platform.OS= "ios"
    return (
      <KeyboardAvoidingView
      behavior={ios? 'padding': 'height'}
      style= {{flex:1}}
      >
        <ScrollView
        style= {{flex:1}}
        bounces= {false}
        showsVerticalScrollIndicator= {false}
        >
            {
                children
            }
        </ScrollView>
      </KeyboardAvoidingView>
    )
}
