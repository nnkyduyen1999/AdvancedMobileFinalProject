import React, {useContext} from "react";
import { ScrollView } from "react-native";
import css from "../../../../globals/style";
import ScreenHeader from "../../../Common/screen-header";
import ListCourse from "../../../Courses/ListCourse/list-course";

const Download = ({ navigation, route }) => {
  const sectionContent = route.params.sectionContent;
  return (
    <ScrollView style={css.screenContent}>
      <ScreenHeader screenTitle={`${sectionContent.title}`} />
      <ListCourse nav={navigation} listCourses={sectionContent.courses}/>
    </ScrollView>
  );
};

export default Download;
