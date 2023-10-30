import React from "react";
import { SideNavWrapper } from "../../styles/home/SideNav.styled";
import Status from "./Status";
import Tags from "./Tags";

const SideNav = ({ feedbacks }) => {
  return (
    <SideNavWrapper>
      <Tags />
      <Status feedbacks={feedbacks} />
    </SideNavWrapper>
  );
};

export default SideNav;
