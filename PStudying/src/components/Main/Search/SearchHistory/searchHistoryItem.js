import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import constant from "../../../../globals/constant";

const SearchHistoryItem = ({ item, nav }) => {
  const onPressHistoryItem = () => {
    nav.navigate(constant.navigationNames.Search, { history: item.title});
  };
  return (
    <TouchableOpacity style={styles.item} onPress={onPressHistoryItem}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default SearchHistoryItem;
