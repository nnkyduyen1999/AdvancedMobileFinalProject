import React from "react";
import { View, Text } from "react-native";
import { Input } from "react-native-elements";
import theme from "../../../globals/theme";
import css from "../../../globals/style";

const ListCommentHeader = () => {
  return (
    <Input
      containerStyle={{ marginVertical: theme.LARGE_MARGIN }}
      placeholder="Viết đánh giá"
    />
  );
};

export default ListCommentHeader;
