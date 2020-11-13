import React from "react";
import { FlatList, View } from "react-native";
import ListCourseItem from "../ListCourseItems/list-course-items";

const ListCourse = ({ nav }) => {
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
    <FlatList
      data={courses}
      renderItem={({ item }) => (
        <ListCourseItem course={item} listCourseNav={nav} />
      )}
    />
  );
};

export default ListCourse;
