import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather, Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";
import { colors, gs } from "../../../styles";

export default function Amenities() {
  return (
    <View style={gs.sectionContainer}>
      <Text style={gs.sectionTitle}>Amenities</Text>
      <View style={styles.amenitiesContainer}>
        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Feather name="wifi" size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>WI-FI</Text>
        </View>

        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Ionicons name="md-restaurant" size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>Hotel Restaurant</Text>
        </View>

        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <FontAwesome5 name="swimmer" size={20} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>Swimming Pools</Text>
        </View>

        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Entypo name="drink" size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>Bar</Text>
        </View>

        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Ionicons name="ios-car" size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>Parking</Text>
        </View>

        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Feather name="speaker" size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>Night Club</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  amenitiesContainer: {
    marginTop: 16,
    marginHorizontal: 15,
    ...gs.rowBetween,
    flexWrap: "wrap",
  },
  amenityContainer: {
    alignItems: "center",
    width: 95,
    marginVertical: 12,
  },
  amenity: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: "#444",
    ...gs.center,
  },
  amenityName: {
    color: colors.lightHl,
    width: "90%",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 6,
    textAlign: "center",
  },
});
