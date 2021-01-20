import React from "react";
import { FlatList, View } from "react-native";
import ListCourseItem from "../ListCourseItems/list-course-items";

const ListCourse = ({ nav, listCourses }) => {
  return (
    <FlatList
      data={listCourses}
      renderItem={({ item }) => (
        <ListCourseItem course={item} listCourseNav={nav} />
      )}
    />
  );
};

export default ListCourse;
