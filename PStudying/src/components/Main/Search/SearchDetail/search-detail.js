import React from "react";
import { SectionList, View, Text } from "react-native";
import ListCourseItem from "../../../Courses/ListCourseItems/list-course-items";
import SectionCourseTitle from "../../../Common/section-course-title";
import SearchEmpty from "../SearchEmpty/search-empty"
import css from "../../../../globals/style";
const SearchDetail = ({nav}) => {
  const DATA = [
    {
      title: "Courses",
      data: [
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
      ],
    },
    {
      title: "Paths",
      data: [
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
      ],
    },
    {
      title: "Authors",
      data: [
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
      ],
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
