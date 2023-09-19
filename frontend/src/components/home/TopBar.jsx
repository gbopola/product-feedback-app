import React, { useState } from "react";
import {
  TopBarContainer,
  TopBarLeft,
  TopBarImg,
  TopBarCount,
  TopBarSort,
  TopBarIcon,
} from "../../styles/home/TopBar.styled";
import iconSuggestion from "../../assets/suggestions/icon-suggestions.svg";
import iconArrowDown from "../../assets/shared/icon-arrow-down.svg";
import SelectDropdown from "../shared/SelectDropdown";
import { useSelector } from "react-redux";
import AddFeedbackBtn from "../shared/AddFeedbackBtn";
const TopBar = ({ feedbacks }) => {
  const { sortBy } = useSelector((state) => state.feedback);

  const [isModal, setModal] = useState(false);

  return (
    <TopBarContainer>
      <TopBarLeft>
        <TopBarImg src={iconSuggestion} />
        <TopBarCount>
          {feedbacks.length} Suggestion{feedbacks.length > 1 ? "s" : ""}
        </TopBarCount>
        <div className="relative">
          <TopBarSort onClick={() => setModal(!isModal)}>
            Sort by : <span>{sortBy}</span>
            <TopBarIcon src={iconArrowDown} />
          </TopBarSort>
          {isModal ? <SelectDropdown /> : null}
        </div>
      </TopBarLeft>
      <AddFeedbackBtn />
    </TopBarContainer>
  );
};

export default TopBar;
