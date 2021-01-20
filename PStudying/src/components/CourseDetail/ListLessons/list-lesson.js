import React, { useEffect, useState, useContext, useReducer } from "react";
import { SectionList, ActivityIndicator } from "react-native";
import ListLessonItem from "../ListLessonItems/list-lesson-item";
import ListItemHeader from "../ListLessonItems/list-item-header";
import Introduction from "../CourseIntroduction/introduction";
import css from "../../../globals/style";
import theme from "../../../globals/theme";

const ListLesson = ({ courseInfo, renderCourse, fullCourse, nav, onPressLesson }) => {
  return (
    <SectionList
      style={css.screenContent}
      sections={renderCourse}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <ListLessonItem lesson={item} nav={nav} onPressLesson={onPressLesson}/>}
      renderSectionHeader={({ section: { name, sumHours } }) => (
        <ListItemHeader sectionHeader={name} sectionSubHeader={sumHours} />
      )}
      ListHeaderComponent={
        <Introduction
          course={courseInfo}
          fullCourse={fullCourse}
          nav={nav}
        />
      }
    />
  );
};

export default ListLesson;
