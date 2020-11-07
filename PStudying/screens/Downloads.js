import React from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import { ThemeProvider, Text, Button } from "react-native-elements";
import ListCard from "../components/Cards/ListCard";
import Channels from "../components/Channels";
import Bookmarks from "../components/Bookmarks";
import Header from "../components/Header";
import css from "../components/css";
import Icon from "react-native-vector-icons/FontAwesome";

const seeAllIcon = <Icon name="angle-right" size={10} color="white" />;

export default function Download() {
  return (
    <View style={styles.content}>
      <Header name="Downloads" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text h2 style={styles.titleStyle}>
          Downloads
        </Text>
        <View style={styles.subContainer}>
          <Text style={css.text}>Watch your corses on the go!</Text>
          <Text style={css.text}>
            Download courses so you can continue to skill up-even when you're
            offline
          </Text>
          <Button title="Find a course to download"></Button>
          <Text>How to download courses</Text>
          <Image
            source={require("../img/download.png")}
            style={css.imageStyle}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 10,
    backgroundColor: css.background.backgroundColor,
  },
  titleStyle: css.textTitle,
  container: {
    paddingBottom: 100,
  },
  subContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
