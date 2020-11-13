import React from "react";
import { TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import theme from "./src/globals/theme";
import constant from "./src/globals/constant";
import { Icon } from "react-native-elements";
import Navigate from "./Navigation";
const MyTheme = {
  dark: false,
  colors: {
    primary: theme.BASIC_BLUE,
    background: theme.DARK_THEME,
    text: theme.PRIMARY_TEXT_COLOR
  },
};

// const tabBarCustomIcon = (route) => {
//   const {focused, color, size} = route;
//   let iconName;

//   if (route.name === constant.navigationNames.Home) {
//     iconName = "home";
//   } else if (route.name === constant.navigationNames.Download) {
//     iconName = "arrow-circle-o-down";
//   } else if (route.name === constant.navigationNames.Browse) {
//     iconName = "newspaper-o";
//   } else if (route.name === constant.navigationNames.Search) {
//     iconName = "search";
//   }

//   return (
//     <Icon
//     type="font-awesome"
//     name={iconName}
//     size={size}
//     color={color}
//   />
//   );
// }
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
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
        }}
      >
        <Tab.Screen
          name={constant.navigationNames.Home}
          component={Navigate.HomeStackScreen}
        />
        <Tab.Screen
          name={constant.navigationNames.Download}
          component={Navigate.DownloadStackScreen}
        />
        <Tab.Screen
          name={constant.navigationNames.Browse}
          component={Navigate.BrowseStackScreen}
        />
        <Tab.Screen
          name={constant.navigationNames.Search}
          component={Navigate.SearchStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
