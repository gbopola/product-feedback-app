import { Link } from "react-router-dom";
import styled from "styled-components";

const FormWrapper = styled.form`
  display: block;
  margin: 10rem auto;
  width: 500px;
  background: #fff;
  border-radius: 10px;
  text-align: center;
  padding: 2rem;
  .form-text {
    margin-bottom: 3rem;
    font-size: 14px;
  }
`;

const FormTitle = styled.h2`
  color: #3a4374;
  letter-spacing: -0.25px;
  margin-bottom: 0.25rem;
`;

const FormLabel = styled.label`
  display: block;
  color: #3a4374;
  letter-spacing: -0.25px;
  margin-bottom: 0.25rem;
  font-size: 14px;
  text-align: start;
`;
const FormInput = styled.input`
  width: 100%;
  border: none;
  outline: ${(props) =>
    !props.$error
      ? "none"
      : props.$error && props.$title === "" && "1px solid #D73737"};
  background: #f7f8fd;
  padding: 0.65rem 1.25rem;
  font-size: 15px;
  margin-bottom: ${(props) =>
    !props.$error || props.$title !== "" ? "1.5rem" : ""};
  border-radius: 5px;
  color: #3a4374;
  position: relative;
  &:focus {
    outline: 1px solid #4661e6;
  }
  &.select {
    cursor: pointer;
  }
`;

const FormBtn = styled.button`
  display: block;
  width: 100%;
  cursor: pointer;
  background: #ad1fea;
  border: none;
  color: #fff;
  font-weight: bold;
  padding: 0.65rem;
  border-radius: 10px;
`;

const FormLink = styled.p`
  margin-top: 1rem;
  font-size: 14px;
`;

const FormLinkBold = styled(Link)`
  color: #ad1fea;
  text-decoration: none;
`;

export {
  FormWrapper,
  FormTitle,
  FormLabel,
  FormInput,
  FormBtn,
  FormLink,
  FormLinkBold,
};
