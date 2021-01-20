import React, { useState } from "react";

const CourseContext = React.createContext();
const CourseProvider = (props) => {
  const [favoriteCourses, setFavoriteCourses] = useState([]);
  const [subscribeCourses, setSubscribeCourses] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchDataAfter, setSearchDataAfter] = useState([]);
  const [searchCoursesData, setSearchCoursesData] = useState([]);
  const [searchAuthorsData, setSearchAuthorsData] = useState([]);
  

  return (
    <CourseContext.Provider
      value={{
        favoriteCourses,
        setFavoriteCourses,
        subscribeCourses,
        setSubscribeCourses,
        searchData,
        setSearchData,
        searchCoursesData,
        setSearchCoursesData,
        searchAuthorsData,
        setSearchAuthorsData,
        searchDataAfter,
        setSearchDataAfter,
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export { CourseProvider, CourseContext };
