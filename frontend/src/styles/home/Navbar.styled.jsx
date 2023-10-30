import { styled } from "styled-components";
import bgImg from "../../assets/suggestions/mobile/background-header.png";
const NavbarWrapper = styled.nav`
  display: none;
  background: url(${bgImg}) center center/cover;
  @media (max-width: 740px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    z-index: 100;
  }
`;
const NavbarLead = styled.p`
  color: #fff;
  opacity: 75%;
  font-size: 13px;
  font-weight: 500;
`;
const NavbarHeader = styled.h3`
  font-size: 15px;
  letter-spacing: -0.19px;
  color: #fff;
`;
const NavbarLeft = styled.div``;
const HamburgerIcon = styled.img`
  cursor: pointer;
`;

export { NavbarWrapper, NavbarLead, NavbarHeader, NavbarLeft, HamburgerIcon };
