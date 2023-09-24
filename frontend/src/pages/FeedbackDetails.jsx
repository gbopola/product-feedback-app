import React, { useEffect } from "react";
import { DetailsWrapper, FeedbackBtn } from "../styles/shared/Shared.styled";
import DetailsCard from "../components/details/DetailsCard";
import { useDispatch, useSelector } from "react-redux";
import { getSingleFeedback } from "../features/feedback/feedbackSlice";
import { BackToHomeBtn, BackToHomeIcon } from "../styles/roadmap/TopBar.styled";
import arrowLeft from "../assets/shared/icon-arrow-left.svg";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import { DetailsHeader } from "../styles/details/Details.styled";
import DetailsBody from "../components/details/DetailsBody";
import AddCommentForm from "../components/details/AddCommentForm";
import { motion } from "framer-motion";

const FeedbackDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { feedback, isLoading } = useSelector((state) => state.feedback);
  useEffect(() => {
    dispatch(getSingleFeedback());
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <DetailsWrapper>
        <DetailsHeader>
          <BackToHomeBtn className="details" onClick={() => navigate("/")}>
            <BackToHomeIcon className="details-icon" src={arrowLeft} />
            Go Back
          </BackToHomeBtn>
          <FeedbackBtn
            className="details-header-btn"
            onClick={() => navigate(`/feedback/edit/${feedback._id}`)}
          >
            Edit Feedback
          </FeedbackBtn>
        </DetailsHeader>
        <DetailsCard feedback={feedback} />
        <DetailsBody feedback={feedback} />
        <AddCommentForm id={feedback._id} />
      </DetailsWrapper>
    </motion.div>
  );
};

export default FeedbackDetails;
