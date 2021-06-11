import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles";
import About from "./components/About";
import Address from "./components/Address";
import Amenities from "./components/Amenities";
import Bookmark from "./components/Bookmark";
import Extras from "./components/Extras";
import Header from "./components/Header";
import Stats from "./components/Stats";

export default function index({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Header />
        <View>
          <Bookmark />
          <About />
          <Stats />
          <Amenities />
          <Address />
          <Extras />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});
