import React, { useState, useContext, useEffect } from "react";
import { SearchBar } from "react-native-elements";
import { Alert } from "react-native";
import theme from "../../../../globals/theme";
import { CourseContext } from "../../../../providers/course-provider";
import { AuthenticationContext } from "../../../../providers/authentication-provider";
import { searchV2Service } from "../../../../core/services/course-services";
import { ThemeContext } from "../../../../providers/theme-provider";

export default function SearchBarCustom({ route }) {
  const [searchVal, setSearchVal] = useState(``);
  const courseContext = useContext(CourseContext);
  const { state } = useContext(AuthenticationContext);
  const { themes } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (route) {
      setSearchVal(route.params.history);
    }
  }, []);

  const handleSearch = (query) => {
    setIsLoading(true);
    searchV2Service(state.token, query)
      .then((res) => {
        if (res.status === 200) {
          courseContext.setSearchCoursesData(res.data.payload.courses.data);
          courseContext.setSearchAuthorsData(res.data.payload.instructors.data);
          setIsLoading(false);
        } else {
          Alert.alert(res.data.message);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        Alert.alert(err.response.data.message);
        setIsLoading(false);
      });
  };

  return (
    <SearchBar
      platform="ios"
      placeholder="Search"
      showLoading={isLoading}
      onChangeText={(text) => setSearchVal(text.toLowerCase())}
      value={searchVal}
      inputContainerStyle={{ height: 30, backgroundColor: "white" }}
      containerStyle={{
        backgroundColor: themes.backgroundColor,
        paddingTop: 30,
      }}
      cancelButtonProps={{ buttonStyle: { paddingTop: 25 } }}
      onSubmitEditing={() => handleSearch(searchVal)}
    />
  );
}
