import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

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
		writeNote(state, action: PayloadAction<INote>) {
			const note: INote = action.payload;
			const index = state.data.findIndex((elt) => elt._id === note._id);
			state.data[index] = note;
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
			state.data[index].tags.push(tag);
		},
		removeTag(state, action: PayloadAction<IHandleTag>) {
			const { tag, _id } = action.payload;
			const index = state.data.findIndex((elt) => elt._id === _id);
			const newTags = state.data[index].tags.filter((elt) => {
				elt !== tag;
			});
			state.data[index].tags = newTags;
		},
		editTitle(state, action: PayloadAction<IHandleTitle>) {
			const { title, _id } = action.payload;
			const index = state.data.findIndex((elt) => elt._id === _id);
			state.data[index].title = title;
		},
		setActive(state, action: PayloadAction<IHandleActive>) {
			const { _id } = action.payload;
			const data: INote[] = state.data.map((note) => ({
				...note,
				active: note._id === _id,
			}));
			return {
				...state,
				data,
			};
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

export const { writeNote, deleteNote, addTag, removeTag, editTitle } =
	notes.actions;

export default notes.reducer;
