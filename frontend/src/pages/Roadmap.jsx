import RoadmapBody from "../components/roadmap/RoadmapBody";
import TopBar from "../components/roadmap/TopBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllRoadmap } from "../features/feedback/feedbackSlice";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import { motion } from "framer-motion";
import { Wrapper } from "../styles/shared/Shared.styled";
const Roadmap = () => {
  const { feedbacks, isLoading } = useSelector((state) => state.feedback);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRoadmap());
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Wrapper>
        <TopBar />
        {feedbacks && feedbacks.length > 0 && (
          <RoadmapBody feedbacks={feedbacks} />
        )}
      </Wrapper>
    </motion.div>
  );
};

export default Roadmap;
