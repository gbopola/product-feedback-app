import React from "react";
import FeedbackCard from "./FeedbackCard";
import { FeedbackCardContainer } from "../../styles/home/FeedbackCard";
import { useSelector } from "react-redux";
const FeedbackBody = ({ feedbacks }) => {
  const { sortBy } = useSelector((state) => state.feedback);
  const sortedFeedbacks = [...feedbacks];

  // Sorting function based on upvotes and comments
  switch (sortBy) {
    case "Most Upvotes":
      sortedFeedbacks.sort((a, b) => b.upvotes.length - a.upvotes.length);

      break;
    case "Least Upvotes":
      sortedFeedbacks.sort((a, b) => a.upvotes.length - b.upvotes.length);
      break;
    case "Most Comments":
      sortedFeedbacks.sort((a, b) => {
        const aTotalComments = a.comments.reduce(
          (total, comment) => total + comment.replies.length + 1,
          0
        );
        const bTotalComments = b.comments.reduce(
          (total, comment) => total + comment.replies.length + 1,
          0
        );
        return bTotalComments - aTotalComments;
      });
      break;
    case "Least Comments":
      sortedFeedbacks.sort((a, b) => {
        const aTotalComments = a.comments.reduce(
          (total, comment) => total + comment.replies.length + 1,
          0
        );
        const bTotalComments = b.comments.reduce(
          (total, comment) => total + comment.replies.length + 1,
          0
        );
        return aTotalComments - bTotalComments;
      });
      break;
    default:
      break;
  }

  return (
    <FeedbackCardContainer>
      {sortedFeedbacks.map((feedback) => (
        <FeedbackCard key={feedback._id} feedback={feedback} />
      ))}
    </FeedbackCardContainer>
  );
};

export default FeedbackBody;
