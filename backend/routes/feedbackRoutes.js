const express = require("express");
const router = express.Router();
const {
  createFeedback,
  getAllFeedback,
  getSingleFeedback,
  updateFeedback,
  deleteFeedback,
  addComment,
  upvoteFeedback,
  replyToComment,
} = require("../controllers/feedbackController");
const { protect } = require("../middleware/authMiddleware");

router.route("/create").post(protect, createFeedback);
router.route("/").get(protect, getAllFeedback);
router
  .route("/:id")
  .get(protect, getSingleFeedback)
  .delete(protect, deleteFeedback);
router.route("/update/:id").put(protect, updateFeedback);
router.route("/comment/:id").put(protect, addComment);
router.route("/upvote/:id").put(protect, upvoteFeedback);
router
  .route("/reply/:feedbackId/:commentId/:replyingToUserId")
  .put(protect, replyToComment);

module.exports = router;
