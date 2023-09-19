import React from "react";
import { CommentReply } from "../../styles/details/Details.styled";
import { FormTextArea } from "../../styles/createFeedback/createFeedback.styled";
import { FeedbackBtn } from "../../styles/shared/Shared.styled";

const ReplyToComment = () => {
  return (
    <CommentReply>
      <FormTextArea className="reply-textarea" />
      <FeedbackBtn>Post Reply</FeedbackBtn>
    </CommentReply>
  );
};

export default ReplyToComment;
