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
  ReplyingToUsername,
} from "../../styles/details/Details.styled";
import ReplyToComment from "./ReplyToComment";
import { trimAvatarUrl } from "../../utils/functions";

const CommentReplies = ({ comment }) => {
  const [isReplying, setReply] = useState(false);

  return (
    <RepliesContainer>
      <CommentsWrapper $isReply="true">
        <DetailCommentsWrapper>
          <CommentAvatar
            $avatar={comment.user.avatar && trimAvatarUrl(comment.user.avatar)}
          />
          <CommentContent>
            <CommentContentHeader>
              <ContentHeaderLeft>
                <Name>{comment.user.name}</Name>
                <UserName>@{comment.user.username}</UserName>
              </ContentHeaderLeft>
              <ReplyBtn onClick={() => setReply(!isReplying)}>Reply</ReplyBtn>
            </CommentContentHeader>
            <CommentText>
              <ReplyingToUsername>
                @{comment.replyingTo.username}
              </ReplyingToUsername>{" "}
              {comment.comment}
            </CommentText>
            {isReplying && <ReplyToComment comment={comment} />}
          </CommentContent>
        </DetailCommentsWrapper>
      </CommentsWrapper>
    </RepliesContainer>
  );
};

export default CommentReplies;
