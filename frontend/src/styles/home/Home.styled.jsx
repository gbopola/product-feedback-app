import { styled } from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  width: 1100px;
  margin: 6rem auto;
`;

const HomeColumnOne = styled.div`
  width: 255px;
`;

const HomeColumnTwo = styled.div`
  flex-grow: 1;
  margin-left: 1.5rem;
`;

export { HomeWrapper, HomeColumnOne, HomeColumnTwo };
