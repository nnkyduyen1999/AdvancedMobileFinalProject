import React from "react";

import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/components/Main/Home/home";
import CourseDetail from "./src/components/CourseDetail/course-detail";
import Browse from "./src/components/Main/Browse/browse";
import SkillDetail from "./src/components/Main/Browse/SkillDetail/skill-detail";
import Search from "./src/components/Main/Search/search";
import Download from "./src/components/Main/Download/download";
import Login from "./src/components/Authentication/Login/login";
import LoginForm from "./src/components/Authentication/Login/Login-Form/login-form";
import Register from "./src/components/Authentication/Register/register";
import Setting from "./src/components/Account Management/Setting-Account/setting";
import Profile from "./src/components/Account Management/Profile/profile";
import constant from "./src/globals/constant";

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

module.exports.SearchStackScreen = () => {
  const SearchStack = createStackNavigator();
  return (
    <SearchStack.Navigator headerMode="none" initialRouteName={constant.navigationNames.Search}>
      <SearchStack.Screen
        name={constant.navigationNames.Search}
        component={Search}
      />
      <SearchStack.Screen
        name={constant.navigationNames.CourseDetail}
        component={CourseDetail}
      />
    </SearchStack.Navigator>
  );
};
