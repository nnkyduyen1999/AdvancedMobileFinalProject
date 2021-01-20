import React, { useContext, useEffect, useReducer } from "react";
import { ActivityIndicator } from "react-native";
import "react-native-gesture-handler";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import constant from "../../../globals/constant";
import theme from "../../../globals/theme";
import ListLesson from "../ListLessons/list-lesson";
import ListComments from "../ListComments/list-comments";
import { AuthenticationContext } from "../../../providers/authentication-provider";
import { courseDetailReducer } from "../../../reducers/course-detail-reducer";
import { getCourseDetailAction } from "../../../actions/course-detail-action";

const initialState = {
  courseInfo: null,
  renderCourseSection: null,
  isLoading: true,
  errMsg: null,
};

const Tab = createMaterialTopTabNavigator();

const CourseDetailTab = ({ courseInfo, nav, onPressLesson, getUrlCourse }) => {
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

  useEffect(() => {
    if (!courseDetailState.isLoading) {
      getUrlCourse(courseDetailState.courseInfo.promoVidUrl)
    }
  }, [courseDetailState.isLoading]);
  
  return (
    <>
      {courseDetailState.isLoading ? (
        <ActivityIndicator size="large" color={theme.BASIC_BLUE} />
      ) : (
        <Tab.Navigator>
          <Tab.Screen name={constant.navigationNames.ListLesson}>
            {() => (
              <ListLesson
                courseInfo={courseInfo}
                fullCourse={courseDetailState.courseInfo}
                renderCourse={courseDetailState.renderCourseSection}
                nav={nav}
                onPressLesson={onPressLesson}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name={constant.navigationNames.ListComments}>
            {() => <ListComments
                fullCourse={courseDetailState.courseInfo} />}
          </Tab.Screen>
        </Tab.Navigator>
      )}
    </>
  );
};

export default CourseDetailTab;
