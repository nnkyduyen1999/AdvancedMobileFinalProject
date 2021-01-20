import React, {useState} from "react";
import { SectionList, View, Text } from "react-native";
import ListCourseItem from "../../../Courses/ListCourseItems/list-course-items";
import SectionCourseTitle from "../../../Common/section-course-title";
import css from "../../../../globals/style";

const SearchCourses = ({nav, searchData, searchCoursesData}) => {
    const DATA = [
        {
          title: "Courses",
          data: searchCoursesData,
        },
      ];
    
  
  return (
    <View style={css.screenContent}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <ListCourseItem course={item} listCourseNav={nav}/>}
        renderSectionHeader={({ section: { title, data } }) => (
          <SectionCourseTitle
            seeAll={`${data.length} results   `}
            sectionTitle={title}
            fullSecNav={nav} sectionCourses={data}
          />
        )}
      />
      
    </View>
  );
};

export default SearchCourses;
