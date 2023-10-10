import React, { useState } from "react";
import {
  CommentAvatar,
  CommentContent,
  CommentContentHeader,
  CommentReply,
  CommentText,
  CommentsWrapper,
  ContentHeaderLeft,
  DetailCommentsWrapper,
  Name,
  ReplyBtn,
  UserName,
} from "../../styles/details/Details.styled";

import ReplyToComment from "./ReplyToComment";
import CommentReplies from "./CommentReplies";
import { trimAvatarUrl } from "../../utils/functions";
import { useSelector } from "react-redux";
const CommentCard = ({ comment, index }) => {
  const [isReplying, setReply] = useState(false);

  const { feedback } = useSelector((state) => state.feedback);

  return (
    <CommentsWrapper $index={index} $comments={feedback.comments}>
      <DetailCommentsWrapper>
        <CommentAvatar $avatar={trimAvatarUrl(comment.user.avatar)} />
        <CommentContent>
          <CommentContentHeader>
            <ContentHeaderLeft>
              <Name>{comment.user.name}</Name>
              <UserName>@{comment.user.username}</UserName>
            </ContentHeaderLeft>
            <ReplyBtn onClick={() => setReply(!isReplying)}>Reply</ReplyBtn>
          </CommentContentHeader>
          <CommentText>{comment.comment}</CommentText>
          {isReplying && <ReplyToComment comment={comment} />}
        </CommentContent>
      </DetailCommentsWrapper>
      {comment.replies.length > 0 &&
        comment.replies.map((comment) => (
          <CommentReplies comment={comment} key={comment._id} />
        ))}
      {/* <CommentReplies comment={comment} /> */}
    </CommentsWrapper>
  );
};

export default CommentCard;
