import React, { useState } from "react";
import {
  NavbarWrapper,
  NavbarLeft,
  NavbarHeader,
  NavbarLead,
  HamburgerIcon,
} from "../../styles/home/Navbar.styled";
import hamburgerIcon from "../../assets/shared/mobile/icon-hamburger.svg";

const Navbar = ({ isOpen, setOpen }) => {
  const setNavOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <NavbarWrapper>
      <NavbarLeft>
        <NavbarHeader>Frontend Mentor</NavbarHeader>
        <NavbarLead>Feedback Board</NavbarLead>
      </NavbarLeft>
      <HamburgerIcon src={hamburgerIcon} onClick={() => setNavOpen(!isOpen)} />
    </NavbarWrapper>
  );
};

export default Navbar;
