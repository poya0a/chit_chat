import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import ax from '../../../../common/api/ax';
import requests from '../../../../common/api/requests';
import storage from '../../../../common/utils/storage';
import { ChatList } from '../chatRoom.interface';

const initialState: ChatList = {
    member: [
        {
            uid: '',
            userName: '',
            roomName: '',
            roomEmoji: '',
            roomNameChange: '',
            roomEmojiChange: '',
            roomEntraceDate: 0,
            lastReadMsg: '',
            lastUnixtime: 0,
            unreadCnt: 0,
        }
    ],
    roomKey: '',
    roomLastChatType: '',
    roomLastMsg: '',
    roomLastUnixtime: 0,
    roomType: '',
};

const userToken = storage.getAccessToken();

export const postChatRoomList = createAsyncThunk('chatRoom/getChatRoomList', async () => {
  const res = await ax.get(requests.ROOM_LIST,jsonEncode(
    {
      'devicekey': userDeviceKey,
      'force': 'Y',
    },
  ), );
  let result = res.data;
  return result;
});

export const chatRoomSlice = createSlice({
  name: 'chatRoom',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postChatRoomList.fulfilled, (state, { payload }: PayloadAction<ChatList>) => {

    });
  }
});

export default chatRoomSlice;
