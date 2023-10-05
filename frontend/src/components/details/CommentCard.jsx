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
const CommentCard = ({ comment, index }) => {
  const [isReplying, setReply] = useState(false);

  return (
    <CommentsWrapper>
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
        comment.replies.map((comment) => <CommentReplies comment={comment} />)}
      {/* <CommentReplies comment={comment} /> */}
    </CommentsWrapper>
  );
};

export default CommentCard;
