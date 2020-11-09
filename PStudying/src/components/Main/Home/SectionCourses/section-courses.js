import React from "react";
import { ScrollView, Text, Button, View, StyleSheet } from "react-native";
import SectionCourseItems from "../SectionCourseItems/section-course-items";
import css from "../../../../globals/style";
import SectionCourseTitle from "../../../Common/section-course-title";
const SectionCourses = (props) => {
  const courses = [
    {
      id: "1",
      name: "React Native",
      author: "Hai Pham",
      level: "Advanced",
      released: "May 2019",
      duration: "40h",
    },
    {
      id: "2",
      name: "React",
      author: "Khanh Nguyen",
      level: "Advanced",
      released: "May 2019",
      duration: "60h",
    },
    {
      id: "3",
      name: "Test",
      author: "Hanh Tran",
      level: "Beginner",
      released: "May 2019",
      duration: "45h",
    },
  ];
  const renderSectionCoursesItems = (courses) => {
    return courses.map((item, index) => (
      <SectionCourseItems key={index} courseInfo={item} />
    ));
  };
  return (
    <View style={styles.container}>
      <SectionCourseTitle sectionTitle={props.title} seeAll="true"/>
      <ScrollView style={styles.list} horizontal={true}>
        {renderSectionCoursesItems(courses)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  list: {
    marginVertical: 15,
  },
});

export default SectionCourses;
