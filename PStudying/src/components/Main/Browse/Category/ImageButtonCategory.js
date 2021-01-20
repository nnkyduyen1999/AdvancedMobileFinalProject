import React, {useReducer} from "react";
import { View, ScrollView, Alert } from "react-native";
import ImageButton from "../../../Common/image-button";
import css from "../../../../globals/style";
import constant from "../../../../globals/constant";
import {getRelativeCoursesService} from "../../../../core/services/course-services";

export default function ImageButtonCategory({ nav, category }) {

  const renderListImgButton = (listCat) => {
    return listCat.map((cat, index) => (
      <ImageButton
        key={index}
        txt={cat.name}
        imgType={css.smallImgButton}
        onPressImgBtn={() => {
          getRelativeCoursesService(cat.id, "")
          .then((res) => {
            if (res.status === 200) {
              nav.navigate(constant.navigationNames.FullSection, {
                sectionContent: {
                  title: cat.name,
                  courses: res.data.payload.rows
                },
              });
            } else {
              Alert.alert(res.data.message);
            }
          }).catch(err => {
            console.log(err.response.data);
            Alert.alert(err.response.data.message);
          })
          
        }}
      />
    ));
  };
  return (
    <View>
      <ScrollView horizontal={true}>
        {renderListImgButton(category)}
      </ScrollView>
    </View>
  );
}
