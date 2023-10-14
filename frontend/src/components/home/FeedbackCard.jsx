import React from "react";
import {
  FeedbackCardContent,
  FeedbackCardLeft,
  FeedbackCardWrapper,
  FeedbackMobileWrapper,
} from "../../styles/home/FeedbackCard";
import {
  CommentsCount,
  CommentsIcon,
  CommentsWrapper,
  Title,
} from "../../styles/shared/Shared.styled";
import commentIcon from "../../assets/shared/icon-comments.svg";
import { Tag } from "../../styles/home/Tags.styled";
import { Link } from "react-router-dom";
import UpvoteBtn from "../shared/UpvoteBtn";
import { getTotalComments } from "../../utils/functions";
import UpvoteBtnRoadmap from "../shared/UpvoteBtnRoadmap";
const FeedbackCard = ({ feedback }) => {
  return (
    <FeedbackCardWrapper>
      <FeedbackCardLeft>
        <UpvoteBtn feedback={feedback} />
        <FeedbackCardContent>
          <Link to={`/feedback/details/${feedback._id}`}>
            <Title>{feedback.title}</Title>
            <p className="text">{feedback.description}</p>
          </Link>
          <Tag>{feedback.category}</Tag>
        </FeedbackCardContent>
      </FeedbackCardLeft>
      <CommentsWrapper className="mobile-comment-wrapper">
        <CommentsIcon src={commentIcon} />
        <CommentsCount $comments={feedback.comments}>
          {getTotalComments(feedback)}
        </CommentsCount>
      </CommentsWrapper>
      <FeedbackMobileWrapper>
        <UpvoteBtnRoadmap feedback={feedback} />
        <CommentsWrapper style={{ display: "flex", alignItems: "center" }}>
          <CommentsIcon src={commentIcon} />
          <CommentsCount $comments={feedback.comments}>
            {getTotalComments(feedback)}
          </CommentsCount>
        </CommentsWrapper>
      </FeedbackMobileWrapper>
    </FeedbackCardWrapper>
  );
};

export default FeedbackCard;
