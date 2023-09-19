import { Wrapper } from "../styles/shared/Shared.styled";
import RoadmapBody from "../components/roadmap/RoadmapBody";
import TopBar from "../components/roadmap/TopBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllRoadmap } from "../features/feedback/feedbackSlice";
import LoadingSpinner from "../components/shared/LoadingSpinner";
const Roadmap = () => {
  const { feedbacks, isLoading } = useSelector((state) => state.feedback);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRoadmap());
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <Wrapper>
      <TopBar />
      {feedbacks && feedbacks.length > 0 && (
        <RoadmapBody feedbacks={feedbacks} />
      )}
    </Wrapper>
  );
};

export default Roadmap;
