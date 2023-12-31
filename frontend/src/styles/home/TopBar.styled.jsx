import { styled } from "styled-components";

const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem 0.85rem 0.85rem 1.25rem;
  background: #373f68;
  border-radius: 10px;
  @media (max-width: 880px) {
    margin: 0;
  }

  @media (max-width: 740px) {
    border-radius: 0;
  }
`;

const TopBarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const TopBarImg = styled.img`
  @media (max-width: 740px) {
    display: none;
  }
`;

const TopBarCount = styled.p`
  font-weight: bold;
  font-size: 18px;
  letter-spacing: -0.25px;
  color: #fff;
  margin-left: 1rem;
  margin-right: 2.5rem;

  @media (max-width: 740px) {
    display: none;
  }
`;

const TopBarSort = styled.p`
  font-size: 14px;
  color: #f2f4fe;
  opacity: 75%;
  cursor: pointer;
  @media (max-width: 740px) {
    font-size: 13px;
  }
`;

const TopBarIcon = styled.img`
  filter: brightness(0) saturate(100%) invert(100%);
  margin-left: 0.5rem;
`;

export {
  TopBarContainer,
  TopBarLeft,
  TopBarImg,
  TopBarCount,
  TopBarSort,
  TopBarIcon,
};
