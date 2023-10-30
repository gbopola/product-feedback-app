import { styled } from "styled-components";
import {
  FeedbackCardContainer,
  FeedbackCardContent,
  FeedbackCardWrapper,
  FeedbackMobileWrapper,
  FeedbackUpvoteWrapper,
} from "./FeedbackCard";
import { CommentsWrapper, Title } from "../shared/Shared.styled";
import {
  FeedbackEmptyTitle,
  FeedbackEmptyWrapper,
} from "./FeedbackEmpty.styled";

const HomeWrapper = styled.div`
  display: flex;

  width: 1100px;
  margin: 6rem auto;

  ${CommentsWrapper} {
    &.mobile-comment-wrapper {
      display: none;
    }
  }

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

    ${FeedbackUpvoteWrapper} {
      &#mobile-upvote {
        display: flex;
        align-items: center;
        width: 69px;
        height: 34px;
      }
    }

    ${Title} {
      font-size: 13px;
    }

    .text {
      font-size: 13px;
    }

    ${FeedbackCardContent} {
      margin-left: 0;
    }

    ${FeedbackUpvoteWrapper} {
      display: none;
    }

    ${FeedbackEmptyWrapper} {
      margin: 1.25rem 1rem;
      padding: 8rem 2rem;

      p {
        font-size: 13px;
        margin-bottom: 1rem;
      }

      span {
        display: inline;
      }
    }

    ${FeedbackEmptyTitle} {
      font-size: 18px;
    }

    ${FeedbackCardContainer} {
      margin: 1.5rem 1rem;
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
