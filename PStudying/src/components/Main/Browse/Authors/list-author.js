import React from "react";

import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import SectionCourseTitle from "../../../Common/section-course-title";
import { Avatar } from "react-native-elements";
import css from "../../../../globals/style";
import constant from "../../../../globals/constant";


const ListAuthor = (props) => {
  const listAuthor = [
    {
      name: "Scott Allen",
      avatar:
        "https://avatars3.githubusercontent.com/u/137119?s=460&u=206f55fff1332ff433eac30f4a0a594e00b67812&v=4",
    },
    {
      name: "Joe Eames",
      avatar:
        "https://avatars3.githubusercontent.com/u/137119?s=460&u=206f55fff1332ff433eac30f4a0a594e00b67812&v=4",
    },
    {
      name: "Jim Cooper",
      avatar:
        "https://avatars3.githubusercontent.com/u/137119?s=460&u=206f55fff1332ff433eac30f4a0a594e00b67812&v=4",
    },
    {
      name: "Sammer Buna",
      avatar:
        "https://avatars3.githubusercontent.com/u/137119?s=460&u=206f55fff1332ff433eac30f4a0a594e00b67812&v=4",
    },
    {
      name: "Jim Wilson",
      avatar:
        "https://avatars3.githubusercontent.com/u/137119?s=460&u=206f55fff1332ff433eac30f4a0a594e00b67812&v=4",
    },
  ];
  const onPressAuthor = () => {
    props.nav.navigate(constant.navigationNames.Profile)
  }
  const renderListAuthor = (listAuthor) => {
    return listAuthor.map((author, index) => (
      <TouchableOpacity
        key={index}
        style={{ flex: 1, flexDirection: "column", margin: 10 }}
        onPress={onPressAuthor}
      >
        <Avatar rounded size="large" source={{ uri: author.avatar }} />
        <Text style={css.courseTitle}>{author.name}</Text>
      </TouchableOpacity>
    ));
  };
  return (
    <View>
      <SectionCourseTitle sectionTitle={props.title} />
      <ScrollView horizontal={true}>{renderListAuthor(listAuthor)}</ScrollView>
    </View>
  );
};

export default ListAuthor;
