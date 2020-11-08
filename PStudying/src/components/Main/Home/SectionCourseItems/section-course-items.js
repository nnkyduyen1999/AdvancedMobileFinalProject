import React from "react";
import { View, Image, StyleSheet } from "react-native";
import CourseInfo from "../../../Common/course-info";
import css from "../../../../globals/style";

const SectionCourseItems = ({ courseInfo }) => {
  return (
    <View style={styles.item}>
      <Image
        source={require("../../../../../assets/img.jpg")}
        style={styles.img}
      />
      <CourseInfo courseInfo={courseInfo} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 200,
    height: 180,
    borderRadius: 10,
    backgroundColor: "#2D313A",
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
