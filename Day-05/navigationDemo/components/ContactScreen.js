import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewContactScreen from "./NewContactScreen";
import UpdateContactScreen from "./UpdateContactScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

export default function ContactScreen() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName="New">
            <Tab.Screen name="New" component={NewContactScreen} />
            <Tab.Screen name="Update" component={UpdateContactScreen} />
        </Tab.Navigator>
        
    );
}