import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, gs } from "../../../styles";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={gs.sectionTitle}>ABOUT ME</Text>
      <Text style={styles.about}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
        perferendis laudantium, vel laborum error quibusdam iusto impedit! Quod
        cum veniam aspernatur dignissimos non voluptatum ea! Laboriosam
        reprehenderit reiciendis earum magni quo exercitationem commodi ducimus
        non.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 32,
  },
  about: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.darkHl,
    lineHeight: 22,
    marginTop: 8,
  },
});
