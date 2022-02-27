import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IAuth = {
	isAuthenticated: false,
	loading: false,
	user: {
		id: "",
		email: "",
		username: "",
	},
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loading(state) {
			state.loading = true;
		},
		setCurrentuser(state, action: PayloadAction<IUser>) {
			state.user = action.payload;
			state.loading = false;
			state.isAuthenticated = true;
		},
		userRejected(state) {
			state.loading = false;
		},
		logOut() {
			return initialState;
		},
	},
});

export const { loading, setCurrentuser, userRejected, logOut } =
	authSlice.actions;

export default authSlice.reducer;
