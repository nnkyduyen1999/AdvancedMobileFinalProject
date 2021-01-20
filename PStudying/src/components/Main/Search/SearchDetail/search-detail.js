import React from "react";
import { SectionList, View, Text } from "react-native";
import ListCourseItem from "../../../Courses/ListCourseItems/list-course-items";
import SectionCourseTitle from "../../../Common/section-course-title";
import CustomAvatar from "../AvatarCustom/custom-avatar";
import css from "../../../../globals/style";

const SearchDetail = ({
  nav,
  searchCoursesData,
  searchAuthorsData,
}) => {
  const DATA = [
    {
      title: "Courses",
      data: searchCoursesData,
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
        renderItem={({ item }) =>
          item.avatar ? (
            <CustomAvatar author={item} authorNav={nav} />
          ) : (
            <ListCourseItem course={item} listCourseNav={nav} />
          )
        }
        renderSectionHeader={({ section: { title, data } }) => (
          <SectionCourseTitle
            seeAll={`${data.length} results   `}
            sectionTitle={title}
            fullSecNav={nav}
            sectionCourses={data}
          />
        )}
      />
    </View>
  );
};

export default SearchDetail;
