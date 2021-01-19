import React from "react";
import { View, FlatList, StyleSheet, StatusBar } from "react-native";
import HistoryItem from "./searchHistoryItem";
import ScreenHeader from "../../../Common/screen-header";
import css from "../../../../globals/style";
import SearchBarCustom from "../SearchBar/search-bar";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "react",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "h",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "java",
  },
];

const SearchHistory = ({navigation}) => {
  const renderItem = ({ item }) => <HistoryItem item={item} nav={navigation}/>;

  return (
    <View style={{...css.screenContent, marginTop: 40}}>
      <ScreenHeader screenTitle="Search"/>
      <SearchBarCustom />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default SearchHistory;
