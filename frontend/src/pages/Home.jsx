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
import { useEffect, useState } from "react";
import { getFeedbacks, reset } from "../features/feedback/feedbackSlice";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import Navbar from "../components/home/Navbar";
import SideNav from "../components/home/SideNav";

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

  // navbar open state
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getFeedbacks());

    return () => {
      dispatch(reset());
    };
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {isOpen && <SideNav feedbacks={feedbacks} />}
      <HomeWrapper>
        <Navbar isOpen={isOpen} setOpen={setOpen} />
        <HomeColumnOne>
          <Banner />
          <Tags />
          <Status feedbacks={feedbacks} />
        </HomeColumnOne>
        <HomeColumnTwo>
          <TopBar feedbacks={filteredFeedbacks} />
          {feedbacks.length > 0 &&
          feedbacks.filter((feedback) => feedback.status === "suggestion")
            .length === 0 ? (
            <FeedbackEmpty />
          ) : (
            <FeedbackBody feedbacks={filteredFeedbacks} />
          )}
        </HomeColumnTwo>
      </HomeWrapper>
    </motion.div>
  );
};

export default Home;
