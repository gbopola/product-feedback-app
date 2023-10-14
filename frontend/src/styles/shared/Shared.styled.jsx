import styled from "styled-components";

const Wrapper = styled.div`
  width: 1100px;
  margin: 6rem auto;
`;
const FeedbackBtn = styled.button`
  background: #ad1fea;
  padding: 0.75rem 1.5rem;
  color: #f2f4fe;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  @media (max-width: 740px) {
    font-size: 13px;
  }
  &:hover {
    background: #c75af6;
  }
  &.details-header-btn {
    background: #4661e6;

    &:hover {
      background: #7c91f9;
    }
  }
`;

const FeedbackBtnIcon = styled.img`
  margin-right: 0.15rem;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #3a4374;
  letter-spacing: -0.25px;
`;

const DetailsWrapper = styled.div`
  width: 730px;
  margin: 6rem auto;
`;

const CommentsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CommentsIcon = styled.img`
  margin-right: 0.65rem;
`;

const CommentsCount = styled.p`
  letter-spacing: -0.22px;
  color: #3a4374;
  font-weight: bold;
  opacity: ${(props) => (props.$comments.length === 0 ? "50%" : "100%")};
`;

const DropdownWrapper = styled.div`
  border-radius: 10px;
  background: white;
  position: absolute;
  left: 0;
  z-index: 99;
  width: 255px;
  top: 3.75rem;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.3505);
  &.form-select {
    top: 3.5rem;
    width: 100%;
  }
`;

const DropdownItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  transition: 0.2s;
  border-bottom: ${(props) =>
    props.$index !== props.values.length - 1 ? " 1px solid #e1e3ea" : "none"};
  &:hover p {
    color: #ad1fea;
  }
`;

const DropdownIcon = styled.img``;

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .loader {
    width: 100px;
    height: 100px;
    border: 8px solid #fff;
    border-bottom-color: #ad1fea;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export {
  Wrapper,
  FeedbackBtn,
  FeedbackBtnIcon,
  Title,
  DetailsWrapper,
  CommentsWrapper,
  CommentsIcon,
  CommentsCount,
  DropdownWrapper,
  DropdownItem,
  DropdownIcon,
  Spinner,
};
