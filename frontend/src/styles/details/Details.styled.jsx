import styled from "styled-components";
import { Title } from "../shared/Shared.styled";

const shouldApplyBorderBottom = (comments, index, isReply) => {
  return !isReply && index !== comments.length - 1;
};

const CommentsWrapper = styled.div`
  border-bottom: ${(props) =>
    shouldApplyBorderBottom(props.$comments, props.$index, props.$isReply)
      ? "1px solid #e2e4ec"
      : "none"};
  margin-bottom: 1.75rem;
`;
const DetailsBodyWrapper = styled.div`
  background: #fff;
  padding: 1.75rem 1.85rem;
  border-radius: 10px;
`;

const DetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
`;

const DetailCommentsWrapper = styled.div`
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
`;

const CommentAvatar = styled.div`
  background: url(${(props) => props.$avatar}) center center/cover;
  width: 44px;
  height: 40px;
  border-radius: 50%;
`;

const CommentContent = styled.div`
  width: 100%;
  margin-left: 1.5rem;
`;
const CommentHeader = styled.div`
  display: flex;
`;

const CommentContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ContentHeaderLeft = styled.div``;

const Name = styled.p`
  color: #3a4374;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: -0.19px;
`;

const UserName = styled.p`
  font-size: 14px;
`;

const ReplyBtn = styled.a`
  color: #4661e6;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const CommentText = styled.p`
  font-size: 15px;
`;

const CommentReply = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 1.5rem;
  .reply-textarea {
    height: 80px;
    width: 470px;
  }
`;

const CommentReplyContainer = styled.div`
  margin-left: 3rem;
`;

const RepliesContainer = styled.div`
  margin-left: 2rem;
`;

const CommentFormWrapper = styled.div`
  background: #fff;
  padding: 1.75rem 1.85rem;
  margin-top: 1.5rem;
  border-radius: 10px;
  ${Title} {
    margin-bottom: 1.25rem;
  }
  .comment-form-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }
`;

const ReplyingToUsername = styled.span`
  color: #ad1fea;
  font-weight: bold;
`;

export {
  DetailsHeader,
  DetailsBodyWrapper,
  DetailCommentsWrapper,
  CommentsWrapper,
  CommentAvatar,
  CommentHeader,
  CommentContent,
  ContentHeaderLeft,
  CommentContentHeader,
  Name,
  UserName,
  ReplyBtn,
  CommentText,
  CommentReply,
  CommentReplyContainer,
  RepliesContainer,
  CommentFormWrapper,
  ReplyingToUsername,
};
