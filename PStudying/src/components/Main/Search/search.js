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
    // <ScrollView contentContainerStyle={css.screenContent}>
    //   <ScreenHeader screenTitle="Search"/>
    //   <SearchBarCustom />
    //   <SearchList title="Recent searches" clearBtn="true"/>
    //   <SearchList title="Your interested"/>
    // </ScrollView>
  );
}
