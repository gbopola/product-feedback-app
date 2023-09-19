import React from "react";
import {
  FeedbackEmptyWrapper,
  FeedbackEmptyImg,
  FeedbackEmptyTitle,
} from "../../styles/home/FeedbackEmpty.styled";
import imgEmpty from "../../assets/suggestions/illustration-empty.svg";
import AddFeedback from "../shared/AddFeedbackBtn";
const FeedbackEmpty = () => {
  return (
    <FeedbackEmptyWrapper>
      <FeedbackEmptyImg src={imgEmpty} />
      <FeedbackEmptyTitle>There is no feedback yet.</FeedbackEmptyTitle>
      <p className="btn-space">
        Got a suggestion? Found a bug that needs to be squashed?
        <span className="block"></span> We love hearing about new ideas to
        improve our app.
      </p>
      <AddFeedback />
    </FeedbackEmptyWrapper>
  );
};

export default FeedbackEmpty;
