import React, { useContext, useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert, TouchableOpacity, Share } from "react-native";
import { Divider, Button, Icon } from "react-native-elements";

import css from "../../../globals/style";
import theme from "../../../globals/theme";
import constant from "../../../globals/constant";
import CourseInfo from "../../Common/course-info";
import CustomIcon from "./custom-icon";
import {
  getCourseLikedStatusService,
  likeCourseService,
  getFavoriteCoursesService,
  subscribeCourseService,
} from "../../../core/services/course-services";
import { CourseContext } from "../../../providers/course-provider";
import { AuthenticationContext } from "../../../providers/authentication-provider";
import {ThemeContext} from "../../../providers/theme-provider";

const Introduction = ({ course, fullCourse, nav }) => {
  const courseContext = useContext(CourseContext);
  const { state } = useContext(AuthenticationContext);
  const [textTouched, setTextTouched] = useState(false);
  const [isPressedLike, setIsPressedLike] = useState(false);
  const [isPressedSubscribe, setIsPressedSubscribe] = useState(false);
  const {themes} = useContext(ThemeContext);

  const convertApi = (apiArr) => {
    return apiArr.map((course) => ({
      id: course.id,
      title: course.courseTitle,
      price: course.coursePrice,
      imageUrl: course.courseImage,
      instructorId: course.instructorId,
      instructorName: course.instructorName,
      soldNumber: course.courseSoldNumber,
      contentPoint: course.courseContentPoint,
      formalityPoint: course.courseFormalityPoint,
      presentationPoint: course.coursePresentationPoint,
      averagePoint: course.courseAveragePoint,
    }));
  };

  const likeCourse = (idCourse, token) => {
    getCourseLikedStatusService(idCourse, token)
      .then((res) => {
        if (res.status === 200 && res.data.likeStatus === false) {
          likeCourseService(course.id, token)
            .then((res) => {
              if (res.status === 200) {
                courseContext.setFavoriteCourses([
                  ...courseContext.favoriteCourses,
                  fullCourse,
                ]);
                Alert.alert("???? th??m kh??a h???c v??o danh s??ch y??u th??ch");
                setIsPressedLike(true);
              } else {
                Alert.alert(res.data.message);
              }
            })
            .catch((error) => {
              throw new Error(error);
            });
        } else {
          likeCourseService(course.id, token)
            .then((res) => {
              if (res.status === 200) {
                getFavoriteCoursesService(token)
                  .then((res) => {
                    if (res.status === 200) {
                      courseContext.setFavoriteCourses(
                        convertApi(res.data.payload)
                      );
                    } else {
                      Alert.alert("L???i khi t???i kh??a h???c");
                    }
                  })
                  .catch((err) => {
                    throw new Error(err);
                  });
                Alert.alert("???? b??? th??ch kh??a h???c");
                setIsPressedLike(false);
              } else {
                Alert.alert(res.data.message);
              }
            })
            .catch((error) => {
              throw new Error(error);
            });
        }
      })
      .catch((error) => {
        Alert.alert(error.response.data.message);
      });
  };

  const subscribeCourse = (idCourse, token) => {
    subscribeCourseService(idCourse, token)
      .then((res) => {
        if (res.status === 200) {
          courseContext.setSubscribeCourses([
            ...courseContext.subscribeCourses,
            fullCourse,
          ]);
          Alert.alert("????ng k?? kh??a h???c th??nh c??ng");
          setIsPressedSubscribe(true);
        } else {
          Alert.alert(res.data.message);
        }
      })
      .catch((err) => {
        if (err.response) {
          Alert.alert(err.response.data.messsage);
        } else {
          Alert.alert("???? c?? l???i x???y ra");
          console.log("err", err);
        }
      });
  };

  const onShare = async (courseName) => {
    try {
      const result = await Share.share({
        message: `Download and join ${courseName} at PStudying on AppStore and GooglePlayStore`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          Alert.alert("Successfully share");
        } else {
          Alert.alert("Oppss. Cannot share now");
        }
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View>
      {fullCourse ? (
        <CourseInfo
          courseInfo={fullCourse}
          nameStyle={css.courseDetailTitle}
          authorStyle={css.buttonLayoutBig}
        />
      ) : (
        <CourseInfo
          courseInfo={course}
          nameStyle={css.courseDetailTitle}
          authorStyle={css.buttonLayoutBig}
        />
      )}
      <View style={styles.iconView}>
        <CustomIcon
          iconName="bookmark"
          title="????ng k??"
          onPressIcon={() => subscribeCourse(fullCourse.id, state.token)}
          isPressed={isPressedSubscribe}
        />
        <CustomIcon
          iconName="heart"
          title="Xem sau"
          onPressIcon={() => likeCourse(fullCourse.id, state.token)}
          isPressed={isPressedLike}
        />

        <CustomIcon
          iconName="share-alt"
          title="Chia s???"
          onPressIcon={() => onShare(course.title)}
        />
      </View>
      <Divider style={css.divider} />
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => setTextTouched(!textTouched)}
      >
        {!textTouched ? (
          <Text style={{ color: theme.SECONDARY_TEXT_COLOR }} numberOfLines={3}>
            {`${fullCourse.description.slice(0, 300)}...`}
          </Text>
        ) : (
          <Text style={{ color: theme.SECONDARY_TEXT_COLOR }}>
            {fullCourse.description}
          </Text>
        )}
      </TouchableOpacity>
      <Button
        buttonStyle={styles.fullButton}
        title="Courses by this instructor"
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
              title: "Courses by this instructor",
              courses: fullCourse.instructor.courses,
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
