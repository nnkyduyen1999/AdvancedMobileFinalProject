import React, { useEffect, useReducer } from "react";
import { View, ScrollView, Alert, ActivityIndicator } from "react-native";
import ListAuthor from "./Authors/list-author";
import SectionCourses from "../Home/SectionCourses/section-courses";
import SectionCourseTitle from "../../Common/section-course-title";
import ImageButtonCategory from "./Category/ImageButtonCategory";
import ButtonCategory from "./Category/ButtonCategory";
import ImageButton from "../../Common/image-button";
import ScreenHeader from "../../Common/screen-header";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
import constant from "../../../globals/constant";
import { coursesReducer } from "../../../reducers/courses-reducer";
import {
  getTopNewCourses,
  getTopSellCourses,
  getTopRateCourses,
  getCategory
} from "../../../actions/courses-action";

const initialState = {
  topNewCourses: [],
  topSellCourses: [],
  topRateCourses: [],
  category: [],
  isLoadingCourses: false,
  errMsg: null,
};
const Browse = ({ navigation }) => {
  const [courseState, dispatch] = useReducer(coursesReducer, initialState);
  useEffect(() => {
    getTopNewCourses(dispatch);
    getTopSellCourses(dispatch);
    getTopRateCourses(dispatch);
    getCategory(dispatch);
  }, []);

  return (
    <>
      {courseState.isLoadingCourses ? (
        <ActivityIndicator size="large" color={theme.BASIC_BLUE} />
      ) : (
        <ScrollView contentContainerStyle={css.screenContent}>
          <ScreenHeader screenTitle="Browse" />
          <ImageButton
            txt="New Released"
            imgName="new-release.jpg"
            imgType={css.largeImgButton}
            onPressImgBtn={() => {
              navigation.navigate(constant.navigationNames.FullSection, {
                sectionContent: {
                  title: "New",
                  courses: courseState.topNewCourses,
                },
              });
            }}
          />
          <ImageButton
            txt="Recommend for you"
            imgName="recommended.png"
            imgType={css.largeImgButton}
            onPressImgBtn={() => {
              navigation.navigate(constant.navigationNames.FullSection, {
                sectionContent: {
                  title: "Top nhiều đăng ký",
                  courses: courseState.topSellCourses,
                },
              });
            }}
          />
          <View style={{ marginVertical: 20 }}>
            <SectionCourseTitle sectionTitle="Popular Skills" />
            <ButtonCategory nav={navigation} />
            <ImageButtonCategory nav={navigation} category={courseState.category}/>
          </View>
          <SectionCourses
            title="Top rate"
            nav={navigation}
            listCourse={courseState.topRateCourses}
          />
          <ListAuthor title="Top Authors" nav={navigation} />
        </ScrollView>
      )}
    </>
  );
};

export default Browse;
