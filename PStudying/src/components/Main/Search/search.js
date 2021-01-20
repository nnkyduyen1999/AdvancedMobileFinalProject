import React from "react";
import SearchDetail from "./SearchDetail/search-detail";

export default function search({
  nav,
  searchData,
  searchCoursesData,
  searchAuthorsData,
}) {
  return (
    <SearchDetail
      nav={nav}
      searchData={searchData}
      searchCoursesData={searchCoursesData}
      searchAuthorsData={searchAuthorsData}
    />
  );
}
