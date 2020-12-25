import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import css from "../../../../globals/style";
import theme from "../../../../globals/theme";

const CustomAvatar = ({ author, authorNav }) => {
  return (
    <View style={styles.layout}>
      <Avatar
        rounded
        size="medium"
        source={{
          uri: author.avatar,
        }}
        containerStyle={styles.avatar}
      />
      <View style={styles.textLayout}>
        <Text style={styles.content}>{author.name}</Text>
        <Text style={css.courseContent}>
          Total courses: {author.numcourses}
        </Text>
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
    fontWeight: theme.FONT_WEIGHT_MEDIUM
  },
  textLayout: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
export default CustomAvatar;
