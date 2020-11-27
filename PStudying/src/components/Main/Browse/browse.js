import React from "react";
import { View, ScrollView, Alert } from "react-native";
import ListAuthor from "./Authors/list-author";
import SectionCourses from "../Home/SectionCourses/section-courses";
import SectionCourseTitle from "../../Common/section-course-title";
import ImageButtonCategory from "./Category/ImageButtonCategory";
import ButtonCategory from "./Category/ButtonCategory";
import ImageButton from "../../Common/image-button";
import ScreenHeader from "../../Common/screen-header";
import css from "../../../globals/style";
import constant from "../../../globals/constant";
import courseServices from "../../../core/services/course-services";

const Browse = ({ navigation }) => {
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
  const newCourses = courseServices.newCourses();
  const recommendedCourses = courseServices.getRecommendedCourse();
  return (
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
              courses: newCourses,
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
              title: "Recommended for you",
              courses: recommendedCourses,
            },
          });
        }}
      />
      <View style={{ marginVertical: 20 }}>
        <SectionCourseTitle sectionTitle="Popular Skills" />
        <ButtonCategory nav={navigation} />
        <ImageButtonCategory nav={navigation} />
      </View>
      <SectionCourses title="Paths" nav={navigation} listCourse={courses} />
      <ListAuthor title="Top Authors" nav={navigation} />
    </ScrollView>
  );
};

export default Browse;
