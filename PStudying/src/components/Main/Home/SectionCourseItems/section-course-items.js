import React from "react";

import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import CourseInfo from "../../../Common/course-info";
import theme from "../../../../globals/theme";
import constant from "../../../../globals/constant";

const SectionCourseItems = ({ courseInfo, nameStyle, listCourseNav }) => {
  const pressItem = () => {
    listCourseNav.navigate(constant.navigationNames.CourseDetail);
  };
  return (
    <TouchableOpacity style={styles.item} onPress={pressItem}>
      <Image
        source={require("../../../../../assets/img.jpg")}
        style={styles.img}
      />
      <CourseInfo courseInfo={courseInfo} nameStyle={nameStyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 200,
    height: 180,
    borderRadius: 10,
    backgroundColor: theme.COURSE_ITEM_BGR,
    marginRight: 10,
  },
  img: {
    width: 200,
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default SectionCourseItems;
