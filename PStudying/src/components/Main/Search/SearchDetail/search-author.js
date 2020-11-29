import React from "react";
import { SectionList, View, Text } from "react-native";
import ListCourseItem from "../../../Courses/ListCourseItems/list-course-items";
import SectionCourseTitle from "../../../Common/section-course-title";
import SearchEmpty from "../SearchEmpty/search-empty";
import css from "../../../../globals/style";

const SearchAuthor = ({ nav, searchData }) => {
  const DATA = [
    {
      title: "Authors",
      data: searchData,
    },
  ];

  return (
    <View style={css.screenContent}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <ListCourseItem course={item} listCourseNav={nav} />
        )}
        renderSectionHeader={({ section: { title, data } }) => (
          <SectionCourseTitle
            seeAll={`${data.length} results   `}
            sectionTitle={title}
            fullSecNav={nav}
            sectionCourses={data}
          />
        )}
        ListEmptyComponent={<SearchEmpty />}
      />
    </View>
  );
};

export default SearchAuthor;
