import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import constant from "../../../globals/constant";
import CourseDetail from "../../../components/CourseDetail/course-detail";
import FullSection from "../../../components/Main/Home/SectionFullList/section-full-list"

export default CourseDetailModal = () => {
  const CourseDetailModalStack = createStackNavigator();

  return (
    <CourseDetailModalStack.Navigator mode="modal">
      <CourseDetailModalStack.Screen
        component={CourseDetail}
        name={constant.navigationNames.CourseDetail}
        options={{ headerShown: false }}
      />
      {/* <CourseDetailModalStack.Screen
        component={FullSection}
        name={constant.navigationNames.FullSection}
        options={{ headerShown: false }}
      /> */}
    </CourseDetailModalStack.Navigator>
  );
};

