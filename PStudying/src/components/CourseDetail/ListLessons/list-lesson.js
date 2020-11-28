import React from "react";
import { SectionList } from "react-native";
import ListLessonItem from "../ListLessonItems/list-lesson-item"
import ListItemHeader from "../ListLessonItems/list-item-header"
import Introduction from "../CourseIntroduction/introduction"
import css from "../../../globals/style"

const ListLesson = ({ listLesson, listHeaderContent, nav }) => {
  return (
    <SectionList style={css.screenContent}
        sections={listLesson}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <ListLessonItem lesson={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <ListItemHeader
            sectionHeader={title}
          />
        )}
        ListHeaderComponent={<Introduction course={listHeaderContent} nav={nav}/>}
      />
  );
};

export default ListLesson;
