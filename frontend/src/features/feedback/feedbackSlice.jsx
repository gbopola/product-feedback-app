import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import feedbackService from "./feedbackService";

const initialState = {
  feedback: [],
  feedbacks: [],
  filteredFeedbacks: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  sortBy: "Most Upvotes",
};

// Create new feedback
export const createFeedback = createAsyncThunk(
  "feedbacks/create",
  async (feedbackData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await feedbackService.createFeedback(feedbackData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get feedbacks
export const getFeedbacks = createAsyncThunk(
  "feedbacks/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await feedbackService.getFeedbacks(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get roadmap feedbacks
export const getAllRoadmap = createAsyncThunk(
  "feedbacks/getAllRoadmap",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await feedbackService.getAllRoadmap(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get single feedback
export const getSingleFeedback = createAsyncThunk(
  "feedbacks/getSingle",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await feedbackService.getSingleFeedback(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete feedback
export const deleteFeedback = createAsyncThunk(
  "feedbacks/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await feedbackService.deleteFeedback(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Upvote feedback
export const upvoteFeedback = createAsyncThunk(
  "feedbacks/upvote",
  async (feedbackId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await feedbackService.upvoteFeedback(feedbackId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// edit feedback
export const editFeedback = createAsyncThunk(
  "feedbacks/edit",
  async ({ feedbackId, feedbackData }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await feedbackService.editFeedback(
        { feedbackId, feedbackData },
        token
      );
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// add comment to feedback
export const addComment = createAsyncThunk(
  "feedbacks/addComment",
  async ({ comment, feedbackId }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await feedbackService.addComment({ comment, feedbackId }, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// reply to comment
export const replyToComment = createAsyncThunk(
  "feedbacks/replyToComment",
  async ({ comment, feedbackId, commentId, replyingToUserId }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await feedbackService.replyToComment(
        { comment, feedbackId, commentId, replyingToUserId },
        token
      );
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    changeSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    sortByCategory: (state, action) => {
      state.filteredFeedbacks =
        action.payload === "all"
          ? state.feedbacks
          : state.feedbacks.filter(
              (feedback) => feedback.category === action.payload
            );
    },
    reset: () => initialState, // Reset the state to initial state
  },
  extraReducers: (builder) => {
    builder
      .addCase(createFeedback.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createFeedback.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.filteredFeedbacks.push(action.payload);
      })
      .addCase(createFeedback.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getFeedbacks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeedbacks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.feedbacks = action.payload;
        state.filteredFeedbacks = action.payload;
      })
      .addCase(getFeedbacks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllRoadmap.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllRoadmap.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.feedbacks = action.payload;
      })
      .addCase(getAllRoadmap.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(editFeedback.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editFeedback.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.filteredFeedbacks = state.feedbacks.map((feedback) =>
          feedback._id === action.payload._id ? action.payload : feedback
        );
      })
      .addCase(editFeedback.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.feedback = action.payload;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(replyToComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(replyToComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.feedback = action.payload;
      })
      .addCase(replyToComment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getSingleFeedback.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleFeedback.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.feedback = action.payload;
      })
      .addCase(getSingleFeedback.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteFeedback.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteFeedback.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.filteredFeedbacks = state.filteredFeedbacks.filter(
          (feedback) => feedback._id !== action.payload.id
        );
        state.feedbacks = state.feedbacks.filter(
          (feedback) => feedback._id !== action.payload.id
        );
      })
      .addCase(deleteFeedback.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(upvoteFeedback.pending, (state) => {})
      .addCase(upvoteFeedback.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.feedbacks = state.feedbacks.map((feedback) =>
          feedback._id === action.payload._id ? action.payload : feedback
        );
        state.filteredFeedbacks = state.filteredFeedbacks.map((feedback) =>
          feedback._id === action.payload._id ? action.payload : feedback
        );
        state.feedback = action.payload;
      })
      .addCase(upvoteFeedback.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { changeSortBy, sortByCategory, reset } = feedbackSlice.actions;
export default feedbackSlice.reducer;
