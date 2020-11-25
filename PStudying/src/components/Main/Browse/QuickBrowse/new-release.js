import React from "react";
import { ScrollView } from "react-native";
import css from "../../../../globals/style";
import ScreenHeader from "../../../Common/screen-header";
import ListCourse from "../../../Courses/ListCourse/list-course";

const NewRelease = ({ navigation }) => {
  const newCourses = [
    {
        id: "1",
        name: "React Native new",
        author: "Hai Pham",
        level: "Advanced",
        released: "May 2019",
        duration: "40h",
      },
      {
        id: "2",
        name: "React new",
        author: "Khanh Nguyen",
        level: "Advanced",
        released: "May 2019",
        duration: "60h",
      },
      {
        id: "3",
        name: "Test new",
        author: "Hanh Tran",
        level: "Beginner",
        released: "May 2019",
        duration: "45h",
      },
      {
        id: "4",
        name: "React Native 2 new",
        author: "Hai Pham",
        level: "Advanced",
        released: "May 2019",
        duration: "40h",
      },
      {
        id: "5",
        name: "React 2 new",
        author: "Khanh Nguyen",
        level: "Advanced",
        released: "May 2019",
        duration: "60h",
      },
      {
        id: "6",
        name: "Test 2 new",
        author: "Hanh Tran",
        level: "Beginner",
        released: "May 2019",
        duration: "45h",
      },
  ];
  
  return (
    <ScrollView style={css.screenContent}>
      <ScreenHeader screenTitle="New" />
      <ListCourse nav={navigation} listCourses={newCourses}/>
    </ScrollView>
  );
};

export default NewRelease;
