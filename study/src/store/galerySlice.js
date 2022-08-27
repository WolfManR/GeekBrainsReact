import { createSlice } from "@reduxjs/toolkit";

export const fetchAlbum = createAsyncThunk("galery/fetchAlbum", async (albumId) => {
  const response = await fetch("http://jsonplaceholder.typicode.com/albums/1/photos");
  return response.data;
});

export const galerySlice = createSlice({
  name: "galery",
  initialState: {
    loading: false,
    album: [],
    error: "",
  },
  extraReducers: {
    [fetchAlbum.pending]: (state, action) => {
      state.galery.loading = true;
      state.galery.error = null;
    },
    [fetchAlbum.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.galery.loading = false;
      state.galery.album = action.payload;
    },
    [fetchAlbum.rejected]: (state, action) => {
      console.log(action);
      state.galery.loading = false;
      state.galery.error = action.error.message;
    },
  },
});

export const selectAlbum = (state) => state.galery.album;
export const selectIsLoading = (state) => state.galery.loading;
export const selectError = (state) => state.galery.error;

export default galerySlice.reducer;
