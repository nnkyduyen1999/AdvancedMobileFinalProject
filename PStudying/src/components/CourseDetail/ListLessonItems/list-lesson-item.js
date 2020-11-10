import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
const ListLessonItem = ({ lesson }) => {
  return (
    <View style={css.displayRow}>
      <Icon
        name="check-circle"
        type="font-awesome"
        color={theme.PRIMARY_TEXT_COLOR}
      />
      <Text style={css.courseContent}>{lesson.name}</Text>
    </View>
  );
};

export default ListLessonItem;
