import * as React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";
import ContactScreen from './components/ContactScreen';



//Stack Navigator

/* const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}  
 */

//Tab Navigator
/* 
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
} 
*/ 

const Drawer = createDrawerNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      {/* 
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="About" component={AboutScreen} />
          <Drawer.Screen name="Contact" component={ContactScreen} />
        </Drawer.Navigator>
      */}
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ //change the configuration of our screen
            drawerIcon: ({ color, number, focused }) => { //set the icon:
              return ( //the icon will be an image
                <Image
                  source={require("./assets/home-icon.png")}
                  style={{ height: 30, width: 30 }}
                />
              );
            },
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{
            drawerIcon: ({ color, number, focused }) => { //set the icon for all screens
              return (
                <Image
                  source={require("./assets/about-icon.png")}
                  style={{ height: 30, width: 30 }}
                />
              );
            },
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            drawerIcon: ({ color, number, focused }) => {
              return (
                <Image
                  source={require("./assets/contact-icon.png")}
                  style={{ height: 30, width: 30 }}
                />
              );
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  ) 
  }