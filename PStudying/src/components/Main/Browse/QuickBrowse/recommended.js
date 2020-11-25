import React from "react";
import { ScrollView } from "react-native";
import css from "../../../../globals/style";
import ScreenHeader from "../../../Common/screen-header";
import ListCourse from "../../../Courses/ListCourse/list-course";

const Recommended = ({ navigation }) => {
  const recommendedCourses = [
    {
        id: "1",
        name: "React Native recommended",
        author: "Hai Pham",
        level: "Advanced",
        released: "May 2019",
        duration: "40h",
      },
      {
        id: "2",
        name: "React recommended",
        author: "Khanh Nguyen",
        level: "Advanced",
        released: "May 2019",
        duration: "60h",
      },
      {
        id: "3",
        name: "Test recommended",
        author: "Hanh Tran",
        level: "Beginner",
        released: "May 2019",
        duration: "45h",
      },
      {
        id: "4",
        name: "React Native 2 recommended",
        author: "Hai Pham",
        level: "Advanced",
        released: "May 2019",
        duration: "40h",
      },
      {
        id: "5",
        name: "React 2 recommended",
        author: "Khanh Nguyen",
        level: "Advanced",
        released: "May 2019",
        duration: "60h",
      },
      {
        id: "6",
        name: "Test 2 recommended",
        author: "Hanh Tran",
        level: "Beginner",
        released: "May 2019",
        duration: "45h",
      },
  ];

//   useEffect(() => {
    
//   }, [recommendedCourses])
  return (
    <ScrollView style={css.screenContent}>
      <ScreenHeader screenTitle="Recommended for you" />
      <ListCourse nav={navigation} listCourses={recommendedCourses}/>
    </ScrollView>
  );
};

export default Recommended;
