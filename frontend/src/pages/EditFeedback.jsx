import React, { useEffect } from "react";

import { getSingleFeedback, reset } from "../features/feedback/feedbackSlice";
import { useDispatch, useSelector } from "react-redux";
import EditForm from "../components/edit/EditForm";
import LoadingSpinner from "../components/shared/LoadingSpinner";
const EditFeedback = () => {
  const { feedback } = useSelector((state) => state.feedback);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleFeedback());
  }, []);

  return feedback && feedback.title ? (
    <EditForm feedback={feedback} />
  ) : (
    <LoadingSpinner />
  );
};

export default EditFeedback;
