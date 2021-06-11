import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, gs } from "../../../styles";

export default function Bookmark() {
  return (
    <View style={styles.bookmark}>
      <Feather name="bookmark" size={24} color={colors.pink} />
    </View>
  );
}

const styles = StyleSheet.create({
  bookmark: {
    position: "absolute",
    width: 56,
    height: 56,
    right: 22,
    top: -56 / 2,
    backgroundColor: colors.text,
    ...gs.center,
    borderRadius: 56 / 2,
    zIndex: 10,
  },
});
