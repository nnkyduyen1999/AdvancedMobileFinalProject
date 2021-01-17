import React, { useState, useContext, useEffect } from "react";
import { SearchBar } from "react-native-elements";
import { Alert } from 'react-native'
import theme from "../../../../globals/theme";
import {CourseContext} from "../../../../providers/course-provider"
import {AuthenticationContext}  from "../../../../providers/authentication-provider";
import {searchService, searchV2Service} from "../../../../core/services/course-services";

export default function SearchBarCustom() {
  const [searchVal, setSearchVal] = useState(``);
  const courseContext = useContext(CourseContext);
  const {state} = useContext(AuthenticationContext);

  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   setIsLoading(true);
  //   searchService("")
  //   .then(res=> {
  //     setIsLoading(false);
  //     if (res.status === 200) {
  //       courseContext.setSearchData(res.data.payload.rows);
  //     } else {
  //       Alert.alert(res.data.message);
  //     }
  //   }).catch(err=> {
  //     setIsLoading(false);
  //     Alert.alert(err.response.data.message);
  //   })
  // },[]);

 // const searchData = courseContext.searchData;
  const handleSearch = (query) => {
    setIsLoading(true);
    //const searchQuery = query.toLowerCase();
    // const filteredData = searchData.filter((item) => {
    //   if (item.title.toLowerCase().includes(searchQuery)) {
    //     return true;
    //   }
    //   return false;
    // });
    // courseContext.setSearchDataAfter(filteredData);
    //setSearch(searchQuery);
    searchV2Service(state.token, query)
    .then(res => {
      if (res.status === 200) {
        courseContext.setSearchCoursesData(res.data.payload.courses.data);
        courseContext.setSearchAuthorsData(res.data.payload.instructors.data);
        setIsLoading(false);
      } else {
        Alert.alert(res.data.message);
        setIsLoading(false);
      }
    }).catch(err => {
      Alert.alert(err.response.data.message);
      setIsLoading(false);
    })
  };

  return (
    <SearchBar
      platform="ios"
      placeholder="Search"
      showLoading={isLoading}
      onChangeText={(text) => setSearchVal(text.toLowerCase())}
      value={searchVal}
      inputContainerStyle={{ height: 30, backgroundColor: "white" }}
      containerStyle={{ backgroundColor: theme.DARK_THEME, paddingTop: 40 }}
      cancelButtonProps={{ buttonStyle: { paddingTop: 25 } }}
      onSubmitEditing={() => handleSearch(searchVal)}
    />
  );
}
