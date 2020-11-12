import React from "react";
import SectionCourses from "./SectionCourses/section-courses";
import { ScrollView, View } from "react-native";
import ScreenHeader from "../../Common/screen-header";
import EmptySection from "../../Common/empty-section";
import SectionCourseTitle from "../../Common/section-course-title";
import css from "../../../globals/style";

export default function home({ navigation }) {
  const bookmarks = [{}];
  const channels = [];
  return (
    <ScrollView contentContainerStyle={css.screenContent}>
      <ScreenHeader screenTitle="Home" />
      <SectionCourses title="Continue learning" nav={navigation} />
      <SectionCourses title="Paths" nav={navigation} />
      {channels.length === 0 && (
        <View>
          <SectionCourseTitle sectionTitle="Channels" />
          <EmptySection content="Use channels to save, organize and share content to accomplish your learning objectives." />
        </View>
      )}
      {channels.length > 0 && (
        <SectionCourses title="Channels" nav={navigation} />
      )}
      {bookmarks.length === 0 && (
        <View>
          <SectionCourseTitle sectionTitle="Bookmarks" />
          <EmptySection content="Use bookmarks to quickly save courses for later watching." />
        </View>
      )}
      {bookmarks.length > 0 && (
        <SectionCourses title="Bookmarks" nav={navigation} />
      )}
    </ScrollView>
  );
}
