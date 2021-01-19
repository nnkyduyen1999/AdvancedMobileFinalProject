import React, {useContext} from "react";
import { ScrollView, Text, Button, View, StyleSheet } from "react-native";
import SectionCourseItems from "../SectionCourseItems/section-course-items";
import css from "../../../../globals/style";
import SectionCourseTitle from "../../../Common/section-course-title";
import {ThemeContext} from "../../../../providers/theme-provider";

const SectionCourses = ({ listCourse, nav, title, isProcessing }) => {
  const {themes} = useContext(ThemeContext);
  
  const renderSectionCoursesItems = (courses) => {
    return courses.map((item, index) => (
      <SectionCourseItems
        key={index}
        courseInfo={item}
        nameStyle={{...css.courseTitle, color: themes.text}}
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
