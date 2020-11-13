import React from "react";
import { TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "./src/components/Main/Home/home";
import Browse from "./src/components/Main/Browse/browse";
import SkillDetail from "./src/components/Main/Browse/SkillDetail/skill-detail";
import Search from "./src/components/Main/Search/search";
import SearchBarCustom from "./src/components/Main/Search/SearchBar/search-bar";
import Download from "./src/components/Main/Download/download";
import Setting from "./src/components/Account Management/Setting-Account/setting";
import Profile from "./src/components/Account Management/Profile/profile";

import constant from "./src/globals/constant";
import theme from "./src/globals/theme";

import { Icon } from "react-native-elements";

const dismissIcon = (
  <Icon type="font-awesome" name="times" size={25} color={theme.BASIC_BLUE} />
);

const Tab = createMaterialTopTabNavigator();

const SettingStackScreen = ({ navigation }) => {
  const SettingStack = createStackNavigator();

  return (
    <SettingStack.Navigator mode="modal">
      <SettingStack.Screen
        name={constant.navigationNames.Setting}
        component={Setting}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: theme.LARGE_MARGIN }}
              onPress={() => navigation.dangerouslyGetParent().pop()}
            >
              {dismissIcon}
            </TouchableOpacity>
          ),
          title: constant.navigationTitles.Setting,
          headerLeft: null,
        }}
      />
    </SettingStack.Navigator>
  );
};

const MainHomeStackScreen = ({ navigation }) => {
  const MainHomeStack = createStackNavigator();

  return (
    <MainHomeStack.Navigator mode="modal">
      <MainHomeStack.Screen
        name={constant.navigationNames.Home}
        component={Home}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: theme.LARGE_MARGIN }}
              onPress={() =>
                navigation.navigate(constant.navigationNames.Setting)
              }
            >
              <Icon
                type="font-awesome"
                name="cog"
                size={25}
                color={theme.BASIC_BLUE}
              />
            </TouchableOpacity>
          ),
          title: constant.navigationTitles.Home,
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: theme.LARGE_MARGIN }}
              onPress={() =>
                navigation.navigate(constant.navigationNames.Profile)
              }
            >
              <Icon
                type="font-awesome"
                name="user-circle"
                size={25}
                color={theme.BASIC_BLUE}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </MainHomeStack.Navigator>
  );
};

module.exports.HomeStackScreen = ({ navigation }) => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator mode="modal">
      <HomeStack.Screen
        name={constant.navigationNames.Home}
        component={MainHomeStackScreen}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name={constant.navigationNames.Setting}
        component={SettingStackScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name={constant.navigationNames.Profile}
        component={Profile}
        options={{
          title: constant.navigationTitles.Profile,
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: theme.LARGE_MARGIN }}
              onPress={() =>
                navigation.goBack()
              }
            >
              <Icon
                type="font-awesome"
                name="times"
                size={25}
                color={theme.BASIC_BLUE}
              />
            </TouchableOpacity>
          ),
          headerLeft: null,
        }}
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
    </BrowseStack.Navigator>
  );
};

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
module.exports.SearchStackScreen = () => {
  const SearchStack = createStackNavigator();
  return (
    <SearchStack.Navigator initialRouteName={constant.navigationNames.Search}>
      <SearchStack.Screen
        name={constant.navigationNames.Search}
        component={TabSearchScreen}
        options={{ headerTitle: (props) => <SearchBarCustom {...props} /> }}
      />
    </SearchStack.Navigator>
  );
};
