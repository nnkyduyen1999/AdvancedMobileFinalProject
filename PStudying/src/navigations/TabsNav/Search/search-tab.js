import React, { useContext } from "react";
import { View } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Search from "../../../components/Main/Search/search";
import SearchBarCustom from "../../../components/Main/Search/SearchBar/search-bar";
import FullSection from "../../../components/Main/Home/SectionFullList/section-full-list";
import SearchCourses from "../../../components/Main/Search/SearchDetail/search-course";
import SearchAuthors from "../../../components/Main/Search/SearchDetail/search-author";
import SearchHistory from "../../../components/Main/Search/SearchHistory/searchHistory";
import constant from "../../../globals/constant";
import theme from "../../../globals/theme";
import { CourseContext } from "../../../providers/course-provider";
import { ThemeContext } from "../../../providers/theme-provider";

const Tab = createMaterialTopTabNavigator();

const TabSearchScreen = ({ navigation, route }) => {
  const courseContext = useContext(CourseContext);
  const { themes } = useContext(ThemeContext);
  return (
    <>
      <SearchBarCustom route={route} />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: themes.text,
          inactiveTintColor: theme.SECONDARY_TEXT_COLOR,
          style: {
            backgroundColor: themes.tabBarBgr,
            marginTop: theme.SMALL_MARGIN,
          },
          labelStyle: { fontWeight: theme.FONT_WEIGHT_MEDIUM },
        }}
      >
        <Tab.Screen name={constant.navigationNames.SearchAll}>
          {(props) => (
            <Search
              {...props}
              nav={navigation}
              searchData={courseContext.searchDataAfter}
              searchCoursesData={courseContext.searchCoursesData}
              searchAuthorsData={courseContext.searchAuthorsData}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name={constant.navigationNames.SearchCourses}>
          {(props) => (
            <SearchCourses
              {...props}
              nav={navigation}
              searchData={courseContext.searchDataAfter}
              searchCoursesData={courseContext.searchCoursesData}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name={constant.navigationNames.SearchAuthors}>
          {(props) => (
            <SearchAuthors
              {...props}
              nav={navigation}
              searchData={courseContext.searchDataAfter}
              searchAuthorsData={courseContext.searchAuthorsData}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </>
  );
};
const SearchStackScreen = () => {
  const SearchStack = createStackNavigator();
  return (
    <SearchStack.Navigator
      initialRouteName={constant.navigationNames.SearchHistory}
    >
      <SearchStack.Screen
        name={constant.navigationNames.SearchHistory}
        component={SearchHistory}
        options={{ headerShown: false }}
      />
      <SearchStack.Screen
        name={constant.navigationNames.Search}
        component={TabSearchScreen}
        options={{ headerShown: false }}
      />
      <SearchStack.Screen
        name={constant.navigationNames.FullSection}
        component={FullSection}
        options={{ headerShown: false }}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
