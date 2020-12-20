import React, { useContext } from "react";
import { View, ScrollView, Alert } from "react-native";
import { Button } from "react-native-elements";
import { StackActions } from '@react-navigation/native';
import ListSetting from "./list-setting/list-setting";
import css from "../../../globals/style";
import constant from "../../../globals/constant";
import { AuthenticationContext} from "../../../providers/authentication-provider"
import {CourseContext} from "../../../providers/course-provider";

export default function Setting({ navigation }) {
  const authenticationContext = useContext(AuthenticationContext);
  const courseContext = useContext(CourseContext);

  const settingList1 = [
    {
      main: "Subcription",
      sub: "Individual (Expires: 9 Nov, 2020)",
    },
    {
      main: "Communication references",
      sub: "",
    },
    {
      main: "Communication references",
      sub: "",
    },
  ];
  const settingList2 = [
    {
      main: "Require Wi-Fi for streaming",
      sub: "",
    },
    {
      main: "Require Wi-Fi for downloading",
      sub: "",
    },
    {
      main: "Play video in background",
      sub: "",
    },
  ];
  const settingList3 = [
    {
      main: "Reminder to learn",
      sub:
        "Schedule the app to remind you to learn to skill up faster and conquer your goals.",
    },
    {
      main: "Sign in on Apple TV",
      sub: "",
    },
    {
      main: "Send feedback",
      sub: "",
    },
    {
      main: "Contact support",
      sub: "",
    },
  ];


  const showAlert = () => {
    Alert.alert(
      "Sign out",
      "Are you sure you want to sign out? This will remove any download content.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Sign out",
          onPress: () => {
            navigation.dispatch(StackActions.pop(1));
            navigation.navigate(constant.navigationNames.SplashScreen);
            courseContext.setFavoriteCourses([]);
            authenticationContext.logout();
          },
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <ScrollView contentContainerStyle={css.screenContentNoPaddingTop}>
      <ListSetting settingList={settingList1} />
      <ListSetting settingList={settingList2} switchBtn="true" />
      <ListSetting settingList={settingList3} />

      <Button
        title="Sign out"
        type="outline"
        titleStyle={css.authenBtnTitleOutline}
        onPress={showAlert}
      />
    </ScrollView>
  );
}
