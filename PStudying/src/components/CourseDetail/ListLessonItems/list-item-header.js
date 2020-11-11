import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import theme from "../../../globals/theme";
import css from "../../../globals/style";
const ListItemHeader = ({ sectionHeader }) => {
  return (
    <View style={css.headerSection}>
      <View style={{ flexDirection: "row" }}>
        <Text style={[css.courseTitle, styles.textRoundedBorder]}>1</Text>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ color: theme.PRIMARY_TEXT_COLOR }}>
            {sectionHeader}
          </Text>
          <Text style={css.courseContent}>1m 16s</Text>
        </View>
      </View>

      <Icon
        name="ellipsis-h"
        type="font-awesome"
        color={theme.PRIMARY_TEXT_COLOR}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textRoundedBorder: {
    width: 30,
    height: 30,
    borderColor: theme.CIRCLE_AROUND,
    borderWidth: 2,
    borderRadius: 15,
    textAlign: 'center',
    lineHeight: 25,
    marginRight: 10
  }
})


export default ListItemHeader;
