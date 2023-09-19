import styled from "styled-components";

const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: #373f68;
  border-radius: 10px;
`;

const TopBarLeft = styled.div``;

const BackToHomeBtn = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  margin-bottom: 0.25rem;
  display: inline-block;
  &.details {
    color: #647196;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const BackToHomeIcon = styled.img`
  filter: brightness(0) saturate(100%) invert(100%);
  margin-right: 0.75rem;
  &.details-icon {
    filter: none;
  }
`;

const TopBarTitle = styled.h2`
  color: #fff;
`;

export {
  TopBarContainer,
  TopBarLeft,
  BackToHomeBtn,
  BackToHomeIcon,
  TopBarTitle,
};
