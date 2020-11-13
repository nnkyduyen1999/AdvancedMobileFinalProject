import React from "react";

import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import CourseInfo from "../../Common/course-info";
import { Divider } from "react-native-elements";
import css from "../../../globals/style";
import constant from "../../../globals/constant";

const listCourseItems = ({ course, listCourseNav }) => {
  const onPressItem = () => {
    listCourseNav.navigate(constant.navigationNames.CourseDetail);
  }
  return ( 
    <TouchableOpacity onPress={onPressItem}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri:
              "https://pluralsight.imgix.net/course-images/securing-iis-websites-v1.png",
          }}
        />
        <CourseInfo courseInfo={course} nameStyle={css.courseTitle}/>
      </View>
      <Divider style={css.divider} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  img: {
    width: 80,
    height: 55,
    marginVertical: 15,
  },
});

export default listCourseItems;
