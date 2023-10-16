import React from "react";
import {
  StatusWrapper,
  StatusTitle,
  StatusHeader,
  StatusLink,
  StatusGroupContainer,
} from "../../styles/home/Status.styled";
import StatusBar from "./StatusBar";
import { countFeedback } from "../../utils/functions";

const Status = ({ feedbacks }) => {
  console.log(feedbacks);
  return (
    <StatusWrapper>
      <StatusHeader>
        <StatusTitle>Roadmap</StatusTitle>
        <StatusLink to="/roadmap">View</StatusLink>
      </StatusHeader>
      <StatusGroupContainer>
        <StatusBar
          title="Planned"
          count={countFeedback(feedbacks, "planned")}
          color="#f49f85"
        />
        <StatusBar
          title="In-Progess"
          count={countFeedback(feedbacks, "in-progress")}
          color="#AD1FEA"
        />
        <StatusBar
          title="Live"
          count={countFeedback(feedbacks, "live")}
          color="#62BCFA"
        />
      </StatusGroupContainer>
    </StatusWrapper>
  );
};

export default Status;
