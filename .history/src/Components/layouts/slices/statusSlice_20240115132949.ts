import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface chatStatus {
    chatStatusData: [
        {
            code: string,
            name: string,
            count: number
        }
    ]
}

const chatStatus = [
   
];

const initialState: chatStatus = {
    chatStatusData: [
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
    ]
};


export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setChatStatusButton: (state, { payload }: PayloadAction<{ chatStatusData: chatStatus['chatStatusData'] }>) => {
        state.chatStatusData = [...payload.chatStatusData];
    },
  }
});

export const { setChatStatusButton } = statusSlice.actions;
export default statusSlice;