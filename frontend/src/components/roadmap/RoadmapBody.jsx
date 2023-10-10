import React from "react";
import { RoadmapContainer } from "../../styles/roadmap/RoadmapBody.styled";

import RoadmapColumn from "./RoadmapColumn";

const status = ["Planned", "In-Progress", "Live"];
const RoadmapBody = ({ feedbacks }) => {
  return (
    <RoadmapContainer>
      {status.map((status) => (
        <RoadmapColumn status={status} feedbacks={feedbacks} key={status} />
      ))}
    </RoadmapContainer>
  );
};

export default RoadmapBody;
