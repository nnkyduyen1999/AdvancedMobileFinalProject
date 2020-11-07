import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import css from "../css.js";
export default function CardCustom(props) {
  return (
    <View style={styles.cardLayout}>
      <Image source={require("../../img/img.jpg")} style={styles.imgStyle} />
      <View style={styles.textStyle}>
        <Text style={css.cardTitle}>Title</Text>
        <Text style={css.cardDetail}>Teacher</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardLayout: {
    width: 200,
    height: 180,
    borderRadius: 10,
    backgroundColor: "rgba(108, 122, 137, 1)",
    marginRight: 10,
  },
  imgStyle: {
    width: 200,
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textStyle: {
      margin: 10
  },
  textStyle2: {
    color: "rgba(255, 255, 255, 0.65)",
    margin: css.text.marginHorizontal,
    fontSize: 12,
  },
});
