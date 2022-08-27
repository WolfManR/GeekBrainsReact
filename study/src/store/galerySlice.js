import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAlbum = createAsyncThunk("galery/fetchAlbum", async (albumId, { getState }) => {
  const response = await fetch(`http://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
  return response.json();
});

export const galerySlice = createSlice({
  name: "galery",
  initialState: {
    loading: false,
    album: [],
    error: null,
  },
  extraReducers: {
    [fetchAlbum.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [fetchAlbum.fulfilled]: (state, action) => {
      state.loading = false;
      state.album = action.payload;
    },
    [fetchAlbum.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const selectAlbum = (state) => state.galery.album;
export const selectIsLoading = (state) => state.galery.loading;
export const selectError = (state) => state.galery.error;

export default galerySlice.reducer;
