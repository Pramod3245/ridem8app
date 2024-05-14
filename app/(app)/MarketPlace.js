import React, { useLayoutEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function MarketPlace() {
    const navigation = useNavigation();
    const bgImage = require("ridem8app/assets/images/ultra.jpg");
    const screenWidth = Dimensions.get('window').width;

    const goBack = () => {
        navigation.goBack(); // Go back to the previous screen
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <View style={{ flex: 1 }}>
            {/* Back button */}
            <TouchableOpacity onPress={goBack} style={{ position: 'absolute', top: 50, left: 20, zIndex: 1 }}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            {/* Content */}
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* Rectangle container */}
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgrey', width: screenWidth, aspectRatio: 2, borderRadius: 20, overflow: 'hidden', marginVertical: 20 }}>
                    {/* <ImageBackground source={bgImage} style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', resizeMode: 'cover' }}>
                        <Text style={{ color: 'white', fontSize: 24 }}>Text on Image</Text>
                    </ImageBackground> */}
                </View>

                {/* Other content */}
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Other content here</Text>
                </View>
            </ScrollView>
        </View>
    );
}
