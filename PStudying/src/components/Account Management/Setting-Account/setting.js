import React from 'react'
import { View, ScrollView} from 'react-native'
import { Button } from 'react-native-elements'
import ListSetting from "./list-setting/list-setting"
import css from "../../../globals/style"

export default function Setting() {
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
          }
    ];

    return (
        <ScrollView contentContainerStyle={css.screenContentNoPaddingTop}>
            <ListSetting settingList={settingList1}/>
            <ListSetting settingList={settingList2} switchBtn="true"/>
            <ListSetting settingList={settingList3}/>

            <Button title="Sign out" type="outline" titleStyle={css.authenBtnTitleOutline}/>
        </ScrollView>
    )
}
