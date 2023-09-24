import React, { useState, useEffect } from "react";
import arrowLeft from "../../assets/shared/icon-arrow-left.svg";
import arrowDown from "../../assets/shared/icon-arrow-down.svg";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  BackToHomeBtn,
  BackToHomeIcon,
  ButtonGroup,
  CreateFeedbackWrapper,
  FormErrorMessage,
  FormIcon,
  FormIconDown,
  FormLabel,
  FormLabelTitle,
  FormTextArea,
  FormTitle,
  FormWrapper,
} from "../../styles/createFeedback/createFeedback.styled";
import { FormInput } from "../../styles/auth/Auth.styled";
import FormSelectDropdownCategory from "../shared/FormSelectDropdownCategory";
import FormSelectDropdownStatus from "../shared/FormSelectDropdownStatus";
import { FeedbackBtn } from "../../styles/shared/Shared.styled";
import {
  deleteFeedback,
  editFeedback,
} from "../../features/feedback/feedbackSlice";
import iconEdit from "../../assets/shared/icon-edit-feedback.svg";

const EditForm = ({ feedback }) => {
  const [formData, setFormData] = useState({
    title: feedback.title,
    category: capitalizeBasedOnStatus(feedback.category),
    status: capitalizeBasedOnStatus(feedback.status),
    description: feedback.description,
  });

  const { title, category, status, description } = formData;

  const [error, setError] = useState(false);
  const [isOpenCategory, setOpenCategory] = useState(false);
  const [isOpenStatus, setOpenStatus] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //  set values in state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // edit feedback
  const handleClick = (e) => {
    e.preventDefault();

    if (title === "" || description === "") {
      return setError(true);
    }

    dispatch(
      editFeedback({ feedbackId: feedback._id, feedbackData: formData })
    );
    navigate("/");
  };

  // set status
  const updateStatus = (value) => {
    setFormData({
      ...formData,
      status: value,
    });
  };

  // set category
  const setCategory = (value) => {
    setFormData({
      ...formData,
      category: value,
    });
  };

  // delete feedback
  const deleteSingleFeedback = (e) => {
    e.preventDefault();

    dispatch(deleteFeedback(feedback._id));
    navigate("/");
  };

  // capitalise based on status
  function capitalizeBasedOnStatus(value) {
    switch (value) {
      case "in-progress":
        // Capitalize the first and fourth characters
        return (
          value.charAt(0).toUpperCase() +
          value.charAt(1) +
          value.charAt(2) +
          value.charAt(3).toUpperCase() +
          value.slice(4)
        );
      case "ui":
      case "ux":
        // Capitalize the entire value for "ui" or "ux"
        return value.toUpperCase();
      default:
        // Capitalize only the first character for other cases
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }

  return (
    <CreateFeedbackWrapper>
      <Link to="/">
        <BackToHomeBtn>
          <BackToHomeIcon src={arrowLeft} />
          Go Back
        </BackToHomeBtn>
      </Link>
      <FormWrapper>
        <FormIcon src={iconEdit} />
        <FormTitle>Editing "{feedback.title}"</FormTitle>
        <FormLabelTitle>Feedback Title</FormLabelTitle>
        <FormLabel>Add a short, descriptive headline</FormLabel>
        <FormInput
          type="text"
          value={title}
          $title={title}
          $error={error}
          name="title"
          onChange={(e) => handleChange(e)}
        />
        {title === "" && error ? (
          <FormErrorMessage $firstlabel={true}>Can't be empty</FormErrorMessage>
        ) : null}

        <FormLabelTitle>Category</FormLabelTitle>
        <FormLabel>Choose a category for your feedback</FormLabel>
        <div className="relative">
          <FormInput
            type="text"
            value={category}
            className="select"
            readOnly
            onClick={() => setOpenCategory(!isOpenCategory)}
          />
          <FormIconDown src={arrowDown} />
          {isOpenCategory ? (
            <FormSelectDropdownCategory
              category={category}
              setCategory={setCategory}
            />
          ) : null}
        </div>

        <FormLabelTitle>Update Status</FormLabelTitle>
        <FormLabel>Choose feature state</FormLabel>
        <div className="relative">
          <FormInput
            type="text"
            value={status}
            className="select"
            readOnly
            onClick={() => setOpenStatus(!isOpenStatus)}
          />
          <FormIconDown src={arrowDown} />
          {isOpenStatus ? (
            <FormSelectDropdownStatus updateStatus={updateStatus} />
          ) : null}
        </div>

        <FormLabelTitle>Feedback Detail</FormLabelTitle>
        <FormLabel>
          Include any specific comments on what should be improved, added, etc.
        </FormLabel>
        <FormTextArea
          $error={error}
          value={description}
          $description={description}
          name="description"
          onChange={(e) => handleChange(e)}
        />
        {description === "" && error ? (
          <FormErrorMessage>Can't be empty</FormErrorMessage>
        ) : null}

        <ButtonGroup>
          <FeedbackBtn onClick={deleteSingleFeedback} className="btn-delete">
            Delete
          </FeedbackBtn>
          <div>
            <FeedbackBtn onClick={() => navigate("/")} className="btn-cancel">
              Cancel
            </FeedbackBtn>
            <FeedbackBtn onClick={(e) => handleClick(e)}>
              Save Changes
            </FeedbackBtn>
          </div>
        </ButtonGroup>
      </FormWrapper>
    </CreateFeedbackWrapper>
  );
};

export default EditForm;
