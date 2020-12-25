import React from "react";
import SearchDetail from "./SearchDetail/search-detail"

export default function search({ nav, searchData}) {
  
  return (
    <SearchDetail nav={nav} searchData={searchData}/>
    // <ScrollView contentContainerStyle={css.screenContent}>
    //   <ScreenHeader screenTitle="Search"/>
    //   <SearchBarCustom />
    //   <SearchList title="Recent searches" clearBtn="true"/>
    //   <SearchList title="Your interested"/>
    // </ScrollView>
  );
}
