import React, { useState } from "react";
import { CommentFormWrapper } from "../../styles/details/Details.styled";
import { FeedbackBtn, Title } from "../../styles/shared/Shared.styled";
import {
  FormErrorMessage,
  FormTextArea,
} from "../../styles/createFeedback/createFeedback.styled";

const AddCommentForm = ({ id }) => {
  const [error, setError] = useState(false);
  // Set the maximum character limit
  const maxCharacterCount = 225;

  // Create a state variable to store the current text in the textarea
  const [text, setText] = useState("");

  // Calculate the number of characters left
  const charactersLeft = maxCharacterCount - text.length;

  // Function to update the text in the textarea
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Function to add comment
  const postComment = () => {
    if (text === "") {
      return setError(true);
    }

    return dispatch(postComment(text, id));
  };

  return (
    <CommentFormWrapper>
      <Title className="comment-form-title">Add Comment</Title>
      <FormTextArea
        $error={error}
        value={text}
        $description={text}
        name="comment"
        onChange={(e) => handleTextChange(e)}
      />
      {text === "" && error && (
        <FormErrorMessage>Can't be empty</FormErrorMessage>
      )}
      <div className="comment-form-footer">
        {/* Display the characters left */}
        <p>{charactersLeft} characters left</p>
        <FeedbackBtn onClick={postComment}>Post Comment</FeedbackBtn>
      </div>
    </CommentFormWrapper>
  );
};

export default AddCommentForm;
