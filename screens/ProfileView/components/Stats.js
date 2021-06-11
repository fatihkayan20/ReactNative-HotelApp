import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, gs } from "../../../styles";

export default function Stats() {
  return (
    <View style={styles.container}>
      <View style={styles.statsContainer}>
        <Text style={styles.statNumber}>12k</Text>
        <Text style={styles.stat}>Followers</Text>
      </View>
      <View style={[styles.statsContainer, styles.divider]}>
        <Text style={styles.statNumber}>12k</Text>
        <Text style={styles.stat}>Followers</Text>
      </View>
      <View style={styles.statsContainer}>
        <Text style={styles.statNumber}>12k</Text>
        <Text style={styles.stat}>Followers</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    ...gs.rowBetween,
    marginHorizontal: 16,
    borderRadius: 16,
    marginTop: -48,
  },
  statsContainer: {
    ...gs.center,
    flex: 1,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.text,
  },
  stat: {
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: colors.lightHl,
    marginTop: 6,
  },
  divider: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: colors.darkHl,
  },
});
