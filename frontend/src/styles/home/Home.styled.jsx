import { styled } from "styled-components";
import {
  FeedbackCardContainer,
  FeedbackCardContent,
  FeedbackCardWrapper,
  FeedbackUpvoteWrapper,
} from "./FeedbackCard";
import { CommentsWrapper, Title } from "../shared/Shared.styled";

const HomeWrapper = styled.div`
  display: flex;
  width: 1100px;
  margin: 6rem auto;

  ${FeedbackUpvoteWrapper} {
    &#mobile-upvote {
      display: none;
    }
  }
  @media (max-width: 1120px) {
    width: 100%;
    padding: 0 1.5rem;
  }

  @media (max-width: 880px) {
    flex-direction: column;
  }

  @media (max-width: 740px) {
    margin: 0;
    padding: 0;

    ${FeedbackCardContainer} {
      margin: 1.5rem 1rem;
    }

    margin-bottom: 1rem;

    ${Title} {
      font-size: 13px;
    }

    .text {
      font-size: 13px;
    }

    ${FeedbackCardContent} {
      margin-left: 0;
    }

    ${CommentsWrapper} {
      display: none;
    }

    ${FeedbackUpvoteWrapper} {
      &#mobile {
        display: none;
      }

      &#mobile-upvote {
        display: flex;
      }
    }

    ${FeedbackCardWrapper} {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

const HomeColumnOne = styled.div`
  width: 255px;
  @media (max-width: 880px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.75rem;
    align-items: center;
    width: 100%;
    height: 178px;
    margin-bottom: 2rem;
  }

  @media (max-width: 740px) {
    display: none;
  }
`;

const HomeColumnTwo = styled.div`
  flex-grow: 1;
  margin-left: 1.5rem;
  @media (max-width: 880px) {
    margin: 0;
  }
`;

export { HomeWrapper, HomeColumnOne, HomeColumnTwo };
