import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CourseInfo from "../../Common/course-info";
import { Divider } from "react-native-elements";
import css from "../../../globals/style";

const listCourseItems = ({ course }) => {
  return ( 
    <View>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri:
              "https://pluralsight.imgix.net/course-images/securing-iis-websites-v1.png",
          }}
        />
        <CourseInfo courseInfo={course} />
      </View>
      <Divider style={css.divider} />
    </View>
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
