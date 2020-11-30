import React from "react";
import { View } from "react-native";
import VideoPlayer from "./VideoPlayer/video-player";
import CourseDetailTabs from "./Course Detail Tabs/course-detail-tab"

const CourseDetail = ({ route, navigation }) => {
  const courseInfo = route.params.courseInfo;

  return (
    <View style={{ flex: 1 }}>
      <VideoPlayer />
      <CourseDetailTabs courseInfo={courseInfo} nav={navigation}/>
    </View>
  );
};

export default CourseDetail;
