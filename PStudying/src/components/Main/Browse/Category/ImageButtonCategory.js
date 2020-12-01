import React from "react";
import { View, ScrollView } from "react-native";
import ImageButton from "../../../Common/image-button";
import css from "../../../../globals/style";
import constant from "../../../../globals/constant";
import courseServices from "../../../../core/services/course-services";

export default function ImageButtonCategory({ nav }) {
  const listTitle = [
    "Conferences",
    "Certifications",
    "Software Development",
    "IT OPS",
    "Information and Cyber Security",
  ];
  const listTitle2 = [
    "Data Professional",
    "Business Professional",
    "Creative Professional",
    "Manufacturing and Design",
    "Architecture and Construction",
  ];
  const renderListImgButton = (listTitle) => {
    return listTitle.map((title, index) => (
      <ImageButton
        key={index}
        txt={title}
        imgType={css.smallImgButton}
        onPressImgBtn={() => {
          nav.navigate(constant.navigationNames.FullSection, {
            sectionContent: {
              title: title,
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
        {renderListImgButton(listTitle)}
      </ScrollView>
      <ScrollView horizontal={true}>
        {renderListImgButton(listTitle2)}
      </ScrollView>
    </View>
  );
}
