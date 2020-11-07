import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { ThemeProvider, Text, Button } from "react-native-elements";
import ListCard from "../components/Cards/ListCard";
import Channels from "../components/Channels";
import Bookmarks from "../components/Bookmarks";
import Header from "../components/Header";
import css from "../components/css";
import Icon from "react-native-vector-icons/FontAwesome";

const seeAllIcon = <Icon name="angle-right" size={10} color="white" />;

export default function Home() {
  return (
    <View style={styles.content}>
      <Header name="Home"/>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.subContainer}>
          <Text h2 style={styles.titleStyle}>
            Home
          </Text>
          <View style={css.titleLayout}>
            <Text style={styles.titleStyle}>Continue Learning</Text>
            <Button
              title="See all"
              buttonStyle={css.seeAllBtn}
              icon={seeAllIcon}
              iconRight={true}
              titleStyle={css.seeAllTitle}
            ></Button>
          </View>
          <ListCard />
        </View>
        <View style={styles.subContainer}>
          <View style={css.titleLayout}>
            <Text style={styles.titleStyle}>Path</Text>
            <Button
              title="See all"
              buttonStyle={css.seeAllBtn}
              icon={seeAllIcon}
              iconRight={true}
              titleStyle={css.seeAllTitle}
            ></Button>
          </View>
          <ListCard />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.titleStyle}>Channels</Text>
          <Channels />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.titleStyle}>Bookmarks</Text>
          <Bookmarks />
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
  titleStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: css.text.color,
  },
  container: {
    paddingBottom: 100,
  },
  subContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
});
