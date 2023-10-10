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
import { register } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FormErrorMessage } from "../styles/createFeedback/createFeedback.styled";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const { name, username, email, password } = formData;

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

    if (isError) {
      toast.error(`${message}`);
    }
  }, [navigate, user, isError, message]);

  //   submit form to database
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      return setError(true);
    }

    dispatch(register(formData));
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
        <FormTitle>Register your account</FormTitle>
        <p className="form-text">
          Sign up to gain access to the feedback board
        </p>
        <FormLabel>Full Name</FormLabel>
        <FormInput
          id="name"
          type="text"
          value={name}
          $title={name}
          $error={error}
          name="name"
          onChange={onChange}
        />
        {name === "" && error && (
          <FormErrorMessage className="text-start" $firstlabel={true}>
            Can't be empty
          </FormErrorMessage>
        )}
        <FormLabel>Username</FormLabel>
        <FormInput
          id="username"
          type="text"
          value={username}
          $title={username}
          $error={error}
          name="username"
          onChange={onChange}
        />
        {username === "" && error && (
          <FormErrorMessage className="text-start" $firstlabel={true}>
            Can't be empty
          </FormErrorMessage>
        )}
        <FormLabel>Email Address</FormLabel>
        <FormInput
          id="email"
          type="text"
          value={email}
          $title={email}
          $error={error}
          name="email"
          onChange={onChange}
        />
        {email === "" && error && (
          <FormErrorMessage className="text-start" $firstlabel={true}>
            Can't be empty
          </FormErrorMessage>
        )}

        <FormLabel>Password</FormLabel>
        <FormInput
          id="password"
          name="password"
          value={password}
          $title={password}
          $error={error}
          type="password"
          onChange={onChange}
        />
        {password === "" && error && (
          <FormErrorMessage className="text-start" $firstlabel={true}>
            Can't be empty
          </FormErrorMessage>
        )}
        <FormBtn type="submit">Sign Up</FormBtn>
        <FormLink>
          Already have an account?{" "}
          <FormLinkBold to="/login">Login</FormLinkBold>
        </FormLink>
      </FormWrapper>
    </motion.div>
  );
};

export default Login;
