import React from "react";
import { ScrollView, Text, Button, View, StyleSheet } from "react-native";
import SectionCourseItems from "../SectionCourseItems/section-course-items";
import css from "../../../../globals/style";
import SectionCourseTitle from "../../../Common/section-course-title";

const SectionCourses = ({ listCourse, nav, title, isProcessing }) => {
  const renderSectionCoursesItems = (courses) => {
    return courses.map((item, index) => (
      <SectionCourseItems
        key={index}
        courseInfo={item}
        nameStyle={css.courseTitle}
        listCourseNav={nav}
        isProcessing={isProcessing}
      />
    ));
  };
  return (
    <View>
      <SectionCourseTitle
        sectionTitle={title}
        seeAll="See All   "
        fullSecNav={nav}
        sectionCourses={listCourse}
      />
      <ScrollView horizontal={true}>
        {renderSectionCoursesItems(listCourse)}
      </ScrollView>
    </View>
  );
};

export default SectionCourses;
