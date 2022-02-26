import { createAction } from "@reduxjs/toolkit";
import {
	CREATE_NOTE,
	DELETE_NOTE,
	NOTES_FETCHING,
	NOTES_REJECTED,
	NOTES_RESOLVED,
	SAVE_NOTE,
	UPDATE_NOTE,
} from "../types";

export const createNote = createAction(CREATE_NOTE);
export const deleteNote = createAction(DELETE_NOTE);
export const updateNote = createAction(UPDATE_NOTE);
export const saveNote = createAction(SAVE_NOTE);

export const notesFetching = createAction(NOTES_FETCHING);
export const notesRejected = createAction(NOTES_REJECTED, (error) => ({
	payload: error,
}));
export const notesResolved = createAction(NOTES_RESOLVED, (data) => ({
	payload: data,
}));
