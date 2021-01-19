import React, { useEffect, useContext, useState } from "react";
import { View, FlatList, StyleSheet, StatusBar, Alert,ActivityIndicator } from "react-native";
import HistoryItem from "./searchHistoryItem";
import ScreenHeader from "../../../Common/screen-header";
import css from "../../../../globals/style";
import theme from "../../../../globals/theme";
import SearchBarCustom from "../SearchBar/search-bar";
import { getSearchHistoryService } from "../../../../core/services/user-services";
import { AuthenticationContext } from "../../../../providers/authentication-provider";

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

const SearchHistory = ({ navigation }) => {
  const [listHistory, setListHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { state } = useContext(AuthenticationContext);

  useEffect(() => {
    getSearchHistoryService(state.token)
      .then((res) => {
        if (res.status === 200) {
          setListHistory(res.data.payload.data);
          setIsLoading(false);
        } else {
          Alert.alert(res.data.message);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        Alert.alert(err.response.data.message);
        setIsLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => <HistoryItem item={item} nav={navigation} />;

  return (
    <View style={{ ...css.screenContent, marginTop: 40 }}>
      <ScreenHeader screenTitle="Search" />
      <SearchBarCustom />
      {isLoading ? (
        <ActivityIndicator size="large" color={theme.BASIC_BLUE} />
      ) : (
        <FlatList
          data={listHistory}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
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
