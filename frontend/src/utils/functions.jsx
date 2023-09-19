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
