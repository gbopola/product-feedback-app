import styled from "styled-components";
import { CommentsWrapper, Title } from "../shared/Shared.styled";

const FeedbackCardContainer = styled.div`
  margin-top: 1.5rem;
`;

const FeedbackCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  padding: 1.75rem 1.85rem;
  margin-bottom: 1.25rem;
  cursor: pointer;

  &:hover ${Title} {
    color: #4661e6;
    transition: 0.2s;
  }
`;

const FeedbackMobileWrapper = styled.div`
  @media (max-width: 740px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-top: 1rem;
    ${CommentsWrapper} {
      font-size: 13px;
    }
  }
`;

const FeedbackCardLeft = styled.div`
  display: flex;
`;

const FeedbackUpvoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 53px;
  background: #f2f4fe;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #cfd7ff;
  }
  &.active {
    background: #4661e6;
    color: #fff;
  }
  &.flex {
    flex-direction: row;
    width: 65px;
    height: 40px;
    padding: 0.5rem 1rem;
    justify-content: space-between;
  }
`;

const FeedbackUpvoteIcon = styled.img`
  margin-top: 0.3rem;
  &.active {
    filter: brightness(0) saturate(100%) invert(100%);
  }
`;

const FeedbackUpvoteCount = styled.h3`
  font-size: 13px;
  letter-spacing: -0.18px;
  color: #3a4374;
  margin-top: 0.35rem;
  &.active {
    color: #fff;
  }
`;

const FeedbackCardContent = styled.div`
  margin-left: 2rem;
`;

export {
  FeedbackCardContainer,
  FeedbackCardWrapper,
  FeedbackCardLeft,
  FeedbackUpvoteWrapper,
  FeedbackUpvoteIcon,
  FeedbackUpvoteCount,
  FeedbackCardContent,
  FeedbackMobileWrapper,
};
