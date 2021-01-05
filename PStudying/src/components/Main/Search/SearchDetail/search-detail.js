import React from "react";
import { SectionList, View, Text } from "react-native";
import ListCourseItem from "../../../Courses/ListCourseItems/list-course-items";
import SectionCourseTitle from "../../../Common/section-course-title";
import SearchEmpty from "../SearchEmpty/search-empty"
import css from "../../../../globals/style";

const SearchDetail = ({nav, searchData, searchCoursesData, searchAuthorsData}) => {
  const DATA = [
    {
      title: "Courses",
      data: searchData,
    },
    {
      title: "Authors",
      data: searchAuthorsData,
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
        ListEmptyComponent={<SearchEmpty/>}
      />
      
    </View>
  );
};

export default SearchDetail;
