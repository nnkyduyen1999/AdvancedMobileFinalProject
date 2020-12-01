import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ScrollView } from "react-native";
import { Button } from "react-native-elements";
import css from "../../../../globals/style";
import constant from "../../../../globals/constant";

export default function ButtonCategory({ nav }) {
  const listTitle = [
    "Angular",
    "JavaScript",
    "C#",
    "Java",
    "Data Analysis",
    "ASP.NET",
    "Node.js",
    "Design Patterns",
    "Python",
    "React",
    ".NET",
    "SQL Server",
  ];

  const renderListTitle = (listTitle) => {
    return listTitle.map((title, index) => (
      <Button
        buttonStyle={css.buttonLayoutBig}
        key={index}
        title={title}
        titleStyle={css.buttonTitle}
        onPress={() => {
          nav.navigate(constant.navigationNames.FullSection, {
            sectionContent: {
              title: title,
              courses: [],
            },
          });
        }}
      />
    ));
  };
  return (
    <ScrollView horizontal={true}>{renderListTitle(listTitle)}</ScrollView>
  );
}
