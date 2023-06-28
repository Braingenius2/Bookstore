import { createSlice } from "@reduxjs/toolkit";

const initialState = 'Under construction';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {},
});

export default categoriesSlice.reducer;