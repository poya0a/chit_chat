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


const initialState: chatStatus = {
    chatStatusData: [
        {
            code: "",
            name: "",
            count: 0
        }
    ]
};


export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setChatStatusButton: (state, { payload }: PayloadAction<{ statusData: chatStatus['chatStatusData'] }>) => {
        state.chatStatusData = [...payload.statusData];
      },
  }
});

export const { setChatStatusButton } = statusSlice.actions;
export default statusSlice;