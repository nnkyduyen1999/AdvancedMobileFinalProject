import React, {useContext} from "react";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import theme from "../../globals/theme";
import constant from "../../globals/constant";
import { Icon } from "react-native-elements";
import HomeStackScreen from "./Home/home-tab";
import DownloadStackScreen from "./Download/download-tab";
import BrowseStackScreen from "./Browse/browse-tab";
import SearchStackScreen from "./Search/search-tab";
import {ThemeContext} from "../../providers/theme-provider";

export default MainTabs = () => {
  const Tab = createBottomTabNavigator();
  const {themes} = useContext(ThemeContext);

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
        style: { backgroundColor: themes.tabBarBgr },
        tabStyle: { flexDirection: "column" },
      }}
    >
      <Tab.Screen
        name={constant.navigationNames.Home}
        component={HomeStackScreen}
      />
      <Tab.Screen
        name={constant.navigationNames.Download}
        component={DownloadStackScreen}
      />
      <Tab.Screen
        name={constant.navigationNames.Browse}
        component={BrowseStackScreen}
      />
      <Tab.Screen
        name={constant.navigationNames.Search}
        component={SearchStackScreen}
      />
    </Tab.Navigator>
  );
};

