import React from "react";
import {
  FeedbackUpvoteCount,
  FeedbackUpvoteIcon,
  FeedbackUpvoteWrapper,
} from "../../styles/home/FeedbackCard";
import upvoteIcon from "../../assets/shared/icon-arrow-up.svg";
import { useDispatch } from "react-redux";
import { upvoteFeedback } from "../../features/feedback/feedbackSlice";
const UpvoteBtnRoadmap = ({ feedback }) => {
  const dispatch = useDispatch();
  return (
    <FeedbackUpvoteWrapper
      className={feedback.upvotes.length !== 0 ? "active flex" : "flex"}
      onClick={() => dispatch(upvoteFeedback(feedback._id))}
    >
      <FeedbackUpvoteIcon
        className={feedback.upvotes.length !== 0 && "active"}
        src={upvoteIcon}
      />
      <FeedbackUpvoteCount
        className={feedback.upvotes.length !== 0 && "active"}
      >
        {feedback.upvotes.length === 0 ? 0 : feedback.upvotes.length}
      </FeedbackUpvoteCount>
    </FeedbackUpvoteWrapper>
  );
};

export default UpvoteBtnRoadmap;
