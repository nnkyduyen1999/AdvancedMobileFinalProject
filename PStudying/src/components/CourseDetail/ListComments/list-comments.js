import React from "react";
import { FlatList } from "react-native";
import css from "../../../globals/style";
import { Divider } from "react-native-elements";
import ListCommentItem from "../ListCommentItem/list-comment-item";
import CommentBox from "../ListCommentItem/list-comment-header";

const ListComments = ({ fullCourse }) => {

  return (
    <FlatList
      style={css.screenContent}
      data={fullCourse.ratings.ratingList}
      renderItem={({item}) => <ListCommentItem item={item}/>}
      ItemSeparatorComponent={() => <Divider style={css.divider} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <CommentBox courseId={fullCourse.id}/>
      }
    />
  );
};

export default ListComments;
