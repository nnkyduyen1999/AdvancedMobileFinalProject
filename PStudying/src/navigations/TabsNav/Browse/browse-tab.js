import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import Browse from "../../../components/Main/Browse/browse";
import SkillDetail from "../../../components/Main/Browse/SkillDetail/skill-detail";
import Profile from "../../../components/Account Management/Profile/profile";
import AuthorProfile from "../../../components/Main/Browse/Authors/author-profile";
import NewRelease from "../../../components/Main/Browse/QuickBrowse/new-release";
import Recommended from "../../../components/Main/Browse/QuickBrowse/recommended";

import constant from "../../../globals/constant";

const BrowseStackScreen = () => {
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
        name={constant.navigationNames.AuthorProfile}
        component={AuthorProfile}
        options={{ title: constant.navigationTitles.AuthorProfile }}
      />
      <BrowseStack.Screen
        name={constant.navigationNames.NewRelease}
        component={NewRelease}
        options={{ title: "" }}
      />
      <BrowseStack.Screen
        name={constant.navigationNames.Recommended}
        component={Recommended}
        options={{ title: "" }}
      />
    </BrowseStack.Navigator>
  );
};

export default BrowseStackScreen;

