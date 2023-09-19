import React, { useEffect } from "react";
import { RoadmapContainer } from "../../styles/roadmap/RoadmapBody.styled";
import { roadmap } from "../../constants/main";
import RoadmapColumn from "./RoadmapColumn";

const status = ["Planned", "In-Progress", "Live"];
const RoadmapBody = ({ feedbacks }) => {
  return (
    <RoadmapContainer>
      {status.map((status) => (
        <RoadmapColumn status={status} feedbacks={feedbacks} />
      ))}
    </RoadmapContainer>
  );
};

export default RoadmapBody;
