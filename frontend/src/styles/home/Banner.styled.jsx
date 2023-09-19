import { styled } from "styled-components";
import bgImg from "../../assets/suggestions/desktop/background-header.png";
const BannerWrapper = styled.div`
  background-image: url(${bgImg});
  border-radius: 10px;
  color: #fff;
  height: 137px;
  padding: 0 1.5rem;
  padding-top: 4rem;
`;

const BannerTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.25px;
`;

const BannerText = styled.p`
  opacity: 75%;
  color: #fff;
  font-weight: 500;
  font-size: 15px;
`;

export { BannerWrapper, BannerTitle, BannerText };
