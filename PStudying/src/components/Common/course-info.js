import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import css from "../../globals/style";

export default function CourseInfo({ courseInfo, nameStyle, authorStyle }) {
  return (
    <View style={styles.container}>
      <Text style={nameStyle}>{courseInfo.title}</Text>

      {!authorStyle && (
        <Text style={css.courseContent}>{courseInfo.subtitle}</Text>
      )}
      
      {authorStyle && (
        <View style={{ width: 150, marginTop: 10 }}>
          <Button
            buttonStyle={authorStyle}
            title={courseInfo.subtitle}
            titleStyle={css.buttonTitle}
          />
        </View>
      )}
      <Text
        style={css.courseContent}
      >{`${courseInfo.contentPoint} . ${courseInfo.status} . ${courseInfo.totalHours}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
});
