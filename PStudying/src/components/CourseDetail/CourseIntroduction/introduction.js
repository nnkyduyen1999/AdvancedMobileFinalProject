import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { Divider, Button, Icon } from "react-native-elements";

import css from "../../../globals/style";
import theme from "../../../globals/theme";
import constant from "../../../globals/constant";
import CourseInfo from "../../Common/course-info";
import CustomIcon from "./custom-icon";
import { CourseContext } from "../../../providers/course-provider";
import courseServices from "../../../core/services/course-services";

const Introduction = ({ course, nav }) => {
  const courseContext = useContext(CourseContext);
  const [textTouched, setTextTouched] = useState(false);
  const [status, setStatus] = useState();

  const onPressFavor = (status) => {
    if (status && status.statusCode === 200) {
      Alert.alert(status.message);
    } else {
      return <></>;
    }
  };
  return (
    <View>
      <CourseInfo
        courseInfo={course}
        nameStyle={css.courseDetailTitle}
        authorStyle={css.buttonLayoutBig}
      />
      <View style={styles.iconView}>
        {onPressFavor(status)}
        <CustomIcon
          iconName="bookmark-o"
          title="Bookmarks"
          onPressIcon={() => {
            courseContext.setBookmark([...courseContext.bookmark, course]);
            Alert.alert("Added course to bookmark");
          }}
        />
        <CustomIcon
          iconName="heart-o"
          title="Add to channels"
          onPressIcon={() => {
            setStatus(courseServices.likeCourse(course.id));
            courseContext.setFavoriteCourses([
              ...courseContext.favoriteCourses,
              course,
            ]);
          }}
        />
        <CustomIcon iconName="arrow-circle-o-down" title="Download" />
      </View>
      <Divider style={css.divider} />
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => setTextTouched(!textTouched)}
      >
        {!textTouched && (
          <Text style={{ color: theme.SECONDARY_TEXT_COLOR }} numberOfLines={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        )}
        {textTouched && (
          <Text style={{ color: theme.SECONDARY_TEXT_COLOR }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        )}
      </TouchableOpacity>
      <Button
        buttonStyle={styles.fullButton}
        title="Related paths and courses"
        titleStyle={styles.fullButtonText}
        icon={
          <Icon
            name="window-maximize"
            type="font-awesome"
            color={theme.PRIMARY_TEXT_COLOR}
          />
        }
        onPress={() => {
          nav.navigate(constant.navigationNames.FullSection, {
            sectionContent: {
              title: "Related courses",
              courses: courseContext.favoriteCourses,
            },
          });
        }}
      />
      <Button
        buttonStyle={styles.fullButton}
        title="Take a learning check"
        titleStyle={styles.fullButtonText}
        icon={
          <Icon
            name="bullseye"
            type="font-awesome"
            color={theme.PRIMARY_TEXT_COLOR}
          />
        }
        onPress={() => {
          nav.navigate(constant.navigationNames.FullSection, {
            sectionContent: {
              title: "Exercises",
              courses: courseContext.favoriteCourses,
            },
          });
        }}
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
