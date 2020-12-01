import React, { useState, useContext } from "react";
import { SearchBar } from "react-native-elements";
import theme from "../../../../globals/theme";
import {CourseContext} from "../../../../providers/course-provider"

export default function SearchBarCustom() {
  const [search, setSearch] = useState(``);
  const courseContext = useContext(CourseContext);

  const searchData = courseContext.searchData;
  const handleSearch = (query) => {
    const searchQuery = query.toLowerCase();
    const filteredData = searchData.filter((item) => {
      if (item.name.toLowerCase().includes(searchQuery)) {
        return true;
      }
      return false;
    });
    courseContext.setSearchDataAfter(filteredData);
    setSearch(query);
  };

  return (
    <SearchBar
      platform="ios"
      placeholder="Search"
      onChangeText={(query) => handleSearch(query)}
      value={search}
      inputContainerStyle={{ height: 30, backgroundColor: "white" }}
      containerStyle={{ backgroundColor: theme.DARK_THEME, paddingTop: 40 }}
      cancelButtonProps={{ buttonStyle: { paddingTop: 25 } }}
    />
  );
}
