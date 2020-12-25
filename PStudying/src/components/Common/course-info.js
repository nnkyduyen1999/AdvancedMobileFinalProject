import React, { useEffect, useContext, useReducer } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import css from "../../globals/style";

export default function CourseInfo({ courseInfo, nameStyle, authorStyle }) {
  const subInfo = courseInfo.subtitle ? courseInfo.subtitle : courseInfo.name;
  return (
    <View style={styles.container}>
      <Text style={nameStyle}>{courseInfo.title}</Text>

      {!authorStyle ? (
        <Text style={css.courseContent}>{subInfo}</Text>
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
      >{`Content ${courseInfo.contentPoint}Pt . ${courseInfo.price}đ . Formal ${courseInfo.formalityPoint}Pt`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
});
