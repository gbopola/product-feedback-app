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
import avatar from "../../assets/user-images/image-thomas.jpg";
import ReplyToComment from "./ReplyToComment";

const CommentReplies = () => {
  const [isReplying, setReply] = useState(false);
  return (
    <RepliesContainer>
      <CommentsWrapper isReply>
        <DetailCommentsWrapper>
          <CommentAvatar avatar={avatar} />
          <CommentContent>
            <CommentContentHeader>
              <ContentHeaderLeft>
                <Name>Elijah Moss</Name>
                <UserName>@hexagon.bestagon</UserName>
              </ContentHeaderLeft>
              <ReplyBtn onClick={() => setReply(!isReplying)}>Reply</ReplyBtn>
            </CommentContentHeader>
            <CommentText>
              Also, please allow styles to be applied based on system
              preferences. I would love to be able to browse Frontend Mentor in
              the evening after my device’s dark mode turns on without the
              bright background it currently has.
            </CommentText>
            {isReplying && <ReplyToComment />}
          </CommentContent>
        </DetailCommentsWrapper>
      </CommentsWrapper>
    </RepliesContainer>
  );
};

export default CommentReplies;
