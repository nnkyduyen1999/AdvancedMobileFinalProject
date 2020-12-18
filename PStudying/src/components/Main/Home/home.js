import React, { useEffect, useReducer, useContext } from "react";
import SectionCourses from "./SectionCourses/section-courses";
import { ScrollView, View, ActivityIndicator } from "react-native";
import ScreenHeader from "../../Common/screen-header";
import EmptySection from "../../Common/empty-section";
import SectionCourseTitle from "../../Common/section-course-title";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
import { coursesReducer } from "../../../reducers/courses-reducer";
import { getRecommendCourses, getFavoriteCourses } from "../../../actions/courses-action";
import { AuthenticationContext } from "../../../providers/authentication-provider";

const initialState = {
  recommendedCourses: [],
  processCourses: [],
  favoriteCourses: [],
  isLoadingCourses: true,
  errMsg: null,
};
export default function home({ navigation }) {
  const channels = [];
  const bookmark = [];
  const courses = [
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
  ];

  const {state} = useContext(AuthenticationContext);
  const [courseState, dispatch] = useReducer(coursesReducer, initialState);
  useEffect(() => {
    getRecommendCourses(
      dispatch,
      state.userInfo.id,
      state.token
    );
    getFavoriteCourses(dispatch, state.token);
  }, []);
  return (
    <>
    {courseState.isLoadingCourses ? <ActivityIndicator size="large" color={theme.BASIC_BLUE}/> : <ScrollView contentContainerStyle={css.screenContent}>
      <ScreenHeader screenTitle="Home" />
      <SectionCourses
        title="Tiếp tục học"
        nav={navigation}
        listCourse={courseState.processCourses}
      />
      {courseState.recommendedCourses.length === 0 ? (
        <View>
          <SectionCourseTitle sectionTitle="Khóa học gợi ý" />
          <EmptySection content="Use channels to save, organize and share content to accomplish your learning objectives." />
        </View>
      ) : (
        <SectionCourses title="Khoá học gợi ý" nav={navigation} 
        listCourse={courseState.recommendedCourses}
        />
      )}
      {courseState.favoriteCourses.length === 0 ? (
        <View>
          <SectionCourseTitle sectionTitle="Khóa học yêu thích" />
          <EmptySection content="Dùng bookmark đánh dấu lại các khóa học muốn xem sau." />
        </View>
      ) : (
        <SectionCourses
          title="Khóa học yêu thích"
          nav={navigation}
          listCourse={courseState.favoriteCourses}
        />
      )}
    </ScrollView>}
    </>
    
  );
}
