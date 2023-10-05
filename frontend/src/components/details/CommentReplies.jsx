import React, { useState } from "react";
import {
  CommentAvatar,
  CommentContent,
  CommentContentHeader,
  CommentText,
  CommentsWrapper,
  ContentHeaderLeft,
  DetailCommentsWrapper,
  Name,
  RepliesContainer,
  ReplyBtn,
  UserName,
} from "../../styles/details/Details.styled";
import ReplyToComment from "./ReplyToComment";

const CommentReplies = ({ comment }) => {
  const [isReplying, setReply] = useState(false);

  return (
    <RepliesContainer>
      <CommentsWrapper isReply>
        <DetailCommentsWrapper>
          <CommentAvatar avatar={comment.user.avatar} />
          <CommentContent>
            <CommentContentHeader>
              <ContentHeaderLeft>
                <Name>{comment.user.name}</Name>
                <UserName>{comment.user.username}</UserName>
              </ContentHeaderLeft>
              <ReplyBtn onClick={() => setReply(!isReplying)}>Reply</ReplyBtn>
            </CommentContentHeader>
            <CommentText>{comment.comment}</CommentText>
            {isReplying && <ReplyToComment comment={comment} />}
          </CommentContent>
        </DetailCommentsWrapper>
      </CommentsWrapper>
    </RepliesContainer>
  );
};

export default CommentReplies;
