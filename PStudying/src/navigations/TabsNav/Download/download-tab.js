import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Download from "../../../components/Main/Download/download";

import constant from "../../../globals/constant";

const DownloadStackScreen = () => {
  const DownloadStack = createStackNavigator();

  return (
    <DownloadStack.Navigator>
      <DownloadStack.Screen
        name={constant.navigationNames.Download}
        component={Download}
        options={{ title: constant.navigationTitles.Download, headerLeft: null }}
      />
    </DownloadStack.Navigator>
  );
};
export default DownloadStackScreen;
