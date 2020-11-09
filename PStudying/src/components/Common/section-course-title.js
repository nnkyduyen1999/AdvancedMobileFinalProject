import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import css from "../../globals/style";

const seeAllIcon = <Icon name="angle-right" size={10} color="white"/>;

const SectionCourseTitle = ({ sectionTitle, seeAll }) => {
  return (
    <View style={styles.titleLayout}>
      <Text style={css.sectionTitle}>{sectionTitle}</Text>
      {seeAll && <Button
        title="See all  "
        buttonStyle={css.buttonLayoutSmall}
        icon={seeAllIcon}
        iconRight={true}
        titleStyle={css.buttonTitle}
      ></Button>}
    </View>
  );
};

const styles = StyleSheet.create({
    titleLayout: {
        display: "flex",
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    }
})


export default SectionCourseTitle;
