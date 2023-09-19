import React from "react";
import {
  StatusContainer,
  StatusCount,
  StatusIcon,
  StatusIconWrapper,
  StatusText,
} from "../../styles/home/Status.styled";

const StatusBar = ({ title, color, count }) => {
  return (
    <StatusContainer>
      <StatusIconWrapper>
        <StatusIcon color={color}></StatusIcon>
        <StatusText>{title}</StatusText>
      </StatusIconWrapper>
      <StatusCount>{count}</StatusCount>
    </StatusContainer>
  );
};

export default StatusBar;
