import React from "react";
import {
  StatusIcon,
  StatusIconWrapper,
  StatusText,
} from "../../styles/home/Status.styled";
import {
  RoadmapCardContainer,
  RoadmapCardFooter,
} from "../../styles/roadmap/RoadmapBody.styled";
import {
  CommentsCount,
  CommentsIcon,
  CommentsWrapper,
  Title,
} from "../../styles/shared/Shared.styled";
import { Tag } from "../../styles/home/Tags.styled";
import { getTotalComments } from "../../utils/functions";
import commentIcon from "../../assets/shared/icon-comments.svg";
import UpvoteBtnRoadmap from "../shared/UpvoteBtnRoadmap";
import { useNavigate } from "react-router-dom";

const RoadmapCard = ({ feedback }) => {
  const navigate = useNavigate();
  const checkStatusColor = (status) => {
    return status === "planned"
      ? "#F49F85"
      : status === "in-progress"
      ? "#AD1FEA"
      : status === "live" && "#62BCFA";
  };

  const capitaliseBasedOnStatus = (status) => {
    if (status === "in-progress") {
      return status
        .replace("-", " ")
        .split(" ")
        .map(
          (part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
        )
        .join(" ");
    } else {
      return status.charAt(0).toUpperCase() + status.slice(1);
    }
  };

  return (
    <RoadmapCardContainer color={checkStatusColor(feedback.status)}>
      <StatusIconWrapper className="roadmap-status">
        <StatusIcon color={checkStatusColor(feedback.status)}></StatusIcon>
        <StatusText>{capitaliseBasedOnStatus(feedback.status)}</StatusText>
      </StatusIconWrapper>
      <Title onClick={() => navigate(`/feedback/details/${feedback._id}`)}>
        {feedback.title}
      </Title>
      <p className="text">{feedback.description}</p>
      <Tag>{feedback.category}</Tag>
      <RoadmapCardFooter>
        <UpvoteBtnRoadmap feedback={feedback} />
        <CommentsWrapper>
          <CommentsIcon src={commentIcon} />
          <CommentsCount $comments={feedback.comments}>
            {getTotalComments(feedback)}
          </CommentsCount>
        </CommentsWrapper>
      </RoadmapCardFooter>
    </RoadmapCardContainer>
  );
};

export default RoadmapCard;
