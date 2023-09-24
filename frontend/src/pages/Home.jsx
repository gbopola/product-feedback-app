import { motion } from "framer-motion";
import {
  HomeColumnOne,
  HomeColumnTwo,
  HomeWrapper,
} from "../styles/home/Home.styled";
import Banner from "../components/home/Banner";
import Tags from "../components/home/Tags";
import Status from "../components/home/Status";
import TopBar from "../components/home/TopBar";
import FeedbackEmpty from "../components/home/FeedbackEmpty";
import FeedbackBody from "../components/home/FeedbackBody";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllRoadmap,
  getFeedbacks,
  reset,
} from "../features/feedback/feedbackSlice";
import LoadingSpinner from "../components/shared/LoadingSpinner";

const Home = () => {
  const dispatch = useDispatch();

  const {
    filteredFeedbacks,
    feedbacks,
    roadmapFeedbacks,
    isLoading,
    isError,
    message,
  } = useSelector((state) => state.feedback);

  useEffect(() => {
    dispatch(getFeedbacks());
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <HomeWrapper>
        <HomeColumnOne>
          <Banner />
          <Tags />
          <Status feedbacks={feedbacks} />
        </HomeColumnOne>
        <HomeColumnTwo>
          <TopBar feedbacks={filteredFeedbacks} />
          {feedbacks.length === 0 && <FeedbackEmpty />}
          <FeedbackBody feedbacks={filteredFeedbacks} />
        </HomeColumnTwo>
      </HomeWrapper>
    </motion.div>
  );
};

export default Home;
