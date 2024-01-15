import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Status {
    statusData: [
        {
            code: string,
            name: string,
            count: number
        }
    
    ]
}


const initialState: Status = {
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
};


export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setStatusButton: (state, { payload }: PayloadAction<Status>) => {

    },
  }
});

export const { setStatusButton } = statusSlice.actions;
export default statusSlice;