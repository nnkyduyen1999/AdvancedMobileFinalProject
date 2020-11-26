import React, { useContext, useState } from "react";
import { ScrollView, Text, View, StyleSheet, Alert } from "react-native";
import { Divider, Button, Icon } from "react-native-elements";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
import CourseInfo from "../../Common/course-info";
import CustomIcon from "./custom-icon";
import { CourseContext } from "../../../providers/course-provider";
import courseServices from "../../../core/services/course-services";

const Introduction = ({ course }) => {
  const courseContext = useContext(CourseContext);
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
        <CustomIcon iconName="bookmark-o" title="Bookmarks" />
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
      <View style={styles.textContainer}>
        <Text style={{ color: theme.SECONDARY_TEXT_COLOR }} numberOfLines={3}>
          {course.description}
        </Text>
      </View>
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
