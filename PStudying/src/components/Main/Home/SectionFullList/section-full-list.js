import React from "react";
import { ScrollView, FlatList } from "react-native";
import css from "../../../../globals/style";
import ScreenHeader from "../../../Common/screen-header";
import ListCourse from "../../../Courses/ListCourse/list-course";

const SectionFullList = ({ navigation, route }) => {
  const sectionContent = route.params.sectionContent;
  return (
    <FlatList style={css.screenContent}
      ListHeaderComponent={
        <ScreenHeader screenTitle={`${sectionContent.title}`} />
      }
      data={sectionContent.courses}
      ListFooterComponent={
        <ListCourse nav={navigation} listCourses={sectionContent.courses} />
      }
    />
  );
};

export default SectionFullList;
