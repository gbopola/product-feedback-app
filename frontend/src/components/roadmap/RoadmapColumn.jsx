import React from "react";
import { roadmap } from "../../constants/main";
import { Title } from "../../styles/shared/Shared.styled";
import RoadmapCard from "./RoadmapCard";
import { RoadmapHeader } from "../../styles/roadmap/RoadmapBody.styled";
import { countFeedback } from "../../utils/functions";
const RoadmapColumn = ({ status, feedbacks }) => {
  return (
    <div>
      <RoadmapHeader>
        <Title>
          {status} ({countFeedback(feedbacks, status.toLowerCase())})
        </Title>
        {roadmap.map(
          (data) =>
            data.title === status.toLowerCase() && (
              <p key={data.title} className="text">
                {data.text}
              </p>
            )
        )}
      </RoadmapHeader>
      {feedbacks.map(
        (data) =>
          data.status === status.toLowerCase() && (
            <RoadmapCard feedback={data} key={data._id} />
          )
      )}
    </div>
  );
};

export default RoadmapColumn;
