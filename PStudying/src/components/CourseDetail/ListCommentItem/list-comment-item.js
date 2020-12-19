import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../../../globals/theme";
import css from "../../../globals/style";
import { Avatar } from "react-native-elements";

const ListCommentItem = ({ item }) => {
  return (
    <View style={styles.layout}>
      <Avatar
        rounded
        size="small"
        source={{
          uri: item.user.avatar,
        }}
        containerStyle={styles.avatar}
      />
      <View style={styles.textLayout}>
        <Text style={css.courseContent}>
          {item.user.name} . {item.createdAt}
        </Text>
        <Text style={styles.content}>{item.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: theme.SMALL_MARGIN,
  },
  avatar: {
    marginRight: theme.LARGE_MARGIN,
  },
  content: {
    color: theme.PRIMARY_TEXT_COLOR,
  },
  textLayout: {
    flex: 1,
    flexDirection: "column",
  },
});

export default ListCommentItem;
