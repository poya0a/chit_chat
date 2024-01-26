import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import ax from '../../../../common/api/ax';
import requests from '../../../../common/api/requests';
import { ChatRoom } from '../chatRoom.interface';


const initialState: ChatRoom = {
    CHAT_LIST: [
        {
            MEMBER: [
                {
                    UID: '',
                    USER_NAME: '',
                    ROOM_NAME: '',
                    ROOM_EMOJI: '',
                    ROOM_NAME_CHG: '',
                    ROOM_EMOJI_CHG: '',
                    ROOM_ENTRANCE_DATE: 0,
                    LAST_READ_MSG: '',
                    LAST_UNIXTIME: 0,
                    UNREAD_CNT: 0,
                }
            ],
            ROOM_KEY: '',
            ROOM_LAST_CHAT_KEY: '',
            ROOM_LAST_MSG: '',
            ROOM_LAST_UNIXTIME: 0,
            ROOM_TYPE: '',
        }
    ]
};

export const postChatRoomList = createAsyncThunk('chatRoom/getChatRoomList', async (devicekey: string) => {
    const data = {
        'devicekey': devicekey,
        'force': 'Y',
    };
  const res = await ax.post(requests.ROOM_LIST, data);
  let result = res.data;
  console.log(result)
  return result;
});

export const chatRoomSlice = createSlice({
  name: 'chatRoom',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postChatRoomList.fulfilled, (state, { payload }: PayloadAction<ChatRoom>) => {
        state.CHAT_LIST =  payload.CHAT_LIST;
        console.log(payload.CHAT_LIST)
        console.log(state.CHAT_LIST)
    });
  }
});

export default chatRoomSlice;
