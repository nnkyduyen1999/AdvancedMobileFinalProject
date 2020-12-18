import React, { useState } from "react";

const CourseContext = React.createContext();
const CourseProvider = (props) => {

  const [favoriteCourses, setFavoriteCourses] = useState([]);
  const [bookmark, setBookmark] = useState([]);
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
        favoriteCourses,
        setFavoriteCourses,
        bookmark,
        setBookmark,
        searchData,
        searchDataAfter,
        setSearchDataAfter,
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export { CourseProvider, CourseContext };
