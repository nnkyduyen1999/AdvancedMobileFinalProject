import React, {useContext} from "react";
import { ScrollView } from "react-native";
import css from "../../../globals/style";
import ScreenHeader from "../../Common/screen-header";
import ListCourse from "../../Courses/ListCourse/list-course";
import {CourseContext} from "../../../providers/course-provider";

const Download = ({ navigation }) => {
  const courseContext = useContext(CourseContext);
  return (
    <ScrollView style={css.screenContent}>
      <ScreenHeader screenTitle="Download" />
      <ListCourse nav={navigation} listCourses={courseContext.favoriteCourses}/>
    </ScrollView>
  );
};

export default Download;
