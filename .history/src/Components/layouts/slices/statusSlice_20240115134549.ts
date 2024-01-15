import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StatusData {
    code: string;
    name: string;
    count: number;
}

interface Status {
    statusData: StatusData[];
}

const initialState: Status = {
    statusData: [],
};

const chatStatus = [
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
        state.statusData = chatStatus as any;
    },
    // selectedStatus: (state, p)
  }
});

export const { setChatStatus } = statusSlice.actions;
export default statusSlice;