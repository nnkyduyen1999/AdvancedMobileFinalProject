import React from "react";
import { ScrollView, Text, Button, View, StyleSheet } from "react-native";
import SectionCourseItems from "../SectionCourseItems/section-course-items";
import css from "../../../../globals/style";
import SectionCourseTitle from "../../../Common/section-course-title";

const SectionCourses = ({listCourse, nav, title}) => {
  
  const renderSectionCoursesItems = (courses) => {
    return courses.map((item, index) => (
      <SectionCourseItems key={index} courseInfo={item} nameStyle={css.courseTitle} listCourseNav={nav}/>
    ));
  };
  return (
    <View>
      <SectionCourseTitle sectionTitle={title} seeAll="See All   "/>
      <ScrollView horizontal={true}>
        {renderSectionCoursesItems(listCourse)}
      </ScrollView>
    </View>
  );
};


export default SectionCourses;
