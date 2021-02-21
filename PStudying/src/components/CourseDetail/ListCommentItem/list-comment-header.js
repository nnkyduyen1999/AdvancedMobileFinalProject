import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import { Input } from "react-native-elements";
import theme from "../../../globals/theme";
import css from "../../../globals/style";
import Icon from "react-native-vector-icons/FontAwesome";
import { ratingCourseService } from "../../../core/services/course-services";
import { AuthenticationContext } from "../../../providers/authentication-provider";
import {ThemeContext} from "../../../providers/theme-provider";

const ListCommentHeader = ({ courseId, oldList, setNewList }) => {
  const date = new Date().toUTCString();
  const { state } = useContext(AuthenticationContext);
  const [comment, setComment] = useState(``);
  const {themes} = useContext(ThemeContext);

  const postComment = (token, comment, point, courseId, user) => {
    ratingCourseService(comment, courseId, point, token)
    .then(res=> {
      if (res.status === 200) {
        Alert.alert("Đã thêm bình luận.");
        setNewList([
          ...oldList,
          {
            id: res.data.id,
            createdAt: date,
            content: comment,
            user : {
              name: user.name,
              avatar: user.avatar,
            }
          }
        ])
      } else {
        Alert.alert(res.data.message);
      }
    }).catch(err => {
      Alert.alert(err.response.data.message);
    })
  };

  return (
    <Input
      containerStyle={{ marginVertical: theme.LARGE_MARGIN }}
      placeholder="Viết đánh giá"
      labelStyle={css.courseTitle}
      inputStyle={{ color: themes.text }}
      rightIcon={
        <TouchableOpacity
          onPress={() => postComment(state.token, comment, 3, courseId, state.userInfo)}
        >
          <Icon name="paper-plane" size={24} color={theme.BASIC_BLUE} />
        </TouchableOpacity>
      }
      onChangeText={(text) => setComment(text)}
    />
  );
};

export default ListCommentHeader;
