import React from "react";
import {
  StatusWrapper,
  StatusTitle,
  StatusHeader,
  StatusLink,
  StatusGroupContainer,
} from "../../styles/home/Status.styled";
import StatusBar from "./StatusBar";

const Status = () => {
  return (
    <StatusWrapper>
      <StatusHeader>
        <StatusTitle>Roadmap</StatusTitle>
        <StatusLink to="/roadmap">View</StatusLink>
      </StatusHeader>
      <StatusGroupContainer>
        <StatusBar title="Planned" count={0} color="#f49f85" />
        <StatusBar title="In-Progess" count={0} color="#AD1FEA" />
        <StatusBar title="Live" count={0} color="#62BCFA" />
      </StatusGroupContainer>
    </StatusWrapper>
  );
};

export default Status;
