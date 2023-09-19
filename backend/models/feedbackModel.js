const mongoose = require("mongoose");
const feedbackSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
    category: {
      type: String,
      required: [true, "Please add a category"],
    },
    upvotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    status: {
      type: String,
      default: "suggestion",
    },
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "User",
        },
        content: {
          type: String,
          required: true,
        },
        replies: [
          {
            user: {
              type: mongoose.Schema.Types.ObjectId,
              required: true,
              ref: "User",
            },
            content: {
              type: String,
              required: [true, "Please add a comment"],
            },
            replyingTo: {
              type: String,
              ref: "User",
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Feedback", feedbackSchema);
