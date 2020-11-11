import React from "react";
import { View, ScrollView } from "react-native";
import ListSettingItem from "../../../Common/list-item-with-right-icon";
const ListSetting = ({ settingList, switchBtn }) => {
  const renderListSettingItems = (list) => {
    return list.map((item, index) => (
      <ListSettingItem
        setting={item}
        key={index}
        rightIcon="angle-right"
        switchBtn={switchBtn}
      />
    ));
  };
  return <ScrollView>{renderListSettingItems(settingList)}</ScrollView>;
};

export default ListSetting;
