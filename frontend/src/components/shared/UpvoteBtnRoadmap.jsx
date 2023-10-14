import React from "react";
import {
  FeedbackUpvoteCount,
  FeedbackUpvoteIcon,
  FeedbackUpvoteWrapper,
} from "../../styles/home/FeedbackCard";
import upvoteIcon from "../../assets/shared/icon-arrow-up.svg";
import { useDispatch, useSelector } from "react-redux";
import { upvoteFeedback } from "../../features/feedback/feedbackSlice";
import { checkIfUpvoted } from "../../utils/functions";
const UpvoteBtnRoadmap = ({ feedback }) => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  return (
    <FeedbackUpvoteWrapper
      className={
        checkIfUpvoted(user._id, feedback.upvotes) ? "active flex" : "flex"
      }
      id="mobile-upvote"
      onClick={() => dispatch(upvoteFeedback(feedback._id))}
    >
      <FeedbackUpvoteIcon
        className={checkIfUpvoted(user._id, feedback.upvotes) && "active"}
        src={upvoteIcon}
      />
      <FeedbackUpvoteCount
        className={checkIfUpvoted(user._id, feedback.upvotes) && "active"}
      >
        {feedback.upvotes.length === 0 ? 0 : feedback.upvotes.length}
      </FeedbackUpvoteCount>
    </FeedbackUpvoteWrapper>
  );
};

export default UpvoteBtnRoadmap;
