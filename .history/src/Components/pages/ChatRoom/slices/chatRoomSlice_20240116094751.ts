import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import ax from '../../../../common/api/ax';
import requests from '../../../../common/api/requests';
import { ChatRoom } from '../chatRoom.interface';


const initialState: ChatRoom = {
    data: [
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


void loadChats(int unixtime, String searchChat) async {
    final String url = requests("CHAT_LIST");
    try {
      final response = await http.post(
        Uri.parse(url),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: jsonEncode(
          {
            'devicekey': userDeviceKey,
            'roomkey': chatRoomKey,
            if (unixtime != 0) 'writeunixtime': unixtime,
            if (searchChat.isNotEmpty) 'search': searchChat,
          },
        ),
      );

      if (response.statusCode == 200) {
        final responseData = jsonDecode(response.body);
        final resultValue = responseData['result'];
        final resultData = responseData['data'];
        if (resultValue == "success") {
          if (resultData is List && resultData.isNotEmpty) {
            final List<Chats> newChats =
                resultData.map((room) => Chats.fromJson(room)).toList();
            chats = [...chats, ...newChats];
            chatsEmpty = false;
          } else {
            chatsEmpty = true;
          }
        }
      }
    } catch (e) {
      print(e);
    }
    notifyListeners();
  }



export const postChatList = createAsyncThunk('chatRoom/getChatRoomList', async (devicekey: string) => {
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
        state.data =  payload.data;
    });
  }
});

export default chatRoomSlice;
