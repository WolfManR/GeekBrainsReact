import { createSlice } from "@reduxjs/toolkit";

export const getNewId = () => Date.now();

const createChat = (header) => {
  return {
    id: getNewId(),
    header: header,
    messages: [],
  };
};

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatId: "",
    chatsList: [createChat("Some header")],
    chatHeader: "",
    messages: [],
    userInfo: {
      nick: "John",
    },
  },
  reducers: {
    addChat: (state, action) => {
      return {
        ...state,
        chatsList: [...state.chatsList, createChat(action.payload)],
      };
    },
    removeChat: (state, action) => {
      return {
        ...state,
        chatsList: state.chatsList.filter((c) => c.id !== action.payload),
      };
    },
    loadChat: (state, action) => {
      let id = parseInt(action.payload);
      if (Number.isNaN(id)) return state;
      let chat = state.chatsList.find((item) => item.id === id);
      return {
        ...state,
        currentChat: chat,
      };
    },
      addMessage: (state, action) => {
          return {
              ...state,
              messages: [...state.messages, action.payload]
        }
    },
    selectChat: (state, action) => {
      return {
        ...state,
        chatId: action.payload,
      };
    },
  },
});

export const {
    addChat,
    removeChat,
    loadChat,
    addMessage,
    selectChat
} = chatSlice.actions;

export const selectChatId = (state) => state.chat.chatId;
export const selectChats = (state) => state.chat.chatsList;
export const selectMessages = (state) => state.chat.messages;

export default chatSlice.reducer;
