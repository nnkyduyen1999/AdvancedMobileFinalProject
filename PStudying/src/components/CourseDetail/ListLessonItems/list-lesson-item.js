import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
const ListLessonItem = ({ lesson }) => {
  return (
    <TouchableOpacity style={[css.displayRow, {paddingVertical: 20, paddingLeft: 10}]}>
      <Icon
        name="check-circle"
        type="font-awesome"
        color={theme.PRIMARY_TEXT_COLOR}
        size={14}
      />
      <Text style={{marginLeft: 20, color: theme.PRIMARY_TEXT_COLOR}}>{lesson.name}</Text>
    </TouchableOpacity>
  );
};

export default ListLessonItem;
