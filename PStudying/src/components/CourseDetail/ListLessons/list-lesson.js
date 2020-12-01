import React from "react";
import { SectionList } from "react-native";
import ListLessonItem from "../ListLessonItems/list-lesson-item";
import ListItemHeader from "../ListLessonItems/list-item-header";
import Introduction from "../CourseIntroduction/introduction";
import css from "../../../globals/style";

const ListLesson = ({ courseInfo, nav }) => {
  const course = {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin sapien diam, id tincidunt nunc rhoncus ac. Cras massa elit, imperdiet pellentesque ullamcorper et, mattis nec est. Ut fringilla vulputate leo et bibendum. Sed at lacinia ante, id mollis arcu. Nulla non ante dolor. Mauris eget rutrum metus. Curabitur ultrices id nulla eget fermentum. Quisque nec neque est. Maecenas a nulla magna. Donec varius ipsum eu lectus tristique, ac feugiat orci viverra. Aenean accumsan ex eu velit accumsan, at malesuada nibh rutrum. Pellentesque iaculis tellus eget libero consequat dictum. Quisque lacus sapien, bibendum eu sapien in, finibus dapibus odio. Vivamus nec eleifend massa, dictum rhoncus sapien. Sed augue lectus, sodales nec vulputate in, venenatis vitae est. ",
    lessons: [
      {
        title: "Introduction",
        data: [
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
        ],
      },
      {
        title: "Getting started",
        data: [
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
        ],
      },
      {
        title: "Go deeper",
        data: [
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
        ],
      },
      {
        title: "Check your knowledge",
        data: [
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
        ],
      },
    ],
  };
  return (
    <SectionList
      style={css.screenContent}
      sections={course.lessons}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <ListLessonItem lesson={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <ListItemHeader sectionHeader={title} />
      )}
      ListHeaderComponent={<Introduction course={courseInfo} nav={nav} />}
    />
  );
};

export default ListLesson;
