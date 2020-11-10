import React from "react";
import { View, ScrollView } from "react-native";
import Introduction from "./CourseIntroduction/introduction";
import VideoPlayer from "./VideoPlayer/video-player";
import css from "../../globals/style";
import theme from "../../globals/theme";

const CourseDetail = () => {
  const lesson = {
    name: "Go: Getting Started",
    author: "Mike Van Sickle",
    level: "Beginner",
    duration: "2h 55min",
    released: "Jan 27, 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin sapien diam, id tincidunt nunc rhoncus ac. Cras massa elit, imperdiet pellentesque ullamcorper et, mattis nec est. Ut fringilla vulputate leo et bibendum. Sed at lacinia ante, id mollis arcu. Nulla non ante dolor. Mauris eget rutrum metus. Curabitur ultrices id nulla eget fermentum. Quisque nec neque est. Maecenas a nulla magna. Donec varius ipsum eu lectus tristique, ac feugiat orci viverra. Aenean accumsan ex eu velit accumsan, at malesuada nibh rutrum. Pellentesque iaculis tellus eget libero consequat dictum. Quisque lacus sapien, bibendum eu sapien in, finibus dapibus odio. Vivamus nec eleifend massa, dictum rhoncus sapien. Sed augue lectus, sodales nec vulputate in, venenatis vitae est. ",
  };

  return (
    <View>
      <VideoPlayer />
      <ScrollView contentContainerStyle={css.screenContentNoPaddingTop}>
      <Introduction lesson={lesson} />

      </ScrollView>
    </View>
  );
};

export default CourseDetail;
