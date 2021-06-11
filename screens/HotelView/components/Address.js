import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colors, gs } from "../../../styles";

export default function Address() {
  return (
    <View>
      <View style={{ backgroundColor: "#000" }}>
        <Image
          source={{
            uri: "https://miro.medium.com/max/4024/0*F4QsnZTYhz_xEO2P.png",
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.addressContainer}>
        <Image
          sournce={{
            uri: "https://cdn.picpng.com/google/google-map-marker-red-peg-77453.png",
          }}
          style={styles.pin}
        />

        <View style={{ marginLeft: 8, marTop: 24 }}>
          <Text style={gs.sectionTitle}>Adress</Text>
          <Text style={styles.address}>
            {`1529 Taylor Street, New York\n 10011, United States`}
          </Text>

          <View style={{ marginTop: 16 }}>
            <TouchableOpacity style={styles.checkButton}>
              <Text style={gs.smallText}> Check it</Text>
              <Entypo
                name="chevron-right"
                size={12}
                color={"#fff"}
                style={{ marginLeft: 4 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    opacity: 0.4,
  },
  pin: {
    width: 64,
    height: 64,
  },
  addressContainer: {
    ...gs.absoluteFull,
    flexDirection: "row",
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  address: {
    ...gs.smallText,
    color: colors.darkHl,
    marginTop: 6,
    letterSpacing: 1,
    lineHeight: 20,
  },
  checkButton: {
    ...gs.button,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: "flex-start",
    flexDirection: "row",
  },
});
