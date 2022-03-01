// ! Config
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
// ! Reducers
import notes from "./slices/notesSlice";
import auth from "./slices/authSlice";
const middleware = [thunk];

const makeStore = () =>
	configureStore({
		reducer: {
			notes,
			auth,
		},
		middleware,
	});

const store = makeStore();
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
