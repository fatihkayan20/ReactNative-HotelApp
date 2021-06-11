import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { colors, gs } from "../../styles";
import Header from "./components/Header";
import Stats from "./components/Stats";
import About from "./components/About";
import Location from "./components/Location";
import Photos from "./components/Photos";

export default function index() {
  const [state, setState] = useState({
    user: {},
    isLoading: true,
  });

  useEffect(() => {
    fetch("https://randomuser.me/api/?inc=name,picture,location&noinfo")
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        setState({
          ...state,
          user: result.results[0],
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (state.isLoading) {
    return (
      <View style={[gs.center, styles.container]}>
        <StatusBar barStyle="light-content" />
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header user={state.user} />
      <Stats />
      <About />
      <Location />
      <Photos />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBg,
  },
});
