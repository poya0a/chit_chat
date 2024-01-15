import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusData } from '../layouts.interface';

interface Status {
    statusData: StatusData[];
    selectedStatus: s;
}

const initialState: Status = {
    statusData: [],
    selectedStatus: {
        code: "",
        name: "",
        count: 0
    }
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
    setSelectedChatStatus: (state, action: PayloadAction<StatusData>) => {
        state.selectedStatus = action.payload;
    },
  }
});

export const { setChatStatus, setSelectedChatStatus } = statusSlice.actions;
export default statusSlice;