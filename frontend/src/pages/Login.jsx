import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FormWrapper,
  FormBtn,
  FormInput,
  FormLabel,
  FormTitle,
  FormLink,
  FormLinkBold,
} from "../styles/auth/Auth.styled";
import { login, reset } from "../features/auth/authSlice";
import { motion } from "framer-motion";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    // navigate to login
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  //   submit form to database
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(formData));
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <FormWrapper onSubmit={handleSubmit}>
        <FormTitle>Sign in to your account</FormTitle>
        <p className="form-text">Log in to gain access to the feeback board</p>
        <FormLabel>Email Address</FormLabel>
        <FormInput
          id="email"
          name="email"
          value={email}
          type="text"
          onChange={onChange}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          id="password"
          name="password"
          value={password}
          type="text"
          onChange={onChange}
        />
        <FormBtn type="submit">Log in</FormBtn>
        <FormLink>
          Don't have an account?{" "}
          <FormLinkBold to="/register">Register</FormLinkBold>
        </FormLink>
      </FormWrapper>
    </motion.div>
  );
};

export default Login;
