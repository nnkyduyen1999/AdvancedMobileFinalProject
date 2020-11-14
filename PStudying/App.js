import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import theme from "./src/globals/theme";
import constant from "./src/globals/constant";
import { Icon } from "react-native-elements";
import Navigate from "./Navigation";
import Login from "./src/components/Authentication/Login/login";
import LoginForm from "./src/components/Authentication/Login/Login-Form/login-form";
import ForgetPassword from "./src/components/Authentication/ForgetPassword/forget-password";
import Register from "./src/components/Authentication/Register/register";
import CourseDetail from "./src/components/CourseDetail/course-detail";

const dismissIcon = (
  <Icon type="font-awesome" name="times" size={25} color={theme.BASIC_BLUE} />
);

const MyTheme = {
  dark: false,
  colors: {
    primary: theme.BASIC_BLUE,
    background: theme.DARK_THEME,
    text: theme.PRIMARY_TEXT_COLOR,
  },
};

const MainTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={constant.navigationNames.MainTabs}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === constant.navigationNames.Home) {
            iconName = "home";
          } else if (route.name === constant.navigationNames.Download) {
            iconName = "arrow-circle-o-down";
          } else if (route.name === constant.navigationNames.Browse) {
            iconName = "newspaper-o";
          } else if (route.name === constant.navigationNames.Search) {
            iconName = "search";
          }

          return (
            <Icon
              type="font-awesome"
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: theme.ICON_BLUE,
        inactiveTintColor: theme.TAB_BAR_ICON,
        style: { backgroundColor: theme.TAB_BAR_BGR },
        tabStyle: {flexDirection: "column"}
      }}
    >
      <Tab.Screen
        name={constant.navigationNames.Home}
        component={Navigate.HomeStackScreen}
        options={{ title: constant.navigationTitles.Home }}
      />
      <Tab.Screen
        name={constant.navigationNames.Download}
        component={Navigate.DownloadStackScreen}
        options={{ title: constant.navigationTitles.Download }}
      />
      <Tab.Screen
        name={constant.navigationNames.Browse}
        component={Navigate.BrowseStackScreen}
        options={{ title: constant.navigationTitles.Browse }}
      />
      <Tab.Screen
        name={constant.navigationNames.Search}
        component={Navigate.SearchStackScreen}
        options={{ title: constant.navigationTitles.Search }}
      />
    </Tab.Navigator>
  );
};
const Main = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Main.Navigator mode="modal">
        <Main.Screen
          component={MainTabs}
          name={constant.navigationNames.MainTabs}
          options={{ headerShown: false }}
        />
        <Main.Screen
          component={Login}
          name={constant.navigationNames.Login}
          options={{ headerShown: false }}
        />
        <Main.Screen
          component={Register}
          name={constant.navigationNames.Register}
          options={{ headerShown: false }}
        />
        <Main.Screen
          component={LoginForm}
          name={constant.navigationNames.LoginForm}
          options={{ headerShown: false }}
        />
        <Main.Screen
          component={ForgetPassword}
          name={constant.navigationNames.ForgotPassword}
          options={{ headerShown: false }}
        />

        <Main.Screen
          component={CourseDetail}
          name={constant.navigationNames.CourseDetail}
          options={{ headerShown: true }}
        />
      </Main.Navigator>
    </NavigationContainer>
  );
}
