import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { Button } from "react-native-elements";
import css from "../../../../globals/style";
import constant from "../../../../globals/constant";
import { ThemeContext } from "../../../../providers/theme-provider";

export default function ButtonCategory({ nav }) {
  const { themes } = useContext(ThemeContext);
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
        buttonStyle={{...css.buttonLayoutBig, backgroundColor: themes.radiusBtn}}
        key={index}
        title={title}
        titleStyle={{...css.buttonTitle, color: themes.text}}
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
