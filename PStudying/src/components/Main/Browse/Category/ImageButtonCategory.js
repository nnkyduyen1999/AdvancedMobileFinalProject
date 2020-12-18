import React from "react";
import { View, ScrollView } from "react-native";
import ImageButton from "../../../Common/image-button";
import css from "../../../../globals/style";
import constant from "../../../../globals/constant";
import courseServices from "../../../../core/services/course-services";

export default function ImageButtonCategory({ nav, category }) {
  
  const renderListImgButton = (listCat) => {
    return listCat.map((cat, index) => (
      <ImageButton
        key={index}
        txt={cat.name}
        imgType={css.smallImgButton}
        onPressImgBtn={() => {
          nav.navigate(constant.navigationNames.FullSection, {
            sectionContent: {
              title: cat.name,
              courses: courseServices.getCatalogCourses(`1234`),
            },
          });
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
