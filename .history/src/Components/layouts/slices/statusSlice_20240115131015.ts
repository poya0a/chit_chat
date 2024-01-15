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