import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StatusData {
    code: string;
    name: string;
    count: number;
}

interface Status {
    statusData: StatusData[];
    selectedStatus: {};
}

const initialState: Status = {
    statusData: [],
    selectedStatus: {}
};

const chatStatus: Status = {
    statusData: [
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
    ],
    selectedStatus: {
        code: 'wrok',
        name: "상담",
        count: 100
    }
};


export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setChatStatus: (state) => {
        state.statusData = chatStatus.statusData;
    },
    setSelectedChatStatus: (state) => {
        state.statusData = chatStatus.statusData;
    },
    // selectedStatus: (state, p)
  }
});

export const { setChatStatus, setSelectedChatStatus } = statusSlice.actions;
export default statusSlice;