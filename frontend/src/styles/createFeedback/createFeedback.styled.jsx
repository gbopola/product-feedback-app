import { styled } from "styled-components";

const CreateFeedbackWrapper = styled.div`
  width: 540px;
  margin: 6rem auto;
`;

const FormWrapper = styled.form`
  background: #fff;
  padding: 3.5rem 3rem;
  border-radius: 10px;
  width: 540px;
  position: relative;
`;

const FormIcon = styled.img`
  position: absolute;
  top: -1.6rem;
  width: 56px;
`;

const FormTitle = styled.h2`
  font-weight: bold;
  color: #3a4374;
  letter-spacing: -0.33px;
  margin-bottom: 2.5rem;
`;

const BackToHomeBtn = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #647196;
  cursor: pointer;
  margin-bottom: 3.75rem;
`;

const BackToHomeIcon = styled.img`
  margin-right: 0.75rem;
`;

const FormLabelTitle = styled.label`
  font-size: 14px;
  letter-spacing: -0.19px;
  font-weight: bold;
  color: #3a4374;
`;
const FormLabel = styled.label`
  display: block;
  color: #647196;
  font-size: 14px;
  margin-bottom: 1rem;
  margin-top: 0.15rem;
`;

const FormTextArea = styled.textarea`
  width: 100%;
  height: 96px;
  border: none;
  outline: ${(props) =>
    !props.$error
      ? "none"
      : props.$error && props.$description === "" && " 1px solid #D73737"};
  background: #f7f8fd;
  padding: 0.65rem 1rem;
  font-size: 15px;
  border-radius: 5px;
  color: #3a4374;
  &:focus {
    outline: 1px solid #4661e6;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.6rem;
  .btn-cancel {
    background: #3a4374;
    margin-right: 1rem;
    &:hover {
      background: #656ea3;
    }
  }

  .btn-delete {
    background: #d73737;

    &:hover {
      background: #e98888;
    }
  }
`;
const FormIconDown = styled.img`
  position: absolute;
  right: 1.25rem;
  top: 1.2rem;
`;

const FormErrorMessage = styled.p`
  font-size: 14px;
  color: #d73737;
  display: block;
  margin-bottom: 1rem;
  margin-top: ${(props) => (props.$firstlabel ? "0.35rem" : "")};
  &.text-start {
    text-align: start;
  }
`;

export {
  CreateFeedbackWrapper,
  FormWrapper,
  FormTitle,
  FormIcon,
  FormLabel,
  FormLabelTitle,
  FormTextArea,
  FormIconDown,
  BackToHomeBtn,
  BackToHomeIcon,
  ButtonGroup,
  FormErrorMessage,
};
