import React, { useEffect, useReducer, useContext } from "react";
import SectionCourses from "./SectionCourses/section-courses";
import { ScrollView, View, ActivityIndicator, Alert } from "react-native";
import ScreenHeader from "../../Common/screen-header";
import EmptySection from "../../Common/empty-section";
import SectionCourseTitle from "../../Common/section-course-title";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
import { coursesReducer } from "../../../reducers/courses-reducer";
import {
  getRecommendCourses,
  getProcessCourses,
} from "../../../actions/courses-action";
import { AuthenticationContext } from "../../../providers/authentication-provider";
import { CourseContext } from "../../../providers/course-provider";
import {
  getFavoriteCoursesService,
  getProcessCoursesService,
} from "../../../core/services/course-services";

const initialState = {
  recommendedCourses: [],
  processCourses: [],
  favoriteCourses: [],
  isLoadingCourses: true,
  errMsg: null,
};
export default function home({ navigation }) {
  const { state } = useContext(AuthenticationContext);
  const courseContext = useContext(CourseContext);
  const [courseState, dispatch] = useReducer(coursesReducer, initialState);

  const convertApi = (apiArr) => {
    return apiArr.map((course) => ({
      id: course.id,
      title: course.courseTitle,
      price: course.coursePrice,
      imageUrl: course.courseImage,
      instructorId: course.instructorId,
      instructorName: course.instructorName,
      soldNumber: course.courseSoldNumber,
      contentPoint: course.courseContentPoint,
      formalityPoint: course.courseFormalityPoint,
      presentationPoint: course.coursePresentationPoint,
      averagePoint: course.courseAveragePoint,
    }));
  };

  const formatProcessCourses = (apiArr) => {
    return apiArr.map((course) => ({
      id: course.id,
      title: course.courseTitle,
      price: course.coursePrice,
      imageUrl: course.courseImage,
      instructorId: course.instructorId,
      instructorName: course.instructorName,
      latestLearnTime: course.latestLearnTime,
      learnLesson: course.learnLesson,
      process: course.process,
      total: course.total,
    }));
  };

  useEffect(() => {
    getRecommendCourses(dispatch, state.userInfo.id, state.token);

    getFavoriteCoursesService(state.token)
      .then((res) => {
        if (res.status === 200) {
          courseContext.setFavoriteCourses(convertApi(res.data.payload));
        } else {
          Alert.alert(res.data.message);
        }
      })
      .catch((err) => {
        Alert.alert(err.response.data.message);
      });

    getProcessCoursesService(state.token)
      .then((res) => {
        if (res.status === 200) {
          courseContext.setSubscribeCourses(
            formatProcessCourses(res.data.payload)
          );
        } else {
          Alert.alert(res.data.message);
        }
      })
      .catch((err) => {
        Alert.alert(err.response.data.message);
      });
  }, []);

  return (
    <>
      {courseState.isLoadingCourses ? (
        <ActivityIndicator size="large" color={theme.BASIC_BLUE} />
      ) : (
        <ScrollView contentContainerStyle={css.screenContent}>
          <ScreenHeader screenTitle="Home" />
          {courseContext.subscribeCourses.length === 0 ? (
            <View>
              <SectionCourseTitle sectionTitle="Ti???p t???c h???c" />
              <EmptySection content="B???t ?????u xem ????? c?? kh??a h???c m???i." />
            </View>
          ) : (
            <SectionCourses
              title="Ti???p t???c h???c"
              nav={navigation}
              listCourse={courseContext.subscribeCourses}
              isProcessing={true}
            />
          )}

          {courseState.recommendedCourses.length === 0 ? (
            <View>
              <SectionCourseTitle sectionTitle="Kh??a h???c g???i ??" />
              <EmptySection content="Use channels to save, organize and share content to accomplish your learning objectives." />
            </View>
          ) : (
            <SectionCourses
              title="Kho?? h???c g???i ??"
              nav={navigation}
              listCourse={courseState.recommendedCourses}
              isProcessing={false}
            />
          )}
          {courseContext.favoriteCourses.length === 0 ? (
            <View>
              <SectionCourseTitle sectionTitle="Kh??a h???c y??u th??ch" />
              <EmptySection content="D??ng bookmark ????nh d???u l???i c??c kh??a h???c mu???n xem sau." />
            </View>
          ) : (
            <SectionCourses
              title="Kh??a h???c y??u th??ch"
              nav={navigation}
              listCourse={courseContext.favoriteCourses}
              isProcessing={false}
            />
          )}
        </ScrollView>
      )}
    </>
  );
}
