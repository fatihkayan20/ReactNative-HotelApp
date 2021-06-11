import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { gs } from "../../../styles";

const photos = [
  "https://www.turizmajansi.com/images/haber/xperia-mountain-resort-er_62a7.jpg",
  "https://lh3.googleusercontent.com/EXKW3K22jeGyTtIpCffKi-1I-qM62qX_hIbJFDHBu-8gNEUbIgdCrlibjAolqx7O6VrOfVXr1ZAaK2DFdGov151Qzg=w640-h400-e365-rj-sc0x00ffffff",
  "https://cinhaber.net/wp-content/uploads/2019/09/jum-660x330.jpg",
  "https://previews.123rf.com/images/rclassenlayouts/rclassenlayouts1709/rclassenlayouts170900103/87540323-view-of-the-eiffel-tower-from-a-tiny-street-paris-france.jpg",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZPNda4dvE_QULTgX34PYyGJLd6tKy9KJhBA&usqp=CAU",
  "https://lp-cms-production.imgix.net/features/2019/03/longtail-boat-Bangkok-853bae2bcffc.jpg",
];

export default function Photos() {
  return (
    <View style={[gs.sectionContainer, { marginTop: 8 }]}>
      <Text style={gs.sectionTitle}>My Photos</Text>

      <View style={styles.photosContainer}>
        {photos.map((photo, i) => (
          <Image
            source={{ uri: photo }}
            key={i}
            style={[
              styles.photo,
              {
                marginRight: (i + 1) % 3 == 0 ? 0 : 13,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  photosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  },
  photo: {
    width: 100,
    height: 100,
    marginBottom: 12,
    borderRadius: 8,
  },
});
