import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native'
const ios= Platform.OS= "ios"
export default function CustomKeyboardView({children, inChat}) {
  let KavConfig= {};
  let ScrollViewConfig= {};
  if(inChat){
    KavConfig= {keyboardVerticalOffset: 90};
    ScrollViewConfig= {contentContainerStyle: {flex:1}}
  }
    return (
      <KeyboardAvoidingView
      behavior={ios? 'padding': 'height'}
      style= {{flex:1}}
      {...KavConfig}
      >
        <ScrollView
        style= {{flex:1}}
        bounces= {false}
        showsVerticalScrollIndicator= {false}
        {...ScrollViewConfig}
        >
            {
                children
            }
        </ScrollView>
      </KeyboardAvoidingView>
    )
}
