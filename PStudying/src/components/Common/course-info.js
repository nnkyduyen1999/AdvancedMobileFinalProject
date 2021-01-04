import React, { useState, useEffect} from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Rating } from "react-native-elements";
import css from "../../globals/style";
import theme from "../../globals/theme";

export default function CourseInfo({ courseInfo, nameStyle, authorStyle }) {
  const price = courseInfo.price ? courseInfo.price : 0;
  const rating = courseInfo.averagePoint
    ? courseInfo.averagePoint
    : (courseInfo.contentPoint ? courseInfo.contentPoint : 3.2);
  return (
    <View style={styles.container}>
      <Text style={nameStyle}>{courseInfo.title}</Text>

      {!authorStyle ? (
        <Rating imageSize={12} readonly startingValue={rating} type="custom" />
      ) : (
        <View style={{ width: 150, marginTop: 10 }}>
          <Button
            buttonStyle={authorStyle}
            title={courseInfo.instructor.name}
            titleStyle={css.buttonTitle}
          />
        </View>
      )}

<Text
          style={css.courseContent}
        >{`Rating ${rating}P . Price ${price}đ`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
});
