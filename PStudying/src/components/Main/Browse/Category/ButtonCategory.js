import React from "react";
import { ScrollView } from "react-native";
import {Button} from "react-native-elements";
import css from "../../../../globals/style";
export default function ButtonCategory() {
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
      />
    ));
  };
  return (
    <ScrollView horizontal={true}>{renderListTitle(listTitle)}</ScrollView>
  );
}
