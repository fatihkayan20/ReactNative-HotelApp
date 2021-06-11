import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { colors, gs } from "../../../styles";

const starColors = ["#e3ab53", "#e3ab53", "#e3ab53", "#e3ab53", "#8b6f43"];

const Circle = (props) => {
  return <View style={[styles.circle, props.style]} />;
};

export default function Stats() {
  return (
    <View style={styles.container}>
      <View style={styles.weaterContainer}>
        <Feather name="sun" size={24} color={colors.darkHl} />

        <View style={{ marginLeft: 8 }}>
          <Text style={styles.title}>22&deg;</Text>
          <Text style={styles.subTitle}>Sunny</Text>
        </View>
      </View>

      <View>
        <Text style={styles.title}>
          8.4
          <Text style={[styles.title, { paddingLeft: 8 }]}>
            &nbsp;&nbsp; +6k Votes
          </Text>
        </Text>

        <View style={gs.rowCenter}>
          {starColors.map((color, index) => (
            <Entypo
              name="star"
              size={14}
              key={index}
              color={color}
              style={{ marginHorizontal: 2 }}
            />
          ))}
        </View>
      </View>

      <View style={styles.circleContainer}>
        <Circle
          style={{ backgroundColor: "#999", marginRight: -10, zIndex: 3 }}
        />
        <Circle
          style={{ backgroundColor: "#888", marginRight: -10, zIndex: 2 }}
        />
        <Circle
          style={{ backgroundColor: "#777", marginRight: -10, zIndex: 1 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...gs.rowCenter,
    ...gs.sectionContainer,
  },
  weaterContainer: {
    ...gs.rowCenter,
    paddingRight: 12,
    marginRight: 12,
    borderRightColor: "#444",
    borderRightWidth: 1,
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "800",
  },
  subTitle: {
    color: colors.textSec,
    fontSize: 10,
    fontWeight: "800",
  },
  circleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    borderWidth: 2,
    borderColor: colors.lightBg,
  },
});
