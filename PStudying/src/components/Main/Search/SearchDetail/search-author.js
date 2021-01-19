import React from "react";
import { SectionList, View, Text } from "react-native";
import SectionCourseTitle from "../../../Common/section-course-title";
import CustomAvatar from "../AvatarCustom/custom-avatar";
import css from "../../../../globals/style";

const SearchAuthor = ({ nav, searchAuthorsData }) => {
  const DATA = [
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
        renderItem={({ item }) => (
          <CustomAvatar author={item} authorNav={nav} />
        )}
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

export default SearchAuthor;
