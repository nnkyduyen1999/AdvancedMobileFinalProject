import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import CardCustom from "./Card";
export default function ListCard() {
  const list = [
    {
      name: "Amy Farha",
      subtitle: "Vice President",
    },
    {
      name: "Chris Jackson",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "Vice Chairman",
    },
    {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        subtitle: "Vice Chairman",
      },
  ];
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <CardCustom />
  );
  return (
    <FlatList style={{marginVertical: 10}}
      horizontal={true}
      keyExtractor={this.keyExtractor}
      data={list}
      renderItem={this.renderItem}
    />
  );
}

const styles = StyleSheet.create({

})
