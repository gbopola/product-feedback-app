import React from "react";
import { DetailsBodyWrapper } from "../../styles/details/Details.styled";
import { Title } from "../../styles/shared/Shared.styled";
import { useSelector } from "react-redux";
import CommentCard from "./CommentCard";

const DetailsBody = ({ feedback }) => {
  return (
    feedback &&
    feedback.comments &&
    feedback.comments.length > 0 && (
      <DetailsBodyWrapper>
        <Title>
          {feedback.comments.length} Comment
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
