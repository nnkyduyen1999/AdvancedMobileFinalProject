import React, {useContext} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
import constant from "../../../globals/constant";
import { Alert } from "react-native";
import {ThemeContext} from "../../../providers/theme-provider";


const ListLessonItem = ({ lesson, onPressLesson }) => {
  const {themes} = useContext(ThemeContext);

  const handlePressLesson = (url) => {
    if (url) {
      console.log(url);
      onPressLesson(url);
    } else {
      Alert.alert("No video. Sorry :((");
    }
  }
  return (
    <TouchableOpacity
      style={[css.displayRow, { paddingVertical: 20, paddingLeft: 10 }]}
      onPress={() => handlePressLesson(lesson.videoUrl)}
    >
      <Icon
        name="check-circle"
        type="font-awesome"
        color={themes.text}
        size={14}
      />
      <Text style={{ marginLeft: 20, color: themes.text }}>
        {lesson.name}
      </Text>
    </TouchableOpacity>
  );
};

export default ListLessonItem;
