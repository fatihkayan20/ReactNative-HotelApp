import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { gs } from "../../../styles";

export default function Header() {
  return (
    <View>
      <Image
        source={{
          uri: "https://media-cdn.tripadvisor.com/media/photo-s/01/08/9b/24/dream-hotel-swimming.jpg",
        }}
        style={styles.image}
      />

      <View style={styles.topButtons}>
        <AntDesign name="close" size={24} color="#fff" />
        <View style={gs.rowCenter}>
          <AntDesign name="save" size={24} style={styles.topButtonsRight} />
          <AntDesign name="sharealt" size={24} style={styles.topButtonsRight} />
          <Entypo
            name="dots-three-vertical"
            size={18}
            style={styles.topButtonsRight}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 400,
  },
  topButtons: {
    ...gs.rowBetween,
    position: "absolute",
    top: 20,
    left: 15,
    right: 15,
  },
  topButtonsRight: {
    marginLeft: 12,
    color: "#fff",
  },
});
