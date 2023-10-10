import { styled } from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  width: 1100px;
  margin: 6rem auto;
  @media (max-width: 1110px) {
    width: 100%;
    padding: 0 1.5rem;
  }

  @media (max-width: 870px) {
    flex-direction: column;
  }
`;

const HomeColumnOne = styled.div`
  width: 255px;
  @media (max-width: 870px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.75rem;
    align-items: center;
    width: 100%;
    height: 178px;
    margin-bottom: 2rem;
  }

  @media (max-width: 740px) {
    display: none;
  }
`;

const HomeColumnTwo = styled.div`
  flex-grow: 1;
  margin-left: 1.5rem;
  @media (max-width: 870px) {
    margin: 0;
  }
`;

export { HomeWrapper, HomeColumnOne, HomeColumnTwo };
