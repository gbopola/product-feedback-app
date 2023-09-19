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
import { Wrapper } from "../styles/shared/Shared.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFeedbacks, reset } from "../features/feedback/feedbackSlice";
import LoadingSpinner from "../components/shared/LoadingSpinner";

const Home = () => {
  const dispatch = useDispatch();

  const { filteredFeedbacks, feedbacks, isLoading, isError, message } =
    useSelector((state) => state.feedback);

  useEffect(() => {
    dispatch(getFeedbacks());
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <Wrapper>
      <HomeWrapper>
        <HomeColumnOne>
          <Banner />
          <Tags />
          <Status />
        </HomeColumnOne>
        <HomeColumnTwo>
          <TopBar feedbacks={filteredFeedbacks} />
          {feedbacks.length === 0 && <FeedbackEmpty />}
          <FeedbackBody feedbacks={filteredFeedbacks} />
        </HomeColumnTwo>
      </HomeWrapper>
    </Wrapper>
  );
};

export default Home;
