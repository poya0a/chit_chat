import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import ax from "@api/ax";
import requests from "@api/requests";
import { ChatList, ChatRoom, Chats } from "./chatRoom.interface";
import storage from "@utils/storage";

const initialState: ChatRoom = {
  chatList: [
    {
      MEMBER: [
        {
          UID: "",
          USER_NAME: "",
          ROOM_NAME: "",
          ROOM_EMOJI: "",
          ROOM_NAME_CHG: "",
          ROOM_EMOJI_CHG: "",
          ROOM_ENTRANCE_DATE: 0,
          LAST_READ_MSG: "",
          LAST_UNIXTIME: 0,
          UNREAD_CNT: 0,
        },
      ],
      ROOM_KEY: "",
      ROOM_LAST_CHAT_KEY: "",
      ROOM_LAST_MSG: "",
      ROOM_LAST_UNIXTIME: 0,
      ROOM_TYPE: "",
    },
  ],
  chats: [
    {
      CHAT_INDEX: "",
      CHAT_TYPE: "",
      FILES: [],
      FILE_DEL_YN: "",
      IS_SLANG: "",
      MSG: "",
      READ_MEMBER: [],
      ROOM_KEY: "",
      UID: "",
      UNREAD: 0,
      UNREAD_MEMBER: [],
      USER_NAME: "",
      WRITER_INFO: { UID: "", USER_NAME: "" },
      WRITE_DATE: "",
      WRITE_UNIXTIME: 0,
      UID_CHECK: true,
      DATE_CHECK: true,
      TIME_CHECK: true,
    },
  ],
};

export const postChatRoomList = createAsyncThunk(
  "chatRoom/postChatRoomList",
  async () => {
    const data = {
      devicekey: storage.getStorage("user-device-key"),
    };
    const res = await ax.post(requests.ROOM_LIST, data);
    let result = res.data.data;
    return result;
  }
);

export const postChatList = createAsyncThunk(
  "chatRoom/postChatList",
  async (writeunixtime?: number) => {
    const data = {
      devicekey: storage.getStorage("user-device-key"),
      roomkey: storage.getStorage("room-key"),
      writeunixtime: writeunixtime,
    };
    const res = await ax.post(requests.CHAT_LIST, data);
    let result = res.data.data;
    return result;
  }
);

export const chatRoomSlice = createSlice({
  name: "chatRoom",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      postChatRoomList.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.chatList = payload;
      }
    );
    builder.addCase(
      postChatList.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        if (state.chats!.length > 0) {
          state.chats!.unshift(...payload.reverse());
        } else {
          state.chats = payload.reverse();
        }
      }
    );
  },
});

export default chatRoomSlice;
