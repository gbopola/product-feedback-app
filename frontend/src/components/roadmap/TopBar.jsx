import React from "react";
import {
  BackToHomeBtn,
  BackToHomeIcon,
  TopBarContainer,
  TopBarLeft,
  TopBarTitle,
} from "../../styles/roadmap/TopBar.styled";
import {
  FeedbackBtn,
  FeedbackBtnIcon,
} from "../../styles/shared/Shared.styled";
import iconPlus from "../../assets/shared/plus-new.svg";
import arrowLeft from "../../assets/shared/icon-arrow-left.svg";
import { useNavigate } from "react-router-dom";
const TopBar = () => {
  const navigate = useNavigate();
  return (
    <TopBarContainer>
      <TopBarLeft>
        <BackToHomeBtn onClick={() => navigate("/")}>
          <BackToHomeIcon src={arrowLeft} />
          Go Back
        </BackToHomeBtn>
        <TopBarTitle>Roadmap</TopBarTitle>
      </TopBarLeft>
      <FeedbackBtn onClick={() => navigate("/feedback/create")}>
        <FeedbackBtnIcon src={iconPlus} />
        Add Feedback
      </FeedbackBtn>
    </TopBarContainer>
  );
};

export default TopBar;
