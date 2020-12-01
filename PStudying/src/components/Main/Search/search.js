import React from "react";
import SearchDetail from "./SearchDetail/search-detail"

export default function search({ navigation, searchData}) {
  return (
    <SearchDetail nav={navigation} searchData={searchData}/>
    // <ScrollView contentContainerStyle={css.screenContent}>
    //   <ScreenHeader screenTitle="Search"/>
    //   <SearchBarCustom />
    //   <SearchList title="Recent searches" clearBtn="true"/>
    //   <SearchList title="Your interested"/>
    // </ScrollView>
  );
}
