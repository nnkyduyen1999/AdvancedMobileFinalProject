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
const Browse = () => {
  return (
    <ScrollView style={css.screenContent}>
      <ScreenHeader screenTitle="Browse" />
      <ImageButton txt="New Released" imgName="new-release.jpg" imgType={css.largeImgButton}/>
      <ImageButton txt="Recommend for you" imgName="recommended.png" imgType={css.largeImgButton}/>
      <View style={{marginVertical: 20}}>
        <SectionCourseTitle sectionTitle="Popular Skills" />
        <ButtonCategory />
        <ImageButtonCategory />
      </View>
      <SectionCourses title="Paths" />
      <ListAuthor title="Top Authors"/>
    </ScrollView>
  );
};

export default Browse;
