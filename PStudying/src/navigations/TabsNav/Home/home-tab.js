import React from "react";
import { TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../../../components/Main/Home/home";
import Setting from "../../../components/Account Management/Setting-Account/setting";
import Profile from "../../../components/Account Management/Profile/profile";
import FullSection from "../../../components/Main/Home/SectionFullList/section-full-list";
import constant from "../../../globals/constant";
import theme from "../../../globals/theme";

import { Icon } from "react-native-elements";

const dismissIcon = (
  <Icon type="font-awesome" name="times" size={25} color={theme.BASIC_BLUE} />
);

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
              onPress={() => navigation.goBack()}
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

const ProfileStackScreen = ({ navigation }) => {
  const ProfileStack = createStackNavigator();
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={constant.navigationNames.Profile}
        component={Profile}
        options={{
          title: constant.navigationTitles.Profile,
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: theme.LARGE_MARGIN }}
              onPress={() => navigation.goBack()}
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
    </ProfileStack.Navigator>
  );
};

const MainHomeStackScreen = ({ navigation }) => {
  const MainHomeStack = createStackNavigator();

  return (
    <MainHomeStack.Navigator>
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
      <MainHomeStack.Screen
        name={constant.navigationNames.FullSection}
        component={FullSection}
        options={{title: ""}}
      />
    </MainHomeStack.Navigator>
  );
};

const HomeStackScreen = ({ navigation }) => {
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
        component={ProfileStackScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
