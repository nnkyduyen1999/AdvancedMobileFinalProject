import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Search from "../../../components/Main/Search/search";
import SearchBarCustom from "../../../components/Main/Search/SearchBar/search-bar";
import FullSection from "../../../components/Main/Home/SectionFullList/section-full-list"
import constant from "../../../globals/constant";
import theme from "../../../globals/theme";


const Tab = createMaterialTopTabNavigator();

const TabSearchScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.PRIMARY_TEXT_COLOR,
        inactiveTintColor: theme.SECONDARY_TEXT_COLOR,
        style: {
          backgroundColor: theme.TAB_BAR_BGR,
          marginTop: theme.SMALL_MARGIN,
        },
        labelStyle: { fontWeight: theme.FONT_WEIGHT_MEDIUM },
      }}
    >
      <Tab.Screen
        name={constant.navigationNames.SearchAll}
        component={Search}
      />
      <Tab.Screen
        name={constant.navigationNames.SearchCourses}
        component={Search}
      />
      <Tab.Screen
        name={constant.navigationNames.SearchPaths}
        component={Search}
      />
      <Tab.Screen
        name={constant.navigationNames.SearchAuthors}
        component={Search}
      />
    </Tab.Navigator>
  );
};
const SearchStackScreen = () => {
  const SearchStack = createStackNavigator();
  return (
    <SearchStack.Navigator initialRouteName={constant.navigationNames.Search}>
      <SearchStack.Screen
        name={constant.navigationNames.Search}
        component={TabSearchScreen}
        options={{ headerTitle: (props) => <SearchBarCustom {...props} /> }}
      />
      <SearchStack.Screen
        name={constant.navigationNames.FullSection}
        component={FullSection}
        options={{ title: "" }}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
