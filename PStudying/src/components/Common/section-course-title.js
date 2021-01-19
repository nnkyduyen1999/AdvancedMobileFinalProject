import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import css from "../../globals/style";
import theme from "../../globals/theme";
import constant from "../../globals/constant";
import {ThemeContext} from "../../providers/theme-provider";

import Icon from "react-native-vector-icons/FontAwesome";
const seeAllIcon = <Icon name="angle-right" size={10} color="white" />;

const SectionCourseTitle = ({
  sectionTitle,
  seeAll,
  fullSecNav,
  sectionCourses,
}) => {
  const {themes} = useContext(ThemeContext);

  return (
    <View style={{...styles.titleLayout, backgroundColor: themes.backgroundColor}}>
      <Text style={{...css.sectionTitle, color: themes.text}}>{sectionTitle}</Text>

      {seeAll && (
        <Button
          title={`${seeAll}`}
          buttonStyle={css.buttonLayoutSmall}
          icon={seeAllIcon}
          iconRight={true}
          titleStyle={css.buttonTitle}
          onPress={() => {
            fullSecNav.navigate(constant.navigationNames.FullSection, {
              sectionContent: {
                title: sectionTitle,
                courses: sectionCourses,
              },
            });
          }}
        ></Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  titleLayout: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: theme.SMALL_PADDING,
  },
});

export default SectionCourseTitle;
