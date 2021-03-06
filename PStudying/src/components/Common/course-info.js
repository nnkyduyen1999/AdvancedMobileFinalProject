import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Rating } from "react-native-elements";
import css from "../../globals/style";
import theme from "../../globals/theme";
import { ThemeContext } from "../../providers/theme-provider";

export default function CourseInfo({
  courseInfo,
  nameStyle,
  authorStyle,
  isProcessing,
}) {
  const { themes } = useContext(ThemeContext);

  const price = courseInfo.price ? courseInfo.price : 0;
  const rating = courseInfo.averagePoint
    ? courseInfo.averagePoint
    : courseInfo.contentPoint
    ? courseInfo.contentPoint
    : 3.2;
  return (
    <View style={styles.container}>
      <Text style={{ ...nameStyle, color: themes.text }}>
        {courseInfo.title}
      </Text>

      {!authorStyle ? (
        <Rating
          imageSize={12}
          readonly
          startingValue={rating}
          type="custom"
          tintColor={themes.courseBgr}
        />
      ) : (
        <View style={{ width: 150, marginTop: 10 }}>
          <Button
            buttonStyle={{...authorStyle, backgroundColor: themes.radiusBtn}}
            title={courseInfo.instructor.name}
            titleStyle={{...css.buttonTitle, color: themes.text}}
          />
        </View>
      )}

      {isProcessing ? (
        <Text
          style={css.courseContent}
        >{`Process ${courseInfo.process} / ${courseInfo.total}`}</Text>
      ) : (
        <Text
          style={css.courseContent}
        >{`Rating ${rating}P . Price ${price}đ`}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
});
