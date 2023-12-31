import styled from "styled-components";
import { Title } from "../shared/Shared.styled";

const RoadmapContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`;

const RoadmapCardContainer = styled.div`
  background: #fff;
  margin-bottom: 1.5rem;
  border-radius: 5px;
  padding: 1.75rem;
  border-top: ${(props) => `6px solid ${props.color}`};

  &:hover ${Title} {
    color: #4661e6;
    transition: 0.2s;
    cursor: pointer;
  }
`;

const RoadmapHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const RoadmapCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export {
  RoadmapContainer,
  RoadmapCardContainer,
  RoadmapHeader,
  RoadmapCardFooter,
};
