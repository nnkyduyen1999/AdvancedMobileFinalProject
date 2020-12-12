import React, { useState, useReducer } from "react";
import { coursesReducer } from "../reducers/courses-reducer";
import { getTopNewCourses, getTopSellCourses } from "../actions/courses-action";

const initialState = {
  
};
const CourseContext = React.createContext();
const CourseProvider = (props) => {
  const [courseState, dispatch] = useReducer(coursesReducer, initialState);

  //const [favoriteCourses, setFavoriteCourses] = useState([]);
  //const [bookmark, setBookmark] = useState([]);
  const [searchData, setSearchData] = useState([
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
  ]);
  const [searchDataAfter, setSearchDataAfter] = useState([]);
  return (
    <CourseContext.Provider
      value={{
        courseState,
        getTopNewCourses: getTopNewCourses(dispatch),
        getTopSellCourses: getTopSellCourses(dispatch),
        // favoriteCourses,
        // setFavoriteCourses,
        // bookmark,
        // setBookmark,
        // searchData,
        searchDataAfter,
        setSearchDataAfter,
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export { CourseProvider, CourseContext };
