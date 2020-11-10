import React from "react";
import { SectionList } from "react-native";
import ListLessonItem from "../ListLessonItems/list-lesson-item"
import ListItemHeader from "../ListLessonItems/list-item-header"
import ListCourseItem from "../../Courses/ListCourseItems/list-course-items"
const ListLesson = ({ listLesson }) => {
  return (
    <SectionList
        sections={listLesson}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <ListLessonItem lesson={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <ListItemHeader
            sectionHeader={title}
          />
        )}
      />
  );
};

export default ListLesson;
