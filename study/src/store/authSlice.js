import { createSlice } from "@reduxjs/toolkit";

const createAccount = (login, password) => {
  let firstTimeNick = login.slice(0, login.indexOf("@"));
  return { nick: firstTimeNick, login: login, password: password };
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    accounts: [],
    nick: "",
  },
  reducers: {
    signIn: (state, action) => {
      let existed = state.accounts.find((a) => a.login === action.payload.login && a.password === action.payload.password);
      if (!existed) return;
      state.nick = existed.nick;
    },
    signUp: (state, action) => {
      if (state.accounts.length > 0) {
        let existed = state.accounts.find((a) => a.login === action.payload.login);
        if (existed) return;
      }

      let account = createAccount(action.payload.login, action.payload.password);
      state.accounts.push(account);
      state.nick = account.nick;
    },
    signOut: (state) => {
      state.nick = "";
    },
  },
});

export const { signIn, signUp, signOut } = authSlice.actions;

export const selectUserName = (state) => state.auth.nick;

export default authSlice.reducer;
