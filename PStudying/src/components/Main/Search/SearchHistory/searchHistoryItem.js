import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Icon } from "react-native-elements";
import constant from "../../../../globals/constant";
import theme from "../../../../globals/theme";
import { ThemeContext } from "../../../../providers/theme-provider";
import { AuthenticationContext } from "../../../../providers/authentication-provider";

const SearchHistoryItem = ({ item, nav, onPressDeleteItem }) => {
  const { themes } = useContext(ThemeContext);
  const { state } = useContext(AuthenticationContext);

  const onPressHistoryItem = () => {
    nav.navigate(constant.navigationNames.Search, { history: item.content });
  };

  return (
    <TouchableOpacity style={styles.item} onPress={onPressHistoryItem}>
      <Text style={{ color: themes.text, fontSize: 18 }}>{item.content}</Text>
      <TouchableOpacity onPress={() => onPressDeleteItem(state.token, item.id)}>
        <Icon type="font-awesome" name="times" size={23} color={themes.text} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 5,
    marginHorizontal: 16,
    marginVertical: 8,
    borderBottomColor: theme.DIVIDER_BGR,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default SearchHistoryItem;
