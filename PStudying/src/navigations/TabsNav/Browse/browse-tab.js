import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Browse from "../../../components/Main/Browse/browse";
import Profile from "../../../components/Account Management/Profile/profile";
import AuthorProfile from "../../../components/Main/Browse/Authors/author-profile";
import FullSection from "../../../components/Main/Home/SectionFullList/section-full-list"

import constant from "../../../globals/constant";

const BrowseStackScreen = () => {
  const BrowseStack = createStackNavigator();

  return (
    <BrowseStack.Navigator>
      <BrowseStack.Screen
        name={constant.navigationNames.Browse}
        component={Browse}
        options={{ title: constant.navigationTitles.Browse, headerLeft: null }}
      />
      <BrowseStack.Screen
        name={constant.navigationNames.Profile}
        component={Profile}
        options={{ title: constant.navigationTitles.Profile }}
      />
      <BrowseStack.Screen
        name={constant.navigationNames.AuthorProfile}
        component={AuthorProfile}
        options={{ title: `` }}
      />
      <BrowseStack.Screen
        name={constant.navigationNames.FullSection}
        component={FullSection}
        options={{ title: `` }}
      />
    </BrowseStack.Navigator>
  );
};

export default BrowseStackScreen;

