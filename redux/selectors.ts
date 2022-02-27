import { RootState } from "./store";

export const selectNotes = (state: RootState) => state.fetchnotes;

// * Auth
export const selectAuth = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => state.auth.user;
