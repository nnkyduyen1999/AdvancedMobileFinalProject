import React from "react";
import { SectionList, View, Text } from "react-native";
import ListCourseItem from "../../../Courses/ListCourseItems/list-course-items";
import SectionCourseTitle from "../../../Common/section-course-title";
import SearchEmpty from "../SearchEmpty/search-empty"
import { FlatList } from "react-native-gesture-handler";

const SearchDetail = ({nav}) => {
  const authors = [
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
    <View>
    <SectionCourseTitle
          seeAll={`${data.length} results   `}
          sectionTitle="Authors"
          fullSecNav={nav} sectionCourses={authors}
        />
        <FlatList/>
    </View>
  );
};

export default SearchDetail;
