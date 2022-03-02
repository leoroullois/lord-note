import { RootState } from "./store";

export const selectNotes = (state: RootState): INote[] => state.notes.data;
export const selectActiveNote = (state: RootState): INote | undefined =>
	state.notes.data.find((elt) => elt.active);

// * Auth
export const selectAuth = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => state.auth.user;
