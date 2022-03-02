import { useDispatch } from "react-redux";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import mongoose from "mongoose";

const initialState: IAllNotes = {
	fetching: false,
	error: false,
	data: [],
};

export const fetchNotes = createAsyncThunk(
	//action type string
	"notes/fetchNotes",
	// callback function
	async () => {
		const url = "https://jsonplaceholder.typicode.com/posts";
		const res = await fetch(url).then((data) => data.json());
		return res;
	}
);

const notes = createSlice({
	name: "notes",
	initialState,
	reducers: {
		createNote(state, action: PayloadAction<IHandleCreate>) {
			const { title, tags } = action.payload;
			const note: INote = {
				_id: new mongoose.Types.ObjectId().toString(),
				title,
				tags,
				date: Date.now(),
				text: ``,
				active: true,
			};
			if (state.data.length) {
				state.data.forEach((elt) => (elt.active = false));
			}
			state.data.push(note);
		},
		writeNote(state, action: PayloadAction<IHandleWrite>) {
			const note: IHandleWrite = action.payload;
			const index = state.data.findIndex((elt) => elt._id === note._id);
			state.data[index].text = `${note.content}`;
			// return state;
		},
		deleteNote(state, action: PayloadAction<INote>) {
			const note: INote = action.payload;
			const newNotes: INote[] = state.data.filter(
				(elt) => note._id !== elt._id
			);
			return {
				...state,
				data: newNotes,
			};
		},
		addTag(state, action: PayloadAction<IHandleTag>) {
			const { tag, _id } = action.payload;
			const index = state.data.findIndex((elt) => elt._id === _id);
			state.data[index].tags.push(...tag);
		},
		removeTag(state, action: PayloadAction<IHandleTag>) {
			const { tag, _id } = action.payload;
			const index = state.data.findIndex((elt) => elt._id === _id);
			const newTags = state.data[index].tags.filter((elt) => {
				!tag.includes(elt);
			});
			state.data[index].tags = newTags;
		},
		editTitle(state, action: PayloadAction<IHandleTitle>) {
			const { title, _id } = action.payload;
			const index = state.data.findIndex((elt) => elt._id === _id);
			state.data[index].title = title;
		},
		setActive(state, action: PayloadAction<IHandleActive>) {
			const _id = action.payload;
			if (_id) {
				const data: INote[] = state.data.map((note) => ({
					...note,
					active: note._id === _id,
				}));
				return {
					...state,
					data,
				};
			} else {
				return state;
			}
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchNotes.pending, (state) => {
			state.fetching = true;
			state.error = false;
			state.data = [];
		});
		builder.addCase(
			fetchNotes.fulfilled,
			(state, action: PayloadAction<INote[]>) => {
				state.fetching = false;
				state.error = false;
				state.data = action.payload;
			}
		);
		builder.addCase(fetchNotes.rejected, (state) => {
			state.fetching = false;
			state.error = true;
			state.data = [];
		});
	},
});

export const {
	createNote,
	writeNote,
	deleteNote,
	addTag,
	removeTag,
	editTitle,
	setActive,
} = notes.actions;

export default notes.reducer;
