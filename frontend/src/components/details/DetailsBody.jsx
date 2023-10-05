import React from "react";
import { DetailsBodyWrapper } from "../../styles/details/Details.styled";
import { Title } from "../../styles/shared/Shared.styled";
import { useSelector } from "react-redux";
import CommentCard from "./CommentCard";
import { getTotalComments } from "../../utils/functions";

const DetailsBody = ({ feedback }) => {
  console.log(feedback.comments);
  return (
    feedback &&
    feedback.comments &&
    feedback.comments.length > 0 && (
      <DetailsBodyWrapper>
        <Title>
          {getTotalComments(feedback)} Comment
          {feedback.comments.length > 1 && "s"}
        </Title>
        {feedback.comments.map((comment) => (
          <CommentCard comment={comment} />
        ))}
      </DetailsBodyWrapper>
    )
  );
};

export default DetailsBody;
