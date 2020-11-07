import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";
import css from "./css";


export default function Bookmarks () {
    return (
        <View style={styles.container}>
            <Image source={require("../img/bookmark.png")} style={styles.imgStyle}/>
            <Text style={styles.textStyle}>Use bookmarks to quickly save courses for later watching.</Text> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: css.viewWithRadius,
    imgStyle: {
        width: 50,
        height: 50
    },
    textStyle: css.text
})