import React, {useState} from "react";
import { View } from "react-native";
import VideoPlayer from "./VideoPlayer/video-player";
import CourseDetailTabs from "./Course Detail Tabs/course-detail-tab"

const CourseDetail = ({ route, navigation }) => {
  const courseInfo = route.params.courseInfo;
  const [urlLesson, setUrlLesson] = useState(``);

  const onPressLesson = (url) => {
    console.log(url);
    setUrlLesson(url);
  }
  return (
    <View style={{ flex: 1 }}>
      <VideoPlayer urlLesson={urlLesson}/>
      <CourseDetailTabs courseInfo={courseInfo} nav={navigation} onPressLesson={onPressLesson}/>
    </View>
  );
};

export default CourseDetail;
