// calculate number of comments (including replies)
export const getTotalComments = (data) => {
  let totalComments = 0;

  // Count top-level comments
  totalComments += data.comments.length;

  // Count replies within each comment
  data.comments.forEach((comment) => {
    totalComments += comment.replies.length;
  });

  return totalComments;
};

export const countFeedback = (feedbacks, status) => {
  let count = 0;

  for (const feedback of feedbacks) {
    if (feedback.status === status) {
      count++;
    }
  }

  return count;
};

// trim url whitespace
export const trimAvatarUrl = (url) => {
  return url.replace(/\s/g, "");
};
