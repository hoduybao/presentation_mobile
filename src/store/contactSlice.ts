import {createSlice} from '@reduxjs/toolkit';
import * as actions from './contactAction';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    listContact: [],
    listHistory: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(actions.getAll.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(actions.getAll.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listContact = action.payload;
    });

    builder.addCase(actions.getAll.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(actions.getAllHistory.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(actions.getAllHistory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listHistory = action.payload;
    });

    builder.addCase(actions.getAllHistory.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(actions.updateHistory.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(actions.updateHistory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listHistory = action.payload;
    });

    builder.addCase(actions.updateHistory.rejected, (state, action) => {
      state.isLoading = false;
    });
    
    builder.addCase(actions.editContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(actions.editContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listContact = action.payload;
    });

    builder.addCase(actions.editContact.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(actions.deletecontact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(actions.deletecontact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listContact = action.payload;
    });

    builder.addCase(actions.deletecontact.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(actions.addContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(actions.addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listContact = action.payload;
    });

    builder.addCase(actions.addContact.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});
export default contactSlice.reducer;
