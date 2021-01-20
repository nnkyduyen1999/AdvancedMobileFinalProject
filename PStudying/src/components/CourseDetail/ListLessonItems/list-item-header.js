import React, {useContext} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import theme from "../../../globals/theme";
import css from "../../../globals/style";
import {ThemeContext} from "../../../providers/theme-provider";

const ListItemHeader = ({ sectionHeader, sectionSubHeader }) => {
  const {themes} = useContext(ThemeContext);

  return (
    <View style={{...css.headerSection, backgroundColor: themes.backgroundColor}}>
      <View style={{ flexDirection: "row" }}>
        <Text style={[css.courseTitle, styles.textRoundedBorder, {color: themes.text}]}>1</Text>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ color: themes.text }}>
            {sectionHeader}
          </Text>
          <Text style={css.courseContent}>{sectionSubHeader}h</Text>
        </View>
      </View>

      <Icon
        name="ellipsis-h"
        type="font-awesome"
        color={themes.text}
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
