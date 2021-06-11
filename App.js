import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import HotelView from "./screens/HotelView";
import ProfileView from "./screens/ProfileView";
import { colors } from "./styles";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{ backgroundColor: colors.darkBg }}
        drawerContentOptions={{
          activeTintColor: colors.darkBg,
          activeBackgroundColor: "white",
          inactiveTintColor: colors.text,
          inactiveBackgroundColor: "grey",
          labelStyle: {
            textAlign: "center",
          },
        }}
      >
        <Drawer.Screen name="Hotel" component={HotelView} />
        <Drawer.Screen name="Profile" component={ProfileView} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});
