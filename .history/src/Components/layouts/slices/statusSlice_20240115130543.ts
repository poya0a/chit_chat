import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Status {
    code: string,
    name: string,
    count: number
}



const statusData = [
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



const initialState: Status = {
    divide: false,
    leftBtn: {
        text: "",
        callback: () => {},
    },
    rightBtn: {
        text: "",
        disabled: false,
        callback: () => {}
    },
    half: false,
};


export const statusSlice = createSlice({
  name: 'footer',
  initialState,
  reducers: {
    setStatusButton: (state, { payload }: PayloadAction<Status>) => {
        state.divide = payload.divide;
        state.leftBtn = payload.leftBtn;
        state.rightBtn = payload.rightBtn;
        state.half = payload.half;
    },
  }
});

export const { setStatusButton } = statusSlice.actions;
export default statusSlice;