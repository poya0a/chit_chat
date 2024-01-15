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
    statusData: [
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
    setStatusButton: (state, { payload }: PayloadAction<{ statusData: Status['statusData'] }>) => {
        state.statusData = payload.statusData;
      },
  }
});

export const { setStatusButton } = statusSlice.actions;
export default statusSlice;