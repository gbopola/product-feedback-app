import { styled } from "styled-components";

const FeedbackEmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #fff;
  padding: 8rem 0;
  border-radius: 10px;
  margin-top: 1.25rem;
`;

const FeedbackEmptyImg = styled.img`
  margin-bottom: 2.75rem;
`;

const FeedbackEmptyTitle = styled.h1`
  font-size: 24px;
  letter-spacing: -0.33px;
  color: #3a4374;
  margin-bottom: 1rem;
`;

export { FeedbackEmptyWrapper, FeedbackEmptyImg, FeedbackEmptyTitle };
