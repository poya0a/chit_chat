import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface chatStatus {
    statusData: [
        {
            code: string,
            name: string,
            count: number
        }
    ]
}

const initialState: chatStatus = {
    statusData: [
        {
            code: "",
            name: "",
            count: 0
        }
    ]
};

const chatStatus= [
    {
        code: 'standby',
        name: "대기",
        count: 100
    },
    {
        code: 'wrok',
        name: "상담",
        count: 100
    },
    {
        code: 'check',
        name: "확인",
        count: 100
    },
    {
        code: 'close',
        name: "종료",
        count: 100
    },
];

export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setChatStatus: (state) => {
        state.statusData = state.chatStatus;
      },
  }
});

export const { setChatStatus } = statusSlice.actions;
export default statusSlice;