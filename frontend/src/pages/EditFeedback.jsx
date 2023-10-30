import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { getSingleFeedback } from "../features/feedback/feedbackSlice";
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <EditForm feedback={feedback} />
    </motion.div>
  ) : (
    <LoadingSpinner />
  );
};

export default EditFeedback;
