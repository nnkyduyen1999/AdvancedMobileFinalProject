import React, { useEffect, useContext, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Alert,
  ActivityIndicator,
} from "react-native";
import { SearchBar } from "react-native-elements";
import HistoryItem from "./searchHistoryItem";
import ScreenHeader from "../../../Common/screen-header";
import css from "../../../../globals/style";
import theme from "../../../../globals/theme";
import constant from "../../../../globals/constant";
import SearchBarCustom from "../SearchBar/search-bar";
import {
  getSearchHistoryService,
  deteleSearchHistoryService,
} from "../../../../core/services/user-services";
import { AuthenticationContext } from "../../../../providers/authentication-provider";
import { ThemeContext } from "../../../../providers/theme-provider";

const SearchHistory = ({ navigation }) => {
  const [listHistory, setListHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { state } = useContext(AuthenticationContext);
  const [keyword, setKeyword] = useState(``);
  const { themes } = useContext(ThemeContext);

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

  const onPressDeleteItem = (token, id) => {
    deteleSearchHistoryService(token, id)
      .then((res) => {
        if (res.status === 200) {
          Alert.alert("Xóa lịch sử tìm kiếm thành công.");
          const newHistory = listHistory.filter((item) => item.id !== id);
          setListHistory(newHistory);
        } else {
          Alert.alert(res.data.message);
        }
      })
      .catch((err) => {
        Alert.alert(err.response.data.message);
      });
  };

  const renderItem = ({ item }) => (
    <HistoryItem
      item={item}
      nav={navigation}
      onPressDeleteItem={onPressDeleteItem}
    />
  );

  return (
    <View style={{ ...css.screenContent, marginTop: 40, flex: 1 }}>
      <ScreenHeader screenTitle="Search" />
      <SearchBar
        platform="ios"
        placeholder="Search"
        showLoading={isLoading}
        onChangeText={(text) => setKeyword(text.toLowerCase())}
        value={keyword}
        inputContainerStyle={{ height: 30, backgroundColor: "white" }}
        containerStyle={{
          backgroundColor: themes.backgroundColor,
        }}
        cancelButtonProps={{ buttonStyle: { paddingTop: 25 } }}
        onSubmitEditing={() => {
          const date = new Date();
          setListHistory([
            ...listHistory,
            {
              id: date.getMilliseconds(),
              content: keyword
            }
          ])
          navigation.navigate(constant.navigationNames.Search, {
            history: keyword,
          });
        }}
      />
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
