import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, gs } from "../../../styles";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Entypo } from "@expo/vector-icons";

export default function Header({ user }) {
  return (
    <LinearGradient
      colors={[colors.orange, colors.pink]}
      start={[0, 0]}
      end={[1, 1]}
    >
      <View style={styles.container}>
        <View style={gs.rowBetween}>
          <Ionicons name="md-arrow-back" color={colors.text} size={32} />
          <Entypo name="dots-three-vertical" color={colors.text} size={24} />
        </View>

        <View style={styles.imageContainer}>
          <View>
            <View style={styles.check}>
              <Ionicons name="md-checkmark" size={20} color={colors.pink} />
            </View>

            <Image
              source={{ uri: user.picture.large }}
              style={{ width: 100, height: 100, borderRadius: 32 }}
            />
          </View>
        </View>

        <View style={[gs.center, { marginVertical: 12 }]}>
          <Text style={[gs.title, { fontSize: 25 }]}>
            {user.name.first + " " + user.name.last}
          </Text>
          <Text style={[gs.subTitle, { marginTop: 8 }]}>Traveller/Blogger</Text>

          <TouchableOpacity style={[styles.follow]}>
            <Entypo name="plus" size={20} color="rgba(255,255,255,.6)" />
            <Text style={[styles.followText]}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 64,
  },
  imageContainer: {
    ...gs.center,
    marginTop: 16,
    shadowColor: colors.darkBg,
    shadowOffset: { height: 3, width: 1 },
    shadowOpacity: 0.5,
  },
  check: {
    ...gs.center,
    backgroundColor: colors.text,
    borderRadius: 100,
    width: 32,
    height: 32,
    shadowColor: colors.darkBg,
    shadowOffset: { height: 3, width: 1 },
    shadowOpacity: 0.3,
    position: "absolute",
    zIndex: 1,
    right: -16,
    bottom: 16,
  },
  follow: {
    ...gs.button,
    ...gs.rowCenter,
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginTop: 16,
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 2,
  },
  followText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: "600",
    marginLeft: 4,
  },
});
