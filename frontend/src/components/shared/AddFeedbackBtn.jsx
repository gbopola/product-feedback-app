import React from "react";
import {
  FeedbackBtn,
  FeedbackBtnIcon,
} from "../../styles/shared/Shared.styled";
import iconPlus from "../../assets/shared/plus-new.svg";
import { useNavigate } from "react-router-dom";

const AddFeedback = () => {
  const navigate = useNavigate();
  return (
    <FeedbackBtn onClick={() => navigate("/feedback/create")}>
      <FeedbackBtnIcon src={iconPlus} />
      Add Feedback
    </FeedbackBtn>
  );
};

export default AddFeedback;
