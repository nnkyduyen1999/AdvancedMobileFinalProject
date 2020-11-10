import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import theme from "../../../globals/theme";
import css from "../../../globals/style";
const ListItemHeader = ({ sectionHeader }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={{ flexDirection: "column"}}>
        <Text style={{ color: theme.PRIMARY_TEXT_COLOR }}>{sectionHeader}</Text>
        <Text style={css.courseContent}>1m 16s</Text>
      </View>
      <Icon
        name="ellipsis-h"
        type="font-awesome"
        color={theme.PRIMARY_TEXT_COLOR}
      />
    </View>
  );
};

export default ListItemHeader;
