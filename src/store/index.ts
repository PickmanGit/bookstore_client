import { configureStore } from "@reduxjs/toolkit";
import bookPreviewReducer from "./reducer/bookPreviewReducer";
import bookReducer  from "./reducer/bookReducer";
import categoryReducer from "./reducer/categoryReducer";
import messageReducer from "./reducer/messageReducer";
import userReducer from "./reducer/userReducer";

const store = configureStore({
  reducer: {
      book: bookReducer,
      category: categoryReducer,
      bookPrev: bookPreviewReducer,
      users: userReducer,
      message:messageReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;