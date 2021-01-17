import React, {useState} from "react";
import { FlatList } from "react-native";
import css from "../../../globals/style";
import { Divider } from "react-native-elements";
import ListCommentItem from "../ListCommentItem/list-comment-item";
import CommentBox from "../ListCommentItem/list-comment-header";

const ListComments = ({ fullCourse }) => {
  const [listComment, setListComment] = useState(fullCourse.ratings.ratingList);
  
  return (
    <FlatList
      style={css.screenContent}
      data={listComment}
      renderItem={({item}) => <ListCommentItem item={item}/>}
      ItemSeparatorComponent={() => <Divider style={css.divider} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <CommentBox courseId={fullCourse.id} oldList={listComment} setNewList={setListComment}/>
      }
    />
  );
};

export default ListComments;
