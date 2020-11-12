import React from "react";
import { ScrollView } from "react-native";
import css from "../../../globals/style";
import ScreenHeader from "../../Common/screen-header";
import ListCourse from "../../Courses/ListCourse/list-course";
import BackButton from "../../Common/back-button";

const Download = ({ navigation }) => {
  return (
    <ScrollView style={css.screenContent}>
      <ScreenHeader screenTitle="Download" />
      <ListCourse nav={navigation}/>
    </ScrollView>
  );
};

export default Download;
