import React from "react";

import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Home from "./src/components/Main/Home/home";
import CourseDetail from "./src/components/CourseDetail/course-detail";
import Browse from "./src/components/Main/Browse/browse";
import SkillDetail from "./src/components/Main/Browse/SkillDetail/skill-detail";
import Search from "./src/components/Main/Search/search";
import SearchBarCustom from "./src/components/Main/Search/SearchBar/search-bar";
import Download from "./src/components/Main/Download/download";
import Login from "./src/components/Authentication/Login/login";
import LoginForm from "./src/components/Authentication/Login/Login-Form/login-form";
import Register from "./src/components/Authentication/Register/register";
import Setting from "./src/components/Account Management/Setting-Account/setting";
import Profile from "./src/components/Account Management/Profile/profile";

import constant from "./src/globals/constant";
import theme from "./src/globals/theme";
import { Icon } from "react-native-elements";


const Tab = createMaterialTopTabNavigator();

module.exports.HomeStackScreen = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={constant.navigationNames.Home}
        component={Home}
        options={{ title: constant.navigationTitles.Home }}
      />
      <HomeStack.Screen
        name={constant.navigationNames.CourseDetail}
        component={CourseDetail}
      />
    </HomeStack.Navigator>
  );
};

module.exports.DownloadStackScreen = () => {
  const DownloadStack = createStackNavigator();

  return (
    <DownloadStack.Navigator>
      <DownloadStack.Screen
        name={constant.navigationNames.Download}
        component={Download}
        options={{ title: constant.navigationTitles.Download }}
      />
      <DownloadStack.Screen
        name={constant.navigationNames.CourseDetail}
        component={CourseDetail}
      />
    </DownloadStack.Navigator>
  );
};

module.exports.BrowseStackScreen = () => {
  const BrowseStack = createStackNavigator();

  return (
    <BrowseStack.Navigator>
      <BrowseStack.Screen
        name={constant.navigationNames.Browse}
        component={Browse}
        options={{ title: constant.navigationTitles.Browse }}
      />
      <BrowseStack.Screen
        name={constant.navigationNames.Profile}
        component={Profile}
        options={{ title: constant.navigationTitles.Profile }}
      />
      <BrowseStack.Screen
        name={constant.navigationNames.SkillDetail}
        component={SkillDetail}
        options={{ title: constant.navigationTitles.SkillDetail }}
      />
      <BrowseStack.Screen
        name={constant.navigationNames.CourseDetail}
        component={CourseDetail}
      />
    </BrowseStack.Navigator>
  );
};

const TabSearchScreen = () => {
  return (
    <Tab.Navigator
        tabBarOptions={{
          activeTintColor: theme.PRIMARY_TEXT_COLOR,
          inactiveTintColor: theme.SECONDARY_TEXT_COLOR,
          style: { backgroundColor: theme.TAB_BAR_BGR },
          labelStyle: {fontWeight: theme.FONT_WEIGHT_MEDIUM}
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
  
}
module.exports.SearchStackScreen = () => {
  const SearchStack = createStackNavigator();
  return (
    <SearchStack.Navigator
      initialRouteName={constant.navigationNames.Search}
    >
      <SearchStack.Screen
        name={constant.navigationNames.Search}
        component={TabSearchScreen}
        options={{ headerTitle: (props) => <SearchBarCustom {...props} /> }}
      />
      <SearchStack.Screen
        name={constant.navigationNames.CourseDetail}
        component={CourseDetail}
      />
    </SearchStack.Navigator>
  );
};
