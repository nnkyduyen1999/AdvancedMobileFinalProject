import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";
import css from "./css";


export default function Channels () {
    return (
        <View style={styles.container}>
            <Image source={require("../img/antenna.png")} style={styles.imgStyle}/>
            <Text style={styles.textStyle}>Use channels to save, organize and share content to accomplish your learning objectives.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: css.viewWithRadius,
    imgStyle: {
        width: 50,
        height: 50,
    },
    textStyle: css.text
})