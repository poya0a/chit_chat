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

interface Request {
    'devicekey': string | null,
    'force': string,
};

const userToken = storage.getAccessToken();

const requestData: Request = {
    'devicekey': userToken,
    'force': 'Y',
};


export const postChatRoomList = createAsyncThunk('chatRoom/getChatRoomList', async (devicekey: string) => {
  const res = await ax.post(requests.ROOM_LIST, data);
  let result = res.data;
  return result;
});

export const chatRoomSlice = createSlice({
  name: 'chatRoom',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postChatRoomList.fulfilled, (state, { payload }: PayloadAction<ChatList>) => {
        console.log(payload);
        state =  payload;
    });
  }
});

export default chatRoomSlice;
