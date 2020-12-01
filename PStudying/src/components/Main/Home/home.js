import React, {useContext} from "react";
import SectionCourses from "./SectionCourses/section-courses";
import { ScrollView, View } from "react-native";
import ScreenHeader from "../../Common/screen-header";
import EmptySection from "../../Common/empty-section";
import SectionCourseTitle from "../../Common/section-course-title";
import css from "../../../globals/style";
import {CourseContext} from "../../../providers/course-provider";

export default function home({ navigation }) {
  const channels = [];
  const courseContext = useContext(CourseContext);
  const bookmark = courseContext.bookmark;
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
  return (
    <ScrollView contentContainerStyle={css.screenContent}>
      <ScreenHeader screenTitle="Home" />
      <SectionCourses title="Continue learning" nav={navigation} listCourse={courses}/>
      <SectionCourses title="Paths" nav={navigation} listCourse={courses}/>
      {channels.length === 0 && (
        <View>
          <SectionCourseTitle sectionTitle="Channels" />
          <EmptySection content="Use channels to save, organize and share content to accomplish your learning objectives." />
        </View>
      )}
      {channels.length > 0 && (
        <SectionCourses title="Channels" nav={navigation} />
      )}
      {bookmark.length === 0 && (
        <View>
          <SectionCourseTitle sectionTitle="Bookmarks" />
          <EmptySection content="Use bookmarks to quickly save courses for later watching." />
        </View>
      )}
      {bookmark.length > 0 && (
        <SectionCourses title="Bookmarks" nav={navigation} listCourse={bookmark}/>
      )}
    </ScrollView>
  );
}
