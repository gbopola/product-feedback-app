import React, { useState } from "react";
import { CommentReply } from "../../styles/details/Details.styled";
import { FormTextArea } from "../../styles/createFeedback/createFeedback.styled";
import { FeedbackBtn } from "../../styles/shared/Shared.styled";
import { replyToComment } from "../../features/feedback/feedbackSlice";
import { useDispatch, useSelector } from "react-redux";

const ReplyToComment = ({ comment }) => {
  const [commentText, setComment] = useState("");
  const dispatch = useDispatch();

  const { feedback } = useSelector((state) => state.feedback);

  const addReply = () => {
    dispatch(
      replyToComment({
        comment: commentText,
        feedbackId: feedback._id,
        commentId: comment._id,
        replyingToUserId: comment.user._id,
      })
    );
  };

  return (
    <CommentReply>
      <FormTextArea
        className="reply-textarea"
        value={commentText}
        onChange={(e) => setComment(e.target.value)}
      />
      <FeedbackBtn onClick={addReply}>Post Reply</FeedbackBtn>
    </CommentReply>
  );
};

export default ReplyToComment;
