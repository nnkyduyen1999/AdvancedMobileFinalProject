import React from "react";
import { View, ScrollView } from "react-native";
import ListAuthor from "./Authors/list-author";
import SectionCourses from "../Home/SectionCourses/section-courses";
import SectionCourseTitle from "../../Common/section-course-title";
import ImageButtonCategory from "./Category/ImageButtonCategory";
import ButtonCategory from "./Category/ButtonCategory";
import ImageButton from "../../Common/image-button";
import ScreenHeader from "../../Common/screen-header";
import css from "../../../globals/style";

const Browse = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={css.screenContent}>
      <ScreenHeader screenTitle="Browse" />
      <ImageButton
        txt="New Released"
        imgName="new-release.jpg"
        imgType={css.largeImgButton}
        nav={navigation}
      />
      <ImageButton
        txt="Recommend for you"
        imgName="recommended.png"
        imgType={css.largeImgButton}
        nav={navigation}
      />
      <View style={{ marginVertical: 20 }}>
        <SectionCourseTitle sectionTitle="Popular Skills" />
        <ButtonCategory nav={navigation}/>
        <ImageButtonCategory nav={navigation}/>
      </View>
      <SectionCourses title="Paths" nav={navigation}/>
      <ListAuthor title="Top Authors" nav={navigation}/>
    </ScrollView>
  );
};

export default Browse;
