import React from "react";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import theme from "../../globals/theme";
import constant from "../../globals/constant";
import { Icon } from "react-native-elements";
import HomeStackScreen from "./Home/home-tab";
import DownloadStackScreen from "./Download/download-tab";
import BrowseStackScreen from "./Browse/browse-tab";
import SearchStackScreen from "./Search/search-tab";


export default MainTabs = () => {
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
        tabStyle: { flexDirection: "column" },
      }}
    >
      <Tab.Screen
        name={constant.navigationNames.Home}
        component={HomeStackScreen}
        options={{ title: constant.navigationTitles.Home }}
      />
      <Tab.Screen
        name={constant.navigationNames.Download}
        component={DownloadStackScreen}
        options={{ title: constant.navigationTitles.Download }}
      />
      <Tab.Screen
        name={constant.navigationNames.Browse}
        component={BrowseStackScreen}
        options={{ title: constant.navigationTitles.Browse }}
      />
      <Tab.Screen
        name={constant.navigationNames.Search}
        component={SearchStackScreen}
        options={{ title: constant.navigationTitles.Search }}
      />
    </Tab.Navigator>
  );
};

