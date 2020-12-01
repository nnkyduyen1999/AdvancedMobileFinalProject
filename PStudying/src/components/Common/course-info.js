import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import css from "../../globals/style";

export default function CourseInfo({ courseInfo, nameStyle, authorStyle }) {
  return (
    <View style={styles.container}>
      <Text style={nameStyle}>{courseInfo.name}</Text>

      {!authorStyle && (
        <Text style={css.courseContent}>{courseInfo.author}</Text>
      )}
      
      {authorStyle && (
        <View style={{ width: 150, marginTop: 10 }}>
          <Button
            buttonStyle={authorStyle}
            title={courseInfo.author}
            titleStyle={css.buttonTitle}
          />
        </View>
      )}
      <Text
        style={css.courseContent}
      >{`${courseInfo.level} . ${courseInfo.released} . ${courseInfo.duration}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
});
