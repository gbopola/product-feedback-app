import React from "react";
import {
  FeedbackCardContent,
  FeedbackCardLeft,
  FeedbackCardWrapper,
} from "../../styles/home/FeedbackCard";
import UpvoteBtn from "../shared/UpvoteBtn";
import {
  CommentsCount,
  CommentsIcon,
  CommentsWrapper,
  Title,
} from "../../styles/shared/Shared.styled";
import commentIcon from "../../assets/shared/icon-comments.svg";
import { Tag } from "../../styles/home/Tags.styled";
import { getTotalComments } from "../../utils/functions";
const DetailsCard = ({ feedback }) => {
  return (
    <FeedbackCardWrapper>
      <FeedbackCardLeft>
        {feedback && feedback.upvotes && <UpvoteBtn feedback={feedback} />}
        <FeedbackCardContent>
          <Title>{feedback.title}</Title>
          <p className="text">{feedback.description}</p>
          <Tag>{feedback.category}</Tag>
        </FeedbackCardContent>
      </FeedbackCardLeft>
      {feedback && feedback.comments && (
        <CommentsWrapper>
          <CommentsIcon src={commentIcon} />
          <CommentsCount $comments={feedback.comments}>
            {getTotalComments(feedback)}
          </CommentsCount>
        </CommentsWrapper>
      )}
    </FeedbackCardWrapper>
  );
};

export default DetailsCard;
