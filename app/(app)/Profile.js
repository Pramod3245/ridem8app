import React, { useLayoutEffect } from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack(); // Go back to the previous screen
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* Back button */}
            <TouchableOpacity onPress={goBack} style={{ position: 'absolute', top: 50, left: 20 }}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            {/* MarketPlace content */}
            <View>
                <Text>Profile</Text>
            </View>
        </View>
    );
}
