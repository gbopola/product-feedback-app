import axios from "axios";

const API_URL = "/api/feedback";
const API_ROADMAP = "/api/roadmap";

// Create new feedback
const createFeedback = async (feedbackData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + "/create", feedbackData, config);

  return response.data;
};

// Get feedbacks
const getFeedbacks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Get all roadmap
const getAllRoadmap = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_ROADMAP, config);

  return response.data;
};

// Get single feedback
const getSingleFeedback = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // Get the path of the current URL
  let path = window.location.pathname;

  // Split the path by slashes and get the last segment (ID)
  let segments = path.split("/");
  let id = segments[segments.length - 1];

  const response = await axios.get(API_URL + "/" + id, config);

  return response.data;
};

// Delete feedback
const deleteFeedback = async (feedbackId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + "/" + feedbackId, config);

  return response.data;
};

// upvote feedback
const upvoteFeedback = async (feedbackId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    API_URL + `/upvote/${feedbackId}`,
    {},
    config
  );

  return response.data;
};

// edit feedback
const editFeedback = async ({ feedbackId, feedbackData }, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    API_URL + `/update/${feedbackId}`,
    feedbackData,
    config
  );

  return response.data;
};

// add comment to feedback
const addComment = async ({ comment, feedbackId }, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    API_URL + `/comment/${feedbackId}`,
    { comment },
    config
  );

  return response.data;
};

const feedbackService = {
  createFeedback,
  getFeedbacks,
  deleteFeedback,
  upvoteFeedback,
  getSingleFeedback,
  editFeedback,
  getAllRoadmap,
  addComment,
};

export default feedbackService;
