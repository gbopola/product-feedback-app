import React from "react";
import {
  NavbarWrapper,
  NavbarLeft,
  NavbarHeader,
  NavbarLead,
  HamburgerIcon,
} from "../../styles/home/Navbar.styled";
import hamburgerIcon from "../../assets/shared/mobile/icon-hamburger.svg";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarLeft>
        <NavbarHeader>Frontend Mentor</NavbarHeader>
        <NavbarLead>Feedback Board</NavbarLead>
      </NavbarLeft>
      <HamburgerIcon src={hamburgerIcon} />
    </NavbarWrapper>
  );
};

export default Navbar;
