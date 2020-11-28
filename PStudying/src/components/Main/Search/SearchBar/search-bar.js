import React, { useState } from "react";
import { SearchBar } from "react-native-elements";
import theme from "../../../../globals/theme";

export default function SearchBarCustom() {
  const [search, setSearch] = useState(``);
  
  const DATA = [
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
  const [searchData, setSearchData] = useState(DATA);

  const handleSearch = (query) => {
    const searchQuery = query.toLowerCase();
    const filteredData = DATA.filter((item) => {
      console.log(item);
      if (item.name.includes(searchQuery)) {
        return true;
      }
      return false;
    });
    setSearchData(filteredData);
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
