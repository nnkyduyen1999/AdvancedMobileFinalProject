import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { Divider, Button, Icon } from "react-native-elements";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
import CourseInfo from "../../Common/course-info";
import CustomIcon from "../../Common/custom-icon";

const Introduction = ({ lesson }) => {
  return (
    <View>
      <CourseInfo
        courseInfo={lesson}
        nameStyle={css.courseDetailTitle}
        authorStyle={css.buttonLayoutBig}
      />
      <View style={styles.iconView}>
        <CustomIcon iconName="bookmark-o" title="Bookmarks" />
        <CustomIcon iconName="heart-o" title="Add to channels" />
        <CustomIcon iconName="arrow-circle-o-down" title="Download" />
      </View>
      <Divider style={css.divider} />
      <View style={styles.textContainer}>
        <Text style={{ color: theme.SECONDARY_TEXT_COLOR }} numberOfLines={3}>
          {lesson.description}
        </Text>
      </View>
      <Button
        buttonStyle={styles.fullButton}
        title="Related paths and courses"
        titleStyle={styles.fullButtonText}
        icon={<Icon name="window-maximize" type="font-awesome" color={theme.PRIMARY_TEXT_COLOR} />}
      />
      <Button
        buttonStyle={styles.fullButton}
        title="Take a learning check"
        titleStyle={styles.fullButtonText}
        icon={<Icon name="bullseye" type="font-awesome" color={theme.PRIMARY_TEXT_COLOR} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  iconBgr: {
    backgroundColor: theme.RADIUS_BTN_BGR,
  },
  textContainer: {
    flexDirection: "row",
    paddingVertical: theme.SMALL_PADDING,
  },
  fullButton: {
    backgroundColor: theme.BASIC_GREY,
    marginVertical: 5,
  },
  fullButtonText: {
    color: theme.PRIMARY_TEXT_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    marginLeft: 5,
  },
});
export default Introduction;
