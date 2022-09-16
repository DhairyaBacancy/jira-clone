import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  data: []
};

export const issueSlice = createSlice({
  name: 'issue',
  initialState,
  reducers: {
    addIssue: (state, action) => {
      state.data = [...state.data, action.payload];
    }
  }
});

export const { addIssue } = issueSlice.actions;

export default issueSlice.reducer;
