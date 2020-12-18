import React, { useEffect, useState, useContext, useReducer } from "react";
import { SectionList, ActivityIndicator } from "react-native";
import ListLessonItem from "../ListLessonItems/list-lesson-item";
import ListItemHeader from "../ListLessonItems/list-item-header";
import Introduction from "../CourseIntroduction/introduction";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
import { AuthenticationContext } from "../../../providers/authentication-provider";
import { courseDetailReducer } from "../../../reducers/course-detail-reducer";
import { getCourseDetailAction } from "../../../actions/course-detail-action";

const initialState = {
  courseInfo: null,
  renderCourseSection: null,
  isLoading: true,
  errMsg: null,
};

const ListLesson = ({ courseInfo, nav }) => {
  const authenticationContext = useContext(AuthenticationContext);
  const [courseDetailState, dispatch] = useReducer(
    courseDetailReducer,
    initialState
  );

  useEffect(() => {
    getCourseDetailAction(
      dispatch,
      courseInfo.id,
      authenticationContext.state.userInfo.id,
      authenticationContext.token
    );
  }, []);

  // console.log();
  return (
    <>
      {courseDetailState.isLoading ? (
        <ActivityIndicator size="large" color={theme.BASIC_BLUE} />
      ) : (
        <SectionList
          style={css.screenContent}
          sections={courseDetailState.renderCourseSection}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <ListLessonItem lesson={item} />}
          renderSectionHeader={({ section: { name, sumHours } }) => (
            <ListItemHeader sectionHeader={name} sectionSubHeader={sumHours}/>
          )}
          ListHeaderComponent={
            <Introduction
              course={courseInfo}
              fullCourse={courseDetailState.courseInfo}
              nav={nav}
            />
          }
        />
      )}
    </>
  );
};

export default ListLesson;
