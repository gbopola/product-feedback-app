import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StatusWrapper = styled.div`
  padding: 1.25rem 1.5rem 1rem 1.5rem;
  background: #fff;
  margin-top: 1.5rem;
  border-radius: 10px;
`;

const StatusHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StatusTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #3a4374;
  letter-spacing: -0.25px;
`;

const StatusLink = styled(Link)`
  font-size: 13px;
  font-weight: 600;
  color: #4661e6;
  opacity: 25%;
  transition: 0.2s;
  text-decoration: underline;
  &:hover {
    color: #8397f8;
    opacity: 100%;
  }
`;

const StatusGroupContainer = styled.div`
  margin-top: 1.25rem;
`;

const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const StatusIconWrapper = styled.div`
  display: flex;
  align-items: center;
  &.roadmap-status {
    margin-bottom: 0.5rem;
  }
`;

const StatusIcon = styled.div`
  width: 8px;
  height: 8px;
  background: ${(props) => props.color};
  border-radius: 50%;
`;

const StatusText = styled.p`
  margin-left: 0.75rem;
`;

const StatusCount = styled.p`
  font-weight: bold;
`;

export {
  StatusWrapper,
  StatusHeader,
  StatusTitle,
  StatusLink,
  StatusContainer,
  StatusGroupContainer,
  StatusIconWrapper,
  StatusIcon,
  StatusText,
  StatusCount,
};
