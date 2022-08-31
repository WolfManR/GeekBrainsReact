import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../firebase/config";

export const register = createAsyncThunk("auth/register", async (userData) => {
  console.log(userData);
  let firstTimeNick = userData.login.slice(0, userData.login.indexOf("@"));
  let response = await auth.createUserWithEmailAndPassword(userData.login, userData.password);
  await response.user.updateProfile({ displayName: firstTimeNick });
  return response.user.displayName;
});

export const login = createAsyncThunk("auth/login", async (userData) => {
  let response = await auth.signInWithEmailAndPassword(userData.login, userData.password);
  return response.user.displayName;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  let response = await auth.signOut();
  return response;
});

const handlePending = (state, action) => {
  state.loading = true;
  state.error = null;
};

const handleReject = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
    error: "",
  },
  extraReducers: {
    [register.pending]: handlePending,
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [register.rejected]: handleReject,

    [login.pending]: handlePending,
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [login.rejected]: handleReject,

    [logout.pending]: handlePending,
    [logout.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = null;
    },
    [logout.rejected]: handleReject,
  },
});

export const selectUserName = (state) => state.auth.user;
export const selectError = (state) => state.auth.error;
export const selectIsLoading = (state) => state.auth.loading;

export default authSlice.reducer;
