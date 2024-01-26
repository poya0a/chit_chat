import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import ax from '../../../../common/api/ax';
import requests from '../../../../common/api/requests';
import { MyDetailInfo } from '../myPage.interface';

const initialState: MyDetailInfo = {
    resultCode: false,
    resultMsg: "",
    data: {
        mbrSeq: 0,
        mbrId: "",
        mbrNm: "",
        emailAddr: "",
        hpNo: "",
        genderCd: "",
        birth: "",
        profileImagePath: ""
    }
};

export const getChatRoomList = createAsyncThunk('chatRoom/getChatRoomList', async () => {
  const res = await ax.get(requests.MY_DETAIL_INFO);
  let result = res.data;
  return result;
});

export const chatRoomSlice = createSlice({
  name: 'chatRoom',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getChatRoomList.fulfilled, (state, { payload }: PayloadAction<MyDetailInfo>) => {
        state.resultCode = payload.resultCode;
        state.resultMsg = payload.resultMsg;
        state.data = payload.data;
    });
  }
});

export default chatRoomSlice;
