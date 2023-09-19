const asyncHandler = require("express-async-handler");
const Feedback = require("../models/feedbackModel");
const User = require("../models/userModel");

// @desc    Create feedback
// @route   POST /api/feedback/create
// @access  Private
const createFeedback = asyncHandler(async (req, res) => {
  const { title, category, description } = req.body;
  if (!title || !category || !description) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const feedback = await Feedback.create({
    user: req.user.id,
    title,

    category: category.toLowerCase(),
    description,
  });

  res.status(200).json(feedback);
});

// @desc    Get all feedback
// @route   GET /api/feedback
// @access  Private
const getAllFeedback = asyncHandler(async (req, res) => {
  const feedback = await Feedback.find({ status: "suggestion" });

  res.status(200).json(feedback);
});

// @desc    Get single feedback
// @route   GET /api/feedback/:id
// @access  Private
const getSingleFeedback = asyncHandler(async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);

  res.status(200).json(feedback);
});

// @desc    Update feedback
// @route   PUT /api/feedback/:id
// @access  Private
const updateFeedback = asyncHandler(async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);

  const { title, status, description, category } = req.body;

  if (!feedback) {
    res.status(400);
    throw new Error("Feedback not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the feedback user
  if (feedback.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedFeedback = await Feedback.findByIdAndUpdate(
    req.params.id,
    {
      title,
      category: category.toLowerCase(),
      status: status.toLowerCase(),
      description,
    },
    {
      new: true,
    }
  );

  res.status(200).json(updatedFeedback);
});

// @desc    Delete feedback
// @route   DELETE /api/feedback/:id
// @access  Private
const deleteFeedback = asyncHandler(async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);

  if (!feedback) {
    res.status(400);
    throw new Error("Feedback not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the feedback user
  if (feedback.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await feedback.remove();

  res.status(200).json({ id: req.params.id });
});

// @desc    Add comments to feedback
// @route   POST /api/feedback/comment/:id
// @access  Private
const addComment = asyncHandler(async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);
  const { content } = req.body;
  if (!feedback) {
    res.status(400);
    throw new Error("Feedback not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the feedback user
  if (feedback.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const newComment = {
    user: req.user.id,
    content,
  };

  const updatedFeedback = await Feedback.findByIdAndUpdate(
    req.params.id,
    {
      $push: { comments: newComment },
    },
    { new: true }
  );

  res.status(200).json(updatedFeedback);
});

// @desc    Upvote feedback
// @route   PUT /api/feedback/upvote/:id
// @access  Private
const upvoteFeedback = asyncHandler(async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);

  if (!feedback) {
    res.status(400);
    throw new Error("Feedback not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the feedback user
  if (feedback.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const userIndex = feedback.upvotes.indexOf(req.user.id);

  if (userIndex === -1) {
    // User hasn't upvoted yet, so add to upvotes
    feedback.upvotes.push(req.user.id);
  } else {
    // User has already upvoted, so remove from upvotes
    feedback.upvotes.splice(userIndex, 1);
  }

  await feedback.save();

  res.status(200).json(feedback);
});
// @desc    Get roadmap
// @route   GET /api/roadmap
// @access  Private
const getAllRoadmap = asyncHandler(async (req, res) => {
  const feedback = await Feedback.find({
    $or: [{ status: "in-progress" }, { status: "live" }, { status: "planned" }],
  });

  res.status(200).json(feedback);
});

// @desc    Reply to comment
// @route   PUT /api/feedback/reply/:feedbackId/:commentId/:replyingToUserId
// @access  Private
const replyToComment = asyncHandler(async (req, res) => {
  const { feedbackId, commentId, replyingToUserId } = req.params;

  const { content } = req.body;

  const feedback = await Feedback.findById(feedbackId);
  if (!feedback) {
    throw new Error("Feedback not found");
  }

  // Adding a reply to an existing comment
  const commentIndex = feedback.comments.findIndex((comment) =>
    comment._id.equals(commentId)
  );
  if (commentIndex === -1) {
    throw new Error("Comment not found");
  }

  feedback.comments[commentIndex].replies.push({
    user: req.user.id,
    content,
    replyingTo: replyingToUserId,
  });

  await feedback.save();

  res.status(200).json(feedback);
});

module.exports = {
  createFeedback,
  getAllFeedback,
  getSingleFeedback,
  updateFeedback,
  deleteFeedback,
  addComment,
  getAllRoadmap,
  upvoteFeedback,
  replyToComment,
};
